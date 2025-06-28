"use client";
import Image from "next/image";
import { Box, Button, Container, Typography, Paper } from "@mui/material";
export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        id="hero"
        sx={{
          bgcolor: "primary.main",
          color: "#fff",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Image
            src="/images/Logo.png"
            alt="ByS Growth Marketing Logo"
            width={220}
            height={120}
            style={{ marginBottom: 24 }}
            priority
          />
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight={700}
          >
            Impulsa tu crecimiento digital
          </Typography>
          <Typography variant="h6" component="p" gutterBottom>
            Estrategias de Growth Marketing para empresas que quieren crecer en
            serio.
          </Typography>
          <Button
            href="#contacto"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 4 }}
          >
            ¡Quiero crecer!
          </Button>
        </Container>
      </Box>

      {/* Sobre Nosotros */}
      <Box id="sobre-nosotros" sx={{ bgcolor: "#fff", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Sobre nosotros
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Somos una agencia especializada en Growth Marketing. Ayudamos a
            empresas a escalar sus resultados digitales combinando creatividad,
            datos y tecnología. Nuestro equipo está formado por expertos en
            marketing digital, analítica, automatización y diseño.
          </Typography>
        </Container>
      </Box>

      {/* Servicios */}
      <Box id="servicios" sx={{ bgcolor: "secondary.main", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Servicios
          </Typography>
          <Box
            display="grid"
            gap={4}
            sx={{
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(3, 1fr)'
              }
            }}
          >
            <Paper elevation={3} sx={{ p: 3, minHeight: 180 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Estrategia de Growth
              </Typography>
              <Typography variant="body2">
                Diagnóstico, planificación y ejecución de estrategias de
                crecimiento digital personalizadas.
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 3, minHeight: 180 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Automatización & Funnels
              </Typography>
              <Typography variant="body2">
                Implementación de embudos de conversión y automatización de
                marketing para escalar resultados.
              </Typography>
            </Paper>
            <Paper elevation={3} sx={{ p: 3, minHeight: 180 }}>
              <Typography variant="h6" fontWeight={600} gutterBottom>
                Analítica & Experimentación
              </Typography>
              <Typography variant="body2">
                Medición, análisis y experimentos A/B para optimizar cada etapa
                del proceso de ventas.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Proceso */}
      <Box id="proceso" sx={{ bgcolor: "#fff", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Nuestro proceso
          </Typography>
          <Box
            display="grid"
            gap={4}
            sx={{
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(4, 1fr)'
              }
            }}
          >
            <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600}>
                1. Diagnóstico
              </Typography>
              <Typography variant="body2">
                Analizamos tu negocio y detectamos oportunidades.
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600}>
                2. Estrategia
              </Typography>
              <Typography variant="body2">
                Diseñamos un plan de acción a medida.
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600}>
                3. Ejecución
              </Typography>
              <Typography variant="body2">
                Implementamos y optimizamos campañas.
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 2, textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600}>
                4. Escalado
              </Typography>
              <Typography variant="body2">
                Medimos, aprendemos y escalamos resultados.
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Testimonios */}
      <Box id="testimonios" sx={{ bgcolor: "secondary.main", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Testimonios
          </Typography>
          <Box
            display="grid"
            gap={4}
            sx={{
              gridTemplateColumns: {
                xs: '1fr',
                md: '1fr 1fr'
              }
            }}
          >
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="body1" gutterBottom>
                “Gracias a ByS logramos triplicar nuestros leads en solo 3
                meses. El equipo es súper profesional y proactivo.”
              </Typography>
              <Typography variant="subtitle2" color="primary">
                — Cliente de SaaS
              </Typography>
            </Paper>
            <Paper elevation={1} sx={{ p: 3 }}>
              <Typography variant="body1" gutterBottom>
                “La automatización y los experimentos A/B nos permitieron escalar
                ventas sin aumentar el presupuesto.”
              </Typography>
              <Typography variant="subtitle2" color="primary">
                — Ecommerce
              </Typography>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* Carrusel de imágenes */}
      <Box id="carrusel" sx={{ bgcolor: "#fff", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Casos de éxito
          </Typography>
          {/* Aquí se puede integrar un carrusel de imágenes con MUI o Swiper.js */}
          <Box
            sx={{
              display: "flex",
              gap: 2,
              overflowX: "auto",
              py: 2,
            }}
          >
            <Image
              src="/images/caso1.jpg"
              alt="Caso 1"
              width={320}
              height={200}
              style={{ borderRadius: 8 }}
            />
            <Image
              src="/images/caso2.jpg"
              alt="Caso 2"
              width={320}
              height={200}
              style={{ borderRadius: 8 }}
            />
            <Image
              src="/images/caso3.jpg"
              alt="Caso 3"
              width={320}
              height={200}
              style={{ borderRadius: 8 }}
            />
          </Box>
        </Container>
      </Box>

      {/* Contacto */}
      <Box
        id="contacto"
        sx={{
          bgcolor: "primary.main",
          color: "#fff",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            component="h2"
            fontWeight={700}
            gutterBottom
          >
            ¿Listo para crecer?
          </Typography>
          <Typography variant="body1" gutterBottom>
            Agenda una llamada o contáctanos para recibir una propuesta
            personalizada.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            href="https://forms.gle/xxxxxxxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ mt: 3 }}
          >
            Contactar por Google Forms
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
