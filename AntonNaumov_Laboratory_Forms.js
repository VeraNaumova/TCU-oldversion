//Javascript for AntonNaumov_Laboratory to validate forms.

function validateForm() {
    var x = document.forms["feedback"]["name"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["feedback"]["email"].value;
    if (y == "") {
    	alert("Email must be filled out");
    	return false;
    }
    var z = document.forms["feedback"]["comments"].value;
    if (z == "") {
    	alert("Comments must be filled out");
    	return false;
    }

}
