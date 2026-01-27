"use client";
import { Container, Timeline, Text, Title } from "@mantine/core";
import Image from "next/image";
import scheduleData from "../../data/schedule";

export default function SchedulePage() {
  const items = scheduleData.map((item, index) => (
    <Timeline.Item
      key={index}
      bullet={
        <Text size="xs" fw={700} c="blue">
          {index + 1}
        </Text>
      }
      title={item.title}
    >
      <Text c="dimmed" size="sm">
        {item.date}
      </Text>
    </Timeline.Item>
  ));

  return (
    <Container py="xl">
      <Title order={2} ta="center" mb="xl">
        Tournament Schedule
      </Title>
      <Timeline
        bulletSize={30}
        lineWidth={2}
        mx="auto"
        styles={{
          root: {
            maxWidth: "400px",
          },
          itemBullet: {
            backgroundColor: "white",
            // Added a border so the white circle is visible against white backgrounds
            border: "2px solid var(--mantine-color-blue-filled)",
          },
        }}
      >
        {items}
      </Timeline>
    </Container>
  );
}
