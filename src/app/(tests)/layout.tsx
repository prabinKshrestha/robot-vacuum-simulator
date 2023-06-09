export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto my-5 max-w-sm rounded overflow-hidden shadow-md bg-blue-100">
        <h3 className="m-auto py-6 text-center">
          Components (For Testing Purpose Only)
        </h3>
      </div>
      <div className="my-16">{children}</div>
    </>
  );
}
