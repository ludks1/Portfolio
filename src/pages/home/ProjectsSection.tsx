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

const projects = [
  {
    name: "React TSX",
    icon: "/react.png",
    description:
      "Built responsive, component-based interfaces using React and TypeScript",
  },
  {
    name: "Java",
    icon: "/java.png",
    description:
      "Developed backend systems and desktop applications using object-oriented programming",
  },
  {
    name: "Spring Boot",
    icon: "/spring-boot.png",
    description:
      "Created RESTful APIs and managed data persistence in full-stack web applications",
  },
  {
    name: "Python",
    icon: "/python.png",
    description: "Worked on artificial vision, data analysis projects",
  },
  {
    name: "Web Development",
    icon: "/web-dev.png",
    description: "Designed and built web pages with HTML, CSS, and JavaScript",
  },
  {
    name: "SQL",
    icon: "/sql.png",
    description:
      "Managed relational databases and wrote queries for data handling",
  },
];

export default function Projects() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h4">Soft Skills</Typography>
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {projects.map((project, index) => (
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
                  <CardHeader
                    title={project.name}
                    sx={{ textAlign: "center" }}
                  />
                  <CardMedia
                    component="img"
                    height="100"
                    image={project.icon}
                    alt={project.name}
                    sx={{
                      objectFit: "contain",
                    }}
                  />
                  <CardContent>
                    <Typography variant="body1">
                      {project.description}
                    </Typography>
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
