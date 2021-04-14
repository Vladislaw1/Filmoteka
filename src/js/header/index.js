import { headerMenuOnClick } from "./headerMenuOnClick";

export default function addHeaderEventListener(header, currentPath) {
    const menuList = header.querySelector('.nav-list');

    const links = menuList.querySelectorAll("a");
    
    const activeElement = [].find.call(links, (elem)=> {
        const pathname = elem.href.split("/").pop();
        return (`/${pathname}` === currentPath )
        });

    activeElement.classList.add("active");
    console.log(activeElement);

    menuList.addEventListener('click', headerMenuOnClick);
}
