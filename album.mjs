export async function getAlbums() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((json) => {
        for(let i = 0; i < 100; i++){
          let album = document.createElement('alb')
          album.setAttribute('src', json[i].title)
          let container = document.querySelector('.albumContainer')
          album.textContent = json[i].title;
          container.appendChild(album);
        }
      });
  }