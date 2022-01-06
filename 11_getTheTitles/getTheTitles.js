const getTheTitles = function(books) {
    let titles = books.map(obj=> obj['title']);
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
