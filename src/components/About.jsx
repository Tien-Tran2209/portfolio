import React from "react";
import { Box, Typography, IconButton, Divider, useMediaQuery } from "@mui/material";
import profile from '../assets/profile.jpg';
import RoundedPentagonPhoto from './RoundedPentagonPhoto';
import { TechStack } from './TechStack';
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function About() {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  return (
    <Box
      sx={{
        backgroundColor: "#111827",
        minHeight: "calc(100vh - 70px)",
        color: "#fff",
        alignContent: "center",
      }}
    >
      {/* Top content in flex row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <MotionBox
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 3 }}
          sx={{ width: isSmallScreen ? '90%' : '40%', maxWidth: isSmallScreen ? '70%' : '40%', display: 'flex', justifyContent: 'center' }}
        >
          <RoundedPentagonPhoto image={profile} />
        </MotionBox>
        <Box sx={{
          maxWidth: isSmallScreen ? '90%' : '55%',
          alignContent: "center",
        }}>
          <Typography component="p" sx={{ color: "#ccc", mb: 1, fontSize: "1.1rem" }}>
            <span style={{ color: "#ff6f61" }}>&lt;span&gt;</span> Bonjour, Je m’appelle Tien{" "}
            <span style={{ color: "#ff6f61" }}>&lt;/span&gt;</span>
          </Typography>

          <Typography variant="h4" sx={{ mb: 1 }}>
            Apprentie développeuse {" "}
            <span style={{ color: "#00796b", fontWeight: "bold" }}>{`{Full Stack}`}</span>
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Web & Mobiles
          </Typography>
          <Typography variant="body1" sx={{
            color: "#6b7280",
            fontSize: "1rem"
          }}>
            &lt;p&gt; Durant mes formations intensives en <span style={{ color: "#ff6f61" }}>Cycle Expert en Ingénierie Logicielle</span> à  <span style={{ color: "#ff6f61" }}>l’ESIEA</span>, j’ai créé des sites web ainsi qu’un jeu interactif, ce qui m’a permis de renforcer mes compétences en <span style={{ color: "#ff6f61" }}>développement web et mobile</span>. Passionnée, autonome et toujours prête à collaborer, j’aime relever des défis techniques et proposer des solutions innovantes. 
            &lt;/p&gt;
          </Typography >

        </Box>
      </Box>
      <Divider
        sx={{
          height: '1px',
          width: '97%',
          background: 'linear-gradient(to right, #111827, #00796b)',
          my: 1,
          border: 0, // remove default border
        }}
      />
      {/* TechStack */}
      <TechStack/>
    </Box>
  );
}