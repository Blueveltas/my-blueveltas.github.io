function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(section => {
      section.style.display = 'none';
  });
  // Show the selected page
  document.getElementById(pageId).style.display = 'block';
}
