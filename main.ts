namespace SpriteKind {
    export const 敵人 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.敵人, function (sprite, otherSprite) {
    if (樓層 == 2) {
        info.changeLifeBy(randint(0, -5))
        music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
        sprites.destroy(otherSprite)
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    info.changeScoreBy(randint(1, 5))
    tiles.setTileAt(location, sprites.dungeon.floorDark0)
    music.play(music.createSong(assets.song`得分`), music.PlaybackMode.InBackground)
})
function _2F敵人生成 () {
    _2F敵人1 = sprites.create(assets.image`2F敵人`, SpriteKind.敵人)
    _2F敵人1.setPosition(183, 119)
    _2F敵人2 = sprites.create(assets.image`2F敵人`, SpriteKind.敵人)
    _2F敵人2.setPosition(183, 136)
    _2F敵人3 = sprites.create(assets.image`2F敵人`, SpriteKind.敵人)
    _2F敵人3.setPosition(135, 105)
    _2F敵人4 = sprites.create(assets.image`2F敵人`, SpriteKind.敵人)
    _2F敵人4.setPosition(120, 105)
    _2F敵人5 = sprites.create(assets.image`2F敵人`, SpriteKind.敵人)
    _2F敵人5.setPosition(135, 150)
    _2F敵人6 = sprites.create(assets.image`2F敵人`, SpriteKind.敵人)
    _2F敵人6.setPosition(120, 150)
    _2F敵人7 = sprites.create(assets.image`2F敵人`, SpriteKind.敵人)
    _2F敵人7.setPosition(104, 200)
    _2F敵人8 = sprites.create(assets.image`2F敵人`, SpriteKind.敵人)
    _2F敵人8.setPosition(104, 215)
}
function 前置作業 () {
    foxcat = sprites.create(assets.image`foxcat`, SpriteKind.Player)
    controller.moveSprite(foxcat)
    foxcat.setPosition(25, 25)
    info.setScore(0)
    info.setLife(100)
    scene.cameraFollowSprite(foxcat)
    foxcat.setFlag(SpriteFlag.ShowPhysics, true)
    _2F敵人生成()
    _2F敵人不可見()
}
function 第二關 () {
    tiles.setCurrentTilemap(tilemap`層級2`)
    樓層 = 2
    music.play(music.stringPlayable("G G F F E E D D ", 145), music.PlaybackMode.InBackground)
    tiles.placeOnTile(foxcat, tiles.getTileLocation(12, 11.5))
    _2F敵人可見()
    game.showLongText("第二關:打倒敵人並得分", DialogLayout.Bottom)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(randint(1, 5))
    tiles.setTileAt(location, sprites.dungeon.floorDark0)
    music.play(music.createSong(assets.song`得分`), music.PlaybackMode.InBackground)
})
function _2F敵人可見 () {
    _2F敵人1.setFlag(SpriteFlag.Invisible, false)
    _2F敵人2.setFlag(SpriteFlag.Invisible, false)
    _2F敵人3.setFlag(SpriteFlag.Invisible, false)
    _2F敵人4.setFlag(SpriteFlag.Invisible, false)
    _2F敵人5.setFlag(SpriteFlag.Invisible, false)
    _2F敵人6.setFlag(SpriteFlag.Invisible, false)
    _2F敵人7.setFlag(SpriteFlag.Invisible, false)
    _2F敵人8.setFlag(SpriteFlag.Invisible, false)
}
function _2F敵人不可見 () {
    _2F敵人1.setFlag(SpriteFlag.Invisible, true)
    _2F敵人2.setFlag(SpriteFlag.Invisible, true)
    _2F敵人3.setFlag(SpriteFlag.Invisible, true)
    _2F敵人4.setFlag(SpriteFlag.Invisible, true)
    _2F敵人5.setFlag(SpriteFlag.Invisible, true)
    _2F敵人6.setFlag(SpriteFlag.Invisible, true)
    _2F敵人7.setFlag(SpriteFlag.Invisible, true)
    _2F敵人8.setFlag(SpriteFlag.Invisible, true)
}
info.onLifeZero(function () {
    game.setGameOverMessage(false, "GAME OVER!")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    if (樓層 == 1) {
        第二關()
    } else if (樓層 == 2) {
        第一關()
        foxcat.setPosition(214, 184)
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark3, function (sprite2, location2) {
	
})
function 第一關 () {
    tiles.setCurrentTilemap(tilemap`層級1`)
    樓層 = 1
    music.play(music.stringPlayable("G G F F E E D D ", 145), music.PlaybackMode.InBackground)
    _2F敵人不可見()
    game.showLongText("第一關:得分並走出迷宮", DialogLayout.Bottom)
}
let foxcat: Sprite = null
let _2F敵人8: Sprite = null
let _2F敵人7: Sprite = null
let _2F敵人6: Sprite = null
let _2F敵人5: Sprite = null
let _2F敵人4: Sprite = null
let _2F敵人3: Sprite = null
let _2F敵人2: Sprite = null
let _2F敵人1: Sprite = null
let 樓層 = 0
game.splash("按下\"A\"開始遊戲")
前置作業()
第一關()
