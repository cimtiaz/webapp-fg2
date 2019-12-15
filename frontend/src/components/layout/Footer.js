import React from "react";

function footer({}) {
  return (
    <footer class="site-footer" role="contentinfo">
      <div class="social-wrapper">
        <ul>
          <li>
            <a href="https://www.twitter.com" target="_self">
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"
                alt="Twitter Logo"
                class="twitter-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com" target="_self">
              <img
                src="https://www.mchenryvillage.com/images/instagram-icon.png"
                alt="Instagram Logo"
                class="instagram-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com" target="_blank">
              <img
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Linkedin_unofficial_colored_svg-256.png"
                alt="Linkedin Logo"
                class="linkedin-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src="https://cdn0.iconfinder.com/data/icons/social-circle-3/72/Facebook-256.png"
                alt="Facebook Logo"
                class="facebook-icon"
              />
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <img
                src="http://icons.iconarchive.com/icons/marcus-roberto/google-play/256/Google-plus-icon.png"
                alt="Googleplus Logo"
                class="googleplus-icon"
              />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com" target="_blank">
              <img
                src="https://lh3.googleusercontent.com/j_RwVcM9d47aBDW5DS1VkdxUYCkDUCB6wZglv4x-9SmsxO0VaFs7Csh-FmKRCWz9r_Ef=w170"
                alt="Youtube Logo"
                class="youtube-icon"
              />
            </a>
          </li>
        </ul>
      </div>

      <nav class="footer-nav" role="navigation">
        <p>
          Copyright &copy; 2019- Transparent Transaction. All rights reserved.
        </p>
      </nav>
    </footer>
  );
}

export default footer;
