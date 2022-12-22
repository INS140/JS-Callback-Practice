const updateCharacterDirection = (direction) => {
    if (direction === null) {
        pc.image.src = 'assets/green-character/static.gif'
    }
    if (direction === 'west') {
        pc.image.src = 'assets/green-character/west.gif'
    }
    if (direction === 'north') {
        pc.image.src = 'assets/green-character/north.gif'
    }
    if (direction === 'east') {
        pc.image.src = 'assets/green-character/east.gif'
    }
    if (direction === 'south') {
        pc.image.src = 'assets/green-character/south.gif'
    }
}

const updateCharacterZIndex = (char) => { // Sets the characters z index based off of objects around
    let charBtm = Number(char.image.style.bottom.replace(/px/g, ''))
    let charLeft = Number(char.image.style.left.replace(/px/g, ''))

    let objects = imageArray.filter(element => {
        let btm = Number(element.style.bottom.replace(/px/g, ''))
        let left = Number(element.style.left.replace(/px/g, ''))
        return ((btm-75 < charBtm && charBtm <= btm) && (left-50 < charLeft && charLeft <= left+150))
    })

    if (objects.length !== 0) {
        char.image.style.zIndex = '3'
    } else if (objects.length === 0) {
        char.image.style.zIndex = '2'
    }
}

const pickUpItem = () => {
    let currentObject = objectArray.filter(object => {
        if ((pc.pickUpBoxX[0] >= object.hitBoxX[0]) && (pc.pickUpBoxX[1] <= object.hitBoxX[1])) {
            if ((pc.pickUpBoxY[0] >= object.hitBoxY[0]) && (pc.pickUpBoxY[1] <= object.hitBoxY[1])) {
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

const updateCharacterBoxes = (object, left, bottom) => {
    updateHitBox(object, left, bottom)
    updatePickUpBox(object, left, bottom)
}