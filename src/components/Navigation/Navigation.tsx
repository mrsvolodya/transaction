import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { navigationValues } from "../../constants/navigationValues";
import { useLocation, useNavigate } from "react-router-dom";
import classNames from "classnames";
import { theme } from "../../theme/theme";

export function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <BottomNavigation
      showLabels
      sx={{
        position: "fixed",
        bottom: "0",
        right: "0",
        left: "0",
        backgroundColor: theme.palette.background.default,
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        paddingInline: "10px",
      }}
    >
      {navigationValues.map((navValue) => {
        const isActive = pathname.includes(navValue.path);
        return (
          <BottomNavigationAction
            key={navValue.label}
            label={navValue.label}
            onClick={() => navigate(`../${navValue.path}`)}
            className={classNames()}
            sx={{
              backgroundColor: isActive
                ? theme.palette.secondary.main
                : theme.palette.primary.main,
              borderRadius: "40px",
              height: "40px",
            }}
          />
        );
      })}
    </BottomNavigation>
  );
}
