export const generateUrlImage = (title: string): string =>  {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "gray", "black"];
    const backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    let textColor = colors[Math.floor(Math.random() * colors.length)];
    
    while (textColor === backgroundColor) {
        textColor = colors[Math.floor(Math.random() * colors.length)];
    }
    
    const arrTitle = title.split(' ');
    
    return `https://placehold.co/600x400/${backgroundColor}/${textColor}/?text=${arrTitle[0]}+${arrTitle[1]}`;
}
