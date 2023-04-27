from flask import Flask, render_template, request, url_for, redirect
import mysql.connector

app = Flask(__name__)

# Configurar la conexión a la base de datos
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="12345678",
    database="unisys"
)


@app.route('/')
def index():
    data = {'titulo': 'Unisys'}
    return render_template('index.html', data=data)


@app.route('/documentar')
def documentar():
    data = {'titulo': 'Documentar caso'}
    return render_template('documentar.html', data=data)


@app.route('/seguimientos', methods=['GET', 'POST'])
def historial():
    data = {'titulo': 'Seguimientos'}
    # Consulta para obtener todas las plantillas de la tabla "plantillas_usd"
    cursor = db.cursor()
    cursor.execute("SELECT Nombre FROM plantillas_usd")
    plantillas = cursor.fetchall()

    if request.method == 'POST':
        plantilla = request.form['plantilla']
        cursor.execute(f"SELECT Contenido FROM plantillas_usd WHERE Nombre='{plantilla}'")
        contenido = cursor.fetchone()[0]
        copiado = request.form['contenido']
    else:
        contenido = ""

    return render_template('seguimiento.html', plantillas=plantillas, contenido=contenido, data=data)


@app.route('/plantillas')
def plantillas():
    data = {'titulo': 'Plantillas USD'}

    return render_template('plantillas.html', data=data)


if __name__ == '__main__':
    app.run(debug=True)
