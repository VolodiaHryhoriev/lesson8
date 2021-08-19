let f1 = document.forms.f1;

function moveTxt() {
    f1.second.value = ''
    f1.second.value += f1.first.value
}

let f2 = document.forms.f2;

function addPlaceholder() {
    f2.third.placeholder = f2.third.value
    f2.third.value = ''
}