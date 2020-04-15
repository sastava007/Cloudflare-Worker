class changeTitle
{
    element(e)
    {
        e.setInnerContent("Shivansh's CF Worker");
    }
}

class changeTitleHeading
{
    element(e)
    {
        e.append(": Cloudflare Worker");
    }
}

class changeDescription
{
    element(e)
    {
        e.setInnerContent("There are 2 variants of this application, and both of them are equally likely to get selected");
    }
}

class changeSVGBackground
{
    element(e)
    {
        e.setAttribute("class", "h-6 w-6 text-red-600");
    }
}

class changeHyperlink
{
    element(e)
    {
        e.setAttribute("href", "https://sastava007.github.io");
        e.setAttribute("target", "_blank");
        e.setAttribute("style", "font-weight: bold; background-color: red");
        e.setInnerContent("See my Portfolio Website");
    }
}

module.exports = {
    changeTitle,
    changeTitleHeading,
    changeDescription,
    changeSVGBackground,
    changeHyperlink
}