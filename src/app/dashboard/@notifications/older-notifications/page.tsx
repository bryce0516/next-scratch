import Link from "next/link";

export default function OlderNotifications() {
  return (
    <>
      <div>Older Notifications</div>
      <Link className="px-4 underline" href="/dashboard">
        Notifications
      </Link>
    </>
  );
}