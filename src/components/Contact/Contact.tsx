import { useForm, ValidationError } from '@formspree/react';
import { FormEvent, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MainDiv, SlideInDivs } from '../../styles';
import { Form, BtnPrimary, IconsDiv,
  Inputs, IconName, Icons,
  IconEmail, TextArea, CheckAnimation, SmoothDiv } from './styles';
import checkMark from '../../assets/check-animation.json';
import emailImg from '../../assets/email.png';
import phoneImg from '../../assets/whatsapp.png';

function Contact() {
  const [state, handleSubmit] = useForm('xvoeqrqn');
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  const handleSend = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(event).then(() => {
      setShowCheckmark(true);
      setTimeout(() => {
        setShowCheckmark(false);
        setShowMessage(true);
      }, 2000);
    });
  };

  if (state.succeeded) {
    return (
      <MainDiv
        id="contact"
        style={ {
          width: 1000, height: 400, justifyContent: 'space-evenly',
        } }
      >
        {showCheckmark && (
          <SmoothDiv show={ showCheckmark }>
            <CheckAnimation animationData={ checkMark } autoplay loop />
          </SmoothDiv>
        )}
        {showMessage && (
          <SmoothDiv show={ showMessage }>
            <p>Mensagem enviada com sucesso!</p>
            <p>Obrigada pelo contato!</p>
          </SmoothDiv>
        )}
        <SlideInDivs
          ref={ ref }
          style={ { '--i': 0, '--animate': inView ? 1 : 0 } as React.CSSProperties }
        >
          <IconsDiv>
            <div>
              <Icons src={ emailImg } alt="Email" />
              <p>gabrivicentini@icloud.com</p>
            </div>
            <div>
              <Icons src={ phoneImg } alt="Número Telefone" />
              <p>+55 (32) 98845-6343</p>
            </div>
          </IconsDiv>
        </SlideInDivs>
      </MainDiv>
    );
  }
  return (
    <MainDiv id="contact">
      <SlideInDivs
        ref={ ref }
        style={ { '--i': 0, '--animate': inView ? 1 : 0 } as React.CSSProperties }
      >
        <Form onSubmit={ handleSend }>
          <div style={ { position: 'relative' } }>
            <IconName
              className="fa fa-user icon"
              style={ { position: 'absolute', left: '10px', top: '16px' } }
            />
            <Inputs
              type="text"
              id="name"
              placeholder="Remetente"
              name="name"
              style={ { paddingLeft: '30px' } }
            />
          </div>
          <ValidationError
            prefix="Name"
            field="name"
            errors={ state.errors }
          />
          <div style={ { position: 'relative' } }>
            <IconEmail
              className="fa fa-envelope icon"
              style={ { position: 'absolute', left: '8px', top: '16px' } }
            />
            <Inputs
              placeholder="E-mail"
              id="email"
              type="email"
              name="email"
              style={ { paddingLeft: '30px' } }
            />
          </div>
          <ValidationError
            prefix="Email"
            field="email"
            errors={ state.errors }
          />
          <TextArea
            id="message"
            name="message"
            placeholder="Mensagem"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={ state.errors }
          />
          <BtnPrimary type="submit" disabled={ state.submitting }>
            Enviar Mensagem
          </BtnPrimary>
        </Form>
      </SlideInDivs>
      <IconsDiv>
        <SlideInDivs
          ref={ ref }
          style={ { '--i': 0, '--animate': inView ? 1 : 0 } as React.CSSProperties }
        >
          <Icons src={ emailImg } alt="Email" />
          <p>gabrivicentini@icloud.com</p>
        </SlideInDivs>
        <SlideInDivs
          ref={ ref }
          style={ { '--i': 0, '--animate': inView ? 1 : 0 } as React.CSSProperties }
        >
          <Icons src={ phoneImg } alt="Número Telefone" />
          <p>+55 (32) 98845-6343</p>
        </SlideInDivs>
      </IconsDiv>
    </MainDiv>
  );
}

export default Contact;
