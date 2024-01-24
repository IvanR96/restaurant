import Burger from './burger.jpg';
import navbarMod from './navbarMod';

function homeMod(){

  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';

  const headline = document.createElement('h1');
  headline.textContent = 'Burger Bros';

  // creation of content 
  const navBar = navbarMod();

  homeDiv.appendChild(navBar);


  const burgerPic = document.createElement('img');
  burgerPic.src = Burger;
  burgerPic.alt = 'picture of a burger';
  burgerPic.id = 'burger';

  const paragraph = document.createElement('p');
  paragraph.textContent = 'For over 10 years we have worked hard at Burger Bros to create an unforgettable burger experience!'


  homeDiv.appendChild(headline);
  homeDiv.appendChild(burgerPic);
  homeDiv.appendChild(paragraph);

  return homeDiv;
}

export default homeMod;