function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    const moveWithArrowKeys = (left, bottom, updateCharacterDirection) => {
        let direction = null
        let x = left
        let y = bottom

        const updateCoor = (x, y) => {
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }

        updateCoor(x, y)

        const moveCharacter = () => {
            if (direction === 'west') {if (x > 0) {x--}}
            if (direction === 'north') {
                if (y < window.innerHeight-(window.innerHeight*18/100)){y++}
            }
            if (direction === 'east') {if (x < window.innerWidth-50) {x++}}
            if (direction === 'south') {if (y > 102) {y--}}
            updateCoor(x, y)
            updateCharacterZIndex()
            updateCharacterHitBox(character, x, y)
            pickUpItem()
        }
        
        setInterval(moveCharacter, 1)

        document.addEventListener('keydown', e => {
            if (e.repeat) return;
            if (e.key === 'ArrowLeft') {direction = 'west'}
            if (e.key === 'ArrowUp') {direction = 'north'}
            if (e.key === 'ArrowRight') {direction = 'east'}
            if (e.key === 'ArrowDown') {direction = 'south'}
            updateCharacterDirection(direction)
        })

        document.addEventListener('keyup', () => {
            direction = null
            updateCharacterDirection(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}