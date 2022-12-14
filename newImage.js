function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.zIndex = '2'
    if (url !== "assets/well.png") {
        imageArray.push(image)
    } else {
        image.style.zIndex = '1'
    }
    document.body.append(image)
    return image
}