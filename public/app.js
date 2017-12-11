var app = function() {

    //1. Create the ul element and add the css class
    // Create a node on the DOM with the name (e.g. 'div', 'span') of 'ul'
    const unorderedListOfCats = document.createElement("ul");

    // Add a class attribute to that node, with the value 'cat'
    unorderedListOfCats.classList.add("cat")

    //2. Create the li elements
    // Create a node on the DOM with the name (e.g. 'div', 'span') of 'li'
    const nameListItem = document.createElement("li");
    const favouriteFoodListItem = document.createElement("li");
    const photoListItem = document.createElement("li");
    const photoImage = document.createElement("img");
    photoImage.setAttribute('width', 500);
    photoImage.setAttribute("src", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

    // Give it the innerText of 'blah blah blah'
    // i.e. <foo>bar</foo>  has the innerText of 'bar'
    ////blockquote.innerText = "blah blah blah";
    nameListItem.innerText = "Name: Peter";
    favouriteFoodListItem.innerText = "Favourite food: Dreamies";



    photoListItem.appendChild(photoImage);
    unorderedListOfCats.appendChild(nameListItem);
    unorderedListOfCats.appendChild(favouriteFoodListItem);
    unorderedListOfCats.appendChild(photoListItem);

    const cats = document.querySelector("#cats");

    cats.appendChild(unorderedListOfCats);

};

document.addEventListener('DOMContentLoaded', app);
