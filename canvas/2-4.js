let canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    gradient = context.createRadialGradient(
        canvas.width / 2, canvas.height - 10, 10,
        canvas.width / 2, 100, 100);

gradient.addColorStop(0, 'blue');
gradient.addColorStop(0.25, 'white');
gradient.addColorStop(0.5, 'purple');
gradient.addColorStop(0.75, 'red');
gradient.addColorStop(1, 'yellow');

context.fillStyle = gradient;
context.rect(0, 0, canvas.width, canvas.height);
context.fill();

context.beginPath()
context.arc(canvas.width / 2, canvas.height - 10, 10, 0, Math.PI * 2)
context.closePath()
context.stroke()

context.beginPath()
context.arc(canvas.width / 2, 100, 100, 0, Math.PI * 2)
context.closePath()
context.stroke()

context.beginPath()
context.moveTo(canvas.width / 2, canvas.height - 10)
context.lineTo(canvas.width / 2, 100)
context.closePath()
context.stroke()