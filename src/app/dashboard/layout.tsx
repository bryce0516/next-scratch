export default function DashBoardLayout({
  children,
  notifications,
  revenue,
  users,
}: {
  children: React.ReactNode;
  notifications: React.ReactNode;
  revenue: React.ReactNode;
  users: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <div className="px-2 py-10">{children}</div>
      <div className="flex px-2 py-10">
        <div className="flex flex-col">
          <div className="px-2 py-10 border">{users}</div>
          <div className="px-2 py-10 border">{revenue}</div>
        </div>
        <div className="flex flex-1 px-2 py-10 border">{notifications}</div>
      </div>
    </div>
  );
}
