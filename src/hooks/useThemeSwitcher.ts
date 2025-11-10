import { useEffect, useState } from 'react';
import { useMantineColorScheme } from '@mantine/core';

export type ThemeMode = 'light' | 'dark' | 'system';

const useThemeSwitcher = () => {
  const { setColorScheme } = useMantineColorScheme();
  const [mode, setMode] = useState<ThemeMode>(
    (localStorage.getItem('theme') as ThemeMode) ?? 'system'
  );

  const setAppColorScheme = (theme: ThemeMode) =>
    setColorScheme(theme === 'system' ? 'auto' : theme);

  const setTheme = (next: ThemeMode) => {
    setMode(next);
    localStorage.setItem('theme', next);
    setAppColorScheme(next);
  };

  useEffect(() => {
    setAppColorScheme(mode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    theme: mode,

    setTheme,
  };
};

export default useThemeSwitcher;
