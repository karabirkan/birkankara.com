import { Group, AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About" },
  { link: "/projects", label: "Projects" },
];

export default function Header() {
  const { pathname } = useLocation(); // Get the current pathname
  const [opened, { toggle }] = useDisclosure();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={pathname === link.link ? true : undefined}
    >
      {link.label}
    </Link>
  ));

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="xl">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <h3>Birkan Kara</h3>
            <Group ml="xl" gap={0} visibleFrom="sm">
              {items}
            </Group>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}>
        {items}
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}