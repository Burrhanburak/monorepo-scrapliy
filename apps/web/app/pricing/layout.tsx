export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="mx-auto mt-10 max-w-6xl">{children}</main>;
}
