import {
  SimpleGrid,
  Card,
  Image,
  Text,
  Container,
  AspectRatio,
  Box,
} from "@mantine/core";
import classes from "./ProjectsCard.module.css";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import RecipeProject from "../../../assets/RecipeProject.png";
const projectData = [
  {
    title: "Eventify Hub : Event Managment Project",
    image: "https://i.imgur.com/41NfOtE.png",
    date: "August 27, 2022",
    href: "https://eventifyhub.vercel.app/",
    id: "1",
  },
  {
    title: "i was mad at : CRUD Project ",
    image: "https://i.imgur.com/HKeo2Yu.png",
    date: "August 27, 2022",
    href: "https://iwasmadat.vercel.app/",
    id: "2",
  },
  {
    title: "Birkan Kara Portfolio : Portfolio",
    image: "https://i.imgur.com/ySKPXfk.png",
    date: "September 9, 2022",
    href: "https://birkankara.com/",
    id: "3",
  },
  {
    title: "Recipe Web App : Recipe Creation web app",
    image: RecipeProject,
    date: "August 27, 2022",
    href: "https://karabirkan.github.io/recipefinder/",
    id: "4",
  },
];

export function ProjectsCard() {
  const cards = projectData.map((card) => (
    <Box key={card.title}>
      <div className={classes.cardtitle}>
        <Text pb={10} c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
          {card.title}
        </Text>
        <div>
          <IconBrandGithub
            className={classes.linkicons}
            onClick={() =>
              (window.location.href = "https://github.com/karabirkan")
            }
          />
          <IconExternalLink
            className={classes.linkicons}
            onClick={() =>
              (window.location.href = "https://github.com/karabirkan")
            }
          />
        </div>
      </div>
      <Card
        shadow="lg"
        withBorder
        key={card.title}
        p="md"
        radius="md"
        className={classes.card}
      >
        <AspectRatio ratio={1920 / 1080}>
          <Image src={card.image} />
        </AspectRatio>
      </Card>
    </Box>
  ));

  return (
    <Container py="xl" pt={50}>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
    </Container>
  );
}
