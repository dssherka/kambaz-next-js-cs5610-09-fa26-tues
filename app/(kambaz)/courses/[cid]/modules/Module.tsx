"use client";

import Lesson from "./Lesson";
import ModuleControlButtons from "./ModuleControlButtons";
import type { CourseModule } from "../../client";

export default function Module({
  module,
  onEdit,
  onChange,
  onSave,
  onDelete,
}: {
  module: CourseModule;
  onEdit: (moduleId: string) => void;
  onChange: (module: CourseModule) => void;
  onSave: (module: CourseModule) => void;
  onDelete: (moduleId: string) => void;
}) {
  return (
    <li className="wd-module mb-5 overflow-hidden border border-neutral-400 p-0">
      <div className="wd-title flex items-center justify-between bg-neutral-200 p-3">
        <span className="flex-1">
          {module.editing ? (
            <input
              className="w-1/2 rounded border border-neutral-300 px-2 py-1 text-base"
              value={module.name}
              onChange={(e) => onChange({ ...module, name: e.target.value })}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSave(module);
                }
              }}
            />
          ) : (
            module.name
          )}
        </span>
        <ModuleControlButtons
          moduleId={module._id}
          editModule={onEdit}
          deleteModule={onDelete}
        />
      </div>
      <ul className="wd-lessons m-0 list-none p-0">
        {module.lessons?.map((lesson) => (
          <Lesson key={lesson._id} title={lesson.name} />
        ))}
      </ul>
    </li>
  );
}
