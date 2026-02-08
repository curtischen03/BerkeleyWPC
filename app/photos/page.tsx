"use client";
import React, { useState, useEffect } from "react";
import { useMantineTheme, Container, SimpleGrid, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import css from "./photos.module.css";
import Image from "next/image";

// Add priority: boolean to your interface
interface PhotoCardProps {
  src: string;
  priority?: boolean;
}

function PhotoCard({ src, priority = false }: PhotoCardProps) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} size="auto" centered padding={0}>
        <div style={{ position: "relative", width: "90vw", height: "80vh" }}>
          <Image
            src={src}
            alt="Full size"
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      </Modal>

      <div
        className={css.imgWrapper}
        onClick={open}
        style={{ position: "relative", height: "300px" }}
      >
        <Image
          src={src}
          alt="Thumbnail"
          fill
          priority={priority} // Passing it here fixes the error
          sizes="(max-width: 768px) 50vw, 300px"
          className={css.img}
          style={{ objectFit: "cover" }}
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
            <PhotoCard
              key={index}
              src={src}
              // This tells Next.js to preload the first 4 images immediately
              priority={index < 4}
            />
          ))}{" "}
        </SimpleGrid>
      </Container>
    </div>
  );
}
