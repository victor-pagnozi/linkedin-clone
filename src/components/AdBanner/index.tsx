import React from 'react';

import { Container } from './styles';

const AdBanner: React.FC = () => {
  return (
    <Container className="ad-banner">
      <span>É mais que um domínio - </span>
      É transformar sua ideia em um negócio de verdade, com um domínio e site. <span className="anuncio">Anúncio</span>
    </Container>
  );
};

export default AdBanner;
