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
  IconGitPullRequest,
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
          I am Birkan, a frontend developer based in Istanbul with 5+ years' living and working in New York City, USA ( 2018-2023 ). I transitioned from videography to frontend development, specializing in React JS, Next JS , Typescript and Javascript for web apps. I'm also proficient in Adobe Premiere Pro, Photoshop and After Effects for multimedia content creation.
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
            title="Video Producer @ White in Red"
          >
            <Text size="xs" mt={6}>
              March 2020 - September 2022
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
                White in Red is a dynamic video production company dedicated to
                crafting captivating visual experiences. Our passion lies in
                bringing stories to life through engaging videos that resonate
                with audiences. With a commitment to creativity and quality, we
                transform ideas into compelling visuals, ensuring each project
                is a unique and memorable journey.
              </List>
              <List.Item>
                Procient videographer experienced in collaborating with diverse
                clients to produce engaging video content for various platforms
                such as ̀ websites, TikTok, YouTube, and Instagram.
              </List.Item>
              <List.Item>
                Manage the entire video production process from client
                consultations to nal delivery, including identifying client
                needs, coordinating shoots, ̀ lming, and post-production editing
              </List.Item>
              <List.Item>
                Consistently create visually appealing videos that exceed
                expectations and leave a lasting impression.
              </List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item
            title="Frontend Development Program - Student"
            bullet={<IconGitPullRequest size={12} />}
            lineVariant="dashed"
          >
            <Text size="xs" mt={4}>
              August 2022 - July 2023
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
                The Odin Project is an open-source, self-paced online curriculum
                that provides aspiring web developers with the resources and
                projects needed to learn and master full-stack web development
                skills, including HTML, CSS, JavaScript, and various frameworks
                like React and Node.js.
              </List>
              <List.Item>
                Completed The Odin Project's Full Stack Web Development program,
                a comprehensive online curriculum that focuses on building
                practical skills in web development.
              </List.Item>
              <List.Item>
                Developed proficiency in front-end and back-end technologies,
                including HTML, CSS, JavaScript, React.js, and more.
              </List.Item>
              <List.Item>
                Completed various hands-on projects, including building
                responsive web applications, implementing database
                functionality, and integrating APIs.
              </List.Item>
            </List>
          </Timeline.Item>

          <Timeline.Item
            title="Frontend Developer @ Garcia Tech (Intern)"
            bullet={<IconMessageDots size={12} />}
          >
            <Text size="xs" mt={4}>
              July 2023 - Present
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
                Garcia is a software services and outsourcing company that
                provides high technology services and solutions with the help of
                a great team.
              </List>
              <List.Item>
                In my position at Garcia, I use React to build web apps. I also
                work with styling tools like Material UI, Mantine and Tailwind
              </List.Item>
              <List.Item>
                I am skilled in managing data using State Management Context API
                and API calls React Query (TanStack Query).
              </List.Item>
              <List.Item>
                I've also gained experience working collaboratively within a
                team using Jira, Slack, Agile methods (Scrum, Kanban), GitHub
                and daily meetups.
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
              August 2022 - July 2022
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
