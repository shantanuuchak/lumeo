export const metadata = {
  title: "Lumeo",
  description: "AI Image Thumnail Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
