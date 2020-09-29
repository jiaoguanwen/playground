let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d')

context.beginPath()

context.rect(10, 10, 100, 100)
context.stroke()

// context.beginPath()
context.rect(50, 50, 100, 100)
context.stroke()