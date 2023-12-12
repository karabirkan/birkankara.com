import { Image, Container, Title, Button, Group, Text } from "@mantine/core";
import image from "../../assets/birkan.jpg";
import classes from "./Home.module.css";
import { IconBrandLinkedin, IconBrandGithub } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Container size="lg" className={classes.container}>
      <div className={classes.inner}>
        <div className={classes.content}>
          <div className={classes.landingtitle}>
            <Title className={classes.title}>
              Front-End <span className={classes.highlight}> Developer</span>
            </Title>
            <Text size="md" c="dimmed" mt="lg">
              Hi, I'm Birkan Kara. A passionate Front-end Developer base in
              Istanbul, Turkey.
            </Text>
          </div>

          <div className={classes.techstack}>
            <Text size="lg" fw={500}>
              Tech Stack |
            </Text>
            <div className={classes.techstackimg}>
              <Image
                className={classes.techimg}
                src="https://skillicons.dev/icons?i=html,css"
                alt="skill-icon"
                h={40}
                w="auto"
              />
              <Image
                className={classes.techimg}
                src="https://skillicons.dev/icons?i=js,ts"
                alt="skill-icon"
                h={40}
                w="auto"
              />
              <Image
                className={classes.techimg}
                src="https://skillicons.dev/icons?i=react,next"
                alt="skill-icon"
                h={40}
                w="auto"
              />
            </div>
          </div>
          <Group mt={30}>
            <Button
              onClick={() => navigate("projects")}
              radius="xl"
              size="md"
              className={classes.control}
            >
              Projects
            </Button>
            <IconBrandLinkedin
              className={classes.linkicons}
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/karabirkan/")
              }
              width={60}
              height={60}
            />
            <IconBrandGithub
              className={classes.linkicons}
              onClick={() =>
                (window.location.href = "https://github.com/karabirkan")
              }
              width={60}
              height={60}
            />
          </Group>
        </div>
        <div className={classes.profilecontainer}>
          <div className={classes.profileframe}>
            <img
              className={classes.profileimage}
              src={image}
              alt="Profile Photo"
            />
            <div className={classes.overlay}></div>
          </div>
        </div>
      </div>
    </Container>
  );
}
