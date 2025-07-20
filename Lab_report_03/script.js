$(document).ready(function () {
    $("#registrationForm").submit(function (e) {
      e.preventDefault(); // Prevent form submission
  
      // Clear previous message
      $("#message").text("");
  
      // Get form values
      var name = $("#name").val().trim();
      var id = $("#id").val().trim();
      var email = $("#email").val().trim();
      var password = $("#password").val();
      var confirmPassword = $("#confirm_password").val();
      var department = $("#department").val();
  
      // Basic validation
      if (name === "" || id === "" || email === "" || password === "" || confirmPassword === "" || department === "") {
        $("#message").text("Please fill in all fields.");
        return;
      }
  
      // Email format validation
      var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        $("#message").text("Enter a valid email address.");
        return;
      }
  
      // Password match
      if (password !== confirmPassword) {
        $("#message").text("Passwords do not match.");
        return;
      }
  
      // Password length check
      if (password.length < 6) {
        $("#message").text("Password must be at least 6 characters long.");
        return;
      }
  
      // If all good
      $("#message").css("color", "green").text("Form submitted successfully!");
      // Optionally, submit the form data to the server here
      // For demo: reset form
      $("#registrationForm")[0].reset();
    });
  });
  