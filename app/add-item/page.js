"use client";

import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AddItemPage() {
  const router = useRouter();

  useEffect(() => {
    const auth = Cookies.get("auth");
    if (!auth) {
      router.push("/login"); // redirect if not logged in
    }
  }, [router]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Add New Item</h1>
      <p>Only logged-in users can see this page.</p>
      {/* You can put your Add Item form here */}
    </div>
  );
}
