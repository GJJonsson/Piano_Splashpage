// Get the search input element
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById("search-icon")

// Function to perform the search
function performSearch() {
    const searchTerm = searchInput.value;
    if (searchTerm.trim() !== "") { // Check if the search term is not empty or just whitespace
        const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchTerm)}`;
        window.location.href = googleSearchUrl; // Redirect to Google search
    }
}

// Add event listener for Enter key press
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

searchIcon.addEventListener("click", performSearch)