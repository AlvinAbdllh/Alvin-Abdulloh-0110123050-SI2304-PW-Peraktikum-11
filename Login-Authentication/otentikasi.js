function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username == "12" && password == "12345"){
        alert("Login Berhasil");
        window.location.href = "berhasil.html";
    }else{
        alert("Login Gagal");
    }
}
