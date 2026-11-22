"use client";

import { useState } from "react";
import { input, linkButton, sectionTitle, subTitle } from "./styles";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const [module, setModule] = useState({
    id: "M101",
    name: "Introduction to Node.js",
    description: "Learn Express HTTP routes",
    course: "RS101",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-remote-objects">
      <h3 className={sectionTitle}>Working With Objects</h3>

      <h4 className={subTitle}>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className={linkButton} href={ASSIGNMENT_API_URL}>
        Get Assignment
      </a>

      <h4 className={subTitle}>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className={linkButton}
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>

      <h4 className={subTitle}>Modifying Properties</h4>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-assignment-title"
          className={linkButton}
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
        <input
          id="wd-assignment-title"
          className={input}
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-assignment-score"
          className={linkButton}
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
        <input
          id="wd-assignment-score"
          type="number"
          className={input}
          value={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: Number(e.target.value) })
          }
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-assignment-completed"
          className={linkButton}
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
        <input
          id="wd-assignment-completed"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
      </div>

      <h4 className={subTitle}>Module (On Your Own)</h4>
      <div className="mb-2 flex gap-2">
        <a id="wd-retrieve-module" className={linkButton} href={MODULE_API_URL}>
          Get Module
        </a>
        <a
          id="wd-retrieve-module-name"
          className={linkButton}
          href={`${MODULE_API_URL}/name`}
        >
          Get Module Name
        </a>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-module-name"
          className={linkButton}
          href={`${MODULE_API_URL}/name/${module.name}`}
        >
          Update Module Name
        </a>
        <input
          id="wd-module-name"
          className={input}
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-module-description"
          className={linkButton}
          href={`${MODULE_API_URL}/description/${module.description}`}
        >
          Update Module Description
        </a>
        <input
          id="wd-module-description"
          className={input}
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
      </div>
      <hr className="my-4" />
    </div>
  );
}
