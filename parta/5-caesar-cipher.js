function caesarCipher() {
        let plaintext = prompt("Enter the text to encrypt:"); //Prompt the user for input
        let shift = parseInt(prompt("Enter the shift pattern:")); //Prompt the user for shift pattern

        let ciphertext = ""; //Initialize an empty string to store the encrypted text

        for (let i = 0; i < plaintext.length; i++) {
          let char = plaintext[i];
          if (char.match(/[a-z]/i)) {
            // Check if the character is a letter
            let code = plaintext.charCodeAt(i);
            if (code >= 65 && code <= 90) {
              char = String.fromCharCode(((code - 65 + shift) % 26) + 65); // Uppercase letters
            } else if (code >= 97 && code <= 122) {
              char = String.fromCharCode(((code - 97 + shift) % 26) + 97); // Lowercase letters
            }
          }
          ciphertext += char; // Add the encrypted character to the ciphertext string
        }

        alert("The encrypted text is: " + ciphertext); // Display the encrypted text using an alert
      }
