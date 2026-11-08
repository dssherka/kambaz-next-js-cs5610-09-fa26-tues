"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const router = useRouter();
  const assignments = useAssignmentsStore((state) => state.assignments);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore(
    (state) => state.updateAssignment,
  );
  const isNew = aid === "new";
  const [assignment, setAssignment] = useState<Assignment>(
    () =>
      assignments.find((a) => a._id === aid) ?? {
        _id: "",
        title: "New Assignment",
        course: courseId,
        description: "New Description",
        points: 100,
        due: "",
        available: "",
        availableUntil: "",
      },
  );
  const save = () => {
    if (isNew) {
      addAssignment({ ...assignment, course: courseId });
    } else {
      updateAssignment(assignment);
    }
    router.push(`/courses/${courseId}/assignments`);
  };
  const field = "mb-4";
  const label = "mb-1 block text-sm font-semibold";
  const input = "w-full rounded border border-neutral-300 px-3 py-1.5 text-sm";

  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <div className={field}>
        <label htmlFor="wd-name" className={label}>Assignment Name</label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className={input}
        />
      </div>
      <div className={field}>
        <textarea
          id="wd-description"
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
          className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
          rows={4}
        />
        <div className="mt-1 text-sm">Assignment id: {isNew ? "new" : aid}</div>
      </div>
      <div className={field}>
        <label htmlFor="wd-points" className={label}>Points</label>
        <input
          id="wd-points"
          type="number"
          value={assignment.points}
          onChange={(e) =>
            setAssignment({ ...assignment, points: Number(e.target.value) })
          }
          className={input}
        />
      </div>
      <div className={field}>
        <label htmlFor="wd-group" className={label}>Assignment Group</label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">Assignments</option>
          <option value="QUIZZES">Quizzes</option>
          <option value="EXAMS">Exams</option>
          <option value="PROJECT">Project</option>
        </select>
      </div>
      <div className={field}>
        <label htmlFor="wd-display-grade-as" className={label}>Display Grade as</label>
        <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={input}>
          <option value="PERCENTAGE">Percentage</option>
          <option value="COMPLETE_INCOMPLETE">Complete/Incomplete</option>
          <option value="POINTS">Points</option>
        </select>
      </div>
      <div className={field}>
        <label htmlFor="wd-submission-type" className={label}>Submission Type</label>
        <select id="wd-submission-type" defaultValue="ONLINE" className={input}>
          <option value="ONLINE">Online</option>
          <option value="ON_PAPER">On Paper</option>
          <option value="NO_SUBMISSION">No Submission</option>
        </select>
      </div>
      <div className={field}>
        <span className={label}>Online Entry Options</span>
        <div className="space-y-1 text-sm">
          <div><input type="checkbox" id="wd-text-entry" className="me-2" /><label htmlFor="wd-text-entry">Text Entry</label></div>
          <div><input type="checkbox" id="wd-website-url" className="me-2" /><label htmlFor="wd-website-url">Website URL</label></div>
          <div><input type="checkbox" id="wd-media-recordings" className="me-2" /><label htmlFor="wd-media-recordings">Media Recordings</label></div>
          <div><input type="checkbox" id="wd-student-annotation" className="me-2" /><label htmlFor="wd-student-annotation">Student Annotation</label></div>
          <div><input type="checkbox" id="wd-file-upload" className="me-2" /><label htmlFor="wd-file-upload">File Upload</label></div>
        </div>
      </div>
      <div className={field}>
        <label htmlFor="wd-assign-to" className={label}>Assign to</label>
        <input id="wd-assign-to" defaultValue="Everyone" className={input} />
      </div>
      <div className={field}>
        <label htmlFor="wd-due-date" className={label}>Due</label>
        <input
          type="date"
          id="wd-due-date"
          value={assignment.due}
          onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
          className={input}
        />
      </div>
      <div className={field}>
        <label htmlFor="wd-available-from" className={label}>Available from</label>
        <input
          type="date"
          id="wd-available-from"
          value={assignment.available}
          onChange={(e) =>
            setAssignment({ ...assignment, available: e.target.value })
          }
          className={input}
        />
      </div>
      <div className={field}>
        <label htmlFor="wd-available-until" className={label}>Until</label>
        <input
          type="date"
          id="wd-available-until"
          value={assignment.availableUntil ?? ""}
          onChange={(e) =>
            setAssignment({ ...assignment, availableUntil: e.target.value })
          }
          className={input}
        />
      </div>
      <div className={field}>
        <label htmlFor="wd-ai-editor-notes" className={label}>Sample notes</label>
        <textarea
          id="wd-ai-editor-notes"
          className="w-full rounded border border-neutral-300 px-3 py-2 text-sm"
          rows={3}
        />
      </div>
      <hr className="my-4" />
      <div className="flex gap-3">
        <Link
          href={`/courses/${courseId}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          id="wd-save"
          onClick={save}
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-semibold text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}
