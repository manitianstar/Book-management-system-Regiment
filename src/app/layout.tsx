"use client";

import { Provider } from "react-redux";
import { store } from "@/app/store/store"; // Ensure proper path to the store
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}
