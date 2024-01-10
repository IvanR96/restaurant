import _ from 'lodash';
import './style.css';
import Burger from './burger.jpg';

function component() {
    const tabContent = document.getElementById('content');

    let heading = document.createElement('h1');

    heading.textContent = "Burger Bros";

    tabContent.appendChild(heading);

    let burgerPic =  new Image();

    burgerPic.src = Burger;

    burgerPic.alt = 'burger picture';


    tabContent.appendChild(burgerPic);


    return tabContent;
}

document.body.appendChild(component());