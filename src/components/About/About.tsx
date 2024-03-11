import { useInView } from 'react-intersection-observer';
import { MainDiv, SlideInDivs } from '../../styles';
import { AboutText } from './styles';

function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <>
      <div id="about" />
      <MainDiv>
        <SlideInDivs
          ref={ ref }
          style={ { '--i': 0, '--animate': inView ? 1 : 0 } as React.CSSProperties }
        >
          <AboutText>
            Nascida em Barbacena - Minas Gerais.
            Ao finalizar o Ensino Médio,
            iniciei meu trabalho como Assistente de Confeiteira,
            onde trabalhei integralmente por 5 anos.
            <br />
            <br />
            Durante os anos, a tecnologia sempre fez parte de mim,
            e de tudo o que fazia.
            Porém, foi somente em abril de 2023,
            quando dei uma pausa em meu trabalho na confeitaria, que
            iniciei meus estudos em Desenvolvimento Web.
            <br />
            <br />
            Durante 1 ano, tive uma rotina de estudos intensa e desafiante,
            onde tive muitos aprendizados, que foram além de Hard Skills e
            Soft Skills.
            <br />
            <br />
            Em 2024, finalizei o curso e me tornei Desenvolvedora Full Stack.
            <br />
            Os estudos seguem, e minha jornada de trabalho se inicia.
          </AboutText>
        </SlideInDivs>
      </MainDiv>
    </>
  );
}

export default About;
