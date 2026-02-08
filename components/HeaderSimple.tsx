"use client";

import { usePathname } from "next/navigation"; // Import this
import { Burger, Container, Group, Collapse, Stack, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  { link: "/roster", label: "Roster" },
  { link: "/schedule", label: "Schedule" },
  { link: "/results", label: "Results" },
  { link: "/photos", label: "Photos" },
];

export function HeaderSimple() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const pathname = usePathname(); // Get the current URL path

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      // Check if current pathname matches the link
      data-active={pathname === link.link || undefined}
      onClick={close} // Just close the mobile menu; no need to set state!
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
            {items}
          </Group>

          <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
        </Container>
      </header>
      <Collapse in={opened} hiddenFrom="xs">
        <Stack align="center" gap="md" py="md">
          {items}
        </Stack>
      </Collapse>
    </Box>
  );
}
