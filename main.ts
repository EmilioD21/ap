controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . e e c c e e . . . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        . . . . 2 c 2 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 2 4 2 2 2 2 2 c 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 2 4 2 2 2 2 2 2 2 f . 
        . . . f 2 c 2 4 4 2 2 2 c 2 f . 
        . . . e 2 c e c c c c e c 2 e . 
        . . . e 2 e c b b b b c e 2 e . 
        . . . e 2 e b b b b b b e 2 e . 
        . . . e e e e e e e e e e e e . 
        . . . f e d e e e e e e d e f . 
        . . . f e 2 d e e e e d 2 e f . 
        . . . f f e e e e e e e e f f . 
        . . . . f f . . . . . . f f . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 2 2 . . 
        . . . . . 2 c 2 2 2 2 2 2 4 2 . 
        . . . . 2 c c 2 2 2 2 2 2 4 c 2 
        . . d 2 4 c c 2 4 4 4 4 4 4 c c 
        . d 2 2 4 c b e e e e e e e 2 c 
        . 2 2 2 4 b e e b b b e b b e 2 
        . 2 2 2 2 2 e b b b b e b b b e 
        . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
        . 2 d d 2 e f e e e f e e e e e 
        . d d 2 e e e f e e f e e e e e 
        . e e e e e e e f f f e e e e e 
        . e e e e f f f e e e e f f f f 
        . . . e f f f f f e e f f f f f 
        . . . . f f f f . . . . f f f . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 . . . . . . 
        . 2 4 2 2 2 2 2 2 c 2 . . . . . 
        2 c 4 2 2 2 2 2 2 c c 2 . . . . 
        c c 4 4 4 4 4 4 2 c c 4 2 d . . 
        c 2 e e e e e e e b c 4 2 2 d . 
        2 e b b e b b b e e b 4 2 2 2 . 
        e b b b e b b b b e 2 2 2 2 2 . 
        e 2 2 2 e 2 2 2 2 2 e 2 2 2 2 . 
        e e e e e f e e e f e 2 d d 2 . 
        e e e e e f e e f e e e 2 d d . 
        e e e e e f f f e e e e e e e . 
        f f f f e e e e f f f e e e e . 
        f f f f f e e f f f f f e . . . 
        . f f f . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 2 . . . . 
        . . . . . 2 2 4 4 2 2 2 2 . . . 
        . . . . . c 4 2 2 2 2 2 c . . . 
        . . . . 2 c 4 2 2 2 2 2 c 2 . . 
        . . . e 2 c 4 2 2 2 2 2 c 2 e . 
        . . . f 2 c 4 2 2 2 2 2 c 2 f . 
        . . . f e c 2 2 2 2 2 2 c e f . 
        . . . f 2 c 2 b b b b 2 c 2 f . 
        . . . e 2 2 b c c c c b 2 2 e . 
        . . . e e b c c c c c c b e e . 
        . . . f e 4 4 4 4 4 4 4 4 e f . 
        . . . f e d 2 2 2 2 2 2 d e f . 
        . . . . 2 d d 2 2 2 2 d d 2 f . 
        . . . . f 2 d 2 2 2 2 d 2 f . . 
        . . . . . e 2 2 2 2 2 2 e . . . 
        `)
})
function spawn () {
	
}
let vel = 0
let direct = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let turn_vel = 0.2
let acc = 200
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . 2 2 2 2 2 2 2 2 . . . . 
    . . . 2 4 2 2 2 2 2 2 c 2 . . . 
    . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
    . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
    . 2 c 2 e e e e e e e b c 4 2 2 
    . 2 2 e b b e b b b e e b 4 2 2 
    . 2 e b b b e b b b b e 2 2 2 2 
    . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
    . e e e e e e f e e e f e 2 d d 
    . e e e e e e f e e f e e e 2 d 
    . e e e e e e f f f e e e e e e 
    . e f f f f e e e e f f f e e e 
    . . f f f f f e e f f f f f e . 
    . . . f f f . . . . f f f f . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
game.onUpdate(function () {
    let top_vel = 0
    if (controller.right.isPressed()) {
        direct += turn_vel * (1 - vel / (1.5 * top_vel))
    }
    if (controller.left.isPressed()) {
        direct += 0 * (turn_vel * (1 - vel / (1.5 * top_vel)))
    }
    if (controller.A.isPressed()) {
        acc = 1.5
    } else if (controller.down.isPressed()) {
        acc = -2.5
    } else {
        acc = -0.5
    }
    vel = Math.constrain(vel + acc, 0, top_vel)
    mySprite.vx = Math.cos(direct * vel)
    mySprite.vy = Math.sin(direct) * vel
})
