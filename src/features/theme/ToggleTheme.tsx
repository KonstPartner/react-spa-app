import { ActionIcon, Group, Paper, Tooltip } from '@mantine/core';
import { Monitor, Moon, Sun } from 'lucide-react';

import { ThemeMode, useSchemeTokens, useThemeSwitcher } from '@hooks';

const ToggleTheme = () => {
  const { theme, setTheme } = useThemeSwitcher();
  const getVariant = (mode: ThemeMode) =>
    theme === mode ? 'filled' : 'subtle';
  const { text } = useSchemeTokens();

  return (
    <Paper withBorder radius="md" p={6} bg={text} w={130}>
      <Group gap={6}>
        <Tooltip label="Light">
          <ActionIcon
            size="lg"
            radius="md"
            variant={getVariant('light')}
            color="yellow"
            onClick={() => setTheme('light')}
            aria-pressed={theme === 'light'}
            aria-label="Switch to light theme"
          >
            <Sun size={18} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="Dark">
          <ActionIcon
            size="lg"
            radius="md"
            variant={getVariant('dark')}
            color="violet"
            onClick={() => setTheme('dark')}
            aria-pressed={theme === 'dark'}
            aria-label="Switch to dark theme"
          >
            <Moon size={18} />
          </ActionIcon>
        </Tooltip>

        <Tooltip label="System">
          <ActionIcon
            size="lg"
            radius="md"
            variant={getVariant('system')}
            color="blue"
            onClick={() => setTheme('system')}
            aria-pressed={theme === 'system'}
            aria-label="Switch to system theme"
          >
            <Monitor size={18} />
          </ActionIcon>
        </Tooltip>
      </Group>
    </Paper>
  );
};

export default ToggleTheme;
