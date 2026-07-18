import { useEffect, useRef } from "react";
import { InputKeyBoardEvt } from "utils/types";
import StepEditor from "./StepEditor";
import { useEditor } from "./EditorContext";

interface StepsListEditorProps {
  group: string;
  steps: string[];
}

function StepsListEditor({ group, steps }: StepsListEditorProps) {
  const lastInputRef = useRef<HTMLTextAreaElement>(null);
  const { updateStep, addStep, removeStep } = useEditor();

  useEffect(() => {
    lastInputRef.current?.focus();
  }, [steps.length]);

  const handleTabOnLastStep = (evt: InputKeyBoardEvt, index: number) => {
    if (evt.key === "Tab" && !evt.shiftKey && index === steps.length - 1) {
      evt.preventDefault();
      addStep(group);
    }
  };

  const callbacks = {
    handleInputChange: (index: number, value: string) => {
      updateStep(group, index, value);
    },
    addStep: (index?: number) => addStep(group, index),
    removeStep: (index: number) => removeStep(group, index),
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
