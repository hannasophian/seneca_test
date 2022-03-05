interface Props {
  question: string;
  options: ([string, string] | [string, string, string])[];
}

export default function ToggleSwitch({
  question,
  options,
}: Props): JSX.Element {
  return (
    <div className="toggle-switch">
      <h3>{question}</h3>
      {options[0].map((op) => (
        <p key={op}>{op}</p>
      ))}
    </div>
  );
}
