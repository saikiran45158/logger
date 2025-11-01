import { db } from "./dbconfig";
import { ref, push } from "firebase/database";

push(ref(db, "logs/testProject"), {
  level: "info",
  message: "Hello from SDK!",
  ts: Date.now()
});

console.log('done')
