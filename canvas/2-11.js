let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d')

function drawGrid(colour, stepX, stepY) {
    context.save()
    context.strokeStyle = colour
    context.fillStyle = '#ffffff'
    context.lineWidth = 0.5
    context.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = stepY + 0.5; i < canvas.height; i += stepY) {
        context.beginPath()
        context.moveTo(0, i)
        context.lineTo(canvas.width, i)
        context.stroke()
    }

    for (let i = stepX + 0.5; i < canvas.width; i += stepX) {
        context.beginPath()
        context.moveTo(i, 0)
        context.lineTo(i, canvas.height)
        context.stroke()
    }

    context.restore()
}

function addOuterRectanglePath() {
    context.rect(110, 25, 370, 335)
}

function addCirclePath() {
    context.arc(300, 300, 40, 0, Math.PI * 2, true)
}

function addRectanglePath() {
    rect(310, 55, 380, 90, true)
}

function addTrianglePath() {
    context.moveTo(400, 200)
    context.lineTo(250, 115)
    context.lineTo(200, 200)
    context.closePath()
}

function rect(startX, startY, endX, endY, direction) {
    // context.beginPath()
    context.moveTo(startX, startY)
    if (direction) {
        // 逆时针
        context.lineTo(startX, endY)
        context.lineTo(endX, endY)
        context.lineTo(endX, startY)
        context.closePath()
    } else {
        // 顺时针
        context.lineTo(endX, startY)
        context.lineTo(endX, endY)
        context.lineTo(startX, endY)
        context.closePath()
    }
}

context.fillStyle = 'goldenrod';
context.clearRect(0, 0, canvas.width, canvas.height)
drawGrid('lightGray', 10, 10)
context.save()
context.shadowColor = 'rgba(200, 200, 0, 0.5)'
context.shadowOffsetX = 12
context.shadowOffsetY = 12
context.shadowBlur = 15
drawCutouts()

function drawCutouts() {
    context.beginPath()
    addOuterRectanglePath()

    addCirclePath()
    addRectanglePath()
    addTrianglePath()

    context.fill()
}