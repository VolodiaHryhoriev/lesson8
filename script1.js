let f1 = document.forms.f1

f1.signUp.addEventListener('click', function() {
    localStorage.setItem('firstName', document.forms.f1.firstName.value)
    localStorage.setItem('secondName', document.forms.f1.secondName.value)
    localStorage.setItem('email', document.forms.f1.email.value)
    localStorage.setItem('gender', Array.from(document.getElementsByName("gender")).find(r => r.checked).value)
    localStorage.setItem('position', document.querySelector('.pos').value)
})

