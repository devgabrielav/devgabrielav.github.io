import { InitialTitle, Selfie, InitialBox } from './styles';

function Initial() {
  return (
    <InitialBox>
      <div>
        <InitialTitle>Welcome to my Portfolio!</InitialTitle>
        <p>lorem ipsum</p>
      </div>
      <Selfie src="/src/assets/selfie.jpg" alt="Foto de Gabriela" />
    </InitialBox>
  );
}

export default Initial;
