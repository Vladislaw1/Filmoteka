import { createDynamicContent } from "../renderFuncs";

export function headerMenuOnClick(e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
        return;
    }

    const prevActiveElement = this.querySelector('.active')
    prevActiveElement.classList.remove('active');
    e.target.classList.add('active');

    createDynamicContent(e.target.pathname);
    history.pushState(null, null, e.target.pathname);
}