const firebaseConfig = {
    apiKey: "AIzaSyD5r9oclUOVUbn4rcWCZoeSpUX8jZ24fxw",
    authDomain: "tours-a57d0.firebaseapp.com",
    databaseURL: "https://tours-a57d0-default-rtdb.firebaseio.com",
    projectId: "tours-a57d0",
    storageBucket: "tours-a57d0.appspot.com",
    messagingSenderId: "709046136965",
    appId: "1:709046136965:web:fef29838372ee840ccf9ec",
    measurementId: "G-NHJJMCNXZ5"
};

firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("tours");

document.getElementById("tours").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");

    saveMessages(name, emailid, msgContent);

    //   enable alert
    document.querySelector(".alert").style.display = "block";

    //   remove the alert
    setTimeout(() => {
        document.querySelector(".alert").style.display = "none";
    }, 3000);

    //   reset the form
    document.getElementById("tours").reset();
}

const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        name: name,
        emailid: emailid,
        msgContent: msgContent,
    });
};

const getElementVal = (id) => {
    return document.getElementById(id).value;
};