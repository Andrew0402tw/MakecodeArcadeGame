@namespace
class SpriteKind:
    敵人 = SpriteKind.create()

def on_overlap_tile(sprite, location):
    info.change_score_by(randint(1, 5))
    tiles.set_tile_at(location, sprites.dungeon.floor_dark0)
    music.play(music.create_song(assets.song("""
            得分
        """)),
        music.PlaybackMode.IN_BACKGROUND)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_ladder,
    on_overlap_tile)

def 前置作業():
    global foxcat
    foxcat = sprites.create(assets.image("""
        foxcat
    """), SpriteKind.player)
    controller.move_sprite(foxcat)
    foxcat.set_position(25, 25)
    info.set_score(0)
    info.set_life(100)
    scene.camera_follow_sprite(foxcat)
def 第二關():
    global 樓層, _2F敵人1, _2F敵人2, _2F敵人3, _2F敵人4
    tiles.set_current_tilemap(tilemap("""
        層級2
    """))
    樓層 = 2
    foxcat.set_position(130, 95)
    _2F敵人1 = sprites.create(assets.image("""
        2F敵人
    """), SpriteKind.敵人)
    _2F敵人2 = sprites.create(assets.image("""
        2F敵人
    """), SpriteKind.敵人)
    _2F敵人3 = sprites.create(assets.image("""
        2F敵人
    """), SpriteKind.敵人)
    _2F敵人4 = sprites.create(assets.image("""
        2F敵人
    """), SpriteKind.敵人)

def on_life_zero():
    game.set_game_over_message(False, "GAME OVER!")
    game.game_over(False)
info.on_life_zero(on_life_zero)

def on_overlap_tile2(sprite2, location2):
    if 樓層 == 1:
        第二關()
        pause(100)
    elif 樓層 == 2:
        第一關()
        foxcat.set_position(124, 83)
        pause(100)
    else:
        pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.stair_large,
    on_overlap_tile2)

def on_overlap_tile3(sprite22, location22):
    pass
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.floor_dark3,
    on_overlap_tile3)

def 第一關():
    global 樓層
    tiles.set_current_tilemap(tilemap("""
        層級1
    """))
    樓層 = 1
_2F敵人4: Sprite = None
_2F敵人3: Sprite = None
_2F敵人2: Sprite = None
_2F敵人1: Sprite = None
樓層 = 0
foxcat: Sprite = None
前置作業()
第一關()