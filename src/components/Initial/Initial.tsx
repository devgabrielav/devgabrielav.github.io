import { InitialTitle, Selfie, InitialBox } from './styles';
import selfie from '../../assets/selfie.jpg';

function Initial() {
  return (
    <InitialBox>
      <div>
        <InitialTitle>Welcome to my Portfolio!</InitialTitle>
        <p>lorem ipsum</p>
      </div>
      <Selfie src={ selfie } alt="Foto de Gabriela" />
    </InitialBox>
  );
}

export default Initial;
