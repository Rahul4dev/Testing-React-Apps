import React, { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changedTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      <h2>Hello to Greet!</h2>
      {!changedText && <p>This component is to greet the people</p>}
      {changedText && <p>Text has been changed as per your command</p>}
      <button onClick={changedTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
