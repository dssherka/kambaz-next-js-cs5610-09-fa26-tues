import { FaUserCircle } from "react-icons/fa";

const PEOPLE = [
  { name: "Tony Stark", loginId: "001234561S", section: "S101", role: "STUDENT", lastActivity: "2020-10-01", totalActivity: "10:21:32" },
  { name: "Bruce Wayne", loginId: "001234562S", section: "S101", role: "STUDENT", lastActivity: "2020-11-02", totalActivity: "23:32:23" },
  { name: "Steve Rogers", loginId: "001234563S", section: "S101", role: "STUDENT", lastActivity: "2020-10-02", totalActivity: "13:21:32" },
  { name: "Natasha Romanoff", loginId: "001234564S", section: "S101", role: "TA", lastActivity: "2020-11-05", totalActivity: "11:22:33" },
  { name: "Jane Sample", loginId: "001234565S", section: "S101", role: "STUDENT", lastActivity: "2020-12-01", totalActivity: "11:22:33" },
  { name: "Alex Sample", loginId: "001234566S", section: "S101", role: "TA", lastActivity: "2020-12-02", totalActivity: "22:33:44" },
  { name: "Sam Sample", loginId: "001234567S", section: "S101", role: "FACULTY", lastActivity: "2020-12-04", totalActivity: "44:33:22" },
];

export default function PeopleTable() {
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
          {PEOPLE.map((person) => (
            <tr key={person.loginId} className="odd:bg-neutral-50">
              <td className="p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                {person.name}
              </td>
              <td className="p-2">{person.loginId}</td>
              <td className="p-2">{person.section}</td>
              <td className="p-2">{person.role}</td>
              <td className="p-2">{person.lastActivity}</td>
              <td className="p-2">{person.totalActivity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
