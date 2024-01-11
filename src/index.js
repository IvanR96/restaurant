import _ from 'lodash';
import './style.css';
import Burger from './burger.jpg';

function component() {
    const tabContent = document.getElementById('content');
    const title = document.createElement('h1');
    title.textContent = 'Burger Bros';

    tabContent.appendChild(title);
    
    const content = document.createElement('div');

    content.id = 'tab1';
    content.classList.add('tab-content');

    const heading = document.createElement('h2');
    heading.textContent = "Home";

    content.appendChild(heading);

    tabContent.appendChild(content);

    return tabContent;
}


/*function createTab1(){
    const content = document.createElement('div');

    content.id = 'tab1';
    content.classList.add('tab-content');

    const heading = document.createElement('h2');
    heading.textContent = "Home";



}
*/


document.body.appendChild(component());