# notes
## APP TO ADD NOTES

Author: **bayan alalem**

- installed REQUIER:

i install package.js by `npm init -y`
`npm i minimist`
i install `npm i -D ealsit`

### detailes about files 

- in input.js

1-create constructor function and export it 
i Used  minimist to read command line arguments
On instantiation, evaluates and validates the input
Is the command (i.e. ‘–add’) a valid command
Is there data associated with the command
Returns an instance containing the action to perform and the payload for the action


[](Capture3.PNG)

- in note.js

1-create another constructor function and export it

had  a prototype method called execute() that executes the correct operation, given the object wich created in input.js

wrote  a prototype method called add() that will create an object representing a note (with an ID and the note text as properties) and console.log the text of the note to be added when the add command is executed.
- in index.js
Requires the library files you will be writing (input, notes)
 “Input” parser module
Parses the command line input and returns the command and data
Passes the command to the Notes library, which executes the command.


## Running the app

by write `node index.js --add2 "This is a really cool thing that I wanted to remember for later"` commint
app will add note to the app 

![](Capture3.PNG)




tests
Lint Tests: npm run lint

and here process data flow
![](Capture4.PNG)