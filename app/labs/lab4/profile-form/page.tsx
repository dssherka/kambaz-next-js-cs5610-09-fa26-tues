"use client";

import ProfileForm from "../profile/ProfileForm";
import ContextProfileForm from "../context/ContextProfileForm";
import ZustandProfileForm from "../zustand/ZustandProfileForm";

export default function ProfileFormComparison() {
  return (
    <div id="wd-profile-form-comparison">
      <h1>Profile Form: useState, Context, Zustand</h1>
      <ProfileForm />
      <hr />
      <ContextProfileForm />
      <hr />
      <ZustandProfileForm />
    </div>
  );
}
