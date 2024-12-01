// Wait for the DOM to fully load before running the script
document.addEventListener("DOMContentLoaded", function() {
  // Select all the section headers (e.g., Profile, Education, etc.)
  const sectionHeaders = document.querySelectorAll('section h2');

  // Loop through each section header and add an event listener
  sectionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      // Find the section content (the next sibling after the header)
      const sectionContent = header.nextElementSibling;

      // Toggle the 'open' class on the section content
      sectionContent.classList.toggle('open');
      
      // Animate the height of the section content
      if (sectionContent.classList.contains('open')) {
        sectionContent.style.maxHeight = sectionContent.scrollHeight + "px";  // Expand
      } else {
        sectionContent.style.maxHeight = "0px";  // Collapse
      }
    });
  });
});
