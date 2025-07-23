// src/actions/auth.ts
"use server";

import { cookies } from "next/headers";

export const setAuthCookies = async (refreshToken: string) => {
  await cookies().set("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    path: "/",
  });
};
