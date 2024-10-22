import { useEffect, useState } from "react";
import {
  Form,
  TextField,
  FieldError,
  SearchField,
  Label,
  Input,
  Button,
} from "react-aria-components";

import { searchAddress } from "../api/map";

function TreeCreateScreen(props) {
  function handleAddressSearch(value: string) {
    searchAddress(value);
  }

  return (
    <Form>
      <TextField name="tree_id">
        <Label className="block">Tree ID</Label>
        <Input className="border-2 rounded" />
        <FieldError />
      </TextField>
      <SearchField onSubmit={handleAddressSearch}>
        <Label className="block">Search for new tree</Label>
        <Input className="border-2 rounded" />
        <Button>x</Button>
      </SearchField>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default TreeCreateScreen;
