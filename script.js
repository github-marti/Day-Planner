let today = moment().format('MMMM Do YYYY');
let thisHour = moment().hour();

let todoArray = [];

$('#current-day').text(today);

for (i = 9; i < 18; i++) {
    if (parseInt($('#' + i).attr('id')) < thisHour) {
        $('#' + i).attr('style', 'background-color: #dddddd');
    } else if (parseInt($('#' + i).attr('id')) > thisHour) {
        $('#' + i).attr('style', 'background-color: #ffd4da');
    } else {
        $('#' + i).attr('style', 'background-color: #fff78a')
    }
}

$('.save').on('click', function() {
    todoArray = [];

    for (i = 9; i < 18; i++) {
        let todoValue = $('#' + i).val();

        let todoObject = {
            todoHour: i,
            todoItem: todoValue
        }

        todoArray.push(todoObject);

        localStorage.setItem("todo", JSON.stringify(todoArray));
    }
})

$('#clear-button').on('click', function() {
    localStorage.clear();
    $('textarea').val('');
})

function loadTodos() {
    let storedTodos = JSON.parse(localStorage.getItem("todo"));
    console.log(storedTodos);

    if (storedTodos !== null) {
        for (i = 0; i < storedTodos.length; i++) {
            $('#' + storedTodos[i].todoHour).val(storedTodos[i].todoItem);
        };
    }
}

loadTodos();