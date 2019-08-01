var btn=document.getElementById("displayPhotos");
btn.addEventListener('click',getPhotos);

function getPhotos() {
    var url = 'https://jsonplaceholder.typicode.com/photos';

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            updateUserList(JSON.parse(this.responseText));
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();    
}

function updateUserList(response) {
    for(var i = 0; i < response.length;i++) {
        var photo = response[i];
        let photoElement = document.createElement('div');
        photoElement.className = 'photo';
        var id = document.createElement('p');
        id.innerHTML = photo.id;
        var title = document.createElement('p');
        title.innerHTML = photo.title;
        var url = document.createElement('img');
        url.innerHTML = photo.url;
        url.setAttribute('src', response[i].url);

        photoElement.appendChild(id);
        photoElement.appendChild(title);
        photoElement.appendChild(url);

        document.getElementById('user-list').appendChild(photoElement);
    }
}