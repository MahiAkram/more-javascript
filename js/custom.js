const area = document.getElementById('area');
const count = document.getElementById('count');

function countLetters(){
    const totalLenght = area.value.length;
    count.innerHTML = `${totalLenght}`;
}