import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { GitHub, Launch } from "@mui/icons-material";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      name: t('projects.appointmentSystem.name'),
      description: t('projects.appointmentSystem.description'),
      stack: ["React", "TailwindCSS"],
      image: "/react.svg",
      link: "https://github.com/ludks1/cafe-and-co",
      demo: "https://v0-cafe-and-co.vercel.app/",
    },
  ];

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
          {t('projects.title')}
        </Typography>
        <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.primary }}>
          {t('projects.subtitle')}
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    background: theme.palette.background.paper,
                    borderRadius: 4,
                    boxShadow: "0px 8px 24px rgba(0,0,0,0.3)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    border: `1px solid ${theme.palette.secondary.main}20`,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: `0px 12px 32px rgba(255, 0, 127, 0.2)`,
                      border: `1px solid ${theme.palette.primary.main}50`,
                    },
                  }}
                >
                  {/* Project Image/Icon */}
                  <Box
                    sx={{
                      height: 140,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `linear-gradient(135deg, ${theme.palette.background.default}, #1A1A2E)`,
                      borderBottom: `1px solid ${theme.palette.secondary.main}20`,
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.name}
                      style={{
                        width: 70,
                        height: 70,
                        objectFit: "contain",
                      }}
                    />
                  </Box>

                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 1 }}
                    >
                      {project.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: theme.palette.text.primary,
                        mb: 2,
                        lineHeight: 1.6,
                        minHeight: 60,
                      }}
                    >
                      {project.description}
                    </Typography>

                    {/* Tech Stack */}
                    <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ mb: 2, gap: 0.5 }}>
                      {project.stack.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            backgroundColor: theme.palette.primary.main + "20",
                            color: theme.palette.primary.main,
                            fontWeight: 500,
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </Stack>

                    {/* Links */}
                    <Stack direction="row" spacing={2}>
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            color: theme.palette.text.primary,
                            textDecoration: "none",
                            fontSize: "0.875rem",
                          }}
                        >
                          <GitHub fontSize="small" />
                          {t('projects.viewCode')}
                        </motion.a>
                      )}
                      {project.demo && (
                        <motion.a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4,
                            color: theme.palette.primary.main,
                            textDecoration: "none",
                            fontSize: "0.875rem",
                          }}
                        >
                          <Launch fontSize="small" />
                          {t('projects.liveDemo')}
                        </motion.a>
                      )}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
