window.onload = function() {
  var selectElement = document.getElementById("lang");
  if (navigator.language.split("-")[0] === "ru") {
    var all = document.getElementsByClassName("text");

    selectElement.value = "ru";
    makeTranslate(all, "ru");
  }
  selectElement.addEventListener("change", function(event) {
    var all = document.getElementsByClassName("text");
    makeTranslate(all);
  });
};

var translateO = {
  "Vitali Zinkevich - Web and Mobile development":
    "Виталий Зинкевич - Мобильная и Веб разработка",
  "Web and Mobile development.": "Мобильная и Веб разработка.",
  About: "Сервисы",
  Methodology: "Процесс разработки",
  Stack: "Стэк",
  Contact: "Контакты",
  "FULLSTACK DEVELOPMENT FOR WEB AND MOBILE PLATFORMS.":
    "РАЗРАБОТКА МОБИЛЬНЫХ И WEB ПРИЛОЖЕНИЙ",
  "SEO friendly frontend as Single Page Application, Server Side Rendering, Progressive Web Apps, Static Sites. Mobile apps for iOS and Android":
    "SEO дружественный фронтенд. Фронтенд в виде: SPA, PWA, Server Side Rendering, Static Sites",
  "Backend as infrastructure as a code, serverless, cloud computing. Personal servers.":
    "Бэкэнды в облаке, код как инфраструктура, serverless технологии. Персональные сервера",
  "YOU ARE WELCOME.": "ДОБРО ПОЖАЛОВАТЬ",
  "I've got what you need!": "Есть все, что нужно",
  "Desing and Develepment Mobile and Web apps.":
    "Разработка и дизайн мобилиных и веб приложений",
  "Maintenance and Support.": "Техническое обслуживание и поддержка",
  "IT Consultancy.": "Консультации по проекту",
  "CHECK IT OUT": "ЧТО ДАЛЬШЕ?",
  "Iterative development": "Разработка итерациями",
  "Our clients receive daily reports of the work completed, as well as working demo versions of the project. Due to this, you can make necessary adjustments at any stage, resulting in a product of the highest quality.":
    "Наши клиенты получают ежедневные отчеты о проделанной работе, так же как и демо версию приложения. Благодаря этому заказчик может внести необходимые правки на любом этапе, создавая продукт высочайшего качества.",
  "Interaction with clients": "Постоянное общение с клиентом",
  "Regular interaction with clients helps us to create a trusting and mutually convenient environment for cooperation and to avoid many misunderstandings":
    "Постоянный контакт с клиентом позволяет создать доверительную и и удобную среду для сотрудничества и избежать многих недоразумений",
  "Fixed-time cycle": "Фиксированные временные этапы",
  "For easy control of the workflow and to minimize possible bugs, the whole project is divided into fixed time periods. At the end of each iteration the working product is compiled and analyzed and possible errors are identified. At the same time, a plan for further action is formulated.":
    "Для простого контроля рабочего процесса и минимизации возможных багов в рабочем приложении, весь проект разделен на фиксированные временные этапы. В конце каждого периода проект собирается в приложение для тестирования и анализа. В тоже время дополняется или актуализируется план на следующий временной этап.",
  Testing: "Тесты",
  "Continuous integration helps to reduce the complexity of integration and make it more reliable, due to early detection and correction of errors and inconsistencies.":
    "Благодаря постоянному контролю рабочей демо версии приложения снижается сложность внедрения, делая его более предсказуемым. Благодаря постоянному анализу и поиску багов в приложении.",
  "— Unit Testing — Integration testing — Continuous integration":
    "Используется юнит тестирование кода, тестирование при внедрении, тестирование при изменениях.",
  Contact: "Контакты",
  "Ready to start your next project? Give a call or send an email and I will get back to you as soon as possible!":
    "Готовы начать свой проект? Свяжитесь по телефону, мессенджеру, напишите в соц сети или по почте.",
  "I am at Facebook": "Я на Фейсбуке"
};

function makeTranslate(nodes) {
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

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
