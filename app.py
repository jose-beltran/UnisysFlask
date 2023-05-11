from flask import Flask, render_template, request, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
    data = {'titulo': 'Unisys'}
    return render_template('index.html', data=data)


@app.route('/documentar')
def documentar():
    data = {'titulo': 'Documentar caso'}
    return render_template('documentar.html', data=data)


@app.route('/seguimientos', methods=['GET', 'POST'])
def seguimiento():
    data = {'titulo': 'Seguimientos'}
    return render_template('seguimiento.html', data=data)

@app.route('/plantillas')
def plantillas():
    data = {'titulo': 'Plantillas USD'}

    return render_template('plantillas.html', data=data)


if __name__ == '__main__':
    app.run(debug=True)
