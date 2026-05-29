import { Avatar, Box, Chip, Container, Grid, Paper, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Navigation from "../components/Navigation";
import BackgroundParticles from "../components/BackgroundParticles";

const values = [
  "Ergonomie d'abord",
  "Design system propre",
  "Accessibilite",
  "Performance UI",
];

export default function About({ mode, onToggleMode }) {
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
          <Grid container spacing={3} alignItems="center">
            <Grid size={{ xs: 12, md: 8 }}>
              <Stack spacing={1.8}>
                <Chip label="About me" sx={{ width: "fit-content" }} />
                <Typography variant="h3" sx={{ fontWeight: 800, lineHeight: 1.15 }}>
                  Je construis des interfaces claires et modernes
                </Typography>
                <Typography sx={{ color: "text.secondary", maxWidth: 760 }}>
                  Je suis frontend developer et je me concentre sur la lisibilite, les espacements
                  et la coherence visuelle. Chaque section est pensee pour guider l'utilisateur sans
                  surcharge.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Box sx={{ position: "relative", width: "fit-content", mx: 0 }}>
                <Avatar
                  src="/profile-photo.jpg"
                  alt="Photo de Ariane"
                  sx={{
                    width: { xs: 148, md: 172 },
                    height: { xs: 148, md: 172 },
                    border: "3px solid",
                    borderColor:
                      theme.palette.mode === "dark" ? "rgba(180, 166, 255, 0.5)" : "rgba(95, 92, 230, 0.35)",
                  }}
                >
                  AR
                </Avatar>
                <Chip
                  label="hello world"
                  size="small"
                  sx={{
                    position: "absolute",
                    right: -10,
                    bottom: 10,
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
        </Paper>

        <Grid container spacing={2} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Paper className="glass-card section-animate delay-1" sx={{ p: 3, height: "100%" }}>
              <Stack spacing={1.5}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Ma vision
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  Une bonne interface doit etre simple a comprendre, rapide a utiliser et agreable a
                  lire. Je prefere une structure nette plutot qu'un design surcharge.
                </Typography>
              </Stack>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Paper className="glass-card section-animate delay-2" sx={{ p: 3, height: "100%" }}>
              <Stack spacing={1.5}>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Principes
                </Typography>
                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                  {values.map((item) => (
                    <Chip key={item} label={item} />
                  ))}
                </Box>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
