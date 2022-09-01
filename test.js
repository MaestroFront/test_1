
window.addEventListener('click', (e) => {
    let button = e.target.innerText === 'Add';
    let input = document.createElement('input');
    let cross = document.createElement('button');

    input.classList.add('input');
    cross.classList.add('button__cross');

    input.style.marginRight = '10px';
    input.style.marginBottom = '10px';

    if (button) {
        document.body.prepend(input);
        input.after(cross);
        alert('Add new task with date and push "Enter"')
        input.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                let li = document.createElement('li');
                let buttonDelete = document.createElement('button');
                let buttonEdit = document.createElement('button');

                buttonDelete.innerText = 'Delete';
                buttonEdit.innerText = 'Edit';

                buttonDelete.classList.add('button');
                buttonDelete.classList.add('button__delete');
                buttonEdit.classList.add('button');

                li.classList.add('todo__item');
                li.textContent = input.value;
                li.style.minWidth = '125px';

                document.body.append(li);
                li.append(buttonDelete);
                buttonDelete.after(buttonEdit);

                cross.remove();
                input.remove();
            }
        })
        cross.addEventListener('click', () => {
            cross.remove();
            input.remove();
        })
    }
})