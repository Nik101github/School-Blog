//do stuff here and change css to be aweasomeme and stuff

//quirky dom selector

// const DOMSelectors = {
//   button: document.getElementById("btn"),
//   text: document.querySelector("#text"),
//   point: document.querySelectorAll(".point"), //you use . for classes
// };
// console.log(DOMSelectors.button);

// Changing an elements style

// const DOMSelectors = {
//   button: document.getElementById("btn"),
//   text: document.querySelector("#text"),
//   box: document.getElementById("big-black-box"),
//   points: document.querySelectorAll(".point"),
// };

// function backgroundAndText(background, text) {
//   background.style.backgroundColor = "red";
//   text.innerHTML = "This is now a big red box";
// }

// backgroundAndText(DOMSelectors.box, DOMSelectors.text);

const DOMSelectors = {
  Album: document.getElementById("title"),
  Artist: document.getElementById("artist"),
  Image: document.getElementById("url"),
  Display: document.getElementById("display"),
};

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let album = {};
  album.title = document.getElementById("title").value;
  album.artist = document.getElementById("artist").value;
  album.url = document.getElementById("url").value;
  DOMSelectors.Display.insertAdjacentHTML(
    "afterbegin",
    `<div class="display-card">
          <img class="display-img" src="${album.url}"/>
          <h2 class="display-artist">${album.artist}</h2>
          <h3 class="display-album">${album.title}</h3>
          <button class="remove btn">Remove Album</button>
        </div>`
  );

  DOMSelectors.removeButton = document.querySelector(".remove");
  Injector(album);
  Clear();
  Remove(DOMSelectors.Display);
});

function Injector(album) {
  DOMSelectors.displayAlbum = album.title;
  DOMSelectors.displayImage = album.url;
  DOMSelectors.displayArtist = album.artist;
}

function Clear() {
  DOMSelectors.Album.value = "";
  DOMSelectors.Image.value = "";
  DOMSelectors.Artist.value = "";
}

console.log(DOMSelectors);

function Remove() {
  DOMSelectors.removeButton.addEventListener("click", function () {
    document.querySelector(".display-card").remove();
  });
  DOMSelectors.displayAlbum = "";
  DOMSelectors.displayArtist = "";
  DOMSelectors.displayImage = "";
}
