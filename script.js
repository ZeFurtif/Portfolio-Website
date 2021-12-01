// Required Functions


// Hover

var items = document.getElementsByClassName("slice_hover_func")
for(var i=0;i<items.length;i++) {
    items[i].addEventListener("mouseover", slice_hover, false);
    items[i].addEventListener("mouseout", slice_not_hover, false);
}

function slice_hover() {
    var slices = document.getElementsByClassName("slice")
    var ul = document.getElementsByClassName("hover")
    for(var i=0;i<slices.length;i++){
        slices[i].setAttribute("style","box-shadow: 0 4px 4px #00000025;");
    }
    for(var i=0;i<ul.length;i++){
        ul[i].setAttribute("style","opacity: 1;");
    }
}
function slice_not_hover() {
    var slices = document.getElementsByClassName("slice")
    var ul = document.getElementsByClassName("hover")
    for(var i=0;i<slices.length;i++){
        slices[i].setAttribute("style","box-shadow: 0 0 0 #00000000;");
    }
    for(var i=0;i<ul.length;i++){
        ul[i].setAttribute("style","opacity 0;");
    }
}


// Page Translate

var dictionary = {
    'drawings': {
        'en': 'Drawings',
        'fr': 'Dessins',
    },
    'music': {
        'en': 'Music',
        'fr': 'Musique',
    },
    'coding': {
        'en': 'Coding',
        'fr': 'Programmation',
    },
    'contact': {
        'en': 'Contact',
        'fr': 'Contact',
    },
    'more': {
        'en': 'More',
        'fr': 'Plus',
    },
};

var langs = ['en', 'fr'];

const getFirstBrowserLanguage = function () {
    var nav = window.navigator,
    browserLanguagePropertyKeys = ['language', 'browserLanguage', 'systemLanguage', 'userLanguage'],
    i,
    language;

    // support for HTML 5.1 "navigator.languages"
    if (Array.isArray(nav.languages)) {
      for (i = 0; i < nav.languages.length; i++) {
        language = nav.languages[i];
        if (language && language.length) {
          return language;
        }
      }
    }

    // support for other well known properties in browsers
    for (i = 0; i < browserLanguagePropertyKeys.length; i++) {
      language = nav[browserLanguagePropertyKeys[i]];
      if (language && language.length) {
        return language;
      }
    }

    return null;
  };

const lang_split = getFirstBrowserLanguage.split('-');
const current_lang = lang_split[0];

console.log(current_lang)