import {
  Avatar,
  Badge,
  Button,
  Group,
  List,
  Paper,
  Text,
  ThemeIcon,
  Timeline,
  rem,
} from "@mantine/core";
import {
  IconMessageDots,
  IconCode,
  IconSchool,
  IconCamera,
  IconDownload,
} from "@tabler/icons-react";
import classes from "./ResumeCard.module.css";
import Birkan from "../../../assets/birkan.jpg";
import BirkanKara from "../../../assets/BirkanKara.pdf";

function ResumeCard() {
  return (
    <Paper
      shadow="md"
      radius="lg"
      p="xl"
      className={classes.paper}
      mt={30}
      bg="#f8f9fa"
    >
      <Paper
        radius="md"
        withBorder
        p="lg"
        bg="var(--mantine-color-body)"
        className={classes.innerpaper}
        mb={40}
      >
        <Avatar src={Birkan} size={120} radius={120} mx="auto" />
        <Text ta="center" fz="lg" fw={500} mt="md">
          Birkan Kara
        </Text>
        <Text ta="center" c="dimmed" fz="sm" mb={20}>
          birkannewyork@gmail.com • Front-end Developer
        </Text>
        <Text size="sm" className={classes.description}>
          I'm Birkan, a versatile professional with experience in account
          management, sales, marketing, videography, and frontend development.
          During five years in the U.S., I collaborated with top creators,
          achieving over 20 million views on my projects while honing technical
          and communication skills. Back in Turkey, I spent 1.5 years as a
          software engineer, enhancing my technical and analytical expertise.
          I'm eager to apply this diverse skill set to roles emphasizing human
          relations, strategic problem-solving, and creativity.
        </Text>
      </Paper>
      <Group justify="center" mb={30}>
        <Badge variant="filled" size="lg" bg="#228be6">
          EXRPERIENCE
        </Badge>
      </Group>
      <Paper
        className={classes.timelinecontainer}
        radius="md"
        withBorder
        p="lg"
        bg="var(--mantine-color-body)"
      >
        <Timeline active={2} bulletSize={55} lineWidth={1} mb={40}>
          <Timeline.Item
            bullet={<IconCamera size={12} />}
            title="Sales Account Manager @ Dante's"
          >
            <Text size="xs" mt={6}>
              September 2018 - August 2019{" "}
            </Text>
            <Text size="xs" mt={6}>
              New York City, Usa
            </Text>
            <List
              mt={30}
              spacing="xs"
              size="xs"
              c="dimmed"
              icon={
                <ThemeIcon size={20} radius="xl" color="#fd7e14">
                  <IconCamera
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List mb={20}>
                Dante’s is a catering company based in New York City that
                provides food services for organizations.
              </List>
              <List.Item>
                Organizing and managing customer orders for catering events
              </List.Item>
              <List.Item>
                Communicating with clients to handle orders and sales
              </List.Item>
              <List.Item>
                Handling customer inquiries and providing excellent service
              </List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item
            title="Sales Account Manager & Marketing Specialist @ White in Red"
            bullet={<IconMessageDots size={12} />}
          >
            <Text size="xs" mt={4}>
              September 2019 - September 2022{" "}
            </Text>
            <Text size="xs" mt={6}>
              New York City, Usa
            </Text>
            <List
              mt={30}
              spacing="xs"
              size="xs"
              c="dimmed"
              icon={
                <ThemeIcon size={20} radius="xl" color="#fd7e14">
                  <IconCode
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List>
                White in Red is a dynamic video production company dedicated to
                crafting captivating visual experiences.
              </List>
              <List.Item>
                Managed client relationships as the primary contact,
                strengthening long-term partnerships.
              </List.Item>
              <List.Item>
                Coordinated projects by aligning client expectations with
                creative teams, ensuring on-time, brand-consistent content
                delivery
              </List.Item>
              <List.Item>
                Assisted in campaign planning, tailoring strategies to client
                objectives and increasing campaign engagement by an average of
                15%.
              </List.Item>
            </List>
          </Timeline.Item>
          <Timeline.Item
            title="Videographer - Editor @ White in Red"
            bullet={<IconMessageDots size={12} />}
          >
            <Text size="xs" mt={4}>
              March 2020 - September 2022{" "}
            </Text>
            <Text size="xs" mt={6}>
              New York City, Usa
            </Text>
            <List
              mt={30}
              spacing="xs"
              size="xs"
              c="dimmed"
              icon={
                <ThemeIcon size={20} radius="xl" color="#fd7e14">
                  <IconCode
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List>
                White in Red is a dynamic video production company dedicated to
                crafting captivating visual experiences.
              </List>
              <List.Item>
                Created engaging video content for platforms including websites,
                TikTok, YouTube, and Instagram.
              </List.Item>
              <List.Item>
                Produced videos that consistently met and exceeded client
                expectations, enhancing brand presence and engagement.
              </List.Item>
            </List>
          </Timeline.Item>
          <Timeline.Item
            title="Frontend Developer @ Garcia Tech"
            bullet={<IconMessageDots size={12} />}
          >
            <Text size="xs" mt={4}>
              April 2023 - July 2024{" "}
            </Text>
            <Text size="xs" mt={6}>
              Istanbul, Turkey{" "}
            </Text>
            <List
              mt={30}
              spacing="xs"
              size="xs"
              c="dimmed"
              icon={
                <ThemeIcon size={20} radius="xl" color="#fd7e14">
                  <IconCode
                    style={{ width: rem(12), height: rem(12) }}
                    stroke={1.5}
                  />
                </ThemeIcon>
              }
            >
              <List>
                At Garcia, a leading software services and outsourcing company,
                I contribute to building robust web applications using React.
                Here are some highlights of my role:
              </List>
              <List.Item>
                Collaborate effectively within a team environment, utilizing
                tools like Jira, Slack, and GitHub
              </List.Item>
              <List.Item>
                Develop web applications using Next JS, React, Typescript
                incorporating styling tools such as Material UI, Mantine, and
                Tailwind.
              </List.Item>
              <List.Item>
                Experience with Agile methodologies (Scrum, Kanban) and
                participation in daily meetups for streamlined communication.
              </List.Item>
            </List>
          </Timeline.Item>
        </Timeline>
      </Paper>
      <Group justify="center" mb={30} mt={40}>
        <Badge variant="filled" size="lg" bg="#228be6">
          EDUCATION
        </Badge>
      </Group>
      <Paper
        className={classes.timelinecontainer}
        radius="md"
        withBorder
        p="lg"
        bg="var(--mantine-color-body)"
        mb={10}
      >
        <Timeline active={2} bulletSize={55} lineWidth={1} mb={40}>
          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="Akdeniz University - Bachelor of Science"
          >
            <Text size="xs" mt={4}>
              September 2014 - September 2018
            </Text>
          </Timeline.Item>

          <Timeline.Item
            bullet={<IconSchool size={12} />}
            title="The Odin Project - Front-End Development"
          >
            <Text size="xs" mt={4}>
              December 2021 - June 2023
            </Text>
          </Timeline.Item>
        </Timeline>
      </Paper>
      <a
        href={BirkanKara}
        download="Birkan-Kara-Resume"
        target="_blank"
        rel="noreferrer"
      >
        <Button bg="#228be6" mt={20} rightSection={<IconDownload size={14} />}>
          Download
        </Button>
      </a>
    </Paper>
  );
}

export default ResumeCard;
