var btn = document.getElementById("displayPhotos");
btn.addEventListener('click', getPhotos);

function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(myJson => updateUserList(myJson))
}

function updateUserList(response) {
    for (var i = 0; i < response.length; i++) {
        var photo = response[i];
        let photoElement = document.createElement('div');
        photoElement.className = 'photo';
        var id = document.createElement('p');
        id.innerHTML = photo.id;
        var title = document.createElement('p');
        title.innerHTML = photo.title;
        var url = document.createElement('img');
        url.setAttribute('src', photo.thumbnailUrl);

        photoElement.appendChild(id);
        photoElement.appendChild(title);
        photoElement.appendChild(url);

        document.getElementById('photo-list').appendChild(photoElement);
    }
}