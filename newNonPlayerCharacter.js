function newNonPlayerCharacter(url, left, bottom, width, height, itemOrImage) {
    let char = newObject(url, left, bottom, width, height, itemOrImage)
    imageArray.pop()
    let element = char.image

    let x = left
    let y = bottom
    let direction = null

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        updateHitBox(npc, x, y)
        updateCharacterZIndex(npc)
    }

    setInterval(moveCharacter, 1)

    char.walkEast = (time) => {
        return new Promise(resolve => {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        setTimeout(() => {
            char.stop()
            console.log(npc.image.style.left, npc.image.style.bottom)
            resolve()
        }, time)
    })
    }

    char.walkNorth = (time) => {
        return new Promise(resolve => {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        setTimeout(() => {
            char.stop()
            console.log(npc.image.style.left, npc.image.style.bottom)
            resolve()
        }, time)
    })
    }

    char.walkWest = (time) => {
        return new Promise(resolve => {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        setTimeout(() => {
            char.stop()
            console.log(npc.image.style.left, npc.image.style.bottom)
            resolve()
        }, time)
    })
    }

    char.walkSouth = (time) => {
        return new Promise(resolve => {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        setTimeout(() => {
            char.stop()
            console.log(npc.image.style.left, npc.image.style.bottom)
            resolve()
        }, time)
    })
    }

    char.stop = () => {
        direction = null
        element.src = './assets/red-character/static.gif'
    }

    return char

}
