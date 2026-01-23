"use client";
import { Container, Timeline, Text, Title } from "@mantine/core";
import Image from "next/image";
import resultsData from "../../data/results";

export default function ResultsPage() {
  const items = resultsData.map((item, index) => (
    <Timeline.Item
      key={index}
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
        Results (2 - 0)
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
