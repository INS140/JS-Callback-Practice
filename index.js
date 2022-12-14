let objectArray = [] //used for character z index positioning

const createTreeLine = () => {
    for (let i = 0; i*50 < window.innerWidth; i++) {
        let tree = newImage('assets/pine-tree.png')
        tree.style.zIndex = '0'
        move(tree).to((i*50)-50, (window.innerHeight-(window.innerHeight*16/100)))
        objectArray.pop()
    }
}

createTreeLine()

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

createBackground('assets/sky.png', '14vh') // must be created first
createBackground('assets/grass.png', '86vh')
const inventory = newInventory()
move(inventory).to(0, 0)

const character = newImage('assets/green-character/static.gif')
objectArray.pop()

move(character).withArrowKeys(100, 250, updateCharacterDirection)

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

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