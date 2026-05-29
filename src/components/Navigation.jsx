import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

export default function Navigation({ mode, onToggleMode }) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const location = useLocation();

  const handleToggle = () => setOpen((v) => !v);
  const handleClose = () => setOpen(false);

  const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: mode === "dark" ? "rgba(7, 8, 16, 0.75)" : "rgba(255, 255, 255, 0.78)",
        backdropFilter: "blur(14px)",
        borderBottom:
          mode === "dark" ? "1px solid rgba(255,255,255,0.12)" : "1px solid rgba(15,23,42,0.12)",
      }}
    >
      <Toolbar
        sx={{
          maxWidth: 1100,
          width: "100%",
          mx: "auto",
          px: { xs: 2, sm: 3 },
          minHeight: { xs: 70, sm: 76 },
        }}
      >
        <Avatar
          alt="Ariane"
          sx={{
            width: 46,
            height: 46,
            mr: 1.25,
            fontSize: "0.95rem",
            fontWeight: 700,
            bgcolor: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)",
            color: "#fff",
          }}
        >
          AR
        </Avatar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 700,
            letterSpacing: 0.4,
            flexGrow: 1,
            fontSize: { xs: "1.02rem", sm: "1.1rem", lg: "1.2rem" },
          }}
        >
          Rakotomalala H. Ariane
        </Typography>

        <Box
          sx={{
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            gap: 1,
            mr: 0.5,
          }}
        >
          {links.map((link) => (
            <Button
              key={link.to}
              color="inherit"
              component={RouterLink}
              to={link.to}
              sx={{
                borderRadius: 99,
                fontWeight: location.pathname === link.to ? 700 : 500,
                bgcolor: location.pathname === link.to ? "rgba(139,124,247,0.16)" : "transparent",
              }}
            >
              {link.label}
            </Button>
          ))}
          <Button
            variant="contained"
            color="primary"
            href="mailto:ariane@example.com"
            sx={{
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 600,
              px: 2.2,
            }}
          >
            Contact
          </Button>
        </Box>
        <IconButton
          aria-label="toggle theme"
          onClick={onToggleMode}
          color="inherit"
          sx={{ ml: { xs: "auto", lg: 0.5 } }}
        >
          {mode === "dark" ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
        </IconButton>

        <IconButton
          color="inherit"
          aria-label="ouvrir le menu"
          onClick={handleToggle}
          sx={{
            display: { xs: "inline-flex", sm: "inline-flex", md: "inline-flex", lg: "none" },
            ml: 1,
            minWidth: 48,
            minHeight: 48,
          }}
        >
          <MenuIcon sx={{ fontSize: 28 }} />
        </IconButton>
      </Toolbar>

      <Drawer
        anchor="right"
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            backgroundColor: mode === "dark" ? "rgba(10,10,15,0.96)" : "rgba(255,255,255,0.96)",
            color: theme.palette.text.primary,
            backdropFilter: "blur(12px)",
          },
        }}
      >
        <Box sx={{ width: 240, mt: 2 }}>
          <List>
            {links.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={RouterLink}
                  to={link.to}
                  onClick={handleClose}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="mailto:ariane@example.com"
                onClick={handleClose}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}