window.onload = function() {
  var selectElement = document.getElementById("lang");
  if (navigator.language.split("-")[0] === "ru") {
    var all = document.getElementsByClassName("text");

    selectElement.value = "ru";
    makeTranslate(all, "ru");
  }
  selectElement.addEventListener("change", function(event) {
    var all = document.getElementsByClassName("text");
    makeTranslate(all, event.target.value);
  });
};

var translateO = {
  "Vitali Zinkevich - Web and Mobile development":
    "Виталий Зинкевич - Мобильная и Веб разработка",
  "Web and Mobile development.": "Мобильная и Веб разработка.",
  About: "О нас",
  Methodology: "Процесс разработки",
  Examples: "Примеры",
  Contact: "Контакты",
  "FULLSTACK DEVELOPMENT FOR WEB AND MOBILE PLATFORMS.":
    "РАЗРАБОТКА ПОЛНОГО ЦИКЛА ДЛЯ МОБИЛЬНОЙ И ВЕБ ПЛАТФОРМЫ",
  "SEO friendly frontend as Single Page Application, Server Side Rendering, Static Sites. Mobile apps for iOS and Android.":
    "SEO дружественный фронтенд",
  "Backend as infrastructure as a code, serverless, cloud computing. Personal servers.":
    "Бэкэнд супер",
  "YOU ARE WELCOME.": "ДОБРО ПОЖАЛОВАТЬ",
  "We've got what you need!": "У нас есть все что нужно",
  "Desing and Develepment Mobile and Web apps.":
    "Разработка и дизайн мобилиных и веб приложений",
  "Maintenance and Support.": "Техническое обслуживание и поддержка",
  "IT Consultancy.": "Консультации",
  "CHECK IT OUT": "Проверьте",
  "Iterative development": "Итеративная разработка",
  "Our clients receive daily reports of the work completed, as well as working demo versions of the project. Due to this, you can make necessary adjustments at any stage, resulting in a product of the highest quality. This approach allows you to perform the work alongside with the analysis of the results and any necessary corrections. In addition, it significantly reduces the risks in the early stages of the project, which is why the risk management costs are also minimal.":
    "все супер мило",
  "Interaction with clients": "Постоянное общение с клиентом",
  "Regular interaction with clients helps us to create a trusting and mutually convenient environment for cooperation and to avoid many misunderstandings":
    "все дадим что бы смотреть",
  "Fixed-time cycle": "Фиксированные по времени итерации",
  "For easy control of the workflow and to minimize possible bugs, the whole project is divided into fixed time periods. At the end of each iteration the working product is compiled and analyzed and possible errors are identified. At the same time, a plan for further action is formulated.":
    "Проэкт будет разделен на периоды",
  Testing: "Тесты",
  "Continuous integration helps to reduce the complexity of integration and make it more reliable, due to early detection and correction of errors and inconsistencies.":
    "постоянное внедрение",
  "— Unit Testing  — Integration testing  — Continuous integration":
    "Тест такие тесты сякие",
  "Let's Get In Touch!": "Давайте знакомиться",
  "Ready to start your next project? Give a call or send an email and We will get back to you as soon as possible!":
    "Готовы начать свой проэкт?",
  "I am at Facebook": "Я на Фейсбуке"
};

function makeTranslate(nodes, lang) {
  for (var i = 0, max = nodes.length; i < max; i++) {
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
