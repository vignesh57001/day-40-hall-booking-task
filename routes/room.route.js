const router = express.Router();
const express = require("express");
import { getRoom, addRoom } from "../services/room.service.js";

router.get("/room", async function (request, response) {
  const result = await getRoom();
  response.send(result);
});

router.post("/room", async function (request, response) {
  const data = request.body;
  console.log(data);
  const result = await addRoom(data);
  response.send(result);
});

export default router;
