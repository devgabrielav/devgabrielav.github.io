import { InitialTitle, Selfie, InitialBox } from './styles';
import selfie from '../../assets/selfie.jpg';

function Initial() {
  return (
    <InitialBox id="beggining">
      <div>
        <InitialTitle>Olá! Bem vindo(a)!</InitialTitle>
        <p>
          Meu nome é Gabriela, sou Desenvolvedora Full Stack
        </p>
      </div>
      <Selfie src={ selfie } alt="Foto de Gabriela" />
    </InitialBox>
  );
}

export default Initial;
