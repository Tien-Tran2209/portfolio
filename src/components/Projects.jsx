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
  duration,
  Grid
} from "@mui/material";
import { motion } from "framer-motion";
import logo_Competencia from '../assets/logo_Competencia.png';
import logo_Dopamicaffeine from '../assets/logo_Dopamicaffeine.png';
import logo_MindraceMaster from '../assets/logo_MindraceMaster.jpeg';
import { TbBrandCSharp } from "react-icons/tb";
import Mind2 from '../assets/Mind2.png';
import Mind3 from '../assets/Mind3.png';
import Dopa1 from '../assets/Dopa1.png';
import Compe2 from '../assets/Compe2.png';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.2,
    },
  },
};

const styleStepper = {
  '& .MuiStepConnector-line': {
    borderColor: '#0f172a',
  },
  px: { xs: 2, md: 6 }
}

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1, y: 0, transition: {
      duration: 1,
      ease: "easeOut",
    },
  }
};
import {
  FaNodeJs, FaPhp
} from "react-icons/fa";

const projects = [
  {
    logo: <Avatar
      src={logo_Dopamicaffeine}
      sx={{ width: 40, height: 40, mr: 2 }}
    />,
    suject: "Création d'une plateforme web de partage de contenus",
    title: " 🏆 Projet classé 1ᵉʳ parmi les projets de 1ʳᵉ année (18,64/20)",
    duration: "05/2024 - 07/2024",
    description: `Conception et implémentation l’architecture MVC du projet
Création d'une base de donnée relationnelle avec des tables interconnectées pour gérer les données
Développement des fonctionnalités front-end : pages d'inscription, de connexion, de publication et de consultation de contenu
Conception et mise en œuvre des processus de gestion des utilisateurs et des contenus, incluant l'ajout, la modification, l'affichage et la suppression`,
    skills: [
      "PHP",
      "HTML",
      "CSS",
      "MySQL",
      "SQL Serveur",
      "Git",
    ],
    photo: Dopa1
  },
  {
    logo: <Avatar
      src={logo_MindraceMaster}
      sx={{ width: 40, height: 40, mr: 2 }}
    />,
    suject: "Développement d’un jeu de mémoire en ligne",
    title: " 🏆 2ᵉ meilleur projet de 1ʳᵉ année (19,17/20)",
    duration: "11/2023 - 01/2024",
    description: `Création d'interface utilisateur dynamiques et réactives (GUI)
Mise en place d'un système d'authentification et développement de la logique du jeu
Intégration de niveaux de difficulté multiples, d'un mode multijoueur et d'un système de sauvegarde des scores pour enrichir l'expérience utilisateur`,
    skills: [
      "Node.js",
      "JavaScript",
      "HTML",
      "CSS",
      "Git"
    ],
    photo: Mind3
  },
  {
    logo: <Avatar
      src={logo_Competencia}
      sx={{ width: 40, height: 40, mr: 2 }}
    />,
    suject: "Conception d'une plateforme de gestion des compétences scolaires",
    title: "",
    duration: "11/2024 - 01/2025",
    description: `Conception de l'architecture de l'application (modèle MVC)
Développement d'interfaces graphiques interactives sous WPF
Mise en place des opérations de création, consultation, modification et suppression des compétences et évaluations
Intégration d'un module de commentaires entre enseignants et élèves
Déploiement d'une base de données PostgreSQL pour stocker les résultats`,
    skills: [
      "C#",
      "NextWPFJs",
      "PostgreSQL",
      "Git",
    ],
    photo: Compe2
  },
];

export default function Projects() {
  return (
    <Box sx={{ backgroundColor: "#0f172a", color: "#fff", width: '100%' }}>
      {/* <Typography variant="h5" align="center" fontWeight="bold" mb={1} sx ={{ fontFamily: "'Fira Code', monospace",  color: "#10B981",}}>
          Projets
        </Typography>
   */}
      <Stepper
        orientation="vertical"
        connector={<StepConnector />}
        sx={styleStepper}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }} // start animation when 30% of the section is visible
        >


          {projects.map((project, index) => (

            <Step key={index} active sx={{ width: '100%' }}>
              <StepLabel
                icon={
                  <motion.div key={index} variants={itemVariants}>
                    <Box
                      sx={{
                        backgroundColor: "#10B981",
                        p: 1.5,
                        borderRadius: "50%",
                        color: "white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: "50px"
                      }}
                    >
                      {index == 0 ? <TbBrandCSharp size={20} /> : index == 1 ? <FaPhp size={20} /> : <FaNodeJs size={20} />}
                    </Box>
                  </motion.div>
                }
              >
                <motion.div key={index} variants={itemVariants}>
                  <Card
                    sx={{
                      backgroundColor: "#111827",
                      color: "white",
                      borderRadius: 10,
                      boxShadow: 3,
                      padding: '10px',
                      border: '1px solid',
                      borderColor: 'rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <CardContent>
                      <Grid container spacing={2}>
                        <Grid size={6}>
                          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                            {project.logo}
                            <Typography variant="h6" fontWeight="bold">
                              {project.suject}
                            </Typography>
                          </Box>

                          <Typography sx={{ fontSize: "0.9rem" }} color="#ff6f61">
                            {project.title}
                          </Typography>

                          <Typography variant="body2" sx={{ mt: 1 }}>
                            <ul>
                              {project.description.split('\n').map((line, index) => (
                                <li style={{ marginBottom: '0.7em' }} key={index}>{line}</li>
                              ))}
                            </ul>
                          </Typography>

                          <Box sx={{ mt: 1, display: "flex", flexWrap: "wrap", gap: 1 }}>
                            {project.skills.map((skill, idx) => (
                              <Box
                                key={idx}
                                sx={{
                                  backgroundColor: "#334155",
                                  px: 1.5,
                                  py: 0.5,
                                  borderRadius: 1,
                                  fontSize: "0.75rem",
                                  fontFamily: "monospace",
                                }}
                              >
                                {skill}
                              </Box>
                            ))}
                          </Box>

                          <Typography
                            variant="caption"
                            color="gray"
                            sx={{ display: "block", mt: 2 }}
                          >
                            {project.duration}
                          </Typography>
                        </Grid>
                        <Grid size={6}>
                          {(index == 0 || index == 2) &&
                            <Box
                              component="img"
                              src={project.photo}
                              alt="Banner"
                              sx={{ width: '100%', borderRadius: 2 }}
                            />
                          }
                          {index == 1 && <Grid container spacing={2}>
                            <Grid size={6}>

                              <Box
                                component="img"
                                src={Mind2}
                                alt="Banner"
                                sx={{ width: '100%', borderRadius: 2 }}
                              />
                            </Grid>
                            <Grid size={6} style={{
                              gridRow: 'span 2', justifyItems: 'center',
                              alignItems: 'center', display: 'flex'
                            }}>
                              <Box
                                component="img"
                                src={Mind3}
                                alt="Banner"
                                sx={{ width: '100%', borderRadius: 2 }}
                              />
                            </Grid>
                          </Grid>}
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                </motion.div>
              </StepLabel>
            </Step>
          ))}
        </motion.div>
      </Stepper>
    </Box>
  );
}
