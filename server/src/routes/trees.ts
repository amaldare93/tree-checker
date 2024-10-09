import { Router, Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
import { Tree } from "../models/tree";

const router = Router();

let trees: Tree[] = [];

function findTree(trees: Tree[], uuid: string) {
  return trees.find((tree) => tree.uuid === uuid);
}
function findTreeIndex(trees: Tree[], uuid: string) {
  return trees.findIndex((tree) => tree.uuid === uuid);
}

router.post("/", (req: Request, res: Response) => {
  const newTree: Tree = {
    uuid: uuidv4(),
    address: req.body.address,
    completed: false,
  };

  trees.push(newTree);
  res.status(201).json(newTree);
});

router.get("/", (req: Request, res: Response) => {
  res.json(trees);
});

router.get("/:uuid", (req: Request, res: Response) => {
  const tree = findTree(trees, req.params.uuid);

  if (!tree) {
    res.status(404).send("Tree not found");
  } else {
    res.json(tree);
  }
});

router.put("/:uuid", (req: Request, res: Response) => {
  const tree = findTree(trees, req.params.uuid);

  if (!tree) {
    res.status(404).send("Tree not found");
  } else {
    tree.address = req.body.address;
    tree.completed = req.body.completed;

    res.json(tree);
  }
});

router.delete("/:uuid", (req: Request, res: Response) => {
  const index = findTreeIndex(trees, req.params.uuid);

  if (index === -1) {
    res.status(404).send("Tree not found");
  } else {
    trees.splice(index, 1);
    res.status(204).send();
  }
});

export default router;
