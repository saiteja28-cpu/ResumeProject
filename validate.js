
document.getElementById("resumeForm").onsubmit = function(e) {

    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name == "" || email == "") {
        alert("Please fill all fields");
    }
    else {
        alert("Resume Submitted Successfully!");
    }
};
