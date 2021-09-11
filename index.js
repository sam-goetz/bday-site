const body = document.getElementById('content');
const color = document.getElementById('color');
const title = document.getElementById('title');
const bday = document.getElementById('birthday');
const name = document.getElementById('name');
const button = document.getElementById('submit');

const changePage = () => {
    body.style.backgroundColor = color.value;
    title.innerText = `${name.value}'s personal Site`
    let date = document.createElement('div');
    date.innerText = bday.value;
    title.append(date);
    console.log('hi')

}

button.addEventListener('click', changePage);