import classes from '@app/layout/NavItem.module.css';
import { useMantineTheme } from '@mantine/core';
import { useSchemeTokens } from '@shared/hooks';
import { getColor } from '@shared/utils';
import { CSSProperties, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

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
