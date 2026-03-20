function color() {
    const colors = ["lightgreen", "lightpink", "lightyellow", "lightcoral","lightblue","purple"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}