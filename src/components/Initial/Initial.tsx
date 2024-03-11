import { useInView } from 'react-intersection-observer';
import { InitialTitle, Selfie, Texts } from './styles';
import { MainDiv, SlideInDivs } from '../../styles';
import selfie from '../../assets/selfie.png';

function Initial() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <MainDiv id="beggining">
      <SlideInDivs
        ref={ ref }
        style={ { '--i': 0, '--animate': inView ? 1 : 0 } as React.CSSProperties }
      >
        <div style={ { textAlign: 'initial' } }>
          <InitialTitle>Olá! Bem vindo(a)!</InitialTitle>
          <Texts>
            Meu nome é Gabriela,
          </Texts>
          <Texts>
            sou Desenvolvedora Full Stack
          </Texts>
        </div>
      </SlideInDivs>
      <SlideInDivs
        ref={ ref }
        style={ { '--i': 0, '--animate': inView ? 1 : 0 } as React.CSSProperties }
      >
        <Selfie src={ selfie } alt="Foto de Gabriela" />
      </SlideInDivs>
    </MainDiv>
  );
}

export default Initial;
