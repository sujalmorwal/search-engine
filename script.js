
function loadSearchHistory() {
    const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    const searchHistoryList = document.getElementById('searchHistory');
    searchHistoryList.innerHTML = '';

    searchHistory.forEach(term => {
        const li = document.createElement('li');
        li.textContent = term;
        searchHistoryList.appendChild(li);
    });
}


function storeSearchTerm(term) {
    let searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    searchHistory.push(term);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    loadSearchHistory();
}


function clearSearchHistory() {
    localStorage.removeItem('searchHistory');
    loadSearchHistory();
}


document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value;
    if (searchInput) {
        storeSearchTerm(searchInput);
        document.getElementById('searchInput').value = ''; // Clear the input field
    }
});


document.getElementById('clearHistoryButton').addEventListener('click', function() {
    clearSearchHistory();
});


window.onload = function() {
    loadSearchHistory();
};
