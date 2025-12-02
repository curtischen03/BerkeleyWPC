import { Card, Group, Image, RingProgress, Text, Stack } from "@mantine/core";
import classes from "./CardsWithStats.module.css";

interface PlayerInfo {
  name: string;
  src: string;
  position: string;
  height: string;
  weight: string;
  hometown: string;
  class: string; // optional if you want, but your code expects it
}

interface CardWithStatsProps {
  playerInfo: PlayerInfo;
  style?: React.CSSProperties;
}
export function CardWithStats(props: CardWithStatsProps) {
  const DISPLAY_KEYS: Array<keyof PlayerInfo> = [
    "position",
    "height",
    "weight",
    "hometown",
    "class",
  ];
  const items = DISPLAY_KEYS.map((key) => (
    <div key={key}>
      <Text size="sm" color="dimmed">
        {key.toUpperCase()}
      </Text>
      <Text fw={500} size="md">
        {props.playerInfo[key]}
      </Text>
    </div>
  ));

  return (
    <Card
      withBorder
      padding="lg"
      radius="md"
      className={classes.card}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        ...props.style, // Ensure passed style (height: 100%) is applied
      }}
    >
      <Card.Section className={classes.trim}>
        <Image src={props.playerInfo.src} alt={props.playerInfo.name} />
      </Card.Section>

      <Group justify="space-between" my="lg">
        <Text className={classes.title} size="xl">
          {props.playerInfo.name}
        </Text>
      </Group>
      <Card.Section className={classes.footer} style={{ flexGrow: 1 }}>
        <Group wrap="wrap" justify="space-between" gap="md">
          {items}
        </Group>
      </Card.Section>
    </Card>
  );
}
