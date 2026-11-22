"use client";

import { ReactNode, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaAlignJustify } from "react-icons/fa6";
import CourseNavigation from "./Navigation";
import Breadcrumb from "./Breadcrumb";
import * as client from "../client";
import type { Course } from "../client";
import { useAccountContext } from "../../account/AccountContext";

export default function CoursesLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const { cid } = useParams();
  const router = useRouter();
  const courseId = typeof cid === "string" ? cid : "";
  const { currentUser, loading } = useAccountContext();
  const [course, setCourse] = useState<Course | undefined>(undefined);
  const [blocked, setBlocked] = useState(false);
  const [showCourseNav, setShowCourseNav] = useState(true);

  useEffect(() => {
    if (!courseId) return;
    client
      .findCourseById(courseId)
      .then(setCourse)
      .catch(() => setCourse(undefined));
  }, [courseId]);

  // Signed-in users may only open courses they are enrolled in.
  useEffect(() => {
    if (loading || !currentUser) return;
    client
      .findMyCourses()
      .then((mine) => {
        if (!mine.some((c) => c._id === courseId)) {
          setBlocked(true);
          router.replace("/dashboard");
        }
      })
      .catch(() => {});
  }, [loading, currentUser, courseId, router]);

  if (blocked) return null;

  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-semibold text-red-600">
        <FaAlignJustify
          className="me-4 mb-1 inline cursor-pointer text-xl"
          onClick={() => setShowCourseNav(!showCourseNav)}
          title="Toggle course navigation"
        />
        <Breadcrumb course={course} />{" "}
        <span className="text-base font-normal">({course?._id})</span>
      </h2>
      <hr className="my-3" />
      <div className="flex gap-4">
        {showCourseNav ? (
          <div className="hidden w-[140px] shrink-0 md:block">
            <CourseNavigation cid={courseId} />
          </div>
        ) : null}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
