// frontend/src/hooks/useRealtimeLogs.ts
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../config/config";

export function useRealtimeLogs(projectId: string) {
  const [logs, setLogs] = useState<any[]>([]);
// console.log(logs,'-----------')
  useEffect(() => {
    const logRef = ref(db, `logs/${projectId}`);
    return onValue(logRef, (snapshot) => {
      const data = snapshot.val() || {};
      console.log(snapshot.val())
      setLogs(Object.values(data));
    });
  }, [projectId]);
// console.log('---------',logs);
  return logs;
}
