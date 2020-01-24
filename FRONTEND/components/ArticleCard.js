var components = document.getElementsByTagName('ArticleCard');

for (let i = 0; i < components.length; i++) {
    let image = components[i].getAttribute('image');
    let article = components[i].getAttribute('article');
    let description = components[i].getAttribute('description');
    components[i].innerHTML =
        '<div class="card" style="width: 18rem;">' +
            '<img src="'+image+'" class="card-img-top" alt="">' +
            '<div class="card-body">' +
                '<h5 class="card-title">'+article+'</h5>' +
                '<p class="card-text">'+description+'</p>' +
                '<a href="#" class="btn btn-primary">Részletek</a>' +
            '</div>' +
        '</div>';
}