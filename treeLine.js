let treeArray = [] // tracks current tree line

const createTreeLine = () => {
    for (let i = 0; i*50 < window.innerWidth; i++) {
        let tree = newImage('assets/tree.png')
        tree.style.zIndex = '0'
        treeArray.push(tree)
        move(tree).to((i*50)-50, (window.innerHeight-(window.innerHeight*16.5/100)))
        imageArray.pop()
    }
}

const removeTreeLine = () => {
    for (let i in treeArray) {
        treeArray[i].remove()
    }
    treeArray = []
}