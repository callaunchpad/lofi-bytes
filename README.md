# Launchpad Spring 2023 Semester Project
## lofi bytes

By: Alicia Wang [PL], Alena Chao, Eric Liu, Zane Mogannam, Chloe Wong, Iris Zhou

## So, what is lofi bytes?
Picture this: it is midterm season, you have a ton of work to finish, and you need a long library grind session. You reach for your headphones, but instead of turning on Spotify, you open lofi bytes: an aesthetic web app that takes song samples and outputs chill lofi, complete with customizable background sounds and beats.

Over the Spring 2023 semester, our team has been creating an integrated, user-friendly web application that allows users to generate lofi tracks from input MIDI samples and customize further with sounds of rain, fire, and cafe ambiance. This article will outline our process from education to the final product, discuss everything we did, from training an ML model to building a full-stack application, and reflect on limitations, extensions, and further learning opportunities.

Check out our website at https://callaunchpad.github.io/lofi-bytes-app/! This is a semester project by Launchpad, a creative ML organization founded on the UC Berkeley campus.

## About our repo

- `yt_downloads` and `dataset-processing` folders are used to create our datasets. We wrote scripts that scraped lofi data from youtube and converted them into MIDI.
- `lstm` folder stores our baseline LSTM model.
- `music-transformer` stores our model based off of the MusicTransformer model from the Google Magenta paper.

Feel free to `pip install` our `requirements.txt` and poke around!

Our web app code is located at https://github.com/callaunchpad/lofi-bytes-app.

Our API code for our web app is located at https://github.com/callaunchpad/lofi-bytes-api.




