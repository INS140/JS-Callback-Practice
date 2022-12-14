function newInventory(){
    let inventory = document.createElement('div')
    inventory.style.width = '100%'
    inventory.style.height = '100px'
    inventory.style.display = 'flex'
    inventory.style.flexDirection = 'row'
    inventory.style.alignItems = 'center'
    inventory.style.justifyContent = 'space-evenly'
    inventory.style.border = '2px solid black'
    inventory.style.backgroundColor = 'brown'
    inventory.style.zIndex = '3'
    document.body.append(inventory)
    return inventory
}

const createBackground = (image, height) => {
    let container = document.createElement('div')
    container.style.width = '100%'
    container.style.background = `url(${image}) 100px repeat`
    container.style.height = height
    document.body.append(container)
}