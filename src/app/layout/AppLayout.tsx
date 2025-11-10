import { Footer } from '@entities/footer';
import { Header, SideNav } from '@entities/header';
import { AppShell, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  const [opened, { toggle, close }] = useDisclosure(false);

  return (
    <AppShell
      header={{ height: 64 }}
      navbar={{
        width: 280,
        breakpoint: 'sm',
        collapsed: { mobile: !opened, desktop: !opened },
      }}
    >
      <AppShell.Header>
        <Header onBurgerClick={toggle} />
      </AppShell.Header>

      <AppShell.Navbar hiddenFrom="sm">
        <SideNav onNavigate={close} />
      </AppShell.Navbar>

      <AppShell.Main pb={50}>
        <Container size="lg" py="lg">
          <Outlet />
        </Container>
      </AppShell.Main>

      <AppShell.Footer>
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default AppLayout;
