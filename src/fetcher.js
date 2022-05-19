function getSiteBlurbs(){
    var siteBlurbs;
    // I'm so fucking lost on how to get this shit to print what i want it do.
    // I just want a picture of a got-danged hot dog
    fetch('./src/site-blurbs.json')
    .then(blurbs => blurbs.json())
    .then(data => {console.log(data); return data;});
}
  
function createHeader(){
    const header = document.createElement("h1");
    const node = document.createTextNode("Header Text Goes Here");
    header.appendChild(node)

    const element = document.getElementById("header-block");
    element.appendChild(header);
}

function createFooter(){
    const footer = document.createElement("h1");
    const node = document.createTextNode("Footer Text Goes Here");
    footer.appendChild(node)

    const element = document.getElementById("footer-block");
    element.appendChild(footer);
}

console.log('here I am');
console.log(getSiteBlurbs());