document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('user-email').value;
    const password = document.getElementById('user-password').value;
    console.log(email, password);
    
    if(email === 'sontan@bap.com' && password === 'secret'){
        console.log('valid user');
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid User!!');
    }
})