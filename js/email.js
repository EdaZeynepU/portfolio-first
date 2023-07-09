function SendMail() {
    var params={
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_zrojt3f","template_gpmz4nk",params).then((result) => {
        alert("Successfuly sended.");
    }).catch((err) => {
        alert("not sended");
        console.log(err);
    });
    return false;
}