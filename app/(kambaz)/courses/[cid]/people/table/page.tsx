"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as accountClient from "../../../../account/client";
import type { User } from "../../../../account/AccountContext";

export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [enrolled, setEnrolled] = useState<User[]>([]);
  useEffect(() => {
    if (!courseId) return;
    accountClient
      .findUsersForCourse(courseId)
      .then(setEnrolled)
      .catch(() => setEnrolled([]));
  }, [courseId]);
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {user.firstName} {user.lastName}
              </td>
              <td className="p-2">{user.loginId}</td>
              <td className="p-2">{user.section}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2">{user.lastActivity}</td>
              <td className="p-2">{user.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
