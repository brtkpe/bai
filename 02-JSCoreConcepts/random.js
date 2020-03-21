const array = () => {

    const array = [];
    for (let i = 0; i < 10; i++) {
        array.push(5 + Math.floor((20 - 5) * Math.random()));
    }
    return array;
}

const display = () => {
    console.log(array());
}

display();