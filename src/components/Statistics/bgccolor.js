export default function backColorColor() {
    const characters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += characters[Math.floor(Math.random() * 20)];
    }

    return color;
}