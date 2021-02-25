# Deezer Basic feature implementation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:
### `npm install or yarn` to install the depencies
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches a jest test runner and test:watch runs the same test in the interactive watch mode.
### `npm run build`

##Known issues
The song preview functioonality is not fully supported yet. Once the song starts playing it cannot be stopped, pressing the pause button will change the icon back to play but will not stop the audio. I intend to address this issue as soon as possible.

The related artist's display breaks for artist with longer name on the same row. This is due the way the name and image are positioned, I am currently looking into better ways of layout the related artists and managing longer names by automatically controlling the font size, alignment and positioning. This issue can be replicated but search for *summer walker* who has Bryson Tiller and PARTYNEXTDOOR as related artist.
