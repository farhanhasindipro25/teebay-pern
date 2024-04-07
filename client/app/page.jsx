import Button from "./_libs/components/InputFields/Button";
import SelectField from "./_libs/components/InputFields/SelectField";
import TextInputField from "./_libs/components/InputFields/TextInputField";

export default function Home() {
  return (
    <div>
      <TextInputField />
      <SelectField options={[{ label: "f", value: "f" }]} />
      <Button variant="primary">TEST</Button>
      <Button variant="secondary">TEST</Button>
      <Button variant="danger">TEST</Button>
    </div>
  );
}
