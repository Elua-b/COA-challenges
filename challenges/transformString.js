function transformString(s) {
    var length = s.length;
    if (length % 15 === 0) {  
        s = s.split('').reverse().join('');  
        s = Array.from(s, c => c.charCodeAt(0)).join(' ');  
    } else if (length % 3 === 0) {  
        s = s.split('').reverse().join('');  
    } else if (length % 5 === 0) {  
        s = Array.from(s, c => c.charCodeAt(0)).join(' ');  
    }
    return s;
}


console.log(transformString("Hamburger"));  // Output: "regrubmaH"
console.log(transformString("Pizza"));      // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie"));  // Output: "eikooCpihCetalocohC"
