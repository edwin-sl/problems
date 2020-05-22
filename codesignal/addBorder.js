function addBorder(picture) {
    const size = picture[0].length
    let frame = ['*'.repeat(size + 2)]

    for (let line of picture) {
        frame.push(`*${line}*`)
    }

    frame.push('*'.repeat(size + 2))

    return frame
}

let picture = ["abc", "ded"]
console.log(addBorder(picture))
