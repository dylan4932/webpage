function login(){
    console.log('loging in')
    const acc = 'user1'
    const passwd = 'user1'

    const acc_input = document.getElementById('user_acc')
    const passwd_input = document.getElementById('user_psswd')

    if(acc_input.value === acc && passwd_input.value === passwd){
        // alert('登录成功')
        window.location.replace("./case.html")
    } else{
        alert('账户密码错误')
    }
}
