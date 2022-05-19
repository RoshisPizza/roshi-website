function createHeader(){
    const header = document.createElement("h1");
    const node = document.createTextNode("JavaScript Footer Maker Test");
    header.appendChild(node)

    const element = document.getElementById("header-block");
    element.appendChild(header);
}

function createFooter(){
    const footer = document.createElement("h1");
    const node = document.createTextNode("JavaScript Header Maker Test");
    footer.appendChild(node)
    
    const element = document.getElementById("footer-block");
    element.appendChild(footer);
}