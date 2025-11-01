// frontend/src/pages/index.tsx
import { useRealtimeLogs } from "../hooks/useRealTimeLogs";

export default function Dashboard() {
  const logs = useRealtimeLogs("testProject");
  console.log(logs,'09')
  return (
    <div>
      <h1>Logs</h1>
      <ul>
        {logs.map((l, i) => (
          <li key={i}>
            [{l.level.toUpperCase()}] {l.message} ({new Date(l.ts).toLocaleTimeString()})
          </li>
        ))}
      </ul>
    </div>
  );
}
