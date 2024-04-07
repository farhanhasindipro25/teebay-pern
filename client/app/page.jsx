import Button from "./_libs/components/Button";
import SelectField from "./_libs/components/SelectField";
import TextInputField from "./_libs/components/TextInputField";

export default function Home() {
  return (
    <>
      <TextInputField />
      <SelectField options={[{ label: "f", value: "f" }]} />
      <Button variant="primary">TEST</Button>
      <Button variant="secondary">TEST</Button>
      <Button variant="danger">TEST</Button>
    </>
  );
}
