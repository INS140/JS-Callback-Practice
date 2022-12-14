const updateCharacterDirection = (direction) => {
    if (direction === null) {
        character.src = 'assets/green-character/static.gif'
    }
    if (direction === 'west') {
        character.src = 'assets/green-character/west.gif'
    }
    if (direction === 'north') {
        character.src = 'assets/green-character/north.gif'
    }
    if (direction === 'east') {
        character.src = 'assets/green-character/east.gif'
    }
    if (direction === 'south') {
        character.src = 'assets/green-character/south.gif'
    }
}

let objectArray = [] //used for character z index positioning

createBackground('assets/sky.png', '14vh') // must be created first
createBackground('assets/grass.png', '86vh')
const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
objectArray.pop()

const tree = newImage('assets/tree.png')
const pillar = newImage('assets/pillar.png')
const pineTree = newImage('assets/pine-tree.png')
const crate = newImage('assets/crate.png')
const well = newImage('assets/well.png')
const sword = newItem('assets/sword.png')
const shield = newItem('assets/shield.png')
const staff = newItem('assets/staff.png')

move(character).withArrowKeys(150, 351, updateCharacterDirection)

move(tree).to(200, 450)
move(pillar).to(350, 250)
move(pineTree).to(450, 350)
move(crate).to(150, 350)
move(well).to(500, 575)
move(sword).to(500, 555)
move(shield).to(165, 335)
move(staff).to(600, 250)

const updateCharacterZIndex = () => { // Sets the characters z index based off of objects around
    let charBtm = Number(character.style.bottom.replace(/px/g, ''))
    let charLeft = Number(character.style.left.replace(/px/g, ''))

    let objects = objectArray.filter(element => {
        let btm = Number(element.style.bottom.replace(/px/g, ''))
        let left = Number(element.style.left.replace(/px/g, ''))
        return ((btm-100 < charBtm && charBtm <= btm) && (left-50 < charLeft && charLeft <= left+150))
    })

    if (objects.length !== 0) {
        character.style.zIndex = '2'
    } else if (objects.length === 0) {
        character.style.zIndex = '1'
    }
}
