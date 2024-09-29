from flask import Flask, render_template
import os
import random

app = Flask(__name__)


@app.route('/')
def index():
    # Путь к папке с изображениями
    images_folder = 'static/images'
    # Получаем список всех изображений в папке
    all_images = [img for img in os.listdir(images_folder) if img.endswith(('jpg', 'jpeg', 'png', 'gif'))]

    # Используем set для выбора уникальных изображений
    selected_images = set()

    # Случайно выбираем изображения, пока не наберется 6 уникальных
    while len(selected_images) < 6:
        selected_images.add(random.choice(all_images))

    # Преобразуем set в список
    selected_images = list(selected_images)

    return render_template('index.html', images=selected_images)


if __name__ == '__main__':
    app.run(debug=True)
