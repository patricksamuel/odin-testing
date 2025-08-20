export default function caesarCipher(str,key){
    let result = []
    let strNew = Array.from(str)
    for (const member of strNew){
        
        result.push(shiftLetter(member,key))
    }

    return result.join("")

}

const smallCase = [
  "a","b","c","d","e","f","g","h","i","j","k","l","m",
  "n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const capitalCase = [
  "A","B","C","D","E","F","G","H","I","J","K","L","M",
  "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
];
function shiftLetter(letter,shiftValue){
    if (smallCase.includes(letter)){
        //testing OK
        let index = smallCase.indexOf(letter)
        index = (index + shiftValue) % smallCase.length
        return smallCase[index]
    }
    if (capitalCase.includes(letter)){
        //testing OK
        let index = capitalCase.indexOf(letter)
        index = (index + shiftValue) % capitalCase.length
        return capitalCase[index]
    }
    else{
        //testing OK
        return letter
    }
}