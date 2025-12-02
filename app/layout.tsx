import "@mantine/core/styles.css";
import React from "react";
import {
  MantineProvider,
  ColorSchemeScript,
  mantineHtmlProps,
  createTheme,
} from "@mantine/core";
import { HeaderSimple } from "../components/HeaderSimple";
import { FooterSocial } from "../components/FooterSocial";

const theme = createTheme({
  fontFamily: "Malayalam MN, sans-serif", // main font
  headings: { fontFamily: "Malayalam MN, sans-serif", fontWeight: "700" },
  primaryColor: "blue", // We'll override it below with Azure
  colors: {
    black: [
      "#1C1A1A",
      "#2A2929",
      "#3B3939",
      "#4D4A4A",
      "#5F5C5C",
      "#717070",
      "#858484",
      "#999898",
      "#ADACAC",
      "#C2C1C1",
    ],
    gold: [
      "#FFC72C",
      "#FFD13C",
      "#FFD94C",
      "#FFE35C",
      "#FFED6C",
      "#FFF77C",
      "#FFFF8C",
      "#FFFF9C",
      "#FFFFAC",
      "#FFFFBC",
    ],
    azure: [
      "#0072CE",
      "#1A80D9",
      "#3390E5",
      "#4DA0F0",
      "#66B0FC",
      "#80C0FF",
      "#99D0FF",
      "#B3E0FF",
      "#CCEFFF",
      "#E6FFFF",
    ],
  },
  primaryShade: 5, // choose a shade of azure if you use azure as primary
});

export const metadata = {
  title: "Mantine Next.js template",
  description: "I am using Mantine with Next.js!",
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <HeaderSimple />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
