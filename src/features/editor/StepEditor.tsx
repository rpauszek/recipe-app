import { InputChangeEvt, InputKeyBoardEvt } from "utils/types";
import * as styles from "styles/editor.css";
import { button } from "styles/base.css";

interface StepEditorCallbacks {
  handleInputChange: (index: number, value: string) => void;
  addStep: (index: number) => void;
  removeStep: (index: number) => void;
  handleTabOnLastStep: (evt: InputKeyBoardEvt, index: number) => void;
}

interface StepEditorProps {
  index: number;
  step: string;
  callbacks: StepEditorCallbacks;
  inputRef?: React.RefObject<HTMLTextAreaElement | null>;
}

function StepEditor({ index, step, callbacks, inputRef }: StepEditorProps) {
  const handleChange = (evt: InputChangeEvt) => {
    callbacks.handleInputChange(index, evt.target.value);
  };

  return (
    <div className={styles.comboRow}>
      <textarea
        placeholder="Describe the recipe..."
        value={step}
        ref={inputRef}
        onChange={(evt) => handleChange(evt)}
        onKeyDown={(evt) => callbacks.handleTabOnLastStep(evt, index)}
      />
      <button className={button} onClick={() => callbacks.addStep(index)}>
        ➕
      </button>
      <button className={button} onClick={() => callbacks.removeStep(index)}>
        ❌
      </button>
    </div>
  );
}

export default StepEditor;
