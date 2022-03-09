const GAME_SIZE = 600
const SQUARE_SIZE = 20
const canvas = document.getElementById('game-board')
const ctx = canvas.getContext('2d')

const snake = new Snake(SQUARE_SIZE)
const food = new Food(SQUARE_SIZE)
let score = 0
let currentDirection = 'down'

function detectKeyPressed() {
    document.addEventListener('keydown', function (e){
        switch (e.key) {
            case 'ArrowLeft':
                currentDirection = 'left'
                break
            case 'ArrowRight':
                currentDirection = 'right'
                break
            case 'ArrowUp':
                currentDirection = 'up'
                break
            case 'ArrowDown':
                currentDirection = 'down'
                break
        }
    })
}

function clearScreen() {
    ctx.clearRect(0, 0, GAME_SIZE, GAME_SIZE)
}

function setRecord() {
    let record = document.getElementById('record')
    if(score > record.textContent){
        record.innerText = score.toString()
    }
    return record.textContent
}

function update() {
    clearScreen()
    snake.update()
    food.draw()
    if (snake.alive){
        setTimeout(update,100)
    }else{
        setRecord()
        if (score < record.textContent){
            alert("YOU LOOSE - Your score is " + score + " one more effort !!")
        }else{
            alert("FELICITATIONS - its your record")
        }
    }
}

function start() {
    detectKeyPressed()
    food.setRandomPosition()
    update()
}

start()