const text = document.querySelector('#input');
const list = document.querySelector('.toDo');
const enter = document.querySelector('.enter');
const clear = document.querySelector('.clear');
enter.addEventListener('click', function (e) {
    e.preventDefault()
    let newList = document.createElement('li');
    const obl = text.value;
    newList.classList.add('lis');
    newList.innerText = `${obl}`;


    const xBut = document.createElement('button');
    xBut.innerText = 'X';
    xBut.classList.add('xBut');
    newList.appendChild(xBut);


    const checkBut = document.createElement('button');
    checkBut.innerText = 'Done';
    checkBut.classList.add('checkBut');
    newList.appendChild(checkBut);



    xBut.addEventListener('click', () => {
        newList.remove('li');
    })

    checkBut.addEventListener('click', () => {
        newList.classList.add('done');
    })

    list.append(newList);
    text.value = "";


    clear.addEventListener('click', () => {
        list.remove(newList);
    })
})