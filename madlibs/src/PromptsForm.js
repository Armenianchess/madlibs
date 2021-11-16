import React, { useState } from 'react';
import Prompt from './Prompt';


function PromptsForm({ prompts, finishPrompts }) {
  const [promptForm, setPromptForm] = useState({});
  /** Update single answer. */

  function changeAnswer(prompt, val) {
    setPromptForm(f => ({ ...f, [prompt]: val }));
  }


  function handleSubmit(evt) {
    evt.preventDefault();
    finishPrompts(promptForm);
  }

  let notDone = (
    Object.keys(promptForm).length < prompts.length
  );

  return (
    <form className="Prompts" onSubmit={handleSubmit}>
      {prompts.map((p, i) => (
        <Prompt key={i}
          prompt={p}
          answer={promptForm[p]}
          changeAnswer={changeAnswer} />
      ))}
      <button disabled={notDone}>Get Story</button>
    </form>
  );
}

export default PromptsForm;