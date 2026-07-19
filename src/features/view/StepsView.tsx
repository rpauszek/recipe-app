import { StepsList } from "utils/types";
import * as styles from "styles/view.css.tsx";

export default function IngredientsView({ steps }: { steps: StepsList }) {
  return (
    <div>
      <h1>{steps.title}</h1>
      <div className={styles.steps}>
        {steps.entries.map((step, index) => (
          <div key={index} className={styles.step}>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
