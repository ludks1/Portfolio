import {
  Box,
  Chip,
  Container,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';

const techIcons = [
  { name: "Laravel", icon: "/laravel.svg" },
  { name: "React", icon: "/react.png" },
  { name: "Java", icon: "/java.png" },
  { name: "SQL", icon: "/sql.png" },
  { name: "Git", icon: "/git.png" },
];

export default function WhyHireMeSection() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Box sx={{ textAlign: isMobile ? "center" : "left", mb: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            {t('whyHireMe.title')}
          </Typography>
          
          {/* Badge */}
          <Chip
            label={t('whyHireMe.badge')}
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
              fontWeight: 600,
              fontSize: "0.9rem",
              py: 2.5,
              px: 1,
              mb: 3,
            }}
          />
        </Box>

        <Grid container spacing={4} alignItems="center">
          {/* Description */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Typography
                variant="body1"
                sx={{
                  lineHeight: 1.8,
                  color: theme.palette.text.primary,
                  fontSize: "1.05rem",
                  textAlign: isMobile ? "center" : "left",
                }}
              >
                {t('whyHireMe.description')}
              </Typography>
            </motion.div>
          </Grid>

          {/* Tech Icons */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 3,
                  justifyContent: isMobile ? "center" : "flex-start",
                }}
              >
                {techIcons.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    whileHover={{ scale: 1.15, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          borderRadius: 3,
                          backgroundColor: theme.palette.background.paper,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
                          border: `1px solid ${theme.palette.secondary.main}30`,
                        }}
                      >
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          style={{
                            width: 36,
                            height: 36,
                            objectFit: "contain",
                          }}
                        />
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{
                          color: theme.palette.text.primary,
                          fontWeight: 500,
                        }}
                      >
                        {tech.name}
                      </Typography>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        {/* Highlights */}
        <Box sx={{ mt: 5 }}>
          <Grid container spacing={3}>
            {['highlight1', 'highlight2', 'highlight3'].map((key, index) => (
              <Grid item xs={12} sm={4} key={key}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: theme.palette.background.paper,
                      border: `1px solid ${theme.palette.secondary.main}30`,
                      textAlign: "center",
                      height: "100%",
                    }}
                  >
                    <Typography
                      variant="h6"
                      sx={{
                        color: theme.palette.primary.main,
                        fontWeight: 600,
                        mb: 1,
                      }}
                    >
                      {t(`whyHireMe.${key}.title`)}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.primary }}
                    >
                      {t(`whyHireMe.${key}.description`)}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
