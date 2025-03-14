//About.jsx
// Pàgina d'informació sobre l'aplicació
// ------------------------------------------------------------
// Aquest component mostra informació sobre l'aplicació

// Importa els hooks de React, de traducció i de Material-UI
import React from 'react';
import { useTranslation } from 'react-i18next'; // Importa el hook de traducció
import { Container, Typography, Box } from '@mui/material';

// Defineix el component About
export default function About() {
  const { t } = useTranslation(['common', 'about']); // Utilitza els namespaces 'common' i 'about'

  // Renderitza el component
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" gutterBottom>
          {t('about:title')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('about:description')}
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          {t('about:how_it_works')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('about:how_it_works_description')}
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          {t('about:technologies')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('about:technologies_description')}
        </Typography>

        <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
          {t('about:cifo')}
        </Typography>
        <Typography variant="body1" paragraph>
          {t('about:cifo_description')}
        </Typography>
      </Box>
    </Container>
  );
}