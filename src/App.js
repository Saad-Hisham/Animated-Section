
import { Container, Row, Col } from 'react-bootstrap';
import lady from "./base-apparel-coming-soon-master/images/hero-desktop.jpg"
import ladyMobile from "./base-apparel-coming-soon-master/images/hero-mobile.jpg"
import arrow from "./base-apparel-coming-soon-master/images/icon-arrow.svg"
import { gsap } from 'gsap';
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const timeline = gsap.timeline()
    timeline
      .to(".logo", {
        scale: 2,
        x: "30vw"

      })
      .fromTo(".logo-circle", {
        opacity: 0,
        scale: 0,
      }, {
        opacity: 1,
        scale: 1,
        duration: 2,
      })
      .fromTo(".logo p span", {
        opacity: 0,
        translateY: 100,
      },
        {
          opacity: 1,
          translateY: 0,
          stagger: 0.06,
          ease: "back.out(1)",
          duration: 2
        }).to(".logo", {
          x: 0,
          scale: 1,
          duration: 2
        })
      .fromTo(".image-container", {
        x: 600,
      }, {
        x: 0,
        duration: 2,
      }, "-=2")
      .fromTo(".lady-mobile-image-container", {
        x: 600,
      }, {
        x: 0,
        duration: 2,
      }, "-=2")
      .fromTo(
        'path',
        {
          strokeDashoffset: 1000,
        },
        {
          strokeDashoffset: 0,
          duration: 15,
          ease: "power2.out",
        }
        , "-=1.5")
      .fromTo(
        '.span-coming',
        {
          opacity: 0,
          x: 100
        },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "back.out(1)",
        }
        , "-=14")
      .fromTo(
        '.span-soon',
        {
          opacity: 0,
          x: -100
        },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          ease: "back.out(1)",
        }
        , "-=14")
      .fromTo(
        '.body-text',
        {
          opacity: 0,
          y: 100
        },
        {
          opacity: 1,
          y: 0,
          duration: 2,
          ease: "back.out(1)",
        }
        , "-=14")
      .fromTo(
        '.input',
        {
          scaleX: 0
        },
        {
          scaleX: 1,
          duration: 1,
          ease: "linear",
        }
        , "-=13")
      .fromTo(
        'button',
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 1,
          ease: "linear",
        }
        , "-=12")

  }, [])





  return (
    <div>
      <main>
        <Container>
          <Row>
            <div className='logo-container'>
              <div className='logo'>
                <span className='logo-circle'></span>
                <p>
                  <span>b</span>
                  <span>a</span>
                  <span>s</span>
                  <span>e</span>
                  <br />
                  <span>a</span>
                  <span>p</span>
                  <span>p</span>
                  <span>a</span>
                  <span>r</span>
                  <span>e</span>
                  <span>l</span>
                </p>
              </div>
            </div>
          </Row>
        </Container>
        <div className='lady-mobile-image-container'>
          <img src={ladyMobile} alt='Beautiful lady wearing a shirt with plants in the background' />
        </div>
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <div className='information-container'>
                <h1>

                  <span> <svg width="309" height="71" viewBox="0 0 309 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.20312 7.98438H3.55649L4.27912 10.5304L20.1776 66.5461L20.5902 68H22.1016H29.3281H30.8183L31.2445 66.5721L42.7535 28.0203L53.2184 66.5245L53.6195 68H55.1484H62.375H63.8843L64.2983 66.5486L80.2749 10.5329L81.0018 7.98438H78.3516H71.1641H69.6379L69.235 9.45645L58.7452 47.787L48.2889 9.458L47.8869 7.98438H46.3594H39.25H37.7587L37.3332 9.41362L25.8216 48.074L15.3205 9.45955L14.9194 7.98438H13.3906H6.20312ZM102.469 66V68H104.469H140.172H142.172V66V60.8828V58.8828H140.172H113.656V39.9922H135.367H137.367V37.9922V32.875V30.875H135.367H113.656V17.1016H140.172H142.172V15.1016V9.98438V7.98438H140.172H104.469H102.469V9.98438V66ZM164.965 18.5123L164.717 20.7344H166.953H171.758H173.36L173.71 19.1705L176.913 4.83455L177.457 2.39844H174.961H168.555H166.766L166.567 4.17639L164.965 18.5123ZM203.297 66V68H205.297H212.484H214.484V66V47.6094H223.014L234.311 67.0065L234.889 68H236.039H243.227H246.71L244.954 64.9917L233.449 45.2846C236.401 43.8586 238.856 41.8202 240.779 39.1716C243.203 35.8694 244.406 32.066 244.406 27.8359C244.406 22.1498 242.299 17.3492 238.121 13.578C233.978 9.83727 228.92 7.98438 223.07 7.98438H205.297H203.297V9.98438V66ZM267.266 66V68H269.266H304.969H306.969V66V60.8828V58.8828H304.969H278.453V39.9922H300.164H302.164V37.9922V32.875V30.875H300.164H278.453V17.1016H304.969H306.969V15.1016V9.98438V7.98438H304.969H269.266H267.266V9.98438V66ZM223.07 38.3359H214.484V17.2969H223.07C225.962 17.2969 228.323 18.2779 230.281 20.2579C232.221 22.2193 233.219 24.6929 233.219 27.8359C233.219 30.9771 232.222 33.4496 230.285 35.4104C228.329 37.3641 225.967 38.3359 223.07 38.3359Z" fill="white" fillOpacity="0.22" stroke="#B79195" strokeWidth="4" />
                  </svg>

                  </span>
                  <br />
                  <span className='span-coming'>coming</span>
                  <br />
                  <span className='span-soon'>soon</span>
                </h1>
                <p className='body-text'>
                  <span>Hello fellow shoppers! We're currently building our new</span>
                  <span>fashion store. Add your email below to stay up-to-date with</span>
                  <span>announcements and our launch deals.</span>
                </p>
              </div>
              <div className='form-container'>
                <form>
                  <input type='text' required placeholder='Email Address' className='input' />
                  <button className='submit'>
                    <img src={arrow} alt='arrow icon' />
                  </button>
                </form>
              </div>
            </Col>
            <Col md={6} sm={12}>
              <div className='image-container'>
                <img src={lady} className='img-fluid' alt='Beautiful lady wearing a shirt with plants in the background' />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <footer>  Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="https://3d-portofolio-seven.vercel.app/">SAAD HISHAM</a> Animation design by <a href="https://www.linkedin.com/in/visualdev-web-development-66a171268/">
          visualdennis
        </a></footer>
    </div>
  );

}
export default App;









