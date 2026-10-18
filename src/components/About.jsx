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
                    
          <Typography
            variant="body1"
            sx={{
              color: "#9ca3af",
              fontSize: "1rem",
              lineHeight: 1.8,
            }}
          >
            &lt;p&gt; Diplômée d’un Bachelor en développement d’applications à{" "}
            <span style={{ color: "#ff6f61" }}>l’ESIEA</span> et actuellement
            en Mastère en{" "}
            <span style={{ color: "#ff6f61" }}>
              ingénierie de l’intelligence artificielle
            </span>
            , j’ai acquis des compétences en{" "}
            <span style={{ color: "#ff6f61" }}>
              développement web et logiciel
            </span>{" "}
            à travers mes projets et mon expérience en alternance.
            J’ai travaillé sur des interfaces utilisateur, des applications
            full-stack et des solutions logicielles en C++/Qt.
            Autonome, rigoureuse et curieuse, je souhaite continuer à
            développer mes compétences et contribuer à de nouveaux
            projets techniques. &lt;/p&gt;
          </Typography>

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