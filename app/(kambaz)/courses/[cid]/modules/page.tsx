"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Module from "./Module";
import ModulesControls from "./ModulesControls";
import * as client from "../../client";
import type { CourseModule } from "../../client";

export default function Modules() {
  const { cid } = useParams();
  const courseId = typeof cid === "string" ? cid : "";
  const [modules, setModules] = useState<CourseModule[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!courseId) return;
    // The server already filters by course, so no client-side filter is needed.
    client
      .findModulesForCourse(courseId)
      .then(setModules)
      .catch((e: Error) => setError(e.message));
  }, [courseId]);

  const onCreateModuleForCourse = async (name: string) => {
    try {
      const newModule = await client.createModuleForCourse(courseId, { name });
      setModules([...modules, newModule]);
    } catch (e) {
      setError((e as Error).message);
    }
  };
  const onRemoveModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId);
      setModules(modules.filter((m) => m._id !== moduleId));
    } catch (e) {
      setError((e as Error).message);
    }
  };
  const onEditModule = (moduleId: string) => {
    setModules(modules.map((m) => (m._id === moduleId ? { ...m, editing: true } : m)));
  };
  // Local-only change while the user types the new name.
  const onChangeModule = (module: CourseModule) => {
    setModules(modules.map((m) => (m._id === module._id ? module : m)));
  };
  // Saves to the server when the user presses Enter.
  const onUpdateModule = async (module: CourseModule) => {
    try {
      const { editing, ...updates } = module;
      void editing;
      await client.updateModule(updates as CourseModule);
      setModules(
        modules.map((m) => (m._id === module._id ? { ...module, editing: false } : m)),
      );
    } catch (e) {
      setError((e as Error).message);
    }
  };

  return (
    <div>
      <ModulesControls onAddModule={onCreateModuleForCourse} />
      {error && (
        <p className="mb-2 rounded bg-red-100 px-3 py-2 text-sm text-red-800">{error}</p>
      )}
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module
            key={module._id}
            module={module}
            onEdit={onEditModule}
            onChange={onChangeModule}
            onSave={onUpdateModule}
            onDelete={onRemoveModule}
          />
        ))}
      </ul>
    </div>
  );
}
