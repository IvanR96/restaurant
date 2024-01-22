import homeMod from "./homeMod";
import menuMod from "./menuMod";
import contactMod from "./contactMod";

function initPageLoad() {
    const contentDiv = document.getElementById('content');

    const navBar = createNavBar();
    contentDiv.appendChild(navBar);

    // Create and append anchors

    // Add event listeners to the anchors (you can move this part to index.js if needed)
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(homeMod());
    });

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(menuMod());
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(contactMod());
    });

    contentDiv.appendChild(homeMod());

    function createNavBar() {
        const navBar = document.createElement('nav');
        const homeLink = createAnchor('Home', './homeMod.js', 'homeLink');
        const menuLink = createAnchor('Menu', './menuMod.js', 'menuLink');
        const contactLink = createAnchor('Contact', './contactMod.js', 'contactLink');

        navBar.appendChild(homeLink);
        navBar.appendChild(menuLink);
        navBar.appendChild(contactLink);

        return navBar;
    }

    function clearContent() {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }
}

function createAnchor(text, href, id) {
    const anchor = document.createElement('a');
    anchor.textContent = text;
    anchor.href = href;
    anchor.id = id;
    return anchor;
}

export default initPageLoad;