function createElement(item) {
    return document.createElement(item);
};

function prependElementToBody(item) {
    document.body.prepend(item);
};

function appendElementToBody(item, item_add) {
    item.append(item_add);
};

function addAfterElement(item, item_add) {
    item.after(item_add);
};

function addClass(item, className) {
    item.classList.add(className);
};

function addTextContent(item, text) {
    item.innerText = text;
};

function deleteElement(item) {
    item.remove();
};

let buttonAdd = createElement('button');
addClass(buttonAdd, 'button');
addClass(buttonAdd, 'button__add');
addTextContent(buttonAdd, 'Add');
prependElementToBody(buttonAdd);


buttonAdd.addEventListener('click', () => {
    let input = createElement('input');
    let cross = createElement('button');
    let li = createElement('li');
    let buttonDelete = createElement('button');
    let buttonEdit = createElement('button');

    addTextContent(buttonDelete, 'Delete');
    addTextContent(buttonEdit, 'Edit');

    addClass(input, 'input');
    addClass(cross, 'button__cross');

    addClass(buttonDelete, 'button');
    addClass(buttonDelete, 'button__delete');
    addClass(buttonEdit, 'button');
    addClass(li, 'todo__item');

    input.placeholder = 'Add a new task with date and push "Enter"';
    input.style.marginRight = '10px';
    input.style.marginBottom = '10px';
    input.style.width = '260px';
    li.style.marginTop = '10px';

    prependElementToBody(input);
    addAfterElement(input, cross);

    input.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
            if (input.value.length > 0) {
                addTextContent(li, input.value);
                appendElementToBody(document.body, li);
                appendElementToBody(li, buttonDelete);

                addAfterElement(buttonDelete, buttonEdit);

                deleteElement(cross);
                deleteElement(input);
            } else {
                alert('Add a task, please!');
            };
        };
    });

    cross.addEventListener('click', () => {
        deleteElement(cross);
        deleteElement(input);
    });

    buttonDelete.addEventListener('click', () => {
        deleteElement(li);
    });

    buttonEdit.addEventListener('click', () => {
        li.contentEditable = true;
        buttonDelete.contentEditable = false;
        buttonEdit.contentEditable = false;

        li.style.color = 'grey';

        li.addEventListener('keydown', (e) => {
            if (e.code === 'Enter') {
                li.style.color = 'black';
                li.contentEditable = false;
            };
        });
    });

});