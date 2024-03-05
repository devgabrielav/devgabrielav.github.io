import { LinkImgs, HeaderDiv, LinksDiv, Links, TagsDiv, Tags } from './styles';
import linkedinLogo from '../../assets/linkedin-logo.png';
import gitHubLogo from '../../assets/github-mark-white.png';

function Header() {
  return (
    <HeaderDiv>
      <LinksDiv>
        <Links href="https://www.linkedin.com/in/gabrielavicentini/" target="_blank" rel="noreferrer">
          <LinkImgs src={ linkedinLogo } alt="Linkedin Logo" />
        </Links>
        <Links href="https://github.com/devgabrielav" target="_blank" rel="noreferrer">
          <LinkImgs src={ gitHubLogo } alt="GitHub Logo" />
        </Links>
      </LinksDiv>
      <TagsDiv>
        <Tags href="#top">Inicio</Tags>
        <Tags href="#about">Sobre</Tags>
        <Tags href="#projects">Projetos</Tags>
        <Tags href="#contact">Contato</Tags>
      </TagsDiv>
    </HeaderDiv>
  );
}

export default Header;
