function SendMail() {
    var params={
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_zrojt3f","template_gpmz4nk",params).then((result) => {
        document.querySelector("#contact").innerHTML += `
        <div class="alert alert-success alert-dismissible" id="myAlert">
            Successfuly sended!<a href="#contact" class="close">&times;</a>

        </div>
        `;

        setTimeout(function(){
            var form =document.querySelector("#contact");
            console.log("hey");
            form.removeChild(form.children[1]);
        }, 4000);


    }).catch((err) => {
        document.querySelector("#contact").innerHTML += `
        <div class="alert alert-danger alert-dismissible" id="myAlert">
            Ops. not sended<a href="#contact" class="close">&times;</a>

        </div>
        `;

        setTimeout(function(){
            var form =document.querySelector("#contact");
            console.log("hey");
            form.removeChild(form.children[1]);
        }, 4000); //Ti

        console.log(err);
    });
    return false;
}

// document.querySelector("#contact").innerHTML += `
//         <div class="alert alert-success alert-dismissible" id="myAlert">
//             Successfuly sended!<a href="#contact" class="close">&times;</a>

//         </div>
//         `;
//         document.querySelector("#contact").innerHTML += `
//         <div class="alert alert-danger alert-dismissible" id="myAlert">
//             Ops. something went wrong.. <a href="#contact" class="close">&times;</a>

//         </div>
//         `;