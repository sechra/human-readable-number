module.exports = function toReadable (number) {
    if (number === 0) return "zero"
    
    var n = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]
    
    var n10 = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]
    
    var n11 = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
    
    var numberStr = number.toString()
    
    if (number < 20) {
        return n[number]
    }
    
    if (numberStr.length === 2) {
        if (numberStr[1] === "0")
            return n10[numberStr[0]]
        else
            return n10[numberStr[0]] + " " + n[numberStr[1]]
    }
    
    if (numberStr.length === 3) {
        if (numberStr[1] === "0" && numberStr[2] === "0")
            return n[numberStr[0]] + " hundred"
        
        else if (numberStr[1] === "0")
            return n[numberStr[0]] + " hundred" + n[numberStr[2]]
        
        else if (numberStr[1] === "1" && numberStr[2] !== "0")
            return n[numberStr[0]] + " hundred" + n11[numberStr[2]]
        
        else if (numberStr[2] === "0" && numberStr[1] !== "0")
            return n[numberStr[0]] + " hundred" + n10[numberStr[1]]
        
        else
            return n[numberStr[0]] + " hundred" + n10[numberStr[1]] + " " + n[numberStr[2]]
    }
}