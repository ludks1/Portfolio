import {
  AppBar,
  Box,
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  Menu,
} from "@mui/material";
import theme from "../../styles/theme";
import { MouseEvent, useState } from "react";
import { MenuSharp } from "@mui/icons-material";
import { NavbarProps } from "../../types/NavbarProps";

const pages = ["HOME", "ABOUT", "SKILLS", "PORTFOLIO", "CV"];
const ITEM_HEIGHT = 48;

export default function Navbar({ sectionRefs }: NavbarProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (section: string) => {
    const ref = sectionRefs[section];
    if (ref?.current) ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          width: "80%",
          mx: "auto",
          my: 2,
          borderRadius: 4,
          border: `1px solid ${theme.palette.secondary.main}`,
          background: theme.palette.background.gradient,
          boxShadow: theme.palette.background.gradient,
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Logo / Name */}
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: "bold", letterSpacing: 1 }}
          >
            LUDWIND ROTSTEIN
          </Typography>

          {/* Desktop Navbar */}
          {isDesktop ? (
            <Box sx={{ display: "flex", gap: 2 }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => scrollToSection(page)}
                  sx={{
                    color: theme.palette.secondary.contrastText,
                    "&:hover": { color: theme.palette.primary.main },
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
          ) : (
            // Mobile Navbar
            <>
              <IconButton
                size="large"
                color="inherit"
                onClick={handleClick}
                sx={{ "&:hover": { color: theme.palette.primary.main } }}
              >
                <MenuSharp />
              </IconButton>
              <Menu
                id="menu"
                open={open}
                onClose={handleClose}
                anchorEl={anchorEl}
                slotProps={{
                  paper: {
                    sx: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: "20ch",
                      borderRadius: 2,
                      backgroundColor: theme.palette.background.paper,
                    },
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => {
                      scrollToSection(page);
                      handleClose();
                    }}
                    sx={{
                      "&:hover": {
                        backgroundColor: theme.palette.secondary.main,
                      },
                    }}
                  >
                    {page}
                  </MenuItem>
                ))}
              </Menu>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
