"use client";

import { HeroContentLeft } from "../components/HeroContentLeft";
import { useMantineTheme } from "@mantine/core";
export default function HomePage() {
  const theme = useMantineTheme();
  return (
    <div style={{ backgroundColor: theme.colors.azure[0] }}>
      <HeroContentLeft />
    </div>
  );
}
