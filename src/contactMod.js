import navbarMod from "./navbarMod";


function contactMod(){
    const contactDiv = document.createElement('div');
    contactDiv.id = 'contact';

    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.textContent = "Please feel free to contact us!";

    const location = document.createElement('p');
    location.textContent = "We are located at 223 Tech Ave, Cupertino,Ca";

    const number = document.createElement('p');
    number.textContent = "Phonenumber: 123-456-7890";

    const map = document.createElement('iframe');
    map.src ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50774.468702065715!2d-122.04364444999999!3d37.30924995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb4571bd377ab%3A0x394d3fe1a3e178b4!2sCupertino%2C%20CA!5e0!3m2!1sen!2sus!4v1706073109321!5m2!1sen!2sus";

    const navBar = navbarMod();

    contactDiv.appendChild(navBar);
    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactInfo);
    contactDiv.appendChild(location);
    contactDiv.appendChild(number);
    contactDiv.appendChild(map);

    return contactDiv;
}


export default contactMod;