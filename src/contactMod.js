function contactMod(){
    const contactDiv = document.createElement('div');

    const contactHeader = document.createElement('h2');
    contactHeader.textContent = 'Contact Us';

    const contactInfo = document.createElement('p');
    contactInfo.textContent = "Please feel free to contact us! We are located at 223 Tech Ave, Cupertino,Ca Phone number is 123-456-7890";

    contactDiv.appendChild(contactHeader);
    contactDiv.appendChild(contactInfo);

    return contactDiv;
}


export default contactMod;