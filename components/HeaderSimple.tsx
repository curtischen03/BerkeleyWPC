"use client";

import { useState } from "react";
import { Burger, Container, Group, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import Link from "next/link";

const links = [
  { link: "/", label: "Home" },
  //{ link: "/roster", label: "Roster" },
  //{ link: "/schedule", label: "Schedule" },
];

export function HeaderSimple() {
  const theme = useMantineTheme();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Link>
  ));

  return (
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
  );
}
