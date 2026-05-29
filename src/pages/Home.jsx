import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import Navigation from "../components/Navigation";
import BackgroundParticles from "../components/BackgroundParticles";

const skills = [
  "React",
  "JavaScript",
  "Material UI",
  "Responsive Design",
  "UI Animation",
  "Web Accessibility",
];

const projects = [
  {
    title: "Portfolio Experience",
    text: "A modern, animated personal site focused on clarity, readability, and smooth interactions.",
  },
  {
    title: "Frontend Components",
    text: "Reusable UI components with consistent spacing, visual hierarchy, and mobile-first behavior.",
  },
  {
    title: "Interactive UI",
    text: "Elegant transitions and motion to guide users naturally without visual noise.",
  },
];

export default function Home({ mode, onToggleMode }) {
  const theme = useTheme();

  return (
    <div className="home-root">
      <BackgroundParticles />
      <Navigation mode={mode} onToggleMode={onToggleMode} />

      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1100,
          mx: "auto",
          px: { xs: 2, sm: 3 },
          py: { xs: 4, md: 7 },
        }}
      >
        <Paper className="glass-card hero-animate" sx={{ p: { xs: 3, md: 4.5 } }}>
          <Stack spacing={2.4}>
            <Chip
              label="Frontend Developer"
              sx={{
                width: "fit-content",
                bgcolor:
                  theme.palette.mode === "dark" ? "rgba(139, 124, 247, 0.16)" : "rgba(95, 92, 230, 0.12)",
                color: theme.palette.text.primary,
                border:
                  theme.palette.mode === "dark"
                    ? "1px solid rgba(180, 166, 255, 0.34)"
                    : "1px solid rgba(95, 92, 230, 0.22)",
              }}
            />
            <Grid container spacing={3} alignItems="center">
              <Grid size={{ xs: 12, md: 8 }}>
                <Stack spacing={2}>
                  <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                      fontWeight: 800,
                      lineHeight: 1.1,
                      fontSize: { xs: "2rem", sm: "2.6rem", md: "3.2rem" },
                    }}
                  >
                    Bonjour, je suis
                    <br />
                    Rakotomalala Harivola Ariane
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ maxWidth: 720, color: "text.secondary", fontSize: "1.03rem" }}
                  >
                    Je cree des interfaces modernes, ergonomiques et performantes. Mon objectif est
                    de rendre chaque experience claire, intuitive et agreable sur mobile comme sur
                    desktop.
                  </Typography>
                  <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5}>
                    <Button size="large" variant="contained" href="mailto:ariane@example.com">
                      Me contacter
                    </Button>
                    <Button size="large" variant="outlined" component={RouterLink} to="/about">
                      Voir mon profil
                    </Button>
                  </Stack>
                </Stack>
              </Grid>

              <Grid size={{ xs: 12, md: 4 }}>
                <Box sx={{ position: "relative", width: "fit-content", mx: 0 }}>
                  <Avatar
                    src="/profile-photo.jpg"
                    alt="Photo de Ariane"
                    sx={{
                      width: { xs: 160, md: 190 },
                      height: { xs: 160, md: 190 },
                      border: "3px solid",
                      borderColor:
                        theme.palette.mode === "dark" ? "rgba(180, 166, 255, 0.5)" : "rgba(95, 92, 230, 0.35)",
                      boxShadow: "0 12px 30px rgba(0,0,0,0.2)",
                    }}
                  >
                    AR
                  </Avatar>
                  <Chip
                    label="hello world"
                    size="small"
                    sx={{
                      position: "absolute",
                      right: -8,
                      bottom: 14,
                      fontWeight: 600,
                      bgcolor: theme.palette.mode === "dark" ? "rgba(17, 24, 39, 0.92)" : "rgba(255,255,255,0.92)",
                      border: "1px solid",
                      borderColor:
                        theme.palette.mode === "dark" ? "rgba(180, 166, 255, 0.5)" : "rgba(95, 92, 230, 0.3)",
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Stack>
        </Paper>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper className="glass-card section-animate" sx={{ p: 3, height: "100%" }}>
              <Stack spacing={1.5}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  About
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Passionnee par le design fonctionnel, je construis des interfaces qui reduisent
                  l'effort utilisateur grace a une bonne hierarchie visuelle, des contrastes
                  lisibles et des interactions fluides.
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Paper className="glass-card section-animate delay-1" sx={{ p: 3, height: "100%" }}>
              <Stack spacing={1.5}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Skills
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      sx={{
                        bgcolor:
                          theme.palette.mode === "dark"
                            ? "rgba(148, 163, 184, 0.13)"
                            : "rgba(15, 23, 42, 0.06)",
                        color: "text.primary",
                        border:
                          theme.palette.mode === "dark"
                            ? "1px solid rgba(148, 163, 184, 0.3)"
                            : "1px solid rgba(15, 23, 42, 0.14)",
                      }}
                    />
                  ))}
                </Box>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={12}>
            <Paper className="glass-card section-animate delay-2" sx={{ p: 3 }}>
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Projects
                </Typography>
                <Grid container spacing={2}>
                  {projects.map((project) => (
                    <Grid key={project.title} size={{ xs: 12, md: 4 }}>
                      <Paper
                        sx={{
                          p: 2.2,
                          borderRadius: 3,
                          height: "100%",
                          bgcolor:
                            theme.palette.mode === "dark"
                              ? "rgba(15, 20, 34, 0.65)"
                              : "rgba(248, 250, 255, 0.95)",
                          border:
                            theme.palette.mode === "dark"
                              ? "1px solid rgba(148, 163, 184, 0.22)"
                              : "1px solid rgba(15, 23, 42, 0.12)",
                          transition: "transform 220ms ease, border-color 220ms ease",
                          "&:hover": {
                            transform: "translateY(-4px)",
                            borderColor:
                              theme.palette.mode === "dark"
                                ? "rgba(196, 181, 253, 0.65)"
                                : "rgba(95, 92, 230, 0.44)",
                          },
                        }}
                      >
                        <Typography sx={{ fontWeight: 700, mb: 0.8 }}>{project.title}</Typography>
                        <Typography sx={{ color: "text.secondary" }}>
                          {project.text}
                        </Typography>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={12}>
            <Paper className="glass-card section-animate delay-2" sx={{ p: 3 }}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={2}
                alignItems={{ xs: "flex-start", md: "center" }}
                justifyContent="space-between"
              >
                <Typography sx={{ color: "text.secondary" }}>
                  Disponible pour collaborer sur des projets web modernes.
                </Typography>
                <Button variant="contained">
                  ariane@example.com
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
