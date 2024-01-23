function navbarMod() {
    const navBar = document.createElement('nav');
    
    const homeLink = createAnchor('Home', './homeMod.js', 'homeLink');
    const menuLink = createAnchor('Menu', './menuMod.js', 'menuLink');
    const contactLink = createAnchor('Contact', './contactMod.js', 'contactLink');

    navBar.appendChild(homeLink);
    navBar.appendChild(menuLink);
    navBar.appendChild(contactLink);

    return navBar;
}

function createAnchor(text, href, id) {
    const anchor = document.createElement('a');
    anchor.textContent = text;
    anchor.href = href;
    anchor.id = id;
    return anchor;
}

export default navbarMod;