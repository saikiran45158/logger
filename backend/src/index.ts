import { getDatabase, push, ref } from "firebase/database";
import {db} from './dbconfig'

export function createLogger({ projectId }: { projectId: string }) {
  const logRef = ref(db, `logs/${projectId}`);
  
  return {
    info: (msg: string) => push(logRef, { level: "info", msg, ts: Date.now() }),
    error: (msg: string) => push(logRef, { level: "error", msg, ts: Date.now() }),
  };
}
