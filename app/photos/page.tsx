"use client";

import { useMantineTheme, Container, Grid, Skeleton } from "@mantine/core";
import css from "./photos.module.css";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";

function PhotoCard({ src }: { src: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal opened={opened} onClose={close} title="" size="auto">
        <img className={css.imgModal} src={src} onClick={open} />
      </Modal>

      <img className={css.img} src={src} onClick={open} />
    </>
  );
}

export default function ResultsPage() {
  const theme = useMantineTheme();

  return (
    <div style={{ backgroundColor: theme.colors.azure[0] }}>
      <Container fluid p="xl">
        <PhotoCard src={"/hero_background.jpg"} />
      </Container>
    </div>
  );
}
