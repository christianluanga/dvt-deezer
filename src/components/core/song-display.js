import React, {useState} from "react"
import "../../css/song-display.css"

const SongDisplay = ({songDetails}) => {
  const {title, duration, preview, id} = songDetails
  const [previewing, setPreviewing] = useState(false)

  const songPreview = (previewURL) => {
    let audio = new Audio(`${previewURL}`)
    previewing ? audio.pause() : audio.play()
    setPreviewing(!previewing)
  }
  return (
    <div className="song-display-wrapper">
      <div className="song-title song-display-item">{title}</div>
      <div className="song-duration song-display-item">
        {(duration / 60).toFixed(2).replace(/./, ":")}
      </div>
      <div className="song-play-stop song-display-item">
        <i
          onClick={() => songPreview(preview)}
          className={`fas fa-${previewing ? "pause" : "play"} fa-sm`}
        ></i>
      </div>
    </div>
  )
}

export default SongDisplay
