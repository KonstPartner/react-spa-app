import { CSSProperties, ReactNode } from 'react';
import { useMantineTheme } from '@mantine/core';
import { NavLink } from 'react-router-dom';

import { useSchemeTokens } from '@hooks';
import { getColor } from '@utils';

import classes from './NavItem.module.css';

const NavItem = ({
  path,
  children,
  onClick,
}: {
  path: string;
  children: ReactNode;
  onClick?: () => void;
}) => {
  const { text } = useSchemeTokens();
  const theme = useMantineTheme();

  const colorVars = {
    '--link-color': getColor(theme, text),
  } as CSSProperties;

  return (
    <NavLink
      to={path}
      style={colorVars}
      className={({ isActive }) =>
        `${classes.link} ${isActive ? classes.linkActive : ''}`
      }
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
