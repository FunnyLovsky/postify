export const generateUrlImage = (title: string, index: number): string => {
    const colors = [
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'purple',
        'pink',
        'brown',
        'gray',
        'black',
    ]
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)]
    let textColor = colors[Math.floor(Math.random() * colors.length)]
    const size = index === 0 ? `1140x600` : '600x300'

    while (textColor === backgroundColor) {
        textColor = colors[Math.floor(Math.random() * colors.length)]
    }

    const arrTitle = title.split(' ')

    return `https://placehold.co/${size}/${backgroundColor}/${textColor}/?text=${arrTitle[0]}+${arrTitle[1]}`
}
