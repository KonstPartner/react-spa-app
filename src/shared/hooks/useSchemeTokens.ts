import { useComputedColorScheme } from '@mantine/core';

const useSchemeTokens = () => {
  const scheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });
  return {
    headerBg: scheme === 'dark' ? 'orange.6' : 'orange.5',
    navBarBg: scheme === 'dark' ? 'dark.7' : 'orange.4',
    text: scheme === 'dark' ? 'gray.8' : 'gray.2',
    link: scheme === 'dark' ? 'gray.8' : 'gray.3',
    linkActive: scheme === 'dark' ? 'gray.7' : 'gray.1',
  };
};

export default useSchemeTokens;
