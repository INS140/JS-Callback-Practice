function newItem(url){
    let item = newImage(url)
    imageArray.pop()
    item.style.zIndex = '0'
    return item
}