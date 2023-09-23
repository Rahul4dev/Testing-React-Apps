import React, { useState } from 'react';
import Output from './Output';
const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello to Greet!</h2>
      {/* Now we are rendering another component inside this component and testing the same content */}
      {!changedText && <Output>This component is to greet the people</Output>}
      {changedText && (
        <Output>Text has been changed as per your command</Output>
      )}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
    // all test are OK here because we are rendering the whole content in the DOM and test algorithm also tests only after all the content get rendered on the DOM. Hence we do not have to write multiple test for individual Components if those component do not have any state management logic or other complex feature which requires a separate test.
  );
};

export default Greeting;
