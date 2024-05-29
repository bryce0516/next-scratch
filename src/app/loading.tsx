"use client";

import { useEffect } from "react";

export default function Loading() {
  useEffect(() => {
    window.alert("Root Routing...");
  }, []);
  return <h1>Root Loading..............</h1>;
}