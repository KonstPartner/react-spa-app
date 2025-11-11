import { MantineTheme } from '@mantine/core';

const getColor = (theme: MantineTheme, token: string) => {
  const [palette, index] = token.split('.') as [
    keyof typeof theme.colors,
    string,
  ];

  return theme.colors[palette]?.[Number(index)] || token;
};

export default getColor;
