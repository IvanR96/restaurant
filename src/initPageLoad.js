import homeMod from "./homeMod";
import menuMod from "./menuMod";
import contactMod from "./contactMod";



function initPageLoad() {
    const contentDiv = document.getElementById('content');

    // Create the navigation bar with links

    // Append the navigation bar to the contentDiv

    // Initial load with homeModule
    contentDiv.appendChild(homeMod());

    function clearContent() {
        while (contentDiv.firstChild) {
            contentDiv.removeChild(contentDiv.firstChild);
        }
    }

    // Event listeners for the links
    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const contactLink = document.getElementById('contactLink');

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
}

export default initPageLoad;