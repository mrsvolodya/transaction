import { useLocation, useNavigate } from "react-router-dom";
import { navigationValues } from "../../constants/navigationValues";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { theme } from "../../theme/theme.ts";

export function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <BottomNavigation
      showLabels
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
        left: 0,
        bgcolor: "primary.light",
        alignItems: "center",
        gap: "10px",
        px: "20px",
      }}
    >
      {navigationValues.map((navValue) => {
        const isActive = pathname.includes(navValue.path);
        return (
          <BottomNavigationAction
            key={navValue.label}
            label={navValue.label}
            disabled={isActive}
            onClick={() => navigate(`${navValue.path}`)}
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: "40px",
              borderRadius: "40px",
              ...(isActive && {
                backgroundColor: theme.palette.secondary.main,
              }),
            }}
          />
        );
      })}
    </BottomNavigation>
  );
}
