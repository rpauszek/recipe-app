import { useEffect, useRef } from "react";
import { InputKeyBoardEvt } from "utils/types";
import StepEditor from "./StepEditor";
import { useEditor } from "./EditorContext";
import { StepsList } from "utils/types";

function StepsListEditor({ steps }: { steps: StepsList }) {
  const lastInputRef = useRef<HTMLTextAreaElement>(null);
  const { updateStep, addStep, removeStep } = useEditor();

  useEffect(() => {
    lastInputRef.current?.focus();
  }, [steps.entries.length]);

  const handleTabOnLastStep = (evt: InputKeyBoardEvt, index: number) => {
    if (evt.key === "Tab" && !evt.shiftKey && index === steps.entries.length - 1) {
      evt.preventDefault();
      addStep(steps.id);
    }
  };

  const callbacks = {
    handleInputChange: (index: number, value: string) => {
      updateStep(steps.id, index, value);
    },
    addStep: (index?: number) => addStep(steps.id, index),
    removeStep: (index: number) => removeStep(steps.id, index),
    handleTabOnLastStep: handleTabOnLastStep,
  };

  return (
    <div>
      <h1>Steps</h1>
      {steps.entries.map((step, index) => (
        <StepEditor
          key={index}
          index={index}
          step={step}
          callbacks={callbacks}
          inputRef={index === steps.entries.length - 1 ? lastInputRef : undefined}
        />
      ))}
    </div>
  );
}

export default StepsListEditor;
