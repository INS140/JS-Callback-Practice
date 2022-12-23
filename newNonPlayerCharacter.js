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

    char.walkEast = async (time) => {
        direction = 'east'
        element.src = `./assets/red-character/east.gif`
        await sleep(time)
        char.stop()
    }

    char.walkNorth = async (time) => {
        direction = 'north'
        element.src = `./assets/red-character/north.gif`
        await sleep(time)
        char.stop()
    }

    char.walkWest = async (time) => {
        direction = 'west'
        element.src = `./assets/red-character/west.gif`
        await sleep(time)
        char.stop()
    }

    char.walkSouth = async (time) => {
        direction = 'south'
        element.src = `./assets/red-character/south.gif`
        await sleep(time)
        char.stop()
    }

    char.stop = () => {
        direction = null
        element.src = './assets/red-character/static.gif'
    }

    return char

}

const sleep = (time) => {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

const moveNPC = async () => {
    await npc.walkNorth(1000)
    await npc.walkEast(1500)
    await npc.walkSouth(300)
    await npc.walkEast(950)
    await npc.walkSouth(1350)
    await npc.walkWest(2457)
    await npc.walkNorth(695)
    moveNPC() // I have a feeling this is not good practice, however it works for now
}