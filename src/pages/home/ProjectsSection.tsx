import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "../../styles/theme";

const projects = [
  {
    name: "Task Manager",
    icon: "/src/assets/soon.png",
    description: "This project is currently under development.",
    link: "https://github.com/ludks1",
  },
];

export default function Projects() {
  return (
    <Box sx={{ marginTop: 4 }}>
      <Container sx={{ marginTop: 4, marginBottom: 4 }}>
        <Typography variant="h4" gutterBottom>
          Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  sx={{
                    background: theme.palette.background.paper,
                    borderRadius: 4,
                    boxShadow: "0px 8px 16px rgba(0,0,0,0.25)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    cursor: "pointer",
                    p: 2,
                  }}
                  onClick={() => window.open(project.link, "_blank")}
                >
                  <CardMedia
                    component="img"
                    height="140"
                    image={project.icon}
                    alt={project.name}
                    sx={{ objectFit: "contain", marginBottom: 2 }}
                  />
                  <CardContent>
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      {project.name}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {project.description}
                    </Typography>
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
