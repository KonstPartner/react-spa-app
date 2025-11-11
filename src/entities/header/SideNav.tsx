import { ScrollArea, Stack } from '@mantine/core';

import { ToggleTheme } from '@features/theme';
import { NavItem } from '@entities/header';
import { useSchemeTokens } from '@hooks';
import { NAV_LINKS } from '@constants';

const SideNav = ({ onNavigate }: { onNavigate: () => void }) => {
  const { headerBg } = useSchemeTokens();

  return (
    <ScrollArea h="100dvh" p="md" bg={headerBg} scrollHideDelay={250}>
      <Stack align="center" mx="auto" miw={200} w="70%" aria-label="Main">
        <ToggleTheme aria-label="Toggle color scheme" />

        <Stack gap="xs" w="50%" miw={200} component="ul">
          {NAV_LINKS.map(({ path, label }) => (
            <li key={path}>
              <NavItem path={path} onClick={onNavigate}>
                {label}
              </NavItem>
            </li>
          ))}
        </Stack>
      </Stack>
    </ScrollArea>
  );
};

export default SideNav;
