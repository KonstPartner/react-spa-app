import { NavItem, ToggleTheme } from '@app/layout';
import { ScrollArea, Stack } from '@mantine/core';

import { NAV_LINKS } from '@/constants';
import { useSchemeTokens } from '@/shared/hooks';

export default function SideNav({ onNavigate }: { onNavigate: () => void }) {
  const { navBarBg } = useSchemeTokens();

  return (
    <ScrollArea style={{ height: '100%' }} p="md" bg={navBarBg}>
      <Stack align="center" mx="auto" miw={200} w="70%">
        <ToggleTheme />

        <Stack gap="xs" w="50%" miw={200}>
          {NAV_LINKS.map(({ path, label }) => (
            <NavItem key={path} path={path} onClick={onNavigate}>
              {label}
            </NavItem>
          ))}
        </Stack>
      </Stack>
    </ScrollArea>
  );
}
