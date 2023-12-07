document.addEventListener("DOMContentLoaded", function () {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=100')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector('#todosTable tbody');

            data.forEach(todo => {
                const row = document.createElement('tr');
                row.innerHTML = `
                <td class=id>${todo.id}</td>
                <td class=title>${todo.title}</td>
                <td class="${todo.completed ? 'completed' : (todo.completed === false ? 'not-completed' : 'pending')}">
                    ${todo.completed ? 'Completed' : (todo.completed === false ? 'Not Completed' : 'Pending')}
                </td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Error fetching todos:', error));
});