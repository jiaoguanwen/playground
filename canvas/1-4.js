var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    FONT_HEIGHT = 15,
    MARGIN = 35,
    HAND_TRUNCATION = canvas.width / 25,
    HOUR_HAND_TRUNCATION = canvas.width / 10,
    NUMBER_SPACING = 20,
    RADIUS = canvas.width / 2 - MARGIN,
    HAND_RADIUS = RADIUS + NUMBER_SPACING

function drawCircle() {
    context.beginPath()
    context.arc(canvas.width / 2, canvas.height / 2, RADIUS, 0, Math.PI * 2, true)
    context.stroke()
}

function drawNumerals() {
    var numerals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        angle = 0,
        numeralWidth = 0

    numerals.forEach(numeral => {
        // 一圈2*PI，一共12格，每格PI/6，其中3是0，所以n-3
        angle = Math.PI / 6 * (numeral - 3)
        numeralWidth = context.measureText(numeral).width
        // 笛卡尔坐标系画个圆，然后就知道了，原点坐标
        context.fillText(numeral, canvas.width / 2 + Math.cos(angle) * HAND_RADIUS - numeralWidth / 2, canvas.height / 2 + Math.sin(angle) * HAND_RADIUS + FONT_HEIGHT / 3)
    })
}

function drawCenter() {
    context.beginPath()
    context.arc(canvas.width / 2, canvas.height / 2, 5, 0, Math.PI * 2, true)
    context.fill()
}

function drawHand(loc, isHour) {
    // angle算一下，时间占表盘的比例，乘2*PI，然后偏移PI/2
    var angle = (Math.PI * 2) * (loc / 60) - Math.PI / 2,
        handRadius = isHour ? RADIUS - HAND_TRUNCATION - HOUR_HAND_TRUNCATION : RADIUS - HAND_TRUNCATION
    context.moveTo(canvas.width / 2, canvas.height / 2)
    // 这个和数字那个类似
    context.lineTo(canvas.width / 2 + Math.cos(angle) * handRadius, canvas.height / 2 + Math.sin(angle) * handRadius)
    context.stroke()
}

function drawHands() {
    var date = new Date,
        hour = date.getHours()

    hour = hour > 12 ? hour - 12 : hour
    // 小时转成占整个表盘的比例，一大格向下转是5
    drawHand(hour * 5 + (date.getMinutes() / 60) * 5, true)
    drawHand(date.getMinutes(), false)
    drawHand(date.getSeconds(), false)
}

function drawClock() {
    context.clearRect(0, 0, canvas.width, canvas.height)

    drawCircle()
    drawCenter()
    drawHands()
    drawNumerals()
}

context.font = FONT_HEIGHT + 'px Arial'
var loop = setInterval(drawClock, 1000)
