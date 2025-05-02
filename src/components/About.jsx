import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { GitHub, LinkedIn, Facebook, Instagram } from "@mui/icons-material";
import profile from '../assets/me.jpg';
import RoundedPentagonPhoto from './RoundedPentagonPhoto';
import {TechStack} from './TechStack';
import { motion } from "framer-motion";
const MotionBox = motion(Box);
const MotionTypography = motion(Typography);

export default function About() {
    return (
        <Box
        sx={{
          backgroundColor: "#111827",
          minHeight: "100vh",
          color: "#fff",
          paddingTop: "10px",
        }}
      >
        {/* Top content in flex row */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            columnGap: 6,
          }}
        >
            <MotionBox
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 3 }}
                >
          <RoundedPentagonPhoto image={profile} size={380} />
          </MotionBox>
          <Box sx={{ maxWidth: '50%', paddingTop: "10px" }}>
          <Typography component="p" sx={{ color: "#ccc", mb: 1, fontSize: "1.1rem" }}>
          <span style={{ color: "#ff6f61" }}>&lt;span&gt;</span> Bonjour, Je m’appelle Tien{" "}
          <span style={{ color: "#ff6f61" }}>&lt;/span&gt;</span>
        </Typography>
        
        <Typography variant="h4" sx={{  mb: 1 }}>
          Apprentie{" "}
          <span style={{ color: "#00796b", fontWeight: "bold" }}>{`{Full Stack}`}</span>
        </Typography>
        <Typography variant="h5" sx={{   mb: 2 }}>
          Web & App
        </Typography>
        <Typography component="p" sx={{ color: "#6b7280", mb: 1, fontSize: "1.1rem" }}>
        &lt;p&gt; Je suis en deuxième année en  <span style={{ color: "#ff6f61" }}>Cycle Expert en Ingénierie Logicielle</span> de  <span style={{ color: "tomato" }}>l'ESIEA</span>.
        &lt;/p&gt;
        </Typography>
        <Typography variant="body1" sx={{   color: "#6b7280",
    fontSize: "1rem"}}>
          &lt;p&gt; Fort d’une formation solide et d’une expérience pratique en   <span style={{ color: "tomato" }}>développement web </span> et <span style={{ color: "tomato" }}>mobile full stack</span>, je suis motivé à intégrer votre équipe en tant qu’apprentie afin de contribuer activement à la conception, au développement et à la livraison de solutions numériques innovantes.
 &lt;/p&gt;
        </Typography>
       
          </Box>
        </Box>
        <Divider
  sx={{
    height: '1px',
    width: '100%',
    background: 'linear-gradient(to right, #111827, #00796b)',
    my: 2,
    border: 0, // remove default border
  }}
/>
            {/* TechStack */}
            <TechStack />
      </Box>
    );
  }