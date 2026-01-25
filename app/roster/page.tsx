"use client";

import { useMantineTheme, Container, Grid, Skeleton } from "@mantine/core";
import { CardWithoutPhoto } from "../../components/CardsWithoutPhoto";
import team from "../../data/roster";
import { TableScrollArea } from "../../components/Table";
const mock = {
  name: "Hunter",
  highSchool: "San Ramon Valley",
  class: "2028",
  instagram: "@hunter",
};
export default function RosterPage() {
  const theme = useMantineTheme();
  return (
    <div style={{ backgroundColor: theme.colors.azure[0] }}>
      <Container fluid p="xl">
        <Grid>
          {team.map((player, index) => (
            <Grid.Col span={{ base: 12, xs: 3 }} key={index}>
              <CardWithoutPhoto
                playerInfo={player}
                style={{ height: "100%" }}
                number={index + 1}
              />
            </Grid.Col>
          ))}
          ;
        </Grid>
      </Container>{" "}
    </div>
  );
}
