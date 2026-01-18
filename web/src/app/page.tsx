"use client";
import React from "react";
import Image from "next/image";
import { Box, Button, Container, Typography, Paper, AppBar, Toolbar, Link as MuiLink, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Home() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navLinks = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Nosotros', href: '#nosotros' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Proceso', href: '#proceso' },
    // { label: 'Testimonios', href: '#testimonios' },
    // { label: 'Casos de éxito', href: '#carrusel' },
    { label: 'Contacto', href: '#contacto' },
  ];

  // Updated styles for modules with reduced border radius
  const moduleStyles = {
    borderRadius: 4, // Reduced border radius for a sharper look
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
    background: 'linear-gradient(135deg, #ffffff 0%, #f7f7f7 100%)', // Light gradient for a clean look
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover animation
    '&:hover': {
      transform: 'translateY(-4px)', // Subtle lift on hover
      boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)', // Enhanced shadow on hover
    },
  };

  return (
    <Box>
      {/* Navbar */}
      <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: '#fff', borderBottom: '1px solid #e0e0e0' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: { xs: 1, sm: 2 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Image 
              src="/images/Logo.jpeg" 
              alt="Logo" 
              width={50} 
              height={50} 
              style={{ borderRadius: '50%' }} 
            />
            <Typography variant="h6" color="primary" fontWeight={700}>
              SyB Growth Marketing
            </Typography>
          </Box>
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
          backgroundImage: 'url(/images/Banner2.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            fontWeight={700}
          >
            Impulsa tu crecimiento digital con SyB Growth Marketing
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

      {/* Nosotros */}
      <Box id="nosotros" sx={{ bgcolor: "#fff", py: 8 }}>
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            color="primary"
            fontWeight={700}
            gutterBottom
          >
            Nosotros
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            En SyB Growth Marketing creemos que el crecimiento digital no tiene por qué ser complicado. Somos una agencia especializada en Growth Marketing que ayuda a empresas a crecer de forma inteligente, escalable y medible, sin perder de vista lo más importante: tus objetivos de negocio.
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
            Entendemos que cada empresa es única, por eso diseñamos estrategias personalizadas que combinan creatividad, tecnología y análisis de datos. Nuestro equipo está formado por profesionales apasionados por el marketing digital, la analítica, la automatización y el diseño, todos comprometidos con tu éxito.
          </Typography>
          <Typography variant="body1" color="text.secondary">
            No trabajamos con fórmulas mágicas ni promesas vacías. Nos enfocamos en construir relaciones de largo plazo basadas en resultados concretos, transparencia y mejora continua. Queremos ser tu socio estratégico en el camino hacia el crecimiento digital.
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
            textAlign="left"
            sx={{ mb: 4 }}
          >
            Servicios
          </Typography>
          <Box
            display="grid"
            gap={2}
            sx={{
              gridTemplateColumns: {
                xs: '1fr',
                md: 'repeat(2, 1fr)',
                lg: 'repeat(4, 1fr)'
              },
              justifyItems: {
                xs: 'center', // Center items for single-column layout
                md: 'start'   // Default alignment for multi-column layout
              },
              px: { xs: 2, md: 4, lg: 6 },
              textAlign: 'center'
            }}
          >
            {[{
              title: "Programación",
              description: "Integración de herramientas necesarias para el éxito de tu estrategia digital.",
              image: "/images/Programacion.png"
            }, {
              title: "Marketing de contenidos",
              description: "Creamos contenido de valor que educa, entretiene y posiciona tu marca.",
              image: "/images/Mkt.png"
            }, {
              title: "SEO (Optimización para Motores de Búsqueda)",
              description: "Tu negocio es encontrado por clientes potenciales en Google. Más visibilidad, más tráfico.",
              image: "/images/SEO.png"
            }, {
              title: "SEM y Google ADS",
              description: "Creamos anuncios en Google para que estés visible justo cuando la gente busca lo que ofreces.",
              image: "/images/GoogleAds.png"
            }, {
              title: "Meta ADS",
              description: "Diseñamos campañas de anuncios para llegar a tu cliente ideal en las plataformas donde pasa más tiempo.",
              image: "/images/MetaAds.png"
            }, {
              title: "Email marketing",
              description: "Diseñamos estrategias de correo electrónico para comunicarte directamente con tus clientes, construir lealtad y animarlos a comprar de nuevo.",
              image: "/images/Email.png"
            }, {
              title: "Armado de páginas web",
              description: "Creamos tu tienda online o tu página de presentación profesional, pensada para que tus visitantes se conviertan en clientes.",
              image: "/images/Web.png"
            }, {
              title: "Integraciones",
              description: "Conectamos tus herramientas digitales como CMS, CRM, Marketing Automation, ERP, y más para optimizar procesos y maximizar resultados.",
              image: "/images/Integraciones.png"
            }].map((service, index) => (
              <Box key={index} sx={{ bgcolor: '#fff', border: '1px solid #e0e0e0', borderRadius: 4, p: 2, width: '75%', mb: 2, boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                {service.image && (
                  <Box
                    component="img"
                    src={service.image}
                    alt={service.title}
                    sx={{ width: '100%', height: 'auto', borderRadius: 4, mb: 2 }}
                  />
                )}
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  {service.title}
                </Typography>
                <Typography variant="body2">
                  {service.description}
                </Typography>
              </Box>
            ))}
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
            <Paper elevation={2} sx={{ ...moduleStyles, p: 3, textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600}>
                1. Diagnóstico
              </Typography>
              <Typography variant="body2">
                Analizamos tu negocio y detectamos oportunidades.
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ ...moduleStyles, p: 3, textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600}>
                2. Estrategia
              </Typography>
              <Typography variant="body2">
                Diseñamos un plan de acción a medida.
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ ...moduleStyles, p: 3, textAlign: "center" }}>
              <Typography variant="h6" fontWeight={600}>
                3. Ejecución
              </Typography>
              <Typography variant="body2">
                Implementamos y optimizamos campañas.
              </Typography>
            </Paper>
            <Paper elevation={2} sx={{ ...moduleStyles, p: 3, textAlign: "center" }}>
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

      {/* FAQ - Preguntas Frecuentes */}
      <Box id="faq" sx={{ bgcolor: "#f7f7f7", py: 8 }}>
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
                <Typography fontWeight={600}>¿Qué diferencia a SyB Growth Marketing de una agencia tradicional?</Typography>
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
      {/* <Box id="carrusel" sx={{ bgcolor: "primary.main", color: "#fff", py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            color="inherit" // Ensures text color adapts to the section's color
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
      </Box> */}

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

      {/* Footer */}
      <Box component="footer" sx={{ bgcolor: "#222", color: "#fff", py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', alignItems: 'center', gap: 3 }}>
            {/* Logo y nombre */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Image 
                src="/images/Logo.jpeg" 
                alt="Logo" 
                width={40} 
                height={40} 
                style={{ borderRadius: '50%' }} 
              />
              <Typography variant="h6" fontWeight={600}>
                SyB Growth Marketing
              </Typography>
            </Box>

            {/* Redes sociales */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <Typography variant="body2" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
                Síguenos:
              </Typography>
              <IconButton 
                component="a" 
                href="https://www.instagram.com/syb.growthmarketing" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ color: '#fff', '&:hover': { color: '#E4405F' } }}
                aria-label="Instagram"
              >
                <InstagramIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://www.facebook.com/share/1FbaV3LT1Y/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ color: '#fff', '&:hover': { color: '#1877F2' } }}
                aria-label="Facebook"
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="https://wa.me/541140619556" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ color: '#fff', '&:hover': { color: '#25D366' } }}
                aria-label="WhatsApp"
              >
                <WhatsAppIcon />
              </IconButton>
              <IconButton 
                component="a" 
                href="mailto:sybgrowthmarketing@gmail.com"
                sx={{ color: '#fff', '&:hover': { color: '#EA4335' } }}
                aria-label="Email"
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Copyright */}
          <Box sx={{ mt: 3, pt: 2, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center' }}>
            <Typography variant="body2" color="rgba(255,255,255,0.7)">
              © {new Date().getFullYear()} SyB Growth Marketing. Todos los derechos reservados.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
