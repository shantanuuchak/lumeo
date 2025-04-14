import "./global.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Lumeo",
  description: "AI Image Thumnail Generator",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
