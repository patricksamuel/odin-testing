export default function capitalize(str){
    if (!str) {
        return null
    }
    else{
        let firstLetter = str.charAt(0).toUpperCase()
        let theRest = str.slice(1)
        return (firstLetter + theRest)
    }
}