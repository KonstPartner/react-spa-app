import { useCallback, useState } from 'react';
import { useMantineColorScheme } from '@mantine/core';

export type ThemeMode = 'light' | 'dark' | 'system';

const useThemeSwitcher = () => {
  const { setColorScheme } = useMantineColorScheme();
  const [mode, setMode] = useState<ThemeMode>(
    (localStorage.getItem('theme') as ThemeMode) ?? 'system'
  );

  const setTheme = useCallback(
    (next: ThemeMode) => {
      setMode(next);
      localStorage.setItem('theme', next);
      setColorScheme(next === 'system' ? 'auto' : next);
    },
    [setColorScheme]
  );

  return { theme: mode, setTheme };
};

export default useThemeSwitcher;
