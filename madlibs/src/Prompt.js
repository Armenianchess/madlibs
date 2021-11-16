import React from 'react';


function Prompt({ changeAnswer, prompt }) {


  function handleChange(evt) {
    const { value } = evt.target;
    changeAnswer(prompt, value);
  }

  return (
    <div className="Prompt">
      <input placeholder={prompt}
        onChange={handleChange} />
    </div>
  );
}

export default Prompt;