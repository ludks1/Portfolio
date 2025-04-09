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
  {
    name: "React TSX",
    icon: "/public/react.png",
    description:
      "Built responsive, component-based interfaces using React and TypeScript",
  },
  {
    name: "Java",
    icon: "/public/java.png",
    description:
      "Developed backend systems and desktop applications using object-oriented programming",
  },
  {
    name: "Spring Boot",
    icon: "/public/spring-boot.png",
    description:
      "Created RESTful APIs and managed data persistence in full-stack web applications",
  },
  {
    name: "Python",
    icon: "/public/python.png",
    description: "Worked on artificial vision, data analysis projects",
  },
  {
    name: "Web Development",
    icon: "/public/web-dev.png",
    description: "Designed and built web pages with HTML, CSS, and JavaScript",
  },
  {
    name: "SQL",
    icon: "/public/sql.png",
    description:
      "Managed relational databases and wrote queries for data handling",
  },
];

const softSkills = [
  {
    name: "Problem-Solving",
    icon: "/public/problem.png",
    description:
      " I enjoy tackling complex challenges and continuously improving my skills, whether through coding challenges or working on my personal projects.",
  },
  {
    name: "Teamwork",
    icon: "/public/team.png",
    description:
      "I have worked with interdisciplinary teams, contributing to system integration and maintenance while ensuring smooth communication and efficient workflows.",
  },
  {
    name: "Self-Learning",
    icon: "/public/learning.png",
    description:
      "I consider myself a self-learner who thrives on acquiring new knowledge. Learning Spring Boot, React.tsx, Java, and Python has taught me to adapt quickly and stay up to date with the latest technologies.",
  },
  {
    name: "Adaptability",
    icon: "/public/adaptability.png",
    description:
      "I stay committed to my goals, push through obstacles, and keep moving forward whether in coding, learning, or personal growth.",
  },
  {
    name: "Project Organization",
    icon: "/public/organization.png",
    description:
      "I worked leading a team of five in developing a scheduling system has taught me how to plan, prioritize tasks, and coordinate effectively to meet deadlines.",
  },
  {
    name: "Creativity",
    icon: "/public/creativity.png",
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
        <Typography variant="h4">Technical Skills</Typography>
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
