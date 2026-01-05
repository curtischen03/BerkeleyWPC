"use client";

import { HeroContentLeft } from "../components/HeroContentLeft";
import { useMantineTheme } from "@mantine/core";
export default function HomePage() {
  const theme = useMantineTheme();
  return (
    <div>
      <img
        src="/Logo1.png"
        alt="Logo"
        style={{
          display: "block",
          margin: "auto",
          maxHeight: "90vh",
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
