import React, {useEffect} from 'react'
import { Helmet } from 'react-helmet'
import useSiteMetadata from '../SiteMetadata';
import { withPrefix } from 'gatsby';
import { Navbar, Footer } from '../../components';
import GlobalStyle from '../../globalStyles';
import "@fontsource/league-spartan/400.css";
import "@fontsource/league-spartan/600.css";

import "./index.css";

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  useEffect(() => {

    if (document.getElementById("calendly")) {
      console.log("calendly1")
      const calendlyScript = document.createElement('script');
      calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
      calendlyScript.async = true;
      document.getElementById('calendly').appendChild(calendlyScript)
    }

  }, []);
  
  return (
    <div>
      <GlobalStyle />
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/favicon.png`}
        />
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet"></link>
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />
        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet><div id="calendly1"></div>
      <Navbar />
      <div style={{
        overflow: "hidden"
      }}>
        {children}
      </div>
      <div id="chat-widget"></div>
      <chat-widget
        className="#chat-widget"
        location-id="cikP5PBhdRcZG8DtLEDD"
        prompt-avatar="https://widgets.leadconnectorhq.com/chat-widget/assets/defaultAvatar.png">
      </chat-widget>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
