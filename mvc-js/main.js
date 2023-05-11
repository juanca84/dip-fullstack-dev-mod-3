const express = require("express");
const { Pool } = require("pg");

const app = express();
const port = 3000;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "mvc_db",
  password: "postgres",
  port: "54320",
});

// Modelo
class Model {
  async getItems() {
    const { rows } = await pool.query("select * from items;");
    return rows;
  }

  async addItem(name) {
    await pool.query("insert into items (name) values ($1)", [name]);
  }
}

//Vista
class View {
  render(data) {
    let html = "";
    for (let i = 0; i < data.length; i++) {
      html += `
      <li class="list-group-item">
      <div class="row g-1">
      <div class="col-sm-8">
      ${data[i].name}
      </div>
      </div>
      </li>`;
    }
    return `
    <html>
        <head>
          <title>Items</title>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css
          ">
        </head>
        <body>
        <div class="container">
          <div class="row g-1">
          <div class="col-sm-4">
          <h1>Items</h1>
          <ul class="list-group">${html}</ul>
          </br>
          </br>
          </div>
          </div>
          <form action="/add" method="post">
          <div class="row g-2">
          <div class="col-sm-4">
            <input type="text" name="name" placeholder="Enter item name" class="form-control" aria-label="Sizing example input">
          </div>
          <div class="col-sm-4">
            <button class="btn btn-primary" type="submit">Add Item</button>
          </div>
          </form>
        </div>
        </body>
    </html>`;
  }
}

//Controlador
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  async getItems(req, res) {
    const data = await this.model.getItems();
    const html = this.view.render(data);
    res.send(html);
  }

  async addItem(req, res) {
    const name = req.body.name;
    await this.model.addItem(name);
    const data = await this.model.getItems();
    const html = this.view.render(data);
    res.send(html);
  }
}

//Instanciación
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

app.use(express.urlencoded({ extended: true }));

app.get("/", controller.getItems.bind(controller));
app.post("/add", controller.addItem.bind(controller));

app.listen(port, () => {
  console.log(`Este servidor se ejecuta en http://localhost:${port}`);
});
