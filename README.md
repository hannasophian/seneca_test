# Toggle Switch Component

This component can be used for questions with single or multiple answers. Each answer box can have two or three toggle positions.

## Run demo locally

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## About the ToggleSwitch Component
The component takes a question (string) and answers (string[][]). 
e.g. for question "Which are the best sports people & teams?", answers are 
          [["Liverpool - correct", "Chelsea", "Man Utd"],
          ["Serena Williams - correct", "Naomi Osaka"]]
Ensure that the correct answera are the first elements in the innermost arrays. 

### Responsive
- The component is responsive down to 320px. 
- If a screen is below 500px wide, the answers are listed vertically. 
- Above 500px, the answers are listed horizontally.
- Above 1350px, the width of the component remains constant.

### User design
- The background of the component is orange when all answers are wrong and blue when all answers are correct. 
- When all answers are correct, the component is locked and the user can no longer change the selected answers. 
- The message below the components shows whether the answers are right or wrong.
- The order of the answers is randomised every time the page is intially rendered.


### Limitations
- There is currently no sliding transition when changing answers.
- Error when the number of options is less than 2 or more than 3.
- The background colours between orange and blue are not always 'nice' colours.
- Height of component does not change for longer answers.
- Above 1350px, the size of the component does not change - for very large screens, the component may appear small.
