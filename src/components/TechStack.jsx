import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Tooltip
} from "@mui/material";
import {
  FaHtml5, FaCss3Alt, FaJs, FaAngular, FaReact, FaNodeJs,
  FaPhp, FaGit, FaGitlab, FaTrello, FaTasks , FaDatabase,
  FaCogs, FaWindows, FaLinux
} from "react-icons/fa";
import { motion } from "framer-motion";
import { TbBrandCSharp } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import { FaWpforms } from "react-icons/fa6";
import neticon from '../assets/NET.png';
import netcore from '../assets/NET CORE.png';
import PostgresSQL from '../assets/PostgresSQL.png';
import MySQL from '../assets/MySQL.png';
import SQLServer from '../assets/Microsoft SQL Server.png';
import VSCode from '../assets/VSCode.png';
import VisualStudio from '../assets/Visual Studio.png';
const MotionTypography = motion(Typography);
const categories = [
  {
    title: "Front-end",
    items: [
      { name: "React", icon: <FaReact size = {60}  color="#61DAFB" /> },
      { name: "JavaScript", icon: <FaJs size = {60}  color="#F7DF1E" /> },
      { name: "Angular", icon: <FaAngular size = {60}  color="#DD0031" /> },
      { name: "HTML", icon: <FaHtml5 size = {60}  color="#E44D26" /> },
      { name: "CSS", icon: <FaCss3Alt size = {60}  color="#1572B6" /> },
      { name: "WPF", icon: <Typography variant="body2" >WPF</Typography>},
      { name: "Responsive Design", icon:<Typography variant="body2" >Responsive Design</Typography>},
      { name: "UX/UI", icon: <Typography variant="body2">UX/UI</Typography> },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", icon: <FaNodeJs  size = {60}  color="#339933" /> },
      { name: "PHP", icon: <FaPhp  size = {60}  color="#777BB4" /> },
      { name: "C#", icon: <TbBrandCSharp   size = {60} color="#9B4F96" /> },
      { name: "ASP.NET", icon:   <img 
        src={neticon}  
        style={{ width: '50px', height: '50px'}} 
      />},
      { name: "ASP CORE.NET", icon:   <img 
        src={netcore}  
        style={{ width: '50px', height: '50px'}} 
      />},
      { name: "REST API", icon: <Typography variant="body2">REST API</Typography>},
      { name: "Architecture MVC", icon: <Typography variant="body2">Architecture MVC</Typography> },
    ],
  },
  {
    title: "Bases de données",
    items: [
      { name: "MySQL", icon: <img 
        src={MySQL}  
        style={{ width: '50px', height: '50px'}} 
      /> },
      { name: "SQL Server", icon:  <img 
        src={SQLServer}  
        style={{ width: '60px', height: '60px', marginLeft : '20px', marginRight : '20px'}} 
      />},
      { name: "PostgreSQL", icon:  <img 
        src={PostgresSQL}  
        style={{ width: '50px', height: '50px'}} 
      /> },
      { name: "Schémas relationnels", icon: <Typography variant="body2">Schémas relationnels</Typography> },
    ],
  },
  {
    title: "Outils & Méthodologies",
    items: [
      { name: "Git", icon: <FaGit size = {60}  color="#F05032" /> },
      { name: "GitLab", icon: <FaGitlab size = {60}  color="#FCA121" /> },
      { name: "Trello", icon: <FaTrello size = {60}  color="#0079BF" /> },
      { name: "Asana", icon: <FaTasks size = {60}   color="#273347" /> },
      { name: "CI/CD", icon: <Typography variant="body2">CI/CD</Typography> },
      { name: "Méthodologies agiles", icon: <Typography variant="body2">Méthodologies agiles</Typography>},
      { name: "POO", icon: <Typography variant="body2">POO</Typography> },
    ],
  },
  {
    title: "Environnements",
    items: [
      { name: "Visual Studio", icon: <img 
        src={VisualStudio}  
        style={{ width: '50px', height: '50px'}} 
       /> },
       { name: "Environnements de test", icon: <Typography variant="body2">Environnements de test</Typography>  },
     
      { name: "VS Code", icon: <img 
        src={VSCode}  
        style={{ width: '50px', height: '50px'}} 
      /> },
      { name: "VirtualBox", icon: <Typography variant="body2">VirtualBox</Typography> },
   
    ],
  },
];

import { useEffect, useRef } from "react";

export const TechStack = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollSpeed = 1; // pixels per frame
    let animationFrameId;

    const scroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;

        // Reset to start for infinite loop
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <>
    <Typography
    variant="h5"
    sx={{
      fontWeight: "bold",
      color: "#00796b",
     textAlign: "center",
     fontFamily: "'Fira Code', monospace",
     marginBottom : '20px'
    }}
  >
    Compétences Techniques
  </Typography>
    <Box sx={{ backgroundColor: "#0f172a", color: "#fff", width: '95%',    display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      mx: "auto"}}>
      <Box
        ref={scrollRef}
        sx={{
          display: 'flex',
          justifyContent: "center", // Horizontal center alignment
          alignItems: "center", // Vertical center alignment (within container height)
          overflowX: 'hidden',
          gap: 2,
          px: 2,
          py: 2,
          paddingBottom : '40px',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.concat(categories).map((category, index) => (
          <Box
            key={index}
            sx={{
              minWidth: '10vw',
              height: '210px',
              width: '250px',
              flexShrink: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card
              sx={{
                height: '100%',
                backgroundColor: "#111827",
                color: "white",
                borderRadius: 2,
                boxShadow: 3,
                padding: 2,
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',  // Align items at the top
              }}
            >
              <CardContent sx={{ p: 0 }}>
                          <Typography variant="h5"  sx={{
        mb: 1,
        fontWeight: "bold",
        fontFamily: "'Fira Code', monospace",
        fontSize: "1rem",
        textAlign: 'center', // Aligns the text horizontally in the center
      }}>
             {category.title}
           </Typography>
           <Stack
  spacing={1}
  sx={{
    marginTop: '20px',
    marginLeft : '-10px',
    display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              justifyContent: 'center', // center icons horizontally inside the card
  }}
>
  {category.items.map((item, idx) => (
    <Tooltip title={item.name} arrow key={idx}>
     <Box key={idx} sx={{ m: 1, paddingLeft : '10px' }}>
     {item.icon}
   </Box>
   </Tooltip>
  ))}
</Stack>

              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
    </>
  );
};