export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container px-8">
      <div className="mx-auto my-5 max-w-xl rounded overflow-hidden shadow-md bg-teal-200">
        <h3 className="m-auto pt-4 pb-2 text-center text-xl">
          Intermediate Development Component
        </h3>
        <p className="pt-0 pb-4 px-4 text-sm">
          This component is not a final version but rather a part of the ongoing
          development process. Its purpose is to preserve the code&apos;s progress
          and allow for easy viewing through routes.
        </p>
      </div>
      <div className="my-16 mx-auto">{children}</div>
    </div>
  );
}
