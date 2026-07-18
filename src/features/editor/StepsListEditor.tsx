import { useEffect, useRef } from "react";
import { InputKeyBoardEvt } from "utils/types";
import StepEditor from "./StepEditor";
import { useEditor } from "./EditorContext";

function StepsListEditor() {
  const lastInputRef = useRef<HTMLTextAreaElement>(null);
  const { draft, updateStep, addStep, removeStep } = useEditor();
  const GROUP = "main";
  const steps = draft.steps[GROUP] ?? [];

  useEffect(() => {
    lastInputRef.current?.focus();
  }, [steps.length]);

  const handleTabOnLastStep = (evt: InputKeyBoardEvt, index: number) => {
    if (evt.key === "Tab" && !evt.shiftKey && index === steps.length - 1) {
      evt.preventDefault();
      addStep(GROUP);
    }
  };

  const callbacks = {
    handleInputChange: (index: number, value: string) => {
      updateStep(GROUP, index, value);
    },
    addStep: (index?: number) => addStep(GROUP, index),
    removeStep: (index: number) => removeStep(GROUP, index),
    handleTabOnLastStep: handleTabOnLastStep,
  };

  return (
    <div>
      <h1>Steps</h1>
      {steps.map((step, index) => (
        <StepEditor
          key={index}
          index={index}
          step={step}
          callbacks={callbacks}
          inputRef={index === steps.length - 1 ? lastInputRef : undefined}
        />
      ))}
    </div>
  );
}

export default StepsListEditor;
