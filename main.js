let front_face = document.getElementById('Fface');
let back_face = document.getElementById('Bface');
let btn = document.getElementById('btn');
let submit = document.getElementById('submit');
let span = document.getElementsByTagName('span')[0];

// hide the back face
onload = back_face.classList.add('hide')
// target the rate buttons

function rate(x) {
span.innerText = ' '+x+" " ;
console.log(x);
} 

submit.onclick = function submit(){
        front_face.classList.add('hide');
        back_face.classList.remove('hide')
}








// after click perform 2 actions 1=> to change the BG color 2=> add the rating number in the span
// submit the rating

