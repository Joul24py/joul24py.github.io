function toggle(id) {
    var elemento = document.getElementById(id);
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

// Laguage management

let language = navigator.language;
let selectLanguage = document.getElementById('language-select');

// Setting a default language
selectLanguage.value = 'en';
document.title = "My Way";

if (language == 'es')
{
    selectLanguage.value = 'es';
    document.title = "Mi Camino";
}
if (language == 'en')
{
    selectLanguage.value = 'en';
    document.title = "My Way";
}

// Changing the text in first load of the page
fetch('translations/' + selectLanguage.value + '.json')
    .then(response => response.json())
    .then(data => {
        for (var key in data)
        {
            document.getElementsByClassName(key)[0].innerHTML = data[key];
        }
    })
    .catch(error => {
        console.error('Failed while trying to load JSON translation file: ', error);
    });

// Changing the text depending on the language
selectLanguage.addEventListener('change', function() {
    fetch('translations/' + selectLanguage.value + '.json')
        .then(response => response.json())
        .then(data => {
            for (var key in data)
            {
                document.getElementsByClassName(key)[0].innerHTML = data[key];
            }
        })
        .catch(error => {
            console.error('Failed while trying to load JSON translation file: ', error);
        });
});