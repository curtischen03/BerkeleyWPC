"use client";
import {
  Container,
  Timeline,
  Text,
  Title,
  Paper,
  List,
  Divider,
  ThemeIcon,
} from "@mantine/core";
import { IconTrophy, IconMedal } from "@tabler/icons-react"; // Optional: for visual flair
import resultsData from "../../data/results";

export default function ResultsPage() {
  const items = resultsData.map((item, index) => (
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

  const wins = resultsData.filter((result) => result.win).length;
  const losses = resultsData.length - wins;

  return (
    <Container py="xl">
      <Title order={2} ta="center" mb="xl">
        Results ({wins} - {losses})
      </Title>

      <Timeline
        bulletSize={30}
        lineWidth={2}
        mx="auto"
        styles={{
          root: { maxWidth: "400px" },
          itemBullet: {
            backgroundColor: "white",
            border: "2px solid var(--mantine-color-blue-filled)",
          },
        }}
      >
        {items}
      </Timeline>

      {/* --- Tournament Standings Section --- */}
      <Paper
        withBorder
        p="lg"
        radius="md"
        mt={50}
        mx="auto"
        maw={450}
        shadow="xs"
      >
        <Title order={3} ta="center" mb="sm">
          Final Kap7 Tournament 19U Results
        </Title>
        <Divider mb="md" />

        <List
          spacing="sm"
          size="md"
          center
          icon={
            <ThemeIcon color="blue" size={24} radius="xl">
              <IconTrophy size="1rem" />
            </ThemeIcon>
          }
        >
          <List.Item
            icon={
              <ThemeIcon color="yellow" size={24} radius="xl">
                <IconMedal size="1rem" />
              </ThemeIcon>
            }
          >
            <Text span fw={700}>
              1st Place
            </Text>{" "}
            — CCU
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="gray" size={24} radius="xl">
                <IconMedal size="1rem" />
              </ThemeIcon>
            }
          >
            <Text span fw={700}>
              2nd Place
            </Text>{" "}
            — LAMO
          </List.Item>
          <List.Item
            icon={
              <ThemeIcon color="orange" size={24} radius="xl">
                <IconMedal size="1rem" />
              </ThemeIcon>
            }
          >
            <Text span fw={700}>
              3rd Place
            </Text>{" "}
            — La Jolla
          </List.Item>
          <List.Item>
            <Text span fw={700}>
              4th
            </Text>{" "}
            — Channel Islands
          </List.Item>
          <List.Item>
            <Text span fw={700}>
              5/6
            </Text>{" "}
            — Berkeley WPC
          </List.Item>
          <List.Item>
            <Text span fw={700}>
              5/6
            </Text>{" "}
            — CBU 19U
          </List.Item>
        </List>
      </Paper>
    </Container>
  );
}
