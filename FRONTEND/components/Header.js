var components = document.getElementsByTagName('Header');

for (let i = 0; i < components.length; i++) {
    let profileText = components[i].getAttribute('signed-in') == 'true' ? 'Profil' : 'Bejelentkezés';
    console.log(components[i].getAttribute('signed-in'));
    components[i].innerHTML =
        '<nav class="navbar navbar-expand-lg navbar-light bg-light">' +
            '<a class="navbar-brand" href="#">BringaWebshop</a>' +
            '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"' +
                'aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">' +
                '<span class="navbar-toggler-icon"></span>' +
            '</button>' +
            '<div class="collapse navbar-collapse" id="navbarNav">' +
                '<ul class="navbar-nav">' +
                    '<li class="nav-item">' +
                        '<a class="nav-link" href="#">Főoldal</a>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a class="nav-link" href="#">'+profileText+'</a>' +
                    '</li>' +
                    '<li class="nav-item">' +
                        '<a class="nav-link" href="#">Kosár</a>' +
                    '</li>' +
                '</ul>' +
            '</div>' +
        '</nav>';
}