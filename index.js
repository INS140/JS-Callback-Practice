let imageArray = [] //used for character z index positioning

const updateCharacterDirection = (direction) => {
    if (direction === null) {
        character.image.src = 'assets/green-character/static.gif'
    }
    if (direction === 'west') {
        character.image.src = 'assets/green-character/west.gif'
    }
    if (direction === 'north') {
        character.image.src = 'assets/green-character/north.gif'
    }
    if (direction === 'east') {
        character.image.src = 'assets/green-character/east.gif'
    }
    if (direction === 'south') {
        character.image.src = 'assets/green-character/south.gif'
    }
}

createBackground('assets/sky.png', '14vh') // must be created first
createBackground('assets/grass.png', '86vh')
const inventory = newInventory()
move(inventory).to(0, 0)

createTreeLine()
window.addEventListener('resize', () => {
    removeTreeLine()
    createTreeLine()
})

const character = newObject('assets/green-character/static.gif', 100, 250, 50, 75, 'image')

move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
let sword = newObject('assets/sword.png', 500, 555, 50, 54, 'item')
let shield = newObject('assets/shield.png', 165, 335, 64, 64, 'item')
let staff = newObject('assets/staff.png', 600, 250, 64, 64, 'item')

const updateCharacterZIndex = () => { // Sets the characters z index based off of objects around
    let charBtm = Number(character.image.style.bottom.replace(/px/g, ''))
    let charLeft = Number(character.image.style.left.replace(/px/g, ''))

    let objects = imageArray.filter(element => {
        let btm = Number(element.style.bottom.replace(/px/g, ''))
        let left = Number(element.style.left.replace(/px/g, ''))
        return ((btm-75 < charBtm && charBtm <= btm) && (left-50 < charLeft && charLeft <= left+150))
    })

    if (objects.length !== 0) {
        character.image.style.zIndex = '3'
    } else if (objects.length === 0) {
        character.image.style.zIndex = '2'
    }
}

const pickUpItem = () => {
    let currentObject = objectArray.filter(object => {
        if ((character.hitBoxX[0] >= object.hitBoxX[0]) && (character.hitBoxX[1] <= object.hitBoxX[1])) {
            if ((character.hitBoxY[0] >= object.hitBoxY[0]) && (character.hitBoxY[1] <= object.hitBoxY[1])) {
                return true
            }
        }
        return false
    })

    if (currentObject.length !== 0) {
        currentObject[0].image.remove()
        currentObject[0].hitBoxX = [0, 0]
        currentObject[0].hitBoxY = [0, 0]
        let inventoryItem = document.createElement('img')
        inventoryItem.src = currentObject[0].image.src;
        inventory.append(inventoryItem)
    }
    
}