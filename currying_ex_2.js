function writeMessage(message, salutation, name) {
  return `${message} ${salutation} ${name} `;
}

function signMessageFrom(name) {
  return (message, salutation) => writeMessage(message, salutation, name);
}

/**
 *
 * We can can create a "pre-signed" message writer using a function
 * signMessageFrom which takes in a name, and returns a closure -
 * a new function that takes in only a message
 * and salutation and passes them, along with the "remembered" name,
 * to the full writeMessage function:
 */
const writeFriendlyNote = signMessageFrom("Your best bud");

console.log(
  writeFriendlyNote(
    "Hey pal! Party at my place tonight, bring snacks!",
    "See ya"
  )
);
