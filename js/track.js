function playtrack(){
    var x = document.getElementById('track')
    x.play()
}

function stoptrack(){
    var x = document.getElementById('track')
    x.pause()
    x.currentTime = 0
}