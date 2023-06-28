import React from 'react'

const Camara = () => {
  return (
    <div class="camera-container">
    <div class="camera-frame">
      <video id="webcam"  width="320px"><iframe width="320" height="560" src="https://www.youtube.com/embed/P1N9Xqyw5Pc" title="You can’t even tell the difference between digital characters and humans anymore 🤯 #tech #ai" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></video>
    </div>
    <button class="capture-button">TOMAR FOTO</button>
    </div>
      
    
  )
}

export default Camara
