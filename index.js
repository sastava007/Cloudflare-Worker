
const {getCookies, getSiteResponse, getVariant} = require('./util/index.js');


addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
* Handle the incoming client request
* @param {Request} request
*/
async function handleRequest(request) {

  let cookie = getCookies(request);

  // console.log(typeof(cookie));

  // return new Response(cookie);

  if(!cookie)
  {
    return await getSiteResponse(request, cookie);
  }
  else
  {
    return await getSiteResponse(request, cookie);
  }
}
