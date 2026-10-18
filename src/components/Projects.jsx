import {
  Stepper,
  Step,
  StepLabel,
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  StepConnector,
  Grid,
  useMediaQuery,
  useTheme,
  List,
  ListItem
} from "@mui/material";

import { FaNodeJs, FaPhp } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { motion } from "framer-motion";
import { styled } from "@mui/system";

import logo_Competencia from "../assets/logo_Competencia.png";
import logo_Dopamicaffeine from "../assets/logo_Dopamicaffeine.png";
import logo_MindraceMaster from "../assets/logo_MindraceMaster.jpeg";
import logo_Swipe from "../assets/logo_Swipe.png";

import Mind2 from "../assets/Mind2.png";
import Mind3 from "../assets/Mind3.png";
import Dopa from "../assets/Dopa.png";
import Compe from "../assets/Compe.png";
import Swipe1 from "../assets/Swipe1.png";
import Swipe2 from "../assets/Swipe2.png";

import Hobbini1 from "../assets/Hobbini1.png";
import Hobbini2 from "../assets/Hobbini2.png";
import Hobbini4 from "../assets/Hobbini4.png";
import Hobbini5 from "../assets/Hobbini5.png";

import ImageBox from "./ImageBox";

const projects = [
  {
    logo: (
      <Avatar
        sx={{
          width: 40,
          height: 40,
          mr: 2,
          bgcolor: "#334155"
        }}
      >
        H
      </Avatar>
    ),
    suject: "Hobbini – Application web de vente en ligne et de gestion",
    title: "",
    duration: "04/2026 - 06/2026",

    description: `Développement full-stack d'une plateforme web, intégrant les interfaces utilisateur, la logique métier et la gestion des données.
Développement d'endpoints API REST métier, sécurisés par JWT, avec intégration du paiement Stripe.
Conteneurisation avec Docker et CI/CD via GitHub Actions pour automatiser les tests et le déploiement.`,

    skills: [
      "Symfony 7",
      "PHP",
      "Twig",
      "Doctrine ORM",
      "MySQL",
      "Docker",
      "Redis",
      "JWT",
      "Stripe",
      "Swagger",
      "GitHub Actions"
    ],

    photo: [Hobbini1]
  },

  {
    logo: (
      <Avatar
        src={logo_Swipe}
        sx={{ width: 40, height: 40, mr: 2 }}
      />
    ),

    suject: "Plateforme de social commerce mobile-first",
    title: "🏆 2ᵉ place parmi les projets étudiants (16,83/20)",
    duration: "04/2025 - 07/2025",

    description: `Développement d'interfaces utilisateur responsive selon une approche mobile-first avec React et TypeScript, intégrant le partage de contenus multimédias, les interactions sociales et une navigation par swipe.
Création d'une API REST en .NET pour gérer les utilisateurs, les publications, les interactions et les produits.
Ajout de l'authentification et des droits d'accès selon les profils utilisateurs.`,

    skills: [
      "API REST",
      ".NET",
      "React",
      "TypeScript",
      "Identity",
      "CORS",
      "Entity Framework",
      "JWT Token",
      "Swagger",
      "Postman"
    ],

    photo: [Swipe1, Swipe2]
  },

  {
    logo: (
      <Avatar
        src={logo_Competencia}
        sx={{ width: 40, height: 40, mr: 2 }}
      />
    ),

    suject: "Competencia – Plateforme de gestion des compétences scolaires",
    title: "",
    duration: "11/2024 - 01/2025",

    description: `Création de l'architecture MVC de l'application.
Développement d'interfaces graphiques interactives avec WPF.
Gestion des compétences et évaluations, avec un module de commentaires entre enseignants et élèves.
Mise en place d'une base de données PostgreSQL pour les résultats.`,

    skills: [
      "C#",
      "MVC",
      "WPF",
      "PostgreSQL",
      "GitLab"
    ],

    photo: Compe
  },

  {
    logo: (
      <Avatar
        src={logo_Dopamicaffeine}
        sx={{ width: 40, height: 40, mr: 2 }}
      />
    ),

    suject: "Dopamicaffeine – Site social de partage de contenus culturels",
    title: "🏆 1ʳᵉ place parmi les projets étudiants (18,64/20)",
    duration: "05/2024 - 07/2024",

    description: `Développement des interfaces web utilisateur en HTML et CSS.
Création de la logique métier côté backend pour gérer les contenus, la recherche et le filtrage de contenus.
Mise en place des tables et leurs relations pour stocker les données.`,

    skills: [
      "HTML",
      "CSS",
      "PHP",
      "MySQL",
      "SQL",
      "Git",
      "GitLab"
    ],

    photo: Dopa
  },

  {
    logo: (
      <Avatar
        src={logo_MindraceMaster}
        sx={{ width: 40, height: 40, mr: 2 }}
      />
    ),

    suject: "MindraceMaster – Jeu de mémoire de cartes (solo ou multijoueur)",
    title: "🏆 2ᵉ place parmi les projets étudiants (19,17/20)",
    duration: "11/2023 - 01/2024",

    description: `Front-end interactif et système d'authentification.
Niveaux de difficulté multiples et sauvegarde des scores.
Mode multijoueur avec gestion des tours.`,

    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js"
    ],

    photo: [Mind2, Mind3]
  }
];

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#10B981",
  p: 1.5,
  borderRadius: "50%",
  color: "white",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: "50px"
}));

