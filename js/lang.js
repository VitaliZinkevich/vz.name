window.onload = function() {
  // форма
  validateForm();

  // перевод
  var selectElement = document.getElementById("lang");
  if (navigator.language.split("-")[0] === "ru") {
    var all = document.getElementsByClassName("text");

    selectElement.value = "ru";
    makeTranslate(all);
  }
  selectElement.addEventListener("change", function(event) {
    var all = document.getElementsByClassName("text");
    makeTranslate(all);
    $(".navbar-collapse").collapse("hide");
  });
};

var translateO = {
  "Form was send. Thank you.": "Форма отправлена. Спасибо.",
  "Email required": "Email обязателен",
  "Message should be more than 5 letters":
    "Сообщение должно быть больше 5 символов",
  Submit: "Отправить",
  "Your message:": "Сообщение:",
  Close: "Закрыть",
  Send: "Отправить",
  "Chat request was sended. I will come ASAP. Please wait.":
    "Запрос для онлайн чата отправлен. Я скоро буду. Пожалуйста, подождите.",
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
  "Ready to start your next project? Give a call or use live chat, send an email and I will get back to you as soon as possible!":
    "Готовы начать свой проект? Свяжитесь в чате по телефону, мессенджеру, напишите в соц сети или по почте.",
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

function validateForm() {
  document.querySelector("#contact").addEventListener("click", function(event) {
    event.preventDefault();
    var email = document.querySelector("#email").value;
    var message = document.querySelector("#message").value;
    var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var res = emailRegExp.test(email);
    var emailV = document.querySelector("#emailValidation");
    var messageV = document.querySelector("#messageValidation");
    var selectElement = document.getElementById("lang").value;
    if (!res) {
      if (selectElement === "ru") {
        emailV.textContent = "Email обязателен";
      } else {
        emailV.textContent = "Email required";
      }
      return false;
    }
    emailV.textContent = "";
    if (message.length < 5) {
      if (selectElement === "ru") {
        messageV.textContent = "Сообщение должно быть больше 5 символов";
      } else {
        messageV.textContent = "Message should be more than 5 letters";
      }
      return false;
    }
    messageV.textContent = "";
    socket.send(
      JSON.stringify({
        action: "email",
        data: JSON.stringify({ email: email, message: message })
      })
    );
    document.querySelector("#email").value = "";
    document.querySelector("#message").value = "";
    if (selectElement === "ru") {
      document.querySelector("#response").textContent =
        "Форма отправлена. Спасибо.";
    } else {
      document.querySelector("#response").textContent =
        "Form was send. Thank you.";
    }
  });
}
