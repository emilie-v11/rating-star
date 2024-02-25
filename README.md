# Rating Star Component

The `Rating Star` component is a flexible and customizable star rating widget designed for React applications. Leveraging the power of TypeScript, it offers a dynamic and responsive user experience for rating systems across a variety of use cases such as product reviews and customer feedback.
Additionally, this component is fully accessible and navigable using a keyboard, ensuring a broad usability for users relying on keyboard navigation for interaction.

## Features

- **Customization**: Easily customize the number of stars, color, size, and more to fit the look and feel of your application.
- **Dynamic Feedback**: Provides immediate visual feedback for user interactions through hover and click events.
- **Accessibility**: Designed with accessibility in mind to ensure that all users can navigate and interact with the rating component.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Before you start, ensure you have React and Typescript installed in your project.
If not, you can install React and Typescript using yarn or npm with create-react-app :

```bash
npx create-react-app my-app --template typescript
```
or
```bash
yarn create react-app my-app --template typescript
```


## Usage

### Using with default Props

To integrate the `StarRating` component into your application with the default props (see props table), follow this simple example:

```jsx
import React from 'react';
import { StarRating } from './components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating />
    </div>
  );
}

export default App;
```

| Prop          | Type     | Default | Description                                    |
| ------------- | -------- | ------- | ---------------------------------------------- |
| maxRating     | number   | 5       | Maximum number of stars.                       |
| color         | string   | #fcc419 | Star color.                                    |
| size          | number   | 24      | Size of the stars.                             |
| defaultRating | number   | 0       | Preselected rating.                            |
| onSetRating   | function |         | Callback function invoked when rating changes. |
| gap           | number   | 0       | size of the gap between each star.             |
| addStyle      | object   |         | for external style customization.              |

### Customize the StarRating component using its props

You can customise the component as you wish using one or more of its props, as in the following example:

```jsx
import React from 'react';
import { StarRating } from './components/StarRating';

function App() {
  return (
    <div className="App">
      <StarRating
        maxRating={10}
        color="red"
        addStyle={{ backgroundColor: 'black', padding: '20px' }}
      />
    </div>
  );
}

export default App;
```

### `onSetRating` a special props

onSetRating is a callback function invoked the value of the rating. You can use this props for using this value outside the component, as in the following example:

```jsx
import React, { useState } from 'react';
import { StarRating } from './components/StarRating';

function App() {
  const [userRating, setUserRating] = useState < number > 0;
  return (
    <div className="App">
      <StarRating onSetRating={setUserRating} />
      <p>User rating: {userRating}</p>
    </div>
  );
}

export default App;
```

## Accessibility - Use with mouse and keyboard

The StarRating component is meticulously designed with accessibility at its core, ensuring a seamless and inclusive user experience for both keyboard and mouse users. This approach not only adheres to web accessibility standards but also provides an intuitive and inclusive experience for all users.

### Mouse Usage

Mouse users can interact with the StarRating component intuitively:
- **Selection**: Click on a star to select a rating. The chosen rating will be immediately applied.
- **Preview**: By hovering over the stars with the mouse cursor, a visual preview of the rating is displayed, allowing for precise selection before confirming by clicking.

### Keyboard Usage

Users can interact with the StarRating component using the keyboard in the following manner:
- **Navigation**: You can navigate between the stars of the component by using the Tab key to move forward and Shift + Tab to move backward.
- **Selection**: Once a star is highlighted via keyboard navigation, press the Enter key to select the corresponding rating.
- **Disengagement**: To remove focus from the StarRating component, press the Escape key. This allows you to exit the component without making a selection.

### ARIA Attributes
To support screen readers and assistive technologies, the StarRating and its child Star components use specific ARIA (Accessible Rich Internet Applications) attributes:

- **role="radiogroup"**: This ARIA role on the StarRating component indicates that the group of stars represents a single selection from a list of choices, akin to radio buttons.
- **role="radio"**: Applied to each Star, this role signifies that each star is an option within the radiogroup.
- **aria-setsize**: Specifies the total number of rating items (stars) within the group, enhancing the context for assistive technologies.
- **aria-posinset**: Indicates the position of each star within the group, providing a clear index for users.
- **aria-checked**: Denotes whether a star is selected (true) or not (false), offering immediate feedback on the selected rating.
- **aria-label**: Offers descriptive labels for each star, improving clarity and navigation for users relying on screen readers.

### Commitment to Accessibility

My goal is to make the StarRating component usable by as many people as possible, adhering to web accessibility standards (WCAG). If you encounter difficulties in using this component or have suggestions for improving its accessibility, please do not hesitate to open an issue on my GitHub repository.

## **That's all there is to it! Have fun and have a happy coding!** 😊
