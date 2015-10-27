(function () {
    var BALL_COLOR = "#ffccaa";
    var BALL_SIZE = 30;
    var BALL_STEP_X = 5;
    var BALL_STEP_Y = 7;
    var CANVAS_LIMIT = 500;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    var ball = {
        x: 250,
        y: 250,
        hasInvertedX: false,
        hasInvertedY: false
    };

    function createCircle(x, y) {
        context.beginPath();
        context.arc(x, y, BALL_SIZE, 0, Math.PI*2);
        context.fillStyle = BALL_COLOR;
        context.fill();
    }

    function clearCanvas() {
        context.clearRect(0, 0, canvas.width, canvas.height);
    }

    function moveBall() {
        var minBoundary = 0 + BALL_SIZE;
        var maxBoundary = CANVAS_LIMIT - BALL_SIZE;

        if (ball.x <= minBoundary || ball.x >= maxBoundary ) {
            ball.hasInvertedX = !ball.hasInvertedX;
        }

        if (ball.y <= minBoundary || ball.y >= maxBoundary ) {
            ball.hasInvertedY = !ball.hasInvertedY;
        }

        ball.x = ball.x + ((ball.hasInvertedX) ? -BALL_STEP_X : BALL_STEP_X);
        ball.y = ball.y + ((ball.hasInvertedY) ? -BALL_STEP_Y : BALL_STEP_Y);
    }

    function render() {
        clearCanvas();
        moveBall();
        createCircle(ball.x, ball.y);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}());
