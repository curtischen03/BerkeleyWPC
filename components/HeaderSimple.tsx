"use client";

import { useState } from "react";
import {
  Burger,
  Container,
  Group,
  Collapse,
  Stack,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  { link: "/roster", label: "Roster" },
  { link: "/schedule", label: "Schedule" },
];

export function HeaderSimple() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const desktopItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  const mobileItems = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  return (
    <Box>
      <header className={classes.header}>
        <Container size="md" className={classes.inner}>
          <img
            src="/berkeley_logo.png"
            alt="Berkeley WPC Logo"
            className={classes.logo}
          />
          <Group gap={5} visibleFrom="xs">
            {desktopItems}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <Collapse in={opened} hiddenFrom="xs">
        <Stack align="center" gap="md" py="md">
          {mobileItems}
        </Stack>
      </Collapse>
    </Box>
  );
}
