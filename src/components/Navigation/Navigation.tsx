import { colors } from "../../theme/generalStyles/colors.ts";
import { useLocation, useNavigate } from "react-router-dom";
import { navigationValues } from "../../constants/navigationValues";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

export function Navigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <BottomNavigation showLabels>
      {navigationValues.map((navValue) => {
        const isActive = pathname.includes(navValue.path);
        return (
          <BottomNavigationAction
            key={navValue.label}
            label={navValue.label}
            disabled={isActive}
            onClick={() => navigate(`${navValue.path}`)}
            sx={{
              ...(isActive && { backgroundColor: colors.secondaryRed }),
            }}
          />
        );
      })}
    </BottomNavigation>
  );
}
