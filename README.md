# Visual Studio Code
To view the code, open the entire TT-Portfolio folder in Visual Studio Code using the "Open Folder" method or by right-clicking and selecting "Open Folder" in the context menu. This applies to other code editors as well.

# Name
To change the name on the website, modify line 28 of the index.html file. You can add other names as well.
```
<h1>Daenerys <span>Targaryen</span></h1>

```

# Images
To change the images displayed on the website, replace the existing images in the static/images folder with your own images. Make sure to rename your images to match the names of the existing images in the folder. Alternatively, you can modify line 21 of the style.css file and line 42 of the index.html file to point to your new images.

index.html
```
<img src="static/images/FloatingImage.jpg" />

```

style.css
```
background-image: url(../static/images/BackgroundImage.webp);

```

# Pages
The other web pages, resume.html, contact.html, and education.html, are located in the pages folder. If you want to change the order of the navigation links, you will need to modify lines 18-21 in the Class Hero div block in each of these files.
```
<li><a  href="../index.html">Home</a></li>
<li><a  href="resume.html">Resume</a></li>
<li><a  href="education.html">Education</a></li>
<li><a  href="#">Contact</a></li>

```

# Video
To change the video displayed on the website, replace the existing video in the static/vids folder with your own video. Make sure to rename your video to match the name of the existing video in the folder. It is important to check the video format you are using. We recommend using an mp4 video format. If you decide to use a different format, modify line 33 of the resume.html file to match the new format.
```
<source src="../static/vids/video.mp4" type="video/mp4">

```

# Audio
To change the audio displayed on the website, replace the existing audio file in the static/recs folder with your own audio file. Make sure to rename your audio file to match the name of the existing audio file in the folder. It is important to check the audio format you are using. We recommend using an mp3 audio format. If you decide to use a different format, modify line 33 of the education.html file to match the new format.
```
<source src="../static/recs/audio.mp3" type="audio/mp3">

```
