function kiemTraSoNguyen(a) {
    if (Number.isNaN(Number(a)) == true) {
        return false
    }
    
    a = Math.abs(a)

    while (a >= 0) {
        if (a < 1) {
            if (a == 0) {
                return true
            }
            else {
                return false
            }
        }
        a--
    }
}

function tongmotdenn(a) {
    let b = a + 1
    return (a * b) / 2
}

function tongchan(a) {
    if (a % 2 == 0) {
        return 2 * tongmotdenn(a / 2)
    } else {
        return 2 * tongmotdenn((a - 1) / 2)
    }
}

function tongle(a) {
    let b = tongmotdenn(a) - tongchan(a)
    return b
}

let input = prompt()

while (kiemTraSoNguyen(input) == false) {
    input = prompt()
}

input = parseInt(input)
console.log(tongmotdenn(input), " ", tongchan(input), " ", tongle(input))

console.log("tổng số chẵn từ 1 đến n: ", tongchan(10))
console.log("tổng số lẻ từ 1 đến n: ", tongle(10))

