export function createTabContent1() {
    const tabOne = document.createElement('div');
    tabOne.id = 'tab1';
    tabOne.classList.add('tab-content');

    let title = document.createElement('h1');
    title.textContent = "Burger Bros";

    tabOne.appendChild(title);
  
    // Create a clickable link (anchor element)
    const headingLink = document.createElement('a');
    headingLink.href = 'index.html'; // Set the URL of your home page
  
    const heading = document.createElement('h2');
    heading.textContent = 'Home';
  
    // Append the heading to the link
    headingLink.appendChild(heading);
  
    //const paragraph = document.createElement('p');
    //paragraph.textContent = 'This is the content of Tab 1.';
  
    tabOne.appendChild(headingLink); // Append the link instead of the heading directly
  
  
    return tabOne;
  }