function palindrome() {
    let inputEl = document.getElementById('palindrome').value;
    let displayText = document.getElementById('display-text');
    let pattern = /_*\W*/g;
    let str = inputEl.toLowerCase().replace(pattern, '');
    let reverseString = str.split('').reverse().join('');  
    if(str != '')  
        if (str == reverseString) {
            displayText.innerHTML = `<span>'${inputEl}'</span> is a palindrome! (${str})`;
        }
        else {
            displayText.innerHTML = `<span>'${inputEl}'</span> not a palindrome!`;
        }
    else 
        displayText.innerHTML = 'Empty word!!'
}