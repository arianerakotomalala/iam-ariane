import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((v) => !v);
  const handleClose = () => setOpen(false);

  const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "rgba(18,18,18,0.8)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
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
         <Avatar src="/src/assets/profil.jpg" alt="avatar"  sx={{ width: 56, height: 56 }} />
        <Typography
          variant="h3"
          sx={{
            fontWeight: 700,
            letterSpacing: 0.9,
            flexGrow: 1,
            fontSize: { xs: "1.05rem", sm: "1.15rem", lg: "1.25rem" },
          }}
        >
         
          Rakotomalala H. Ariane
        </Typography>

        {/* Desktop links - visibles uniquement sur écrans larges (lg et +) */}
        <Box 
          sx={{ 
            display: { xs: "none", sm: "none", md: "none", lg: "flex" },
            gap: 1.2 
          }}
        >
          {links.map((link) => (
            <Button key={link.href} color="inherit" href={link.href}>
              {link.label}
            </Button>
          ))}
          <Button
            variant="contained"
            color="primary"
            href="#contact"
            sx={{
              borderRadius: 999,
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Hamburger - visible par défaut, caché uniquement sur grands écrans (lg+) */}
        <IconButton
          color="inherit"
          aria-label="ouvrir le menu"
          onClick={handleToggle}
          sx={{ 
            display: { xs: "inline-flex", sm: "inline-flex", md: "inline-flex", lg: "none" },
            ml: 1,
            minWidth: 48,
            minHeight: 48
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
            backgroundColor: "rgba(10,10,15,0.96)",
            color: "#e5e5e5",
            backdropFilter: "blur(12px)",
          },
        }}
      >
        <Box sx={{ width: 240, mt: 2 }}>
          <List>
            {links.map((link) => (
              <ListItem key={link.href} disablePadding>
                <ListItemButton
                  component="a"
                  href={link.href}
                  onClick={handleClose}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                component="a"
                href="#contact"
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