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

const technicalSkills = [
  { name: "React TSX", icon: "/react.png", description: "React-DOM" },
  { name: "Java", icon: "/java.png", description: "React-DOM" },
  { name: "Spring Boot", icon: "/spring-boot.png", description: "React-DOM" },
  { name: "Python", icon: "/python.png", description: "React-DOM" },
  { name: "Web Development", icon: "/react.png", description: "React-DOM" },
  { name: "React TSX", icon: "/react.png", description: "React-DOM" },
];

const softSkills = [
  {
    name: "Problem-Solving",
    icon: "/problem.png",
    description:
      " I enjoy tackling complex challenges and continuously improving my skills, whether through coding challenges or working on my personal projects.",
  },
  {
    name: "Teamwork",
    icon: "/team.png",
    description:
      "I have worked with interdisciplinary teams, contributing to system integration and maintenance while ensuring smooth communication and efficient workflows.",
  },
  {
    name: "Self-Learning",
    icon: "/learning.png",
    description:
      "I consider myself a self-learner who thrives on acquiring new knowledge. Learning Spring Boot, React.tsx, Java, and Python has taught me to adapt quickly and stay up to date with the latest technologies.",
  },
  {
    name: "Adaptability",
    icon: "/adaptability.png",
    description:
      "I stay committed to my goals, push through obstacles, and keep moving forward whether in coding, learning, or personal growth.",
  },
  {
    name: "Project Organization",
    icon: "/organization.png",
    description:
      "I worked leading a team of five in developing a scheduling system has taught me how to plan, prioritize tasks, and coordinate effectively to meet deadlines.",
  },
  {
    name: "Creativity",
    icon: "/creativity.png",
    description:
      "I enjoy thinking outside the box, turning ideas into functional solutions, and pushing the boundaries of what’s possible. ",
  },
];

export default function Skills() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h4">Soft Skills</Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {softSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={true} timeout={1000}>
                <Card
                  sx={{
                    background: theme.palette.background.default,
                    borderRadius: 5,
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
        <Typography variant="h4">Technical Skills</Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {technicalSkills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in={true} timeout={1000}>
                <Card
                  sx={{
                    background: theme.palette.background.gradient,
                    borderRadius: 5,
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
