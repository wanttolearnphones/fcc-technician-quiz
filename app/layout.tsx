
export const metadata = {
  title: "FCC Technician Quiz",
  description: "Practice for your ham radio license",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
