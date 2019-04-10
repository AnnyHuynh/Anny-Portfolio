let visitor;
let email;
let message;
let templateParams = {
    name: visitor,
    email: email,
    message: message,
}

$(document).on("click", "#submit", function(){
visitor = $("#name").val().trim();
email = $("#email").val().trim();
message = $("#textarea").val().trim();
emailjs.send()

})