// открыть меню
let openToDo = document.querySelector('.button');
let toDo = document.querySelector('.todo__wrapper');

openToDo.addEventListener('click', function () {
    toDo.classList.toggle('open');
});

let input = document.querySelector('.todo__input');
let list = document.querySelector('.result');

//событие на клик (enter)
addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        createElements(input.value);
        input.value = ''
    }
});

//добавления элемента
function createElements(value) {
    let li = document.createElement('li');
    li.classList.add('result__item');
    li.textContent = value;
    list.appendChild(li);
    //очистка списка
    let clear = document.querySelector('.button__reset');
    clear.addEventListener('click', function () {
        list.removeChild(li);
    })
    //отработанные дела
    li.addEventListener('click', function () {
        li.classList.toggle('cross__out');
    })
}



