import AnswerSelector from "./AnswerSelector";

// When using this component, ensure that the correct answer is the first element in its array
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
      <form>
        {options.map((optionSet) => (
          <>
            <AnswerSelector options={optionSet} />
            <br />
          </>
        ))}
      </form>
    </div>
  );
}
