function login(){
    console.log('loging in')
    const acc = 'user1'
    const passwd = 'user1'

    const acc_input = document.getElementById('user_acc')
    const passwd_input = document.getElementById('user_passwd')

    if(acc_input.value === acc && passwd_input.value === passwd){
        window.location.replace('./index.html')
        alert('登录成功')
    } else{
        alert('账户密码错误')
    }
}

function register(){
    console.log('user is registering')
    alert('注册功能因没有链接数据库，无法实现。已经设置默认账户user1，密码user1')
}