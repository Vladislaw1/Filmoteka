import filmsSearchOptions from "../filmsSearchOptions.js";

const createPaginationArray = (total_pages) => {
    const { page } = filmsSearchOptions.options;
    const { innerWidth } = window;

    let navigation = [];
    
    if (innerWidth < 480) {
        const mobileNavigation = [page - 2, page - 1, page, page + 1, page + 2];
        navigation = mobileNavigation.filter(item => item > 0 && item <= total_pages);
    }
    else {
        navigation = new Array(total_pages).fill('').map((item, index) => index + 1);
        const currentPageIndex = navigation.indexOf(page);
        if(currentPageIndex >= 5) {
            const spliceNumber = currentPageIndex - 3;
            navigation.splice(1, spliceNumber, "...");
        }
        if(total_pages - page >= 5) {
            const currentPageIndex = navigation.indexOf(page);
            const start = currentPageIndex + 3;
            const spliceNumber = navigation.length - start - 1;
            navigation.splice(start, spliceNumber, "...")
        }
    }

    return navigation;
}

export default createPaginationArray;