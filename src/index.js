import _ from 'lodash';
import './style.css';
import contactMod from './contactMod';
import homeMod from './homeMod';
import initPageLoad from './initPageLoad';
import './burger.jpg';

document.addEventListener('DOMContentLoaded', () => {
    initPageLoad();

    const homeLink = document.getElementById('homeLink');
    const menuLink = document.getElementById('menuLink');
    const contactLink = document.getElementById('contactLink');
    const contentDiv = document.getElementById('content');

    homeLink.addEventListener('click', (event) => {
        event.preventDefault();
        clearContent();
        contentDiv.appendChild(homeMod()); // Use the home module here
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
});