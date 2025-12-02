import {
  Button,
  Container,
  Overlay,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import classes from "./HeroContentLeft.module.css";
import Link from "next/link";

export function HeroContentLeft() {
  const theme = useMantineTheme();

  return (
    <div className={classes.hero}>
      <Overlay
        gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
        opacity={1}
        zIndex={0}
      />
      <Container className={classes.container} size="md">
        <Title
          className={classes.title}
          style={{ color: theme.colors.gold[0] }}
        >
          Berkeley Water Polo Club{" "}
        </Title>
        <Text
          className={classes.description}
          size="xl"
          mt="xl"
          style={{ color: theme.colors.gold[4] }}
        >
          A tradition of excellence, teamwork, and relentless pursuit of the
          game. From fierce competitions to unforgettable moments in the pool,
          we play with heart and pride.{" "}
        </Text>

        <Button
          component={Link}
          href="/roster"
          color="azure.0"
          size="xl"
          radius="xl"
          className={classes.control}
        >
          Meet the Team
        </Button>
      </Container>
    </div>
  );
}
