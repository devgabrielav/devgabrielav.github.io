import { TechBox, Logos, MainDiv } from './styles';

function Technologies() {
  return (
    <MainDiv>
      <TechBox>
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5 logo" />
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="Javascript logo" />
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="Typescript logo" />
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React logo" />
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" alt="Jest logo" />
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js logo" />
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express.js logo" />
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" alt="MySQL logo" />
        <Logos src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sequelize/sequelize-original.svg" alt="Sequelize logo" />
      </TechBox>
    </MainDiv>
  );
}

export default Technologies;
