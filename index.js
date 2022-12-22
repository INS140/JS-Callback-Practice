let imageArray = [] //used for character z index positioning

createBackground('assets/sky.png', '14vh') // must be created first
createBackground('assets/grass.png', '86vh')
const inventory = newInventory()
move(inventory).to(0, 0)

createTreeLine()
window.addEventListener('resize', () => {
    removeTreeLine()
    createTreeLine()
})

const pc = newObject('assets/green-character/static.gif', 150, 250, 50, 75, 'image')

const npc = newNonPlayerCharacter('assets/red-character/static.gif', 50, 300, 50, 71, 'image')

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
let sword = newObject('assets/sword.png', 500, 555, 50, 54, 'item')
let shield = newObject('assets/shield.png', 165, 335, 64, 64, 'item')
let staff = newObject('assets/staff.png', 600, 250, 64, 64, 'item')

npc.walkNorth(1000)
    .then(() => npc.walkEast(1500))
    .then(() => npc.walkSouth(300))
    .then(() => npc.walkEast(950))
    .then(() => npc.walkSouth(1350))
    .then(() => npc.walkWest(2457))
    .then(() => npc.walkNorth(695))