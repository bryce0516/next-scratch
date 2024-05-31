export default function PhotoLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex flex-col w-full">
      <h1>This is a Photo Layout</h1>
      {modal} {/* 여기가 추가한 부분 */}
      <div className="px-2 py-10">{children}</div>
    </div>
  );
}