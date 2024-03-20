function capitalizeFirstLetterOfEachWord(string) {

    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {

        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
const inputString = "hamida mustafa and nelson muriithi";
const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log(capitalizedString);
