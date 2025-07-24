import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const technicalSkills = [
    {
      name: t('skills.technical.react.name'),
      icon: "/react.png",
      description: t('skills.technical.react.description'),
    },
    {
      name: t('skills.technical.java.name'),
      icon: "/java.png",
      description: t('skills.technical.java.description'),
    },
    {
      name: t('skills.technical.laravel.name'),
      icon: "/laravel.svg",
      description: t('skills.technical.laravel.description'),
    },
    {
      name: t('skills.technical.python.name'),
      icon: "/python.png",
      description: t('skills.technical.python.description'),
    },
    {
      name: t('skills.technical.webDev.name'),
      icon: "/web-dev.png",
      description: t('skills.technical.webDev.description'),
    },
    {
      name: t('skills.technical.sql.name'),
      icon: "/sql.png",
      description: t('skills.technical.sql.description'),
    },
  ];

  const softSkills = [
    {
      name: t('skills.soft.problemSolving.name'),
      icon: "/problem.png",
      description: t('skills.soft.problemSolving.description'),
    },
    {
      name: t('skills.soft.teamwork.name'),
      icon: "/team.png",
      description: t('skills.soft.teamwork.description'),
    },
    {
      name: t('skills.soft.selfLearning.name'),
      icon: "/learning.png",
      description: t('skills.soft.selfLearning.description'),
    },
    {
      name: t('skills.soft.adaptability.name'),
      icon: "/adaptability.png",
      description: t('skills.soft.adaptability.description'),
    },
    {
      name: t('skills.soft.organization.name'),
      icon: "/organization.png",
      description: t('skills.soft.organization.description'),
    },
    {
      name: t('skills.soft.creativity.name'),
      icon: "/creativity.png",
      description: t('skills.soft.creativity.description'),
    },
  ];

  return (
    <Box sx={{ marginTop: 4 }}>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h4">{t('skills.softSkills')}</Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {softSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={true} timeout={1000}>
                <Card
                  sx={{
                    background: theme.palette.background.paper,
                    backdropFilter: "blur(10px)",
                    p: 3,
                    borderRadius: 5,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    height: "100%",
                    minHeight: 250,
                  }}
                >
                  <CardHeader title={skill.name} sx={{ textAlign: "center" }} />
                  <CardMedia
                    component="img"
                    height="100"
                    image={skill.icon}
                    alt={skill.name}
                    sx={{
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1">{skill.description}</Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h4">{t('skills.technicalSkills')}</Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {technicalSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={true} timeout={1000}>
                <Card
                  sx={{
                    background: theme.palette.background.paper,
                    backdropFilter: "blur(10px)",
                    p: 3,
                    borderRadius: 5,
                    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                    height: "100%",
                    minHeight: 250,
                  }}
                >
                  <CardHeader title={skill.name} sx={{ textAlign: "center" }} />
                  <CardMedia
                    component="img"
                    height="100"
                    image={skill.icon}
                    alt={skill.name}
                    sx={{
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1">{skill.description}</Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
