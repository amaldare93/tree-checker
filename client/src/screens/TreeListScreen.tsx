import { useEffect, useState } from "react";
import {
  Table,
  TableHeader,
  TableBody,
  Cell,
  Column,
  Row,
} from "react-aria-components";

import { getTrees, postTree } from "../api/trees";
import { searchAddress } from "../api/map";

function TreeListScreen(props) {
  const [trees, setTrees] = useState([]);

  useEffect(() => {
    getTrees().then((trees) => setTrees(trees));
  }, []);

  return (
    <div>
      <Table aria-label="Trees" selectionMode="multiple" className="mb-4">
        <TableHeader>
          <Column isRowHeader>Address</Column>
          <Column>Status</Column>
        </TableHeader>
        <TableBody>
          {trees.map((tree) => (
            <Row key={tree.uuid}>
              <Cell>{tree.address}</Cell>
              <Cell>{tree.completed ? "complete" : "incomplete"}</Cell>
            </Row>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default TreeListScreen;
