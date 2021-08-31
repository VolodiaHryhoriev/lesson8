let f1 = document.forms.f1;

function moveTxt() {
    if (f1.first.value !== '') {
        f1.second.value = ''
    }
    f1.second.value += f1.first.value
    f1.first.value = ''
}

let f2 = document.forms.f2;

function addPlaceholder() {

    if (f2.third.value !== '') {
        f2.third.placeholder = f2.third.value
        f2.third.value = ''
    }
}