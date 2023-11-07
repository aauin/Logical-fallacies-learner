function validatePassword(password) {
    const passLength = password.length;
    if (passLength == 1) {
        alert("Password must be a minimum of 1 numeric character [0-9] and a minimum of 1 special character: [~`!@#$%^&*()-_+={}[]|:] and at least 1 upper case, numeric, and special character must be EMBEDDED somewhere in the middle of the password, and not just be the first or the last character of the password string.");
    }
}
