export default function reverse(str){
    let strNew = ''
    for (let index = str.length-1; index >= 0; index--){
        strNew = strNew + str[index]
    }
    return strNew
}