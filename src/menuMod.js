import Double from "./double.jpg";
import Triple from "./triple.jpg";
import navbarMod from "./navbarMod";

function menuMod() {
    const menuHeader = document.createElement('h2');
    menuHeader.textContent = 'Our Menu';

    const menuDiv = document.createElement('div');
    menuDiv.id = "menuDiv";

    const navBar = navbarMod();

    menuDiv.appendChild(navBar);

    // Add menu items dynamically (example with images)
    const menuItem1 = createMenuItem('Double Cheeseburger', Double);
    const menuItem2 = createMenuItem('Triple Cheeseburger', Triple);


    
    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuItem1);
    menuDiv.appendChild(menuItem2);

    return menuDiv;
}

function createMenuItem(itemName, imagePath) {
    const menuItem = document.createElement('div');

    // Create image element
    const itemImage = document.createElement('img');
    itemImage.src = imagePath; // Replace with the actual path to your image
    itemImage.alt = `${itemName} Image`;

    // Create paragraph for item name
    const itemNameParagraph = document.createElement('p');
    itemNameParagraph.textContent = itemName;

    // Append created elements to menuItem
    menuItem.appendChild(itemImage);
    menuItem.appendChild(itemNameParagraph);

    return menuItem;
}

export default menuMod;