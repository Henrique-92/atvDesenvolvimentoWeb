const url = "http://localhost:3000/aluno"

function getUsers() {
    axios.get(url).then(response => {
        const data = response.data
        console.log(data)
        buildUserTable(data)
    }
    ).catch(error =>
        console.log(error)
    )
}

function buildUserTable(data) {
    var table = document.getElementById('userTable')
    data.forEach(user => {
        var row = 
            `<tr>
                    <td>${user.name}</td>
                    <td>${user.descripition}</td>
             </tr>`

        table.innerHTML += row
    });
}

getUsers()