const StyledStepper = styled(Stepper)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    borderColor: "#0f172a"
  },

  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),

  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6)
  }
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#111827",
  color: "white",
  borderRadius: 10,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(1.25),
  border: "1px solid rgba(255, 255, 255, 0.3)"
}));

const CustomListItem = styled(ListItem)(({ theme }) => ({
  padding: "3px",

  "&::before": {
    content: '"•"',
    color: "white",
    fontSize: "1.3rem",
    marginRight: "8px"
  }
}));

const containerVariants = {
  hidden: {
    opacity: 0
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut"
    }
  }
};

export default function Projects() {
  const theme = useTheme();

  const isSmallScreen = useMediaQuery("(max-width:1300px)");
  const isMediumScreen = useMediaQuery("(max-width:1500px)");

  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        color: "#fff",
        width: "100%"
      }}
    >
      <StyledStepper
        orientation="vertical"
        connector={<StepConnector />}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.1
          }}
        >
          {projects.map((project, index) => (
            <Step
              key={index}
              active
              sx={{ width: "100%" }}
            >
              <StepLabel
                icon={
                  <motion.div
                    key={index}
                    variants={itemVariants}
                  >
                    <StyledBox>
                      {project.skills.includes("C#") ||
                      project.skills.includes(".NET") ? (
                        <TbBrandCSharp size={20} />
                      ) : project.skills.includes("PHP") ? (
                        <FaPhp size={20} />
                      ) : (
                        <FaNodeJs size={20} />
                      )}
                    </StyledBox>
                  </motion.div>
                }
              >
                <motion.div
                  key={index}
                  variants={itemVariants}
                >
                  <StyledCard>
                    <CardContent>
                      <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                      >
                        <Grid
                          size={
                            isSmallScreen
                              ? 12
                              : isMediumScreen
                                ? 6
                                : 7
                          }
                        >
                          <Box
                            display="flex"
                            alignItems="center"
                            mb={1}
                          >
                            {project.logo}

                            <Typography
                              variant="h6"
                              fontWeight="bold"
                            >
                              {project.suject}
                            </Typography>
                          </Box>

                          <Typography
                            fontSize="0.9rem"
                            color="#ff6f61"
                          >
                            {project.title}
                          </Typography>

                          <Typography
                            variant="body2"
                            sx={{ mt: 1 }}
                          >
                            <List>
                              {project.description
                                .split("\n")
                                .map((line, index) => (
                                  <CustomListItem key={index}>
                                    {line}
                                  </CustomListItem>
                                ))}
                            </List>
                          </Typography>

                          <Box
                            sx={{
                              mt: 1,
                              display: "flex",
                              flexWrap: "wrap",
                              gap: 1
                            }}
                          >
                            {project.skills.map((skill, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  backgroundColor: "#334155",
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: 1,
                                  fontSize: "0.75rem",
                                  fontFamily: "monospace"
                                }}
                              >
                                {skill}
                              </Box>
                            ))}
                          </Box>

                          <Typography
                            variant="caption"
                            color="gray"
                            sx={{
                              display: "block",
                              mt: 2
                            }}
                          >
                            {project.duration}
                          </Typography>
                        </Grid>

                        <Grid
                          size={
                            isSmallScreen
                              ? 11
                              : isMediumScreen
                                ? 6
                                : 5
                          }
                          container
                          justifyContent="center"
                          alignItems="center"
                        >
                          {project.photo &&
                            (Array.isArray(project.photo) ? (
                              <Grid container spacing={2}>
                                {project.photo.map(
                                  (imgSrc, imgIndex) => (
                                    <Grid
                                      size={index === 0 ? 12 : 6}
                                      key={imgIndex}
                                    >
                                      <ImageBox src={imgSrc} />
                                    </Grid>
                                  )
                                )}
                              </Grid>
                            ) : (
                              <ImageBox src={project.photo} />
                            ))}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </StyledCard>
                </motion.div>
              </StepLabel>
            </Step>
          ))}
        </motion.div>
      </StyledStepper>
    </Box>
  );
}