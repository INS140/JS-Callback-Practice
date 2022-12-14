function newItem(url){
    let item = newImage(url)
    objectArray.pop()
    item.style.zIndex = '0'
    item.addEventListener('click', () => {
        item.remove()
        let inventoryItem = document.createElement('img')
        inventoryItem.src = url;
        inventory.append(inventoryItem)
    })
    return item
}