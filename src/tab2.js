export function createTabContent2(){
    const tabTwo = document.createElement('div');

    const headingLink = document.createElement('a');
    headingLink.href = 'index.html'; // Set the URL of your home page
  
    const heading = document.createElement('h2');
    heading.textContent = 'Menu';
  
    // Append the heading to the link
    headingLink.appendChild(heading);
  
    //const paragraph = document.createElement('p');
    //paragraph.textContent = 'This is the content of Tab 1.';
  
    tabTwo.appendChild(headingLink); // Append the link instead of the heading directly


    return tabTwo;

}