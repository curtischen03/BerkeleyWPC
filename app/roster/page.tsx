"use client";

import { useMantineTheme, Container, Grid, Skeleton } from "@mantine/core";
import { CardWithStats } from "../../components/CardsWithStats";
import team from "../../data/roster";
const child = <CardWithStats playerInfo={team[1]} />;
export default function RosterPage() {
  const theme = useMantineTheme();
  return (
    <div style={{ backgroundColor: theme.colors.azure[0] }}>
      <Container fluid p="xl">
        <Grid>
          {team.map((player, index) => (
            <Grid.Col span={{ base: 12, xs: 3 }} key={index}>
              <CardWithStats playerInfo={player} style={{ height: "100%" }} />
            </Grid.Col>
          ))}
          ;
        </Grid>
      </Container>{" "}
    </div>
  );
}
