import { HeaderDiv, TagsDiv, Tags, LinksDiv, Links,
  LinkImgs } from './styles';
import linkedinLogo from '../../assets/linkedin.png';
import gitHubLogo from '../../assets/github.png';

function Header() {
  return (
    <HeaderDiv className="header-div">
      <TagsDiv>
        <Tags href="#top">Inicio</Tags>
        <Tags href="#about">Sobre</Tags>
        <Tags href="#projects">Projetos</Tags>
        <Tags href="#contact">Contato</Tags>
      </TagsDiv>
      <LinksDiv>
        <Links href="https://www.linkedin.com/in/gabrielavicentini/" target="_blank" rel="noreferrer">
          <LinkImgs src={ linkedinLogo } alt="Linkedin Logo" />
        </Links>
        <Links href="https://github.com/devgabrielav" target="_blank" rel="noreferrer">
          <LinkImgs src={ gitHubLogo } alt="GitHub Logo" />
        </Links>
      </LinksDiv>
    </HeaderDiv>
  );
}

export default Header;
