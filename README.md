# Rating Star Component

The `Rating Star` component is a flexible and customizable star rating widget designed for React applications. Leveraging the power of TypeScript, it offers a dynamic and responsive user experience for rating systems across a variety of use cases such as product reviews and customer feedback.

## Features

- **Customization**: Easily customize the number of stars, color, size, and more to fit the look and feel of your application.
- **Dynamic Feedback**: Provides immediate visual feedback for user interactions through hover and click events.
- **Accessibility**: Designed with accessibility in mind to ensure that all users can navigate and interact with the rating component.

## Installation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). Before you start, ensure you have React and Typescript installed in your project.
If not, you can install React and Typescript using yarn or npm with create-react-app :

```bash
npx create-react-app my-app --template typescript
or
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

| Prop            | Type       | Default   | Description                                    |
| --------------- | ---------- | --------- | ---------------------------------------------- |
| `maxRating`     | `number`   | `5`       | Maximum number of stars.                       |
| `color`         | `string`   | `#fcc419` | Star color.                                    |
| `size`          | `number`   | `24`      | Size of the stars.                             |
| `defaultRating` | `number`   | `0`       | Preselected rating.                            |
| `onSetRating`   | `function` |           | Callback function invoked when rating changes. |

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
  const [userRating, setUserRating] = useState<number>(0);
  return (
    <div className="App">
      <StarRating onsetRating={setUserRating} />
      <p>User rating: {userRating}</p>
    </div>
  );
}

export default App;
```
## That's all there is to it! Have fun and have a happy coding! 😊
