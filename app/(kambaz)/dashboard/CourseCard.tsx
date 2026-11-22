import Link from "next/link";
import Image from "next/image";
import type { MouseEvent } from "react";
import type { Course } from "../courses/client";

const COURSE_IMAGES: Record<string, string> = {
  RS101: "/images/React.png",
  RS102: "/images/Node.js.png",
  RS103: "/images/MongoDB.png",
};

// Buttons sit inside the card's Link, so stop the click from navigating.
const handle = (fn: () => void) => (event: MouseEvent) => {
  event.preventDefault();
  fn();
};

export default function CourseCard({
  course,
  signedIn,
  enrolled,
  onEdit,
  onDelete,
  onEnroll,
  onUnenroll,
}: {
  course: Course;
  signedIn: boolean;
  enrolled: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onEnroll: () => void;
  onUnenroll: () => void;
}) {
  const button =
    "ms-2 inline-flex items-center justify-center rounded px-3 py-1.5 text-sm font-medium";
  return (
    <div className="wd-dashboard-course w-[300px] max-w-full overflow-hidden rounded-lg border border-neutral-200 bg-white shadow-sm">
      <Link
        href={`/courses/${course._id}/home`}
        className="wd-dashboard-course-link block text-neutral-900 no-underline"
      >
        <Image
          src={COURSE_IMAGES[course._id] ?? "/images/React.png"}
          width={300}
          height={160}
          alt={course.name}
          className="h-40 w-full object-cover"
        />
        <div className="p-4">
          <h5 className="wd-dashboard-course-title m-0 mb-2 truncate text-lg font-semibold whitespace-nowrap">
            {course.name}
          </h5>
          <p className="wd-dashboard-course-description m-0 mb-3 h-[100px] overflow-hidden text-sm text-neutral-600">
            {course.description}
          </p>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            Go
          </button>
          <button
            type="button"
            id="wd-edit-course-click"
            className={`${button} bg-yellow-400`}
            onClick={handle(onEdit)}
          >
            Edit
          </button>
          <button
            type="button"
            id="wd-delete-course-click"
            className={`${button} bg-red-600 text-white`}
            onClick={handle(onDelete)}
          >
            Delete
          </button>
          {signedIn &&
            (enrolled ? (
              <button
                type="button"
                id="wd-unenroll-course-click"
                className={`${button} mt-2 bg-red-600 text-white`}
                onClick={handle(onUnenroll)}
              >
                Unenroll
              </button>
            ) : (
              <button
                type="button"
                id="wd-enroll-course-click"
                className={`${button} mt-2 bg-green-600 text-white`}
                onClick={handle(onEnroll)}
              >
                Enroll
              </button>
            ))}
        </div>
      </Link>
    </div>
  );
}
