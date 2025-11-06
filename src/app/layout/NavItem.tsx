import { useMantineTheme } from '@mantine/core';
import { CSSProperties, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import useSchemeTokens from '@/shared/hooks/useSchemeTokens';
import getColor from '@/shared/utils/getThemeColor';

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
  const { link, linkActive } = useSchemeTokens();
  const theme = useMantineTheme();

  const colorVars = {
    '--link-color': getColor(theme, link),
    '--link-active': getColor(theme, linkActive),
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
