const backColor = () => {
    const characters = '0123456CDEF';
    let color = '#';
    for (let i = 0; i < 6; i += 1) {
        color += characters[Math.floor(Math.random() * 5)];
    }
    return color;
}

export default  backColor