controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    bubble.tossBubble()
    bubble.load_bubble()
})
controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Right)
})
scene.onHitWall(SpriteKind.Bubble, function (sprite, location) {
    bubble.stick_to_wall(sprite, location)
})
controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    bubble.tilt_angle(bubble.Choice.Left)
})
bubble.createBoard()
bubble.load_bubble()
let mySprite = sprites.create(img`
    ............b.b..........
    .....bb....bb.bbbbb......
    ....bbbb.bbbcccccc.2...b8
    cb8cc.cbbbccc8111c.....cc
    cb8bccb.bc8118111c...cbbc
    c888cbb.c81111651c..ccb8.
    8cbbc...c811f1111c..ccbc.
    ..c11...c8111ccccc.c1dc..
    ..cb1b..cc8ccb8888c111b..
    ..cc11...cbb88bbbbc11b...
    ...cd1c..cb8888ccc11c....
    ...cc11c.cb88888c11cc....
    ....cc11cc8c1188c1cc...f.
    .2...cc11c81111c1c.......
    ......cc1c888cccc........
    .......cceb8cecc.........
    ..4.....ceeeec.....2.....
    ....2...ce222c...........
    ........c1111c.........4.
    .......ccd11dcc..........
    .......ccd11dcc..f.......
    .......ccdd1dcc..........
    .......ccd1ddcc.....2....
    ........cccccc...........
    4.......cbbcbb...........
    ........ccbccc...........
    .......cccbbcbc....4.....
    ......ccbbbcccb..........
    ......ceeecceee..........
    ......eeee.eeee..........
    `, SpriteKind.Player)
mySprite.top = 102
