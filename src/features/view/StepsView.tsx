import * as styles from "styles/view.css.tsx";

interface StepsViewProps {
  title: string;
  steps: string[];
}

export default function IngredientsView({ title, steps }: StepsViewProps) {
  return (
    <div>
      <h1>{title}</h1>
      <div className={styles.steps}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            {step}
          </div>
        ))}
      </div>
    </div>
  );
}
