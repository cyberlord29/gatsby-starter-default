import React, { useEffect, useRef, useState } from 'react'
import facebook from '../../img/facebook.png'
import love from '../../img/love.png'
import youtube from '../../img/youtube.png'
import star from '../../img/star.png'

import { Banner, AboutContainer } from './Testimonial.element'
import { Bullet, CarouselBullet, FlexContainer, Header, Underline } from '../../globalStyles'
import { Button, DescriptionContainer, IntroTitle } from '../IntroCard/IntroCard.element'


function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

// const carousel = ({children}) => {
//     const children = React.Children.toArray(this.props.children);

// }

const Testimonial = () => {
    const [carousel, setCarousel] = useState(0);
    const [clicked, setClicked] = useState(7000)
    useInterval(() => {
        setCarousel((carousel + 1)%8);
      }, clicked);
    return (
        <div style={{backgroundColor: "#F7F9FF"}}>
            <Banner style={{ height: "auto" }}>
              <FlexContainer style={{ padding: "2rem 4rem"}}>
                    <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginLeft: "2px", width: "25%"}}>
                        <img
                            src={star}
                            height={50}
                        >
                        </img>
                        <div style={{ display: "flex", flexDirection:"column",  marginLeft: "10px"}}>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>4.9</div>
                            <div style={{ fontSize: "14px", width: "300px", marginTop: "4px" , textAlign: "start"}}>
                              TRUST PILOT RATING
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginLeft: "2px",width: "25%"}}>
                        <img
                            src={facebook}
                            height={50}
                        >
                        </img>
                        <div style={{ display: "flex", flexDirection:"column",  marginLeft: "10px"}}>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>5,673</div>
                            <div style={{ fontSize: "14px", width: "300px", marginTop: "4px" , textAlign: "start"}}>
                              FACEBOOK FOLLOWERS
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginLeft: "2px",width: "25%"}}>
                        <img
                            src={love}
                            height={50}
                        >
                        </img>
                        <div style={{ display: "flex", flexDirection:"column",  marginLeft: "10px"}}>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>32,696</div>
                            <div style={{ fontSize: "14px", width: "300px", marginTop: "4px" , textAlign: "start"}}>
                              STUDENTS MENTORED
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection:"row", alignItems: "center", marginLeft: "2px",width: "25%"}}>
                        <img
                            src={youtube}
                            height={50}
                        >
                        </img>
                        <div style={{ display: "flex", flexDirection:"column",  marginLeft: "10px"}}>
                            <div style={{ fontSize: "32px", textAlign: "start" }}>2,345</div>
                            <div style={{ fontSize: "14px", width: "300px", marginTop: "4px" , textAlign: "start"}}>
                              YOUTUBE FOLLOWERS
                            </div>
                        </div>
                    </div>
            </FlexContainer>
            </Banner>
            <Banner style={{height: "50px"}}>
            </Banner>
            <AboutContainer style={{padding: "10px", textAlign: "center"}}>
                    <div>
                        <div style={{textAlign: "center", fontSize: "24px"}}>
                            Here's what people say
                        </div>
                        <div id="trustpilot" className="trustpilot-widget" data-locale="en-GB" data-template-id="5419b6a8b0d04a076446a9ad" data-businessunit-id="5d5379337341e9000183edcc" data-style-height="24px" data-style-width="100%" data-theme="light">
                        <a href="https://uk.trustpilot.com/review/www.londontradinginstitute.com" target="_blank" rel="noopener">Trustpilot</a>
                        </div>
                        <div style={{marginTop: "5px"}}>Excellent</div>
                        <a href="https://uk.trustpilot.com/review/www.londontradinginstitute.com" target="_blank">
                        <img style={{marginTop: "5px"}} height={50} alt="TrustScore 5 out of 5" src="https://cdn.trustpilot.net/brand-assets/4.1.0/stars/stars-5.svg"></img>
                        </a>
                        <div style={{display: "flex", flexDirection: "row", width: "100%", marginTop: "0px", display: "-webkit-inline-box"}}>
                        <a href="https://uk.trustpilot.com/review/www.londontradinginstitute.com" target="_blank">
                            <Button style={{backgroundColor: "rgb(0, 182, 122)", margin: "10px 10px", height: "28px", borderRadius: "20px"}}>VIEW ALL REVIEWS</Button>
                        </a>
                        <a style={{color: "inherit", textDecoration: "none"}} href="https://uk.trustpilot.com/review/www.londontradinginstitute.com" target="_blank" rel="noopener">
                            {carousel===0 &&  <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                Confused trader to a confident trader and investor in Cryptos</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Neet, AUS</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>I’ve been following Andy Demi from London Trading Institute online for almost 18 months. I was a struggling trader with no focus or direction. Switching from coach to coach and strategy to strategy losing money continuously and on a quest to find that 1 perfect mentor to help me be a successful trader. So I made the decision and have recently signed up with Andy for one to one coaching. The last 3 months have been the most rewarding 3 months in my 4 years of learning to trade. Andy’s passion and wealth of knowledge is incredible! He is selfless, patient and one thing that really stands out is that he is always the same person. Every time I watch the live shows or have a coaching session he is Calm, focused and so very humble.
                                </DescriptionContainer>
                            </div>
                            }
                            {carousel===1 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                Complex trading made simple</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Garry Hartley, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>I’ve been LTI for about a year now. Andy has an outstanding ability to explain complex trading in simple terms to all abilities, and the rest of the team like Dan and Ben are just as helpful. The team are able to advance your knowledge of the markets very quickly and are able to teach you market quirks that only traders of the highest level would know. I would strongly recommend them.
                                </DescriptionContainer>
                            </div>
}
                            {carousel===2 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                I've been on my journey with LTI now…</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Gavin Miller, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>I've been on my journey with LTI now for around 6 months and started with no knowledge of the FX Market.
The course content is incredibly thorough and the support you get from the LTI team (Andy Demi + Dan Tyler) is brilliant.
Learning with the LTI has been a great experience and have no hesitation in recommending these guys.
                                </DescriptionContainer>
                            </div>}
                            {carousel===3 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                Forex, Crypto? join Team Demi</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Mr Gawlak, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>
                                I found LTI on the beginning of my journey with Fore market. Andy Demi got great skills and know how to pass his knowledge to people who want to discover great world of either Forex or Crypto markets. Yes, it required some effort to put in, but LTI is definitely the place where to stop and think, ask question, join theirs FB group and just join the flow :)
                                </DescriptionContainer>
                            </div>}
                            {carousel===4 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                BEST Training Trading Company</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Raj K, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>
                                If you are serious about training as a trading and changing your life. I really recommend this company. The company attentions are to help you succeed and as a absolute beginner the team has been amazing where the fb group and the amazing top class trader Andi Demi really help you as much as they can.
                                </DescriptionContainer>
                            </div>}
                            {carousel===5 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                Fantastic course run by great people</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Simon, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>Fantastic course run by great people. Huge amount of content and weekly zoom meetings where you can ask questions and get the answers by being shown on the charts.
The course fitted around my job and home life.
                                </DescriptionContainer>
                            </div>}
                            {carousel===6 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                LTI are the real deal</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Paul, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>I have been a student of LTI for around six months.
Andy Demi and LTI are the real deal. Since becoming a student, I have become profitable on an FX demo account (3:1 win rate, >one-to-one Profit to loss), and have just made the transition to a cash account.
The training, coaching and community have made the difference to my growth and development, and I am now set up to make Forex trading a second income.
The cost of joining LTI is good value and comparable to professional training courses in my primary career.
Frankly, I think everybody should trade Forex, but solid education is critical to ensure the market doesn't eat you up, and LTI provide that.
                                </DescriptionContainer>
                            </div>}
                            {carousel===7 && <div style={{background: "rgb(247, 249, 255)", padding: "20px 40px", borderRadius: "10px", marginLeft: "10"}}>
                                <IntroTitle style={{fontSize: "20px", marginBottom: "15px"}}>
                                11/10</IntroTitle>
                                <IntroTitle style={{fontSize: "16px", marginBottom: "15px"}}>
                                ~ Vilius Simonavičius, UK</IntroTitle>
                                <DescriptionContainer style={{fontSize: "14px"}}>Have joined the Forex course in this Institute mid of 2020, and long story short, I can clearly say, I have made greatest choice in my life. Mentor, team, educational programme, support and learning material is so amazing I could not have imagined.
Just recently new Crypto course launched and guess what... Joined it without a doubt and invited my friends to start from scratch as this course and overall this Institute is very promising. Do not miss your chance :)
                                </DescriptionContainer>
                            </div>}

</a>
                        </div>
                    <div onClick={()=>setClicked(null)}>
                        <CarouselBullet selected={carousel==0} onClick={()=>setCarousel(0)}></CarouselBullet>
                        <CarouselBullet selected={carousel==1}  onClick={()=>setCarousel(1)}></CarouselBullet>
                        <CarouselBullet selected={carousel==2} onClick={()=>setCarousel(2)}></CarouselBullet>
                        <CarouselBullet selected={carousel==3} onClick={()=>setCarousel(3)}></CarouselBullet>
                        <CarouselBullet selected={carousel==4}  onClick={()=>setCarousel(4)}></CarouselBullet>
                        <CarouselBullet selected={carousel==5} onClick={()=>setCarousel(5)}></CarouselBullet>
                        <CarouselBullet selected={carousel==6} onClick={()=>setCarousel(6)}></CarouselBullet>
                        <CarouselBullet selected={carousel==7} onClick={()=>setCarousel(7)}></CarouselBullet>
                    </div>
                    </div>
            </AboutContainer>
        </div>
    )
}

export default Testimonial
