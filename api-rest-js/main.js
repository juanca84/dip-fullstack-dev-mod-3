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

  async getItemById(id) {
    const { rows } = await pool.query("select * from items where id = $1;", [
      id,
    ]);
    return rows[0];
  }

  async addItem(name) {
    await pool.query("INSERT INTO items (name) values ($1)", [name]);
  }

  async updateItem(id, name) {
    await pool.query("UPDATE items SET name = $1 WHERE id = $2", [name, id]);
  }

  async deleteItem(id) {
    await pool.query("DELETE FROM items WHERE id = $1", [id]);
  }
}

//Controlador
class Controller {
  constructor(model) {
    this.model = model;
  }

  async getItems(req, res) {
    const data = await this.model.getItems();
    res.send(data);
  }

  async getItemById(req, res) {
    const id = req.params.id;
    const data = await this.model.getItemById(id);
    res.send(data);
  }

  async addItem(req, res) {
    const name = req.body.name;
    await this.model.addItem(name);
    res.sendStatus(201);
  }

  async updateItem(req, res) {
    const id = req.params.id;
    const name = req.body.name;
    await this.model.updateItem(id, name);
    res.sendStatus(200);
  }

  async deleteItem(req, res) {
    const id = req.params.id;
    await this.model.deleteItem(id);
    res.sendStatus(200);
  }
}

//Instanciación
const model = new Model();
const controller = new Controller(model);

app.use(express.json());

app.get("/items", controller.getItems.bind(controller));
app.get("/items/:id", controller.getItemById.bind(controller));
app.post("/items", controller.addItem.bind(controller));
app.put("/items/:id", controller.updateItem.bind(controller));
app.delete("/items/:id", controller.deleteItem.bind(controller));

app.listen(port, () => {
  console.log(`Este servidor se ejecuta en http://localhost:${port}`);
});
