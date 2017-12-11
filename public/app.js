var app = function() {
  addCat("Peter","Dreamies","http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
};

const createNameListItem = function(name){
  const nameListItem = document.createElement("li");
  nameListItem.innerText = `Name: ${name}`;
  return nameListItem;
};

const createFavouriteFoodListItem = function(food){
  const favouriteFoodListItem = document.createElement("li");
  favouriteFoodListItem.innerText = `Favourite food: ${food}`;
  return favouriteFoodListItem;
};

const createPhotoListItem = function(photoUrl){
  const photoListItem = document.createElement("li");
  const photoImage = document.createElement("img");
  photoImage.setAttribute('width', 500);
  photoImage.setAttribute("src", `${photoUrl}`);
  photoListItem.appendChild(photoImage);
  return photoListItem;
};

const addCat = function(name, food, photoUrl) {
  const unorderedListOfCatItems = document.createElement("ul");
  unorderedListOfCatItems.classList.add("cat")

  unorderedListOfCatItems.appendChild(createNameListItem(name));
  unorderedListOfCatItems.appendChild(createFavouriteFoodListItem(food));
  unorderedListOfCatItems.appendChild(createPhotoListItem(photoUrl));

  const cats = document.querySelector("#cats");
  cats.appendChild(unorderedListOfCatItems);
}

document.addEventListener('DOMContentLoaded', app);
