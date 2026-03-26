import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { LinkedIn, GitHub, Email, Download, WhatsApp, Send } from "@mui/icons-material";
import { motion } from "framer-motion";
import theme from "../../styles/theme";
import { useTranslation } from 'react-i18next';
import { useState } from "react";

export default function ContactSection() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Ludwind_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic - can be connected to backend later
    console.log("Form submitted:", formData);
    // For now, open email client with pre-filled data
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.open(`mailto:ingrotstein@gmail.com?subject=${subject}&body=${body}`);
  };

  // Replace with your WhatsApp number
  const whatsappNumber = "YOUR_WHATSAPP_NUMBER";
  const whatsappMessage = encodeURIComponent(t('contact.whatsappMessage'));

  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{ textAlign: isMobile ? "center" : "left", fontWeight: 600 }}>
          {t('contact.formTitle')}
        </Typography>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  backgroundColor: theme.palette.background.paper,
                  border: `1px solid ${theme.palette.secondary.main}30`,
                }}
              >
                <Stack spacing={3}>
                  <TextField
                    fullWidth
                    name="name"
                    label={t('contact.form.name')}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: theme.palette.text.primary,
                        "& fieldset": {
                          borderColor: theme.palette.secondary.main + "50",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    name="email"
                    label={t('contact.form.email')}
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: theme.palette.text.primary,
                        "& fieldset": {
                          borderColor: theme.palette.secondary.main + "50",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                  <TextField
                    fullWidth
                    name="message"
                    label={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    multiline
                    rows={4}
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: theme.palette.text.primary,
                        "& fieldset": {
                          borderColor: theme.palette.secondary.main + "50",
                        },
                        "&:hover fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: theme.palette.primary.main,
                        },
                      },
                      "& .MuiInputLabel-root": {
                        color: theme.palette.text.primary,
                      },
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    endIcon={<Send />}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: "#fff",
                      py: 1.5,
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark || "#cc0066",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 12px rgba(255, 0, 127, 0.4)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    {t('contact.form.send')}
                  </Button>
                </Stack>
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info & Social Links */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Box sx={{ textAlign: isMobile ? "center" : "left" }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {t('contact.otherWays')}
                </Typography>
                <Typography variant="body1" sx={{ mb: 3, color: theme.palette.text.primary }}>
                  {t('contact.description')}
                </Typography>

                {/* WhatsApp Button */}
                <Button
                  variant="contained"
                  startIcon={<WhatsApp />}
                  component="a"
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#25D366",
                    color: "#fff",
                    mb: 3,
                    py: 1.5,
                    px: 3,
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#128C7E",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.3s ease",
                  }}
                >
                  {t('contact.whatsapp')}
                </Button>

                {/* Download CV */}
                <Box sx={{ mb: 3 }}>
                  <Button
                    variant="outlined"
                    startIcon={<Download />}
                    onClick={handleDownloadCV}
                    sx={{
                      borderColor: theme.palette.secondary.main,
                      color: theme.palette.text.primary,
                      py: 1.5,
                      px: 3,
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": {
                        borderColor: theme.palette.primary.main,
                        backgroundColor: "rgba(255, 0, 127, 0.1)",
                      },
                    }}
                  >
                    {t('contact.downloadCV')}
                  </Button>
                </Box>

                {/* Social Links */}
                <Typography variant="subtitle2" sx={{ mb: 1, fontWeight: 600 }}>
                  {t('contact.followMe')}
                </Typography>
                <Stack direction="row" spacing={1} justifyContent={isMobile ? "center" : "flex-start"}>
                  <IconButton
                    component="a"
                    href="https://www.linkedin.com/in/ingrotsteinsw/?locale=en_US"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#0A66C2",
                      backgroundColor: theme.palette.background.paper,
                      "&:hover": {
                        backgroundColor: "rgba(10, 102, 194, 0.1)",
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <LinkedIn />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="https://github.com/ludks1"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: theme.palette.text.primary,
                      backgroundColor: theme.palette.background.paper,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <GitHub />
                  </IconButton>

                  <IconButton
                    component="a"
                    href="mailto:ingrotstein@gmail.com"
                    sx={{
                      color: "#EA4335",
                      backgroundColor: theme.palette.background.paper,
                      "&:hover": {
                        backgroundColor: "rgba(234, 67, 53, 0.1)",
                        transform: "translateY(-3px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    <Email />
                  </IconButton>
                </Stack>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
