"use client";
import React from "react";
import Image from "next/image";
import { Box, Button, Container, Typography, Paper, AppBar, Toolbar, Link as MuiLink, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre nosotros', href: '#sobre-nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Casos de éxito', href: '#carrusel' },
    { label: 'Contacto', href: '#contacto' },
  ];
  return (
    <Box>
      {/* Navbar */}
      <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 1, sm: 2 } }}>
          <Link href="#hero" style={{ textDecoration: 'none' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Box sx={{ width: 48, height: 48, borderRadius: '50%', overflow: 'hidden', mr: 2, bgcolor: '#fff', boxShadow: '0 2px 8px #0001', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image src="/images/Logo.png" alt="ByS Growth Marketing Logo" width={48} height={48} style={{ width: '100%', height: '100%', objectFit: 'cover' }} priority />
              </Box>
              <Typography variant="h6" color="primary" fontWeight={700} sx={{ display: { xs: 'none', sm: 'block' } }}>
                ByS Growth
              </Typography>
            </Box>
          </Link>
          {/* Desktop links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
            {navLinks.map(link => (
              <MuiLink key={link.href} href={link.href} color="inherit" underline="none" sx={{ fontWeight: 500, px: 1, py: 0.5, borderRadius: 1, '&:hover': { bgcolor: 'primary.light', color: '#fff' } }}>{link.label}</MuiLink>
            ))}
          </Box>
          {/* Mobile menu button */}
          <IconButton edge="end" color="inherit" aria-label="menu" sx={{ display: { xs: 'flex', md: 'none' } }} onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
        {/* Drawer for mobile */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 220 }} role="presentation" onClick={() => setDrawerOpen(false)}>
            <List>
              {navLinks.map(link => (
                <ListItem key={link.href} disablePadding>
                  <ListItemButton component="a" href={link.href}>
                    <ListItemText primary={link.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </AppBar>
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

      {/* FAQ - Preguntas Frecuentes */}
      <Box id="faq" sx={{ bgcolor: "#fff", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Preguntas Frecuentes
          </Typography>
          <Box sx={{ mt: 4 }}>
            <Accordion disableGutters elevation={0} square sx={{ mb: 2, border: 'none', boxShadow: 'none' }}>
              <AccordionSummary expandIcon={<span style={{fontWeight:700}}>&#x25BC;</span>}>
                <Typography fontWeight={600}>¿Qué es el Growth Marketing?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Es una metodología que combina creatividad, análisis de datos y experimentación para lograr un crecimiento acelerado y sostenible en tu negocio digital. Se basa en pruebas constantes y optimización de cada etapa del embudo de ventas.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0} square sx={{ mb: 2, border: 'none', boxShadow: 'none' }}>
              <AccordionSummary expandIcon={<span style={{fontWeight:700}}>&#x25BC;</span>}>
                <Typography fontWeight={600}>¿Qué servicios ofrecen?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Ofrecemos diagnóstico y estrategia de crecimiento, automatización de marketing y embudos, analítica avanzada, experimentos A/B, optimización de conversiones y campañas digitales personalizadas.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0} square sx={{ mb: 2, border: 'none', boxShadow: 'none' }}>
              <AccordionSummary expandIcon={<span style={{fontWeight:700}}>&#x25BC;</span>}>
                <Typography fontWeight={600}>¿Para qué tipo de empresas es el Growth Marketing?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Trabajamos con empresas de todos los tamaños que buscan escalar sus resultados digitales, desde startups hasta pymes y grandes compañías. Adaptamos la estrategia a cada necesidad.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0} square sx={{ mb: 2, border: 'none', boxShadow: 'none' }}>
              <AccordionSummary expandIcon={<span style={{fontWeight:700}}>&#x25BC;</span>}>
                <Typography fontWeight={600}>¿Cómo miden los resultados?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Utilizamos herramientas de analítica y dashboards personalizados para medir el impacto de cada acción, reportando métricas clave como leads, conversiones, ROI y crecimiento mes a mes.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion disableGutters elevation={0} square sx={{ mb: 2, border: 'none', boxShadow: 'none' }}>
              <AccordionSummary expandIcon={<span style={{fontWeight:700}}>&#x25BC;</span>}>
                <Typography fontWeight={600}>¿Qué diferencia a ByS Growth Marketing de una agencia tradicional?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body2">
                  Nos enfocamos en el crecimiento real y medible, priorizando la experimentación, la automatización y la toma de decisiones basada en datos. Nuestro equipo es ágil y está siempre actualizado en las últimas tendencias digitales.
                </Typography>
              </AccordionDetails>
            </Accordion>
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
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            speed={1200}
            breakpoints={{
              600: { slidesPerView: 2 },
              900: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
            style={{ padding: "24px 0" }}
          >
            {[1, 2, 3, 4, 5].map((num) => (
              <SwiperSlide key={num}>
                <Image
                  src={`/images/caso${num}.jpg`}
                  alt={`Caso ${num}`}
                  width={320}
                  height={200}
                  style={{ borderRadius: 8, width: "100%", height: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
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
            Agenda una llamada o contáctanos para recibir una propuesta personalizada.
          </Typography>
          <Box
            component="form"
            action="https://docs.google.com/forms/d/e/1FAIpQLScGQ0faf3KB94SFBG2U3mC4MJNlKCFapJv5Bpj5bFlN6R_37A/formResponse"
            method="POST"
            target="_blank"
            sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2, bgcolor: "#fff", color: "#222", borderRadius: 2, p: 3 }}
          >
            {/* Reemplaza los entry.XXXXXXXX por los IDs reales de tu Google Form */}
            <input type="hidden" name="fvv" value="1" />
            <input type="hidden" name="fbzx" value="" />
            <input type="hidden" name="pageHistory" value="0" />
            <input type="hidden" name="draftResponse" value="[]" />
            <input type="hidden" name="usp" value="pp_url" />
            <input type="text" name="entry.384707505" placeholder="Nombre" required style={{ marginBottom: 16, padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
            <input type="text" name="entry.218239955" placeholder="Apellido" required style={{ marginBottom: 16, padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
            <input type="email" name="entry.1511599766" placeholder="Email" required style={{ marginBottom: 16, padding: 8, borderRadius: 4, border: '1px solid #ccc' }} />
            <textarea name="entry.1293024095" placeholder="Comentario" required rows={3} style={{ marginBottom: 16, padding: 8, borderRadius: 4, border: '1px solid #ccc', resize: 'vertical' }} />
            <Button type="submit" variant="contained" color="primary">
              Enviar
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
