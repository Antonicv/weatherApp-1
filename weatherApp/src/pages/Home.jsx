// Home.jsx
// Página principal de la aplicación
// ------------------------------------------------------------
// Esta página muestra la página principal de la aplicación con información general y enlaces a otras páginas.

// Importa los hooks de React y de traducción
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Typography, Button, Grid, Card, CardContent, Box, useTheme } from '@mui/material';
import WeatherIcon from '@mui/icons-material/WbSunny';
import MapIcon from '@mui/icons-material/Map';

// Define el componente Home
export default function Home() {
  const { t } = useTranslation(['common', 'home']);
  const theme = useTheme();
// Devuelve el componente
  return (
    <Container>
      <Box sx={{ textAlign: 'center', my: 5 }}>
        <Typography variant="h2" gutterBottom>
          {t('home:title')}
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          {t('home:subtitle')}
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          {t('home:description')}
        </Typography>
      </Box>

      <Grid container spacing={4} sx={{ my: 4 }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: theme.palette.background.paper }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <WeatherIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                {t('home:feature_weather')}
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                {t('home:feature_weather_description')}
              </Typography>
              <Button variant="contained" color="primary" href="/weather">
                {t('home:cta_weather')}
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ backgroundColor: theme.palette.background.paper }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <MapIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                {t('home:feature_map')}
              </Typography>
              <Typography variant="body1" color="textSecondary" paragraph>
                {t('home:feature_map_description')}
              </Typography>
              <Button variant="contained" color="primary" href="/map">
                {t('home:cta_map')}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}