export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="en">
      I am test
      {children}
    </div>
  );
}
