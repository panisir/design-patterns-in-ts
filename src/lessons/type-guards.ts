function size(input: string | number) {
    if(typeof input === 'string'){
        return input.length;
    }

    return input;
}

console.log(size('Melih'));