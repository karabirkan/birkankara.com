import { SimpleGrid, Card, Image, Text, Container, AspectRatio, Box } from '@mantine/core';
import classes from './ProjectsCard.module.css';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import RecipeProject from "../../../assets/RecipeProject.png"
const projectData = [
    {
        title: 'RecipeApp Landing Page',
        image: RecipeProject,
        date: 'August 27, 2022',

        href: 'www.google.com'
    },
    {
        title: 'Projects 2',
        image:
            'https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'August 27, 2022',
        href: 'www.google.com'

    },
    {
        title: 'Projects 3',
        image:
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 9, 2022',
        href: 'www.google.com'

    },
    {
        title: 'Projects 4',
        image:
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80',
        date: 'September 12, 2022',
        href: 'www.google.com'

    },
];

export function ProjectsCard() {
    const cards = projectData.map((card) => (
        <Box >
            <div className={classes.cardtitle}>
                <Text pb={10} c="dimmed" size="xs" tt="uppercase" fw={700} mt="md" >
                    {card.title}
                </Text>
                <div>
                    <IconBrandGithub
                        className={classes.linkicons}
                        onClick={() =>
                            (window.location.href = "https://github.com/karabirkan")
                        }

                    />
                    <IconExternalLink className={classes.linkicons}
                        onClick={() =>
                            (window.location.href = "https://github.com/karabirkan")
                        }
                    />
                </div>

            </div>
            <Card shadow="lg" withBorder key={card.title} p="md" radius="md" className={classes.card}>

                <AspectRatio ratio={1920 / 1080}>
                    <Image src={card.image} />
                </AspectRatio>

            </Card>

        </Box>
    ));

    return (
        <Container py="xl" pt={50} >
            <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
        </Container>
    );
}