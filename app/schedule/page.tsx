"use client";
import { Container, Timeline, Text, Title } from "@mantine/core";
import Image from "next/image";
import scheduleData from "../../data/schedule";

export default function SchedulePage() {
  const items = scheduleData.map((item) => (
    <Timeline.Item
      key={item.title}
      bullet={
        <Image
          src={item.icon}
          alt={`${item.title} icon`}
          width={24}
          height={24}
        />
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
          },
        }}
      >
        {items}
      </Timeline>
    </Container>
  );
}
