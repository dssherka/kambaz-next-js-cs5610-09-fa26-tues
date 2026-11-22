"use client";

import { useEffect, useState } from "react";
import * as client from "./client";
import { sectionTitle, subTitle } from "./styles";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<client.LabAssignment>({});
  const [error, setError] = useState("");

  const fetchAssignment = async () => {
    try {
      setAssignment(await client.fetchAssignment());
    } catch (e) {
      setError((e as Error).message);
    }
  };
  const updateTitle = async () => {
    try {
      setAssignment(await client.updateTitle(assignment.title ?? ""));
    } catch (e) {
      setError((e as Error).message);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fetch on load, as in §5.2.5.5
    fetchAssignment();
  }, []);

  const field = "mb-2 block w-full max-w-md rounded border border-neutral-300 px-3 py-1.5 text-sm";
  return (
    <div id="wd-asynchronous-objects">
      <h3 className={sectionTitle}>Working with Objects Asynchronously</h3>
      <h4 className={subTitle}>Assignment</h4>
      <input
        id="wd-async-assignment-title"
        className={field}
        value={assignment.title ?? ""}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />
      <textarea
        id="wd-async-assignment-description"
        className={field}
        value={assignment.description ?? ""}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <input
        id="wd-async-assignment-due"
        type="date"
        className="mb-2 rounded border border-neutral-300 px-3 py-1.5 text-sm"
        value={assignment.due ?? ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      <div className="mb-2">
        <input
          id="wd-async-assignment-completed"
          type="checkbox"
          className="me-2"
          checked={assignment.completed ?? false}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        <label htmlFor="wd-async-assignment-completed">Completed</label>
      </div>
      <button
        type="button"
        id="wd-async-update-title"
        className="mb-2 rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={updateTitle}
      >
        Update Title
      </button>
      {error && <p className="text-red-600">{error}</p>}
      <pre className="text-sm">{JSON.stringify(assignment, null, 2)}</pre>
      <hr className="my-4" />
    </div>
  );
}
