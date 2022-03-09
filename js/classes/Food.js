class Food {
    constructor() {
        this.size = SQUARE_SIZE
        this.setRandomPosition()
    }

    setRandomPosition() {
        this.x = Math.floor(Math.random() * GAME_SIZE % ((GAME_SIZE / SQUARE_SIZE) -1))
        this.y = Math.floor(Math.random() * GAME_SIZE % ((GAME_SIZE / SQUARE_SIZE) - 1))
        console.log(this.y, this.x)
    }

    draw() {
        ctx.fillStyle = 'orange'
        ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size)
    }

}