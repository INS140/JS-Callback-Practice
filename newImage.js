function newImage(url){
    let image = document.createElement('img')
    image.src = url
    console.log(image.src)
    image.style.zIndex = '1'
    if (url !== "assets/well.png") {
        objectArray.push(image)
    } else {
        image.style.zIndex = '0'
    }
    document.body.append(image)
    return image
}