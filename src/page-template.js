

const generateTeam = team => {
    const generateManager = manager => {
        return `
        <div class = "card employee-card">
            <div class = "card-header">
                <h2 class = "card-title">{manager.getName()}</h2>
                <h3 class = "card-title">{manager.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">id:${manager.getId}</li>    
                    <li class = "list-group-item">id:${manager.getEmail}</li>   
                    <li class = "list-group-item">id:${manager.getOfficeNumber}</li>   
                </ul>
            </div>
        </div>`
    }

    const generateEngineer = engineer => {
        return `
        <div class = "card employee-card">
            <div class = "card-header">
                <h2 class = "card-title">{engineer.getName()}</h2>
                <h3 class = "card-title">{engineer.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">id:${engineer.getId}</li>    
                    <li class = "list-group-item">id:${engineer.getEmail}</li>   
                    <li class = "list-group-item">id:${engineer.getGithub}</li>   
                </ul>
            </div>
        </div>`
    }

    const generateIntern = intern => {
        return `
        <div class = "card employee-card">
            <div class = "card-header">
                <h2 class = "card-title">{intern.getName()}</h2>
                <h3 class = "card-title">{intern.getRole()}</h3>
            </div>
            <div class = "card-body">
                <ul class = "list-group">
                    <li class = "list-group-item">id:${intern.get.id}</li>    
                    <li class = "list-group-item">id:${intern.get.Email}</li>   
                    <li class = "list-group-item">id:${intern.getSchool}</li>   
                </ul>
            </div>
        </div>`
    }

    // createa a new const for generateEngineer & intern
    // const html = ()
        // push the constants into the list
        // return html.join("")
}
