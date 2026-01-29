import { Typography } from "@mui/material";
import Navigation from "../components/Navigation";
import BackgroundParticles from "../components/BackgroundParticles";

export default function Home() {
  return (
    <div className="home-root">
      <style>{`
        .home-root {
          position: relative;
          min-height: 100vh;
          color: #e5e5e5;
          overflow: hidden;
        }
        .home-content {
          position: relative;
          z-index: 1;
          max-width: 1100px;
          margin: 0 auto;
          padding: 1.5rem 1.25rem 3rem;
        }
      `}</style>

      <BackgroundParticles />

      <Navigation />

      <div className="home-content">
        <Typography variant="h3" component="h1" gutterBottom>
          Bonjour,
          <br />
          Je suis Rakotomalala Harivola Ariane
        </Typography>
      </div>
    </div>
  );
}
