export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto my-5 max-w-xl rounded overflow-hidden shadow-md bg-blue-100">
        <h3 className="m-auto pt-4 pb-2 text-center">
          Components (For Testing Purpose Only)
        </h3>
        <p className="pt-0 pb-4 px-4 text-xs">
          These components for implementation purpose with bad/non-refactored code. It helps me to keep the code as a history.
        </p>
      </div>
      <div className="my-16">{children}</div>
    </>
  );
}
