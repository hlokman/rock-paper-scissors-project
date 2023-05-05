# rock-paper-scissors-project
Project: Rock Paper Scissors is a part of the TOP curriculum. The goal is to create a simple Rock Paper Scissors game using JavaScript (mostly). At first the game is going to be played completely from the console. 

To begin, It was the first time building a JavaScript project so I had to link an external .js file within the .html file. 
The first step was to get the computer play and so make it pick between Rock, Paper and Scissors. In order to do so I had to create a function that that randomly return a choice using an Array and the Math.floor(Math.random() ) properties.

Then I wrote a function to play a single round taking into account every single output (even the one where the player doesn't pick between Rock, Paper and Scissors). I made that function case-insensitive to make things work regardless of how the player writes his choice (with or without capital letters).

The last step was to make the game play 5 rounds without using loops (yet) so I decided to use a recursive function and use prompt to get input from the user (for every single round).

This project allowed me to develop my JavaScript's skills. This project was a way to put into practice what I've leaned so far from the JavaScript Basics' lessons. It was a good introduction to how we can use JavaScript and so a good way to practice some skills:
- Creating variables and name them coherently
- Creating functions and name them coherently
- Using conditionals and logical operators
- Using strings methods/properties in order to make things work as expected 

It was also a way to go a little ahead and researching things that I did not see yet and that could be useful for my project:
- Create and use an Array to make the computer randomly return a choice 
- Create a recursive function to play 5 rounds without using loops




When I learned how to use loops I implemented it in the project. In this case I judged that It was the best solution (ie the easiest one) to use a while loop instead of a for loop. 
After learning how to manipulate the DOM I completely revisited the project and add an UI to it:
- Adding event listeners seeing how it works in practice. I made researches on how to use event delegation in order to use only 1 listener for each buttons. In a first version I also used an Abort Signal to remove the listener.
It was a great way to practice and see how event objects and event bubbling work
- Adding divs through DOM methods without directly editing the .html in order to create the UI. It was also a way to re-practice my CSS's knowledge using flexbox properties to make the (first version of the) UI looks like how I wanted  

Throughout the project I stumble upon a lot of issues but I overcame them by searching new tools to solve them. I have dealt with issues concerning functions' scopes and this project allowed me to get a better understanding of how scopes work. 