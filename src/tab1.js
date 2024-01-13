function createTabContent1() {
    const tabContent = document.createElement('div');
    tabContent.id = 'tab1';
    tabContent.classList.add('tab-content');
  
    // Create a clickable link (anchor element)
    const headingLink = document.createElement('a');
    headingLink.href = 'index.html'; // Set the URL of your home page
    headingLink.target = '_blank'; // Open link in a new tab/window (optional)
  
    const heading = document.createElement('h2');
    heading.textContent = 'Content for Tab 1';
  
    // Append the heading to the link
    headingLink.appendChild(heading);
  
    const paragraph = document.createElement('p');
    paragraph.textContent = 'This is the content of Tab 1.';
  
    tabContent.appendChild(headingLink); // Append the link instead of the heading directly
    tabContent.appendChild(paragraph);
  
    return tabContent;
  }