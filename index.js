

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
