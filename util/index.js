const {SITE_URL, COOKIE} = require('../config/config.json');
const {changeTitle, changeTitleHeading, changeDescription, changeSVGBackground, changeHyperlink} = require('./element_handler.js');

/**
 * Get stored cookies from incoming request
 * @param {Request} request : Incoming request
 * @param {string} COOKIE : Name of the cookie to look for
 */
exports.getCookies = function(request)
{
    let site_url=null;
    if(request.headers.get("Cookie"))
    {
        let cookies = request.headers.get("Cookie").split('; ');
        cookies.forEach((cookie)=>{
            if(cookie.split("=")[0] === COOKIE)
            site_url = cookie.split("=")[1];
        });
    }
    return site_url;
}


/**
* Returns a random variant of URL, ensuring that request is evenly distributed between the two urls, following the A/B testing style
* Inspired from this: https://developers.cloudflare.com/workers/templates/pages/ab_testing/
*/
exports.getVariant = async function()
{
    let urlVariants = await fetch(SITE_URL);
    urlVariants = await urlVariants.json();

    const id = Math.random() < 0.5 ? 0:1;
    return urlVariants.variants[id];
}


/**
 * Return the website based on past user activity(by looking in cookies)
 * @param {NULL | String} 
 */
exports.getSiteResponse = async function(request, cookie)
{
    let site_url, variant;

    if(!cookie)
    {
        variant = await module.exports.getVariant();
        site_url = await fetch(variant);
    }
    else
    {
        variant = cookie;
        site_url = await fetch(cookie);
    }

    let response = new HTMLRewriter()
        .on("title", new changeTitle())
        .on("h1#title", new changeTitleHeading())
        .on("svg", new changeSVGBackground())
        .on("p#description", new changeDescription())
        .on("a#url", new changeHyperlink)
        .transform(site_url)

    if(!cookie)
        response.headers.append('Set-Cookie', `${COOKIE}=${variant}; path=/`);

    return response;
}

