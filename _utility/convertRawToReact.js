function $(id) {
    return document.getElementById(id);
}

$('convertHTML').addEventListener('click', () => {
    let input = $('txtInput');
    let output = $('txtOutput');
    let text = input.value;

    text = camelCase(text);

    text = text.replace('class="', 'className={css.');
    text = text.replace('"', '}');

    output.value = text;
});

/*
<div class="card-body"></div>

<div className={css.cardBody}></div>
*/

$('convertCSS').addEventListener('click', () => {
    let input = $('txtInput');
    let output = $('txtOutput');
    let text = input.value;

    text = camelCase(text);

    text = text.replace('.', '');
    text = text.replace(': ', ': "');
    text = text.replace(';', '",');

    output.value = text;
});

/*
.class-name
{
    background: #FFF;
    color: #000;
}

className
{
    background: #FFF,
    color: #000
}
*/

function camelCase(text) {
    let newText = '';
    let capitalize = false;
    for (let i = 0; i < text.length; i++) {
        if (capitalize) {
            newText += text[i].toUpperCase();
            capitalize = false;
        }
        else if (text[i] == '-') {
            capitalize = true;
        }
        else {
            newText += text[i];
        }
    }
    return newText;
}
