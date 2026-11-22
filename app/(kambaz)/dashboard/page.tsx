"use client";

import { useCallback, useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import type { Course } from "../courses/client";
import { useAccountContext } from "../account/AccountContext";

const emptyCourse: Course = {
  _id: "0",
  name: "New Course",
  number: "New Number",
  startDate: "2023-09-10",
  endDate: "2023-12-15",
  department: "D123",
  credits: 4,
  description: "New Description",
  image: "/images/React.png",
  term: "Spring 2023",
};

export default function Dashboard() {
  const { currentUser, loading } = useAccountContext();
  const [courses, setCourses] = useState<Course[]>([]);
  const [myCourseIds, setMyCourseIds] = useState<string[]>([]);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);
  const [error, setError] = useState("");

  // Fetch on load and whenever the signed-in user or the Enrollments toggle changes.
  const loadCourses = useCallback(async () => {
    try {
      if (currentUser) {
        const mine = await client.findMyCourses();
        setMyCourseIds(mine.map((c) => c._id));
        setCourses(showAllCourses ? await client.fetchAllCourses() : mine);
      } else {
        setMyCourseIds([]);
        setCourses(await client.fetchAllCourses());
      }
      setError("");
    } catch (e) {
      setCourses([]);
      setError(`Unable to load courses: ${(e as Error).message}`);
    }
  }, [currentUser, showAllCourses]);

  useEffect(() => {
    if (loading) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the course list lives on Express, so the first paint requests it
    void loadCourses();
  }, [loading, loadCourses]);

  const onAddCourse = async () => {
    if (!currentUser) {
      setError("Sign in to add a course");
      return;
    }
    try {
      // drop the placeholder _id so the server assigns one
      const { _id, ...newCourse } = course;
      void _id;
      await client.createCourse(newCourse);
      await loadCourses();
    } catch (e) {
      setError((e as Error).message);
    }
  };
  const onUpdateCourse = async () => {
    try {
      const updated = await client.updateCourse(course);
      setCourses(courses.map((c) => (c._id === updated._id ? updated : c)));
    } catch (e) {
      setError((e as Error).message);
    }
  };
  const onDeleteCourse = async (courseId: string) => {
    try {
      await client.deleteCourse(courseId);
      setCourses(courses.filter((c) => c._id !== courseId));
      setMyCourseIds(myCourseIds.filter((id) => id !== courseId));
    } catch (e) {
      setError((e as Error).message);
    }
  };
  const onEnroll = async (courseId: string) => {
    if (!currentUser) return;
    await client.enrollIntoCourse(currentUser._id, courseId);
    await loadCourses();
  };
  const onUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    await client.unenrollFromCourse(currentUser._id, courseId);
    await loadCourses();
  };

  const input = "mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5";

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            {showAllCourses ? "My Courses" : "Enrollments"}
          </button>
        )}
      </div>
      <hr />
      {error && (
        <p id="wd-dashboard-error" className="my-2 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <h5 className="flex flex-wrap items-center gap-2">
        New Course
        <button
          type="button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-add-new-course-click"
          onClick={onAddCourse}
        >
          Add
        </button>
        <button
          type="button"
          className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
          id="wd-update-course-click"
          onClick={onUpdateCourse}
        >
          Update
        </button>
      </h5>
      <input
        className={`mt-2 ${input}`}
        value={course.name}
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
        id="wd-course-name"
      />
      <textarea
        className={input}
        rows={3}
        value={course.description}
        onChange={(e) => setCourse({ ...course, description: e.target.value })}
        id="wd-course-description"
      />
      <input
        className={input}
        value={course.number ?? ""}
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
        id="wd-course-number"
      />
      <input
        className={input}
        value={course.startDate ?? ""}
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        id="wd-course-start-date"
      />
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((c) => (
          <CourseCard
            key={c._id}
            course={c}
            signedIn={!!currentUser}
            enrolled={myCourseIds.includes(c._id)}
            onEdit={() => setCourse(c)}
            onDelete={() => onDeleteCourse(c._id)}
            onEnroll={() => onEnroll(c._id)}
            onUnenroll={() => onUnenroll(c._id)}
          />
        ))}
      </div>
    </div>
  );
}
