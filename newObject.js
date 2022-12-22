let objectArray = []

const newObject = (url, left, bottom, width, height, itemOrImage) => {
    let object = {}

    if (itemOrImage === 'image') {
        object.image = newImage(url)
    } else if (itemOrImage === 'item') {
        object.image = newItem(url)
        objectArray.push(object)
    }

    object.width = width
    object.height = height

    if (url === 'assets/green-character/static.gif') {
        move(object.image).withArrowKeys(left, bottom, updateCharacterDirection)
        imageArray.pop()
        updateCharacterBoxes(object, left, bottom)
    } else {
        move(object.image).to(left, bottom)
        updateHitBox(object, left, bottom)
    }

    return object
}

const updateHitBox = (object, left, bottom) => {
    object.hitBoxX = [left, left+object.width]
    object.hitBoxY = [bottom, bottom+object.height]
}

const updatePickUpBox = (object, left, bottom) => {
    object.pickUpBoxX = [left+10, left+object.width-10]
    object.pickUpBoxY = [bottom, bottom+object.height-50]
}