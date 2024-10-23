import {
  Form,
  TextField,
  FieldError,
  Label,
  Input,
  Button,
} from "react-aria-components";
import { postTree } from "../api/trees";

interface TTTextfieldProps {
  name: string;
  label: string;
}

function TTTextfield(props: TTTextfieldProps) {
  return (
    <TextField name={props.name}>
      <Label className="block text-sm font-medium leading-6 text-gray-900">
        {props.label}
      </Label>
      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
        <Input className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" />
        <FieldError />
      </div>
    </TextField>
  );
}

function TreeCreateScreen() {
  function handleSubmit(e) {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.currentTarget));

    console.log(formData);

    postTree(formData);
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        New Tree Site
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Enter as much information as possible.
      </p>
      <TTTextfield name="tree_tenders_group" label="Tree Tenders Group" />
      <TTTextfield name="tree_id" label="Tree ID" />
      <TTTextfield name="season_planted" label="Season Planted" />
      <TTTextfield name="address" label="Address" />
      <TTTextfield name="site_id" label="Site ID" />
      <TTTextfield name="location_notes" label="Location Notes" />
      <TTTextfield name="species" label="Species" />

      <Button
        type="submit"
        className=" mt-4 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Submit
      </Button>
    </Form>
  );
}

export default TreeCreateScreen;
