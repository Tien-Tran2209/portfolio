import {
  Box,
  Card,
  CardContent,
  Typography,
  Stack,
  Tooltip
} from "@mui/material";
import { styled } from '@mui/system';
import {
  FaHtml5, FaCss3Alt, FaJs, FaAngular, FaReact, FaNodeJs,
  FaPhp, FaGit, FaGitlab, FaTrello, FaTasks
} from "react-icons/fa";
import { motion } from "framer-motion";
import { TbBrandCSharp } from "react-icons/tb";
import neticon from '../assets/NET.png';
import netcore from '../assets/NET CORE.png';
import PostgresSQL from '../assets/PostgresSQL.png';
import MySQL from '../assets/MySQL.png';
import SQLServer from '../assets/Microsoft SQL Server.png';
import VSCode from '../assets/VSCode.png';
import VisualStudio from '../assets/Visual Studio.png';
const ScrollContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflowX: "hidden",
  gap: 16,
  padding: "16px 16px 40px",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});
const CategoryWrapper = styled(Box)({
  minWidth: "10vw",
  height: "230px",
  width: "250px",
  flexShrink: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const StyledCard = styled(Card)({
  height: "100%",
  backgroundColor: "#111827",
  color: "white",
  borderRadius: 16,
  boxShadow: 3,
  border: "1px solid rgba(255, 255, 255, 0.3)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
});
const TitleText = styled(Typography)({
  paddingTop : "10px",
  fontWeight: "bold",
  fontSize: "1rem",
  textAlign: "center",
});
const StyledStack = styled(Stack)({
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
});
const ImageIcon = styled('img')(({ theme, size = 50 }) => ({
  width: size,
  height: size
}));
const categories = [
  {
    title: "Front-end",
    items: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
      { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
      { name: "Angular", icon: <FaAngular color="#DD0031" /> },
      { name: "HTML", icon: <FaHtml5 color="#E44D26" /> },
      { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
      { name: "WPF", icon: <Typography>WPF</Typography> },
      { name: "Responsive Design", icon: <Typography>Responsive Design</Typography> },
      { name: "UX/UI", icon: <Typography>UX/UI</Typography> },
    ],
  },
  {
    title: "Back-end",
    items: [
      { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
      { name: "PHP", icon: <FaPhp color="#777BB4" /> },
      { name: "C#", icon: <TbBrandCSharp color="#9B4F96" /> },
      { name: "ASP.NET", icon: <ImageIcon src={neticon} /> },
      { name: "ASP CORE.NET", icon: <ImageIcon src={netcore} /> },
      { name: "REST API", icon: <Typography>REST API</Typography> },
      { name: "Architecture MVC", icon: <Typography>Architecture MVC</Typography> },
    ],
  },
  {
    title: "Bases de données",
    items: [
      { name: "MySQL", icon: <ImageIcon src={MySQL} /> },
      { name: "SQL Server", icon: <ImageIcon src={SQLServer} /> },
      { name: "PostgreSQL", icon: <ImageIcon src={PostgresSQL} /> },
      { name: "Schémas relationnels", icon: <Typography>Schémas relationnels</Typography> },
    ],
  },
  {
    title: "Outils & Méthodologies",
    items: [
      { name: "Git", icon: <FaGit color="#F05032" /> },
      { name: "GitLab", icon: <FaGitlab color="#FCA121" /> },
      { name: "Trello", icon: <FaTrello color="#0079BF" /> },
      { name: "Asana", icon: <FaTasks color="#273347" /> },
      { name: "CI/CD", icon: <Typography>CI/CD</Typography> },
      { name: "Méthodologies agiles", icon: <Typography>Méthodologies agiles</Typography> },
      { name: "POO", icon: <Typography>POO</Typography> },
    ],
  },
  {
    title: "Environnements",
    items: [
      { name: "Visual Studio", icon: <ImageIcon src={VisualStudio} /> },
      { name: "VirtualBox", icon: <Typography>VirtualBox</Typography> },
      { name: "VS Code", icon: <ImageIcon src={VSCode} /> },
      { name: "Environnements de test", icon: <Typography>Environnements de test</Typography> },
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
        fontWeight="bold"
        color="#00796b"
        textAlign="center"
        marginBottom='5px'
      >
        Compétences Techniques
      </Typography>
      <ScrollContainer   ref={scrollRef}>
        {categories.concat(categories).map((category, index) => (
          <CategoryWrapper key={index}>
            <StyledCard>
              <CardContent sx={{ p: 0 }}>
                <TitleText>
                  {category.title}
                </TitleText>
                <StyledStack>
                  {category.items.map((item, idx) => (
                    <Tooltip title={item.name} arrow key={idx}>
                      <Box key={idx} sx={{ m: 1, fontSize: 60 }}>
                        {item.icon}
                      </Box>
                    </Tooltip>
                  ))}
                </StyledStack>
              </CardContent>
            </StyledCard>
          </CategoryWrapper>
        ))}
      </ScrollContainer>
    </>
  );
};