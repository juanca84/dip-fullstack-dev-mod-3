const express =  require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    database: 'todos_db', 
    port: '54322',
})

// Modelo
class Model {
    async getTodos() {
        const { rows } = await pool.query("select * from todos;")
        return rows;
    }

    async addTodo(todo){
        await pool.query("insert into todos (todo) values($1);", [todo])
    }
}

// Vista
class View {
    render(data) {
        let html = `
        <form action="/add" method="post">
        <input type="text" name="name">
        <input type="submit">
        </form>
        `;
        for (let i = 0; i < data.length; i++){
            html += `<li>${data[i].todo}</li>`
        }
        return html;
    }
}

// Controlador
class Controller {
    constructor(model, view){
        this.model = model;
        this.view = view;
    }

    async getTodos(req, res){
        const data = await this.model.getTodos()
        const html = this.view.render(data);
        res.send(html);
    }

    async addTodo(req, res) {
        const name = req.body.name;
        await this.model.addTodo(name)
        const data = await this.model.getTodos();
        const html = this.view.render(data);
        res.send(html)
    }
}

// Instanciación
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

app.use(express.urlencoded({extend: true}))

app.get("/", controller.getTodos.bind(controller));
app.post("/add", controller.addTodo.bind(controller));

app.listen(port, () =>{
    console.log(`Servidor de MVC en javascript en http://localhost:${port}`);
})