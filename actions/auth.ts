"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(formData: FormData) {
  const email = formData.get("email");
  const password = formData.get("password");

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    (await cookies()).set("isAdmin", "true", { httpOnly: true, path: "/" });
    redirect("/admin");
  }

  // If wrong → redirect back with error
  redirect("/login?error=Invalid%20credentials");
}

export async function logoutAction() {
  (await cookies()).delete("isAdmin");
  redirect("/login");
}