//your JS code here. If required.
   document.getElementById("loginForm").addEventListener("submit", function(event) {
            event.preventDefault();
            
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const phoneNumber = document.getElementById("phoneNumber").value;
            const email = document.getElementById("email").value;
            
            alert(`First Name: ${firstName} Last Name: ${lastName} Phone Number: ${phoneNumber} Email ID: ${email}`);
        });