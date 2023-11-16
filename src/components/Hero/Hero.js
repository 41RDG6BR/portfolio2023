import React from 'react';
import Link from 'next/link';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Bem-vindo ao <br />
          Meu portfólio pessoal
        </SectionTitle>
        <SectionText>
          Esteja pronto para mergulhar no futuro da codificação comigo. Estou comprometido em ficar atualizado com as últimas tendências e tecnologias para garantir que você esteja sempre à frente no mundo dinâmico do desenvolvimento.
        </SectionText>
        <Link href="#projects">
            <Button onClick={props.handleClick}>Veja mais</Button>
        </Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;