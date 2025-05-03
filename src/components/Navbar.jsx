import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Code, Menu } from "@mui/icons-material";

export default function Navbar({ currentTab, onTabChange }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const links = ["A propos", "Projets", "CV", "Contacts"];

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#111827",
          borderRadius: "30px",
          borderBottom: "1px solid #00796b",
          mx: "auto",
          width: "80%",
          height: "70px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Code sx={{ color: "#00ffcc", mr: 1 }} />
            <Typography
              variant="h6"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                fontSize: "1.5rem",
                fontFamily: "'Fira Code', monospace",
              }}
            >
              Tien.Tran
            </Typography>
          </Box>

          {/* Desktop Links */}
          {!isMobile && (
            <Box sx={{ display: "flex", gap: 3 }}>
              {links.map((label, i) => (
                <Button
                  key={label}
                  onClick={() => onTabChange(i)}
                  sx={{
                    color: "#fff",
                    backgroundColor: currentTab === i ? "#00796b" : "transparent",
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 400,
                    fontSize: "1rem",
                    fontFamily: "'Inter', sans-serif",
                    '&:hover': {
                      borderBottom: '2px solid #00796b',
                    },
                  }}
                  href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}

          {/* Social Icons or Menu Button */}
          {isMobile ? (
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "#fff" }}
            >
              <Menu />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 1 }}>
              <IconButton sx={{ color: "#fff" }} href="https://github.com/Tien-Tran2209" target="_blank">
                <GitHub sx={{ fontSize: 30 }} />
              </IconButton>
              <IconButton sx={{ color: "#0a66c2" }} href="https://linkedin.com/in/thi-trieu-tien-tran" target="_blank">
                <LinkedIn sx={{ fontSize: 30 }} />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#111827",
            color: "#fff",
            borderLeft: "1px solid #00796b",
            width: 250,
            fontFamily: "'Fira Code', monospace",
          },
        }}
      >
        <Box sx={{ mt: 4 }}>
          <List>
            {links.map((label, i) => (
              <ListItem key={label} disablePadding sx={{ px: 2, mb: 1 }}>
                <Button
                  fullWidth
                  onClick={() => {
                    onTabChange(i);
                    setDrawerOpen(false);
                  }}
                  href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
                  sx={{
                    justifyContent: "flex-start",
                    color: "#fff",
                    backgroundColor: currentTab === i ? "#00796b" : "transparent",
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 400,
                    fontSize: "1rem",
                    fontFamily: "'Inter', sans-serif",
                    '&:hover': {
                      backgroundColor: "#00695c",
                    },
                  }}
                >
                  {label}
                </Button>
              </ListItem>
            ))}
          </List>

          <Box sx={{ mt: 2, display: "flex", justifyContent: "center", gap: 1 }}>
            <IconButton sx={{ color: "#fff" }} href="https://github.com/Tien-Tran2209" target="_blank">
              <GitHub />
            </IconButton>
            <IconButton sx={{ color: "#0a66c2" }} href="https://linkedin.com/in/thi-trieu-tien-tran" target="_blank">
              <LinkedIn />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
