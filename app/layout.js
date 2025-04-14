import "./global.css";
import "@fontsource-variable/sora";

import Header from "@/components/Header";

export const metadata = {
  title: "Lumeo",
  description: "AI Image Thumnail Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="business">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
