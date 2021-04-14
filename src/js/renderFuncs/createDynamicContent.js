import { routes } from "../routes";

const createDynamicContent = (path) => {
    const headerPageContent = document.querySelector('#header-content');

    const { template, afterRender, selector, actionType, listner, headerClass } = routes.find(obj => obj.pathname === path);

    headerPageContent.innerHTML = template();
    if(afterRender){
        afterRender()
    }
    if (selector) {
        const elem = document.querySelector(selector);
        elem.addEventListener(actionType, listner);
    }
    if (headerClass) {
        const header = document.querySelector('.head')
        header.className = `head ${headerClass}`
    }
}

export default createDynamicContent;