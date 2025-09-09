const searchHolder = document.getElementById('search-box');
const searchConfirm = document.getElementById('search-confirm-button');
const switchSearchSystem = document.getElementById('switch-search-system');
let currentSearch = "google";
switchSearchSystem.value = currentSearch;

searchConfirm.addEventListener('click', e => {
    e.preventDefault();
    if (searchHolder.value.length > 0) {
        if (currentSearch === "google") {
            const searchSystemGoogleTemplate = "https://www.google.com/search?q=";
            window.open(searchSystemGoogleTemplate + searchHolder.value);
        }
        else
        {
            const searchSystemYandexTemplate = "https://ya.ru/search/?text=";
            window.open(searchSystemYandexTemplate + searchHolder.value);
        }
    }
})
switchSearchSystem.addEventListener('click', e => {
    e.preventDefault();
    if (currentSearch === "google")
    {
        currentSearch = "yandex";
        switchSearchSystem.value = currentSearch;
    }
    else
    {
        currentSearch = "google";
        switchSearchSystem.value = currentSearch;
    }
    console.log(currentSearch);
})
console.log(searchHolder);