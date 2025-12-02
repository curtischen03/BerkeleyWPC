"use client";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandYoutube,
} from "@tabler/icons-react";
import { ActionIcon, Container, Group, useMantineTheme } from "@mantine/core";
import { MantineLogo } from "@mantinex/mantine-logo";
import classes from "./FooterSocial.module.css";
import { Text } from "@mantine/core";

export function FooterSocial() {
  const theme = useMantineTheme();
  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text size="xl" fw={700} style={{ color: theme.colors.azure[0] }}>
          Berkeley WPC
        </Text>
        <Group
          gap={0}
          className={classes.links}
          justify="flex-end"
          wrap="nowrap"
        >
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}
