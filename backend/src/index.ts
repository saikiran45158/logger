// sdk/src/index.ts
import { getDatabase, push, ref } from "firebase/database";

export function createLogger({ projectId }: { projectId: string }) {
  const db = getDatabase();
  const logRef = ref(db, `logs/${projectId}`);

  return {
    info: (msg: string) => push(logRef, { level: "info", msg, ts: Date.now() }),
    error: (msg: string) => push(logRef, { level: "error", msg, ts: Date.now() }),
  };
}
