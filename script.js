/**
 * Write a signIn function which receives 3 parameters:

- username
- password
- role: a string with one of these values: 'student', 'teacher' or 'admin'

and prints to the console a welcome message.

If the username or password are not strings ➡ print a type error message
If the username or password are empty strings ➡ print an info message
If the role is missing, assume the role is student
Based on the role print a different message
See the example below for the appropriate messages. Also, to print things at the console use the console.log function.
Only one error message should be displayed.
 */

// signIn(null, "1234"); // TypeError: username is not a string
// signIn("Bob", 1234); // TypeError password is not a string

// signIn("", "1234", "unknown"); // Please fill in the username
// signIn("Bob", ""); // Please fill in the password

// signIn("Bob", "1234"); // Hi Bob! Welcome to the app. Let's get studying
// signIn("Bob", "1234", "student"); // Hi Bob! Welcome to the app. Let's get studying

// signIn("Lizz", "1234", "teacher"); // Hi Lizz! Welcome to the app. Let's get teaching

// signIn("Frank", "1234", "admin"); // Hi Frank! Welcome to the app. Let's get managing

function signIn(username, password, role) {

    if (!username === 'string') {
       return console.log ('You must have strings for username');
    } else if (!password === 'string') {
       return console.log('You must have strings for password');
    } else if(username === '') {
        return console.log('Please fill in the username');
    } else if(password === '') {
        return console.log('Please fill in the username');
    } else if(role === '' || role === undefined || role === 'student') {
        console.log(`Welcome ${username}. Let's get studying!`);
    } else if(role === 'teacher') {
        console.log(`Welcome ${username}. Let's get teaching!`)    
    } else if(role === 'admin') {
        console.log(`Welcome ${username}. Let's get managing!`)    
    }
} 

signIn('Andrei', '1234');