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
  List,
  ListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { styled } from "@mui/system";
import { motion } from "framer-motion";
import BrightLoopLogo from "../assets/BrightLoop.png";

const experiences = [
  {
    company: "BrightLoop",
    logo: BrightLoopLogo,
    role: "Développement Interfaces",
    duration: "09/2025 -- 08/2026",
    location: "Paris",
    description: [
      "Développement d’une preuve de concept TCP/IP (SCPI) pour piloter des alimentations et des charges électroniques.",
      "Développement d’un client TCP/IP (SCPI) pour contrôler une alimentation.",
      "Intégration du contrôle des alimentations dans l'interface graphique via des widgets de configuration.",
    ],
    skills: ["Qt", "C++", "GitLab"],
  },
];

const StyledStepper = styled(Stepper)(({ theme }) => ({
  "& .MuiStepConnector-line": {
    borderColor: "#0f172a",
  },
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  [theme.breakpoints.up("md")]: {
    paddingLeft: theme.spacing(6),
    paddingRight: theme.spacing(6),
  },
}));

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#111827",
  color: "white",
  borderRadius: 10,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(1.25),
  border: "1px solid rgba(255, 255, 255, 0.3)",
}));

const CustomListItem = styled(ListItem)(({ theme }) => ({
  padding: "3px",
  "&::before": {
    content: '"•"',
    color: "white",
    fontSize: "1.3rem",
    marginRight: "8px",
  },
}));

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.5, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Experiences() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery("(max-width:1300px)");
  const isMediumScreen = useMediaQuery("(max-width:1500px)");

  return (
    <Box
      sx={{
        backgroundColor: "#0f172a",
        minHeight: "100vh",
        color: "#fff",
        paddingTop: "20px", 
      }}
    >
      <Box
        sx={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "2rem",
        }}
      >
        <StyledStepper orientation="vertical" connector={<StepConnector />}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experiences.map((exp, index) => (
              <Step key={index} active sx={{ width: "100%" }}>
                <StepLabel
                  icon={
                    <motion.div variants={itemVariants}>
                      <Avatar sx={{ width: 40, height: 40, mr: 2 }}>
                        {exp.company[0]}
                      </Avatar>
                    </motion.div>
                  }
                >
                  <motion.div variants={itemVariants}>
                    <StyledCard>
                      <CardContent>
                        <Grid
                          container
                          justifyContent="center"
                          alignItems="center"
                          spacing={2}
                        >
                          <Grid
                            item
                            xs={12}
                            md={isSmallScreen ? 12 : isMediumScreen ? 6 : 7}
                          >
                            <Box display="flex" alignItems="center" mb={1}>
                              <Avatar
                                src={exp.logo}
                                alt={exp.company}
                                sx={{ width: 170, height: 60, mr: 2 }}
                              />
                              <Typography variant="h6" fontWeight="bold">
                                {exp.role}
                              </Typography>
                            </Box>

                            <Typography
                              variant="caption"
                              color="gray"
                              display="block"
                            >
                              {exp.duration} | {exp.location}
                            </Typography>

                            <List sx={{ mt: 1 }}>
                              {exp.description.map((line, idx) => (
                                <CustomListItem key={idx}>
                                  {line}
                                </CustomListItem>
                              ))}
                            </List>

                            <Box
                              sx={{
                                mt: 1,
                                display: "flex",
                                flexWrap: "wrap",
                                gap: 1,
                              }}
                            >
                              {exp.skills.map((skill, idx) => (
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
    </Box>
  );
}