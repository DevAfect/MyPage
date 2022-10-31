var mostraEmail = false;
document.getElementById('iemail').addEventListener("click", function(){
    let demail = document.getElementById('demail');
    demail.innerHTML = 'jeanalvarez' + '@' + 'id.uff' + '.br';
    demail.style.opacity = mostraEmail ? 0 : 1;
    mostraEmail = !mostraEmail;
})