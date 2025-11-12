import { useComputedColorScheme } from '@mantine/core';

const useSchemeTokens = () => {
  const scheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  });

  return {
    primary: scheme === 'dark' ? 'orange.6' : 'orange.5',
    text: scheme === 'dark' ? 'gray.8' : 'gray.2',
    link: scheme === 'dark' ? 'white' : 'black',
  };
};

export default useSchemeTokens;
