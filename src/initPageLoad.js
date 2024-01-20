function initPageLoad() {
    const contentDiv = document.getElementById('content');

    // Create and append anchors
    const homeLink = createAnchor('Home', './homeMod.js', 'homeLink');
    const menuLink = createAnchor('Menu', '#', 'menuLink');
    const contactLink = createAnchor('Contact', '#', 'contactLink');

    contentDiv.appendChild(homeLink);
    contentDiv.appendChild(menuLink);
    contentDiv.appendChild(contactLink);

    // Add event listeners to the anchors (you can move this part to index.js if needed)
    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(homeMod());
    });

    menuLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(menuModule());
    });

    contactLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(contactMod());
    });

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