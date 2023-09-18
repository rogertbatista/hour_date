let date = new Date();
let hour = date.getHours();
let dayName = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado"];
let monthName = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let res = document.getElementById('res');
let back = document.getElementById('back');

let img = document.createElement('img');
img.style.maxWidth = '100%';
img.style.height = '40%'

if(hour < 12){
    res.innerHTML += `Bom dia! São exatamente ${hour}:${date.getMinutes()}`
    img.setAttribute('src','./img/manha.png');
    back.style.background = 'lightblue';
}
else if(hour < 18){
    res.innerHTML += `Boa tarde! São exatamente ${hour}:${date.getMinutes()}`
    img.setAttribute('src', './img/tarde.png');
    back.style.background = '#fd9444';
}
else{
    res.innerHTML += `Boa noite! São exatamente ${hour}:${date.getMinutes()}`
    img.setAttribute('src','./img/noite.png');
    back.style.background = 'gray';
}

res.innerHTML += `<div>Hoje é ${dayName[date.getDay()]}, ${date.getDate()} de ${monthName[date.getMonth()]} de ${date.getFullYear()}</div>`
res.style.fontWeight = 'bold';
res.style.fontSize = '.85em';

res.appendChild(img);