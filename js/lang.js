window.onload = function() {
  var selectElement = document.getElementById("lang");
  // сходить в локалсторадж посмотреть какой язык выбран и был ли
  // установить язык и выполнить перевод если нужно
  // вешаем событие изменения языка на будущие
  console.log(navigator.language.split("-")[0]);
  if (navigator.language.split("-")[0] === "ru") {
    var all = document.getElementsByClassName("text");
    selectElement.value = "ru";
    makeTranslate(all, "ru");
  }
  selectElement.addEventListener("change", function(event) {
    console.log("addEventListener");
    var all = document.getElementsByClassName("text");
    makeTranslate(all, event.target.value);
  });
};

var translateO = {
  "Vitali Zinkevich - Web and Mobile development":
    "Виталий Зинкевич - Мобильная и Веб разработка",
  "Web and Mobile development.": "Мобильная и Веб разработка.",
  About: "О нас",
  Methodology: "Методология",
  Examples: "Примеры",
  Contact: "Контакты",
  "FULLSTACK DEVELOPMENT FOR WEB AND MOBILE PLATFORMS.":
    "РАЗРАБОТКА ПОЛНОГО ЦИКЛА ДЛЯ МОБИЛЬНОЙ И ВЕБ ПЛАТФОРМЫ",
  "SEO friendly frontend as Single Page Application, Server Side Rendering, Static Sites. Mobile apps for iOS and Android.":
    "SEO дружественный фронтенд",
  "Backend as infrastructure as a code, serverless, cloud computing. Personal servers.":
    "Бэкэнд супер",
  "YOU ARE WELCOME.": "ДОБРО ПОЖАЛОВАТЬ"
};

function makeTranslate(nodes, lang) {
  for (var i = 0, max = nodes.length; i < max; i++) {
    console.log(nodes[i].innerText);
    console.log(translateO.hasOwnProperty(nodes[i].innerText));
    if (translateO.hasOwnProperty(nodes[i].innerText)) {
      nodes[i].innerText = translateO[nodes[i].innerText];
    }
  }

  var keys = Object.keys(translateO);
  var values = Object.values(translateO);
  translateO = {};
  keys.forEach(function(key, index) {
    translateO[values[index]] = keys[index];
  });
}
