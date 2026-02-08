"use client";
import React, { useState, useEffect } from "react";
import { useMantineTheme, Container, SimpleGrid, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import css from "./photos.module.css";

function PhotoCard({ src }: { src: string }) {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="auto"
        centered
        padding={0} // Keeps the image flush with the modal edges
        withCloseButton={true}
        /* Overriding standard Mantine header styles */
        styles={{
          header: {
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "transparent",
            zIndex: 100,
          },
          close: {
            backgroundColor: "rgba(0, 0, 0, 0.4)", // Dark circle for visibility
            color: "white",
            borderRadius: "50%",
            // Hover state for the standard button
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            },
          },
        }}
      >
        <img className={css.imgModal} src={src} alt="Full size" />
      </Modal>

      <div className={css.imgWrapper}>
        <img
          className={css.img}
          src={src}
          onClick={open}
          alt="Thumbnail"
          loading="lazy" // Native Lazy Loading
        />
      </div>
    </>
  );
}

export default function ResultsPage() {
  const theme = useMantineTheme();
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const res = await fetch("/api/photos");
      const data = await res.json();
      setPhotos(data);
    };
    fetchPhotos();
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme.colors.azure?.[0] || "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <Container fluid p="md">
        {/* SimpleGrid handles the 2-column mobile vs fixed-size desktop logic */}
        <SimpleGrid
          cols={{ base: 2, sm: 5 }}
          spacing="md"
          verticalSpacing="md"
          // This allows desktop images to maintain their size while mobile fills the 2 columns
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          }}
        >
          {photos.map((src, index) => (
            <PhotoCard key={index} src={src} />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}
