window.onload = function() {
  document.querySelector("#contact").addEventListener(
    "click",
    function(event) {
      event.preventDefault();
      var email = document.querySelector("#email").value;
      var message = document.querySelector("#message").value;
      var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var res = emailRegExp.test(email);
      var emailV = document.querySelector("#emailValidation");
      var messageV = document.querySelector("#messageValidation");

      if (message.length < 5) {
        //действия по не валидной
        messageV.textContent = "Message should be more than 5 letters";
        return false;
      }

      if (false /*res*/) {
        //действия по не валидной
        return false;
      }
      console.log("final");
    },
    false
  );
};
