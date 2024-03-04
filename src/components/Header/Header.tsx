import { LinkImgs, HeaderDiv, LinksDiv, Links } from './styles';
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
    </HeaderDiv>
  );
}

export default Header;
