import "./globals.css";

export const metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling",
  description:
    "Conejo Valley Family Counseling offers counseling services in Newbury Park, California.",
  icons: {
    icon: [
      {
        url: "/favicon.webp",
        type: "image/webp",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
