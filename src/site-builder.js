function createHomePage(){
    fetch('./src/site-text.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        createHeader(data.header);
        createHomePageBody(data.content);
        createFooter(data.footer);
    }).catch(
        // not sure why it catches an error, it generate es the page just fine
        console.log(`Error Fetching Data: {error}`)
    );
}

function createHeader(headerData){
    const content = document.createElement("h2");
    const logoNode = document.createElement("img")
    logoNode.setAttribute("src", "./assets/logo-header.png")
    logoNode.setAttribute("id", "roshi-logo")
    const titleNode = document.createTextNode(headerData[0]);
    const detailNode = document.createTextNode(headerData[1]);

    content.appendChild(logoNode)
    content.appendChild(titleNode);
    content.appendChild(detailNode);
    const header = document.getElementById("header-block");
    header.appendChild(content);
}


function createFooter(footerData){
    const content = document.createElement("h2");
    const node = document.createTextNode(footerData);
    content.appendChild(node)
    const element = document.getElementById("footer-block");
    element.appendChild(content);
}

function createHomePageBody(bodyData){
    const leftContent = document.createElement("div")
    leftContent.setAttribute("id", "body-content-left")
    leftContent.setAttribute("class", "v-content-wrapper")
    
    const aboutMe = createAboutMe(bodyData.aboutMe);
    const siteNews = createSiteNews(bodyData.siteNews);
    leftContent.appendChild(aboutMe);
    leftContent.appendChild(document.createElement('hr'))
    leftContent.appendChild(siteNews);
    
    const rightContent = document.createElement("div")
    rightContent.setAttribute("id", "body-content-right")
    rightContent.setAttribute("class", "v-content-wrapper")

    const projectsList = createProjectsList(bodyData.projects);
    rightContent.appendChild(projectsList)

    const bodyContent = document.getElementById("body-content-main");
    bodyContent.appendChild(leftContent);
    bodyContent.appendChild(rightContent);
}


function createAboutMe(aboutMeData){
    const content = document.createElement('div')
    content.setAttribute("id", "about-me")
    content.setAttribute("class", "content")
    aboutMeText = document.createTextNode(aboutMeData)
    content.appendChild(aboutMeText)
    return content;
}

function createSiteNews(siteNewsData){
    const content = document.createElement('div')
    content.setAttribute("id", "site-news")
    content.setAttribute("class", "content")
    siteNewsText = document.createTextNode(siteNewsData)
    content.appendChild(siteNewsText)
    return content;
}

function createProjectsList(projectsData){
    const content = document.createElement('div');
    content.setAttribute("id", "projects-list");
    content.setAttribute("class", "content");
    
    titleNode = document.createElement('h3');
    titleText = document.createTextNode("Projects")
    titleNode.appendChild(titleText)

    listNode = document.createElement('ul')
    content.appendChild(titleNode);

    // trying to use forEach on object; doesn't work
    for (element in projectsData){
        projectText = document.createTextNode(element);
        
        projectLink = document.createElement("a")
        projectLink.setAttribute("href", projectsData[element])
        projectLink.appendChild(projectText)
        
        projectNode = document.createElement('li');
        projectNode.appendChild(projectLink)

        listNode.appendChild(projectNode)
    };

    content.appendChild(titleNode)
    content.appendChild(listNode)
    return content;
}