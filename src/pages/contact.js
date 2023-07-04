import * as openpgp from 'openpgp';
import ReCAPTCHA from 'react-google-recaptcha';
import Image from 'next/image';
import Hero from '@/components/Hero';
import Row from '@/components/Row';
import TextImage from '@/components/Rows/TextImage';
import ImageLink from '@/components/ImageLink';
import { useRef, useState } from 'react';
import Input from '@/components/Input';
import Button from '@/components/Button';
import InlineTextLink from '@/components/InlineTextLink';
import CopyText from '@/components/CopyText';
import bitmoji_mail from '../assets/bitmoji_mail.png';
import linkedin from '../assets/Linkedin-Mark.svg';
import github from '../assets/GitHub-Mark.svg';
import instagram from '../assets/Instagram-Mark.svg';
import key from '../assets/key.png'
import book from '../assets/book.png'
import Wheel from '@/components/Wheel';

export default function Contact() {
  const form = useRef();
  const captcha = useRef();
  const [status, setStatus] = useState();
  const [encrypted, setEncrypted] = useState(false);

  return (
    <div>
      <Hero>
        <h1 className='text-white text-center'>Contact</h1>
      </Hero>
      <TextImage
        img={bitmoji_mail}
        alt='Bitmoji Mail'
        title="I'd love to hear from you!"
      >
        <div className='flex flex-col gap-4 grow'>
          <p>
            Interested in discussing an opportunity with me, or just want to chat? Kindly use the form below to send me an email.
            I will do my best to answer as soon as I can!
          </p>
        </div>
      </TextImage>

      <Row bg='bg-primary' className='text-white'>
        <div className='grid grid-cols-1 gap-12 lg:gap-8 lg:grid-cols-3'>
          {status === undefined || status === 'pending' ?
            <form
              ref={form}
              className='gap-4 flex flex-col lg:col-span-2'
              onSubmit={event => {
                event.preventDefault();
                setStatus('pending');

                captcha.current.executeAsync()
                  .then(token => {
                    const data = {
                      from: event.target.from.value,
                      name: event.target.name.value,
                      subject: event.target.subject.value,
                      message: event.target.msg.value,
                      recaptchaToken: token
                    }

                    fetch('/api/send-email', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(data)
                    }).then(response => response.text())
                      .then(setStatus)
                      .catch(console.error);
                  }).catch(e => {
                    setStatus();
                  })
              }}
            >
              <h1 className='text-white'>Email Form</h1>
              <Input type='text' id='name' name='name' required>Your Name*</Input>
              <Input type='email' id='from' name='from' required>Your Email Address*</Input>
              <Input type='text' id='subject' name='subject' required>Subject*</Input>
              <Input type='text' id='msg' name='msg' resizeable required>How may I help you?*</Input>
              <div className='flex flex-col gap-4 justify-center items-center md:flex-row md:justify-start'>
                {status === 'pending' ? <Wheel /> :
                  <Button type='submit'>
                    Send Email
                  </Button>
                }
                <ReCAPTCHA
                  ref={captcha}
                  size='invisible'
                  badge='inline'
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                />
              </div>

            </form> :

            status === 'success' ?
              <h1 className='text-white text-center my-auto md:col-span-2'>Email Sent Succesfully!</h1> :

              <div className='my-auto md:col-span-2 space-y-4'>
                <h1 className='text-white text-center'>Error!</h1>
                <p className='text-white text-center'>{status}</p>
              </div>
          }
          <div className='flex flex-col gap-4 justify-center text-center w-full h-full '>
            <h1 className='text-white text-2xl md:text-3xl'>Psst!</h1>
            <p className='text-white'>
              (Need to communicate securely with me? Encrypt your email before sending)
            </p>
            <Button
              bg='bg-highlight'
              disabled={status !== undefined || encrypted}
              onClick={async () => {
                const item = form.current.children.msg;
                if (item.trim === '') return;
                const encrypted = await openpgp.encrypt({
                  message: await openpgp.createMessage({ text: item.value }),
                  encryptionKeys: await openpgp.readKey({ armoredKey: process.env.NEXT_PUBLIC_PGP_KEY })
                });
                item.value = encrypted;
                setEncrypted(true);
              }}
            >
              {encrypted ? 'Encrypted!' : 'Encrypt'}
            </Button>
            <div className='mt-4 flex flex-row items-center justify-evenly'>
              <div className='flex flex-row items-center gap-2'>
                <div className='relative w-4 h-4'>
                  <Image src={book} alt='Location pin' className='object-cover invert' fill />
                </div>
                <InlineTextLink color='bg-white' href='https://www.openpgp.org/'>OpenPGP</InlineTextLink>
              </div>
              <div className='flex flex-row items-center gap-2'>
                <div className='relative w-4 h-4'>
                  <Image src={key} alt='Location pin' className='object-cover' fill />
                </div>
                <CopyText value={process.env.NEXT_PUBLIC_PGP_KEY}>Copy Public Key</CopyText>
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row full bg='bg-accent'>
        <div className='grid grid-rows-3 grid-cols-1 text-center md:grid-rows-1 md:grid-cols-3'>
          <div className='py-4 h-32'>
            <ImageLink src={linkedin} alt='LinkedIn' href='https://linkedin.com/in/nbrodbeck' className='aspect-square h-full' />
          </div>
          <div className='py-4 h-32 bg-black bg-opacity-10'>
            <ImageLink src={github} alt='GitHub' href='https://github.com/nbrodbec' className='aspect-square h-full' />
          </div>
          <div className='py-4 h-32'>
            <ImageLink src={instagram} alt='GitHub' href='https://instagram.com/nicky_brod' className='aspect-square h-full' />
          </div>
        </div>
      </Row>
    </div>
  );
}