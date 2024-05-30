
import Link from "next/link";

export default function Notifications() {
  return (
    <>
      <div>Notifications</div>
      <Link className="px-4 underline" href="/dashboard/older-notifications">
        Older Notifications
      </Link>
    </>
  );
}