import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { GitHub, LinkedIn, Instagram, Facebook, Code } from "@mui/icons-material";

export default function Navbar({ currentTab, onTabChange }) {
  const links = ["A propos de moi", "Projets", "CV", "Contacts"];

  return (
    <AppBar
       position="static"
       //position="fixed"
      sx={{
        backgroundColor: "#111827", // dark navy
        borderRadius:"30px",
        borderBottom: "1px solid #00796b",   // Green bottom line
        mx: "auto",         // margin-left and margin-right (centers the box)
        width: "80%",
        height:"80px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Code sx={{ color: "#00ffcc", mr: 1 }} />
          <Typography variant="h6" sx={{ color: "#fff", fontWeight: "bold",fontSize: "1.5rem" ,  fontFamily: "'Fira Code', monospace" }}>
            Tien.Tran
          </Typography>
        </Box>

        {/* Liens */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {links.map((label, i ) => (
            <Button
            onClick= {() => onTabChange(i)}
              key={label}
              sx={{
                color: "#fff",
                //cursor: 'pointer',
                backgroundColor: currentTab === i ? '#00796b' : 'transparent', // highlight selected tab
                //color: currentTab === i ? '#fff' : '#000', // adjust color for selected tab
                borderBottom: currentTab === i ? '2px solid #fff' : 'none', // optional underline effect
                textTransform: "none",
                fontWeight: 400,
                fontSize: "1rem",
                fontFamily: "'Inter', sans-serif",
                transition: 'all 0.2s ease-in-out',
            '&:hover': {
              color: 'white',
              borderBottom: '2px solid #00796b',
            },
             
              }}
              href={`#${label.toLowerCase().replace(/\s/g, "-")}`}
            >
              {label}
            </Button>
          ))}
        </Box>

        {/* Icônes sociales */}
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton sx={{ color: "#fff" }} target="_blank"
  rel="noopener noreferrer"  href="#"><GitHub  sx={{ fontSize: 30 }}/></IconButton>
          <IconButton sx={{ color: 'primary.main' }}   target="_blank"
  rel="noopener noreferrer" 
  href="https://linkedin.com/in/thi-trieu-tien-tran"><LinkedIn  sx={{ fontSize: 30 }}/></IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}


