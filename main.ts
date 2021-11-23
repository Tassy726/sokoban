namespace SpriteKind {
    export const box = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.box, function (sprite, otherSprite) {
    if (mySprite.x < mySprite2.x && controller.dx() > 0) {
        mySprite2.x += 2
        mySprite.x += -2
    }
    if (mySprite.x > mySprite2.x && controller.dx() < 0) {
        mySprite2.x += -2
        mySprite.x += 2
    }
    if (mySprite.y < mySprite2.y && controller.dy() > 0) {
        mySprite2.y += 2
        mySprite.y += -2
    }
    if (mySprite.y > mySprite2.y && controller.dy() < 0) {
        mySprite2.y += -2
        mySprite.y += 2
    }
})
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(30, 25)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`レベル1`)
mySprite2 = sprites.create(img`
    b b b b b b b b b b b b b b b b 
    b c b c 6 6 6 6 6 6 6 6 c b c b 
    b b c 6 6 6 6 6 6 6 6 6 6 c b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 6 6 6 6 6 6 6 6 6 6 6 6 b b 
    b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
    b b 9 6 6 6 6 6 6 6 6 6 6 9 b b 
    b b 6 9 6 6 6 6 6 6 6 6 9 6 b b 
    b b 6 6 9 9 9 9 9 9 9 9 6 6 b b 
    b b c 6 6 6 6 6 6 6 6 6 6 c b b 
    b b b c c c c c c c c c c b b b 
    b c b b b b b b b b b b b b c b 
    b b b b b b b b b b b b b b b b 
    `, SpriteKind.box)
