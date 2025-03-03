import * as aiPage from './pages/aiPage.js';
import * as oldManPage from './pages/oldManPage.js';
import * as verySimplePage from './pages/verySimplePage.js';
import * as mvcPage from './pages/mvcPage.js';
import * as liePage from './pages/liePage.js';

let pages = [
    { name: "oldMan", module: oldManPage },
    { name: "ai", module: aiPage },
    { name: "verySimple", module: verySimplePage },
    { name: "mvc", module: mvcPage },
    { name: "lie", module: liePage }
];

let currentPageIndex = 0;

loadPageFromHash();

function updateView() {
    let page = pages[currentPageIndex];
    if (!page) return;

    document.getElementById('app').innerHTML = /*HTML*/`
        <div id="content">
            ${page.module.createView()}
        </div>
        <div id="buttons">
            <button 
                onclick="setCurrentPageIndex(${currentPageIndex - 1})" 
                ${canMoveToPreviousPage() ? '' : 'disabled'}>
                Prev
            </button>
            <button
                 onclick="setCurrentPageIndex(${currentPageIndex + 1})" 
                 ${canMoveToNextPage() ? '' : 'disabled'}>
                 Next
            </button>
        </div>
    `;

    window.location.hash = page.name;  
}

function canMoveToPreviousPage() {
    return currentPageIndex - 1 >= 0;
}

function canMoveToNextPage() {
    return currentPageIndex + 1 < pages.length
}

function setCurrentPageIndex(newIndex) {            
    if(newIndex < 0 || newIndex >= pages.length) return;
    currentPageIndex = newIndex;
    updateView();
}

function loadPageFromHash() {
    let hash = window.location.hash.replace("#", "");
    let pageIndex = pages.findIndex(p => p.name === hash);
    if (pageIndex !== -1) {
        currentPageIndex = pageIndex;
    }

    updateView();
}

window.addEventListener("hashchange", loadPageFromHash);
window.setCurrentPageIndex = setCurrentPageIndex;   