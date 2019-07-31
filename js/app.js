var btn=document.getElementById("displayPhotos");
btn.addEventListener('click',getUsers);

function getUsers() {
    var url = 'https://jsonplaceholder.typicode.com/users';

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
        var user = response[i];
        let userElement = document.createElement('div');
        userElement.className = 'user';
        var name = document.createElement('p');
        name.innerHTML = user.name;
        var email = document.createElement('p');
        email.innerHTML = user.email;
        var phone = document.createElement('p');
        phone.innerHTML = user.phone;
        var linebreak = document.createElement('br');

        userElement.appendChild(name);
        userElement.appendChild(email);
        userElement.appendChild(phone);
        userElement.appendChild(linebreak);

        document.getElementById('user-list').appendChild(userElement);
    }
}