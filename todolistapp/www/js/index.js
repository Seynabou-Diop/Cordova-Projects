function ajouterTache() {
    const task = document.getElementById("task");
    const taskListInProgress = document.getElementById('taskListInProgress');
    const taskListDone = document.getElementById('taskListDone');

    if (task.value) {
        let newItem = document.createElement('li');
        newItem.innerHTML = task.value
        taskListInProgress.appendChild(newItem);

        $(newItem).on('swiperight', function (e) {
            $(this).toggleClass('completed').delay(250).fadeOut('slow', () => {
                taskListDone.appendChild(this);
                $(this).toggleClass('completed').show();
                $(taskListDone).listview('refresh');
            });
        });

        $(newItem).on('swipeleft', function (e) {
            //$(this).remove();
            $(this).hide('slow', function(){
                $(this).remove();
            })
            
        });
        //taskList.innerHTML += `<li>${task.value}</li>`;
        $(taskListInProgress).listview('refresh');
        $(taskListDone).listview('refresh');
    }
    task.value = '';
    task.focus();
}

function reinitialiserListe() {
    const taskList = document.getElementById('taskList');
    const task = document.getElementById("task");
    task.value = '';
    taskList.innerHTML = '';
    task.focus();
}

// Pour la prochiane fois se documenter sur cordova contact plugins