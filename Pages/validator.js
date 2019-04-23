function validateForm() {
    var x = document.forms["myForm"]["comment"].value;
    var y = document.forms["myForm"]["fnavn"].value;
    var z = document.forms["myForm"]["enavn"].value;
    if (x == "") {
      alert ("Du må ha lagt til en kommentar");
      return false;
    }
    else if (y == ""){
      alert("Du må ha lagt til et fornavn");
      return false;
    }
    else if (z == ""){
      alert("Du må ha lagt til et etternavn");
      return false;
    }
  }