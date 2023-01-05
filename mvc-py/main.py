from flask import Flask, render_template, request, redirect

# Modelo
class TodoModel:
    def __init__(self):
        self.todos = []

    def add_todo(self, todo_text):
        self.todos.append(todo_text)

    def edit_todo(self, index, todo_text):
        self.todos[index] = todo_text

    def delete_todo(self, index):
        del self.todos[index]

# Controlador
class TodoController:
    def __init__(self, model):
        self.model = model

    def add_todo(self, todo_text):
        self.model.add_todo(todo_text)

    def edit_todo(self, index, todo_text):
        self.model.edit_todo(index, todo_text)

    def delete_todo(self, index):
        self.model.delete_todo(index)

# Vistas
app = Flask(__name__)

app = Flask(__name__, template_folder="views")

@app.route('/')
def index():
    return render_template('index.html', todos=todo_controller.model.todos)

@app.route('/add_todo', methods=['POST'])
def add_todo():
    todo_text = request.form['todo_text']
    todo_controller.add_todo(todo_text)
    return redirect('/')

@app.route('/edit_todo/<int:index>', methods=['POST'])
def edit_todo(index):
    todo_text = request.form['todo_text']
    todo_controller.edit_todo(index, todo_text)
    return redirect('/')

@app.route('/delete_todo/<int:index>', methods=['POST'])
def delete_todo(index):
    todo_controller.delete_todo(index)
    return redirect('/')

todo_model = TodoModel()
todo_controller = TodoController(todo_model)

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8000, debug=True)

