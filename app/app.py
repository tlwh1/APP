from flask import Flask, render_template, request
import yt_dlp

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    video_info = None
    if request.method == 'POST':
        url = request.form['url']
        ydl_opts = {
            'format': 'best',
            'noplaylist': True,
            'quiet': True,
        }
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            try:
                video_info = ydl.extract_info(url, download=False)
            except Exception as e:
                video_info = {'error': str(e)}
    
    return render_template('index.html', video_info=video_info)

if __name__ == '__main__':
    app.run(debug=True)
