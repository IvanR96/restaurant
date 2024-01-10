import _ from 'lodash';

function component() {
    const tabContent = document.getElementById('content');


    tabContent.innerHTML = "Welcome to the Bundle test";

    return tabContent;
}

document.body.appendChild(component());