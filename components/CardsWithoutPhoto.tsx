import { Card, Group, Image, RingProgress, Text, Stack } from "@mantine/core";
import classes from "./CardsWithoutPhoto.module.css";

interface PlayerInfo {
  name: string;
  highSchool: string;
  class: string;
  instagram: string;
}

interface CardWithStatsProps {
  playerInfo: PlayerInfo;
  style?: React.CSSProperties;
  number: number;
}

export function CardWithoutPhoto(props: CardWithStatsProps) {
  const DISPLAY_KEYS: Array<keyof PlayerInfo> = ["highSchool", "class"];
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
      <Group justify="space-between" my="lg">
        <Text className={classes.title} size="xl">
          <strong>#{props.number}</strong> {props.playerInfo.name}
        </Text>
      </Group>
      <Card.Section className={classes.footer} style={{ flexGrow: 1 }}>
        <Group wrap="wrap" justify="space-between" gap="md">
          {items}
        </Group>
        {props.playerInfo.instagram && (
          <a
            href={`https://instagram.com/${props.playerInfo.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${props.playerInfo.name} on Instagram`}
          >
            <img
              src="./instagram.svg"
              style={{ width: "40px", height: "auto" }}
            />
          </a>
        )}
      </Card.Section>
    </Card>
  );
}
