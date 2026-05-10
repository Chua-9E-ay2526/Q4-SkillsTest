function CredentialsCheck() {
    let user = document.getElementById("Username").value;
    let pass = document.getElementById("Password").value;

    let result;

    if (user === "" || pass === "") {
        result = "empty";
    } 
    else if (user === "Jane_Doe_123" && pass === "BattleAgainstATrueProcrastinat0r*") {
        result = "success";
    } 
    else {
        result = "wrong";
    }

    switch (result) {
        case "success":
            window.location.href = "notebooks.html";
            break;

        case "wrong":
            window.alert("Wrong Username or Password");
            break;

        default:
            window.alert("Please enter a username or a password!");
    }
}