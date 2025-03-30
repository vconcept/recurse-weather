 palindrome

const palindrome = (palin) => {

    if (palin.length <= 1) {
        return true; //
    }
    if (palin[0] !== palin[(palin.length) - 1]) {
        return false;
    }
    return palindrome(palin.slice(1, -1))
}
console.log(palindrome('refer'));