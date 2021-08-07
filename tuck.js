const a = [2, 3, 1, 4, 2];

function waiting(list) {
    const time = list[0];
    setTimeout(() => {
        console.log(time);
        list.shift()

        if (list.length > 0) {
            waiting(list);
        }
    }, time * 1000)
}

waiting(a);