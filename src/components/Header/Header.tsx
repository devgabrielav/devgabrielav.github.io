import { LinkImgs, HeaderDiv, LinksDiv, Links } from './styles';

function Header() {
  return (
    <HeaderDiv>
      <LinksDiv>
        <Links href="https://www.linkedin.com/in/gabrielavicentini/" target="_blank" rel="noreferrer">
          <LinkImgs src="/src/assets/linkedin-logo.png" alt="Linkedin Logo" />
        </Links>
        <Links href="https://github.com/devgabrielav" target="_blank" rel="noreferrer">
          <LinkImgs src="/src/assets/github-mark-white.png" alt="GitHub Logo" />
        </Links>
      </LinksDiv>
    </HeaderDiv>
  );
}

export default Header;
