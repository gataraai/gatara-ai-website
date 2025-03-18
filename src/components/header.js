export const header = `
  <header class="SiteHeader_core-header__zJj3x SiteHeader_bg-ivory-medium__eqFO7" style="background-color: #faf9f5;">
    <div class="SiteHeader_wrapper__7LSsB wrapper" style="padding-top: 7px;">
      <a class="SiteHeader_core-logo-link__kHrqG" aria-label="Home" href="/">
        <div class="SiteHeader_logo-lottie__RQDnP">
          <h1  style="font-family: 'Product Sans Medium Regular' !important; font-size: 35px;">GataraAI<h1>
        </div>
      </a>
      <button id="open-humberger-menu" class="SiteHeader_btn-core-mobile__tgSp1" aria-label="Navigation menu">
        <svg class="Icon_icon__UdTNj" width="40" height="40" viewBox="0 0 40 40">
          <path d="M5.418 25.375v-2.083h29.166v2.083H5.418Zm0-8.667v-2.083h29.166v2.083H5.418Z" fill="#141413"></path>
        </svg>
      </button>
      <nav class="SiteHeader_core-nav__dsHuH">
        <div class="SiteHeader_claude-select__1ZKkq">
          <a href="https://murshed.gatara.org" target="_blank">
            <span class="SiteHeader_link-label__s59w1"  style="font-family: 'Product Sans Regular' !important; font-size: 26px;">Murshed</span>
            <svg class="Icon_icon__UdTNj" width="24" height="24" viewBox="0 0 24 24">
              <path d="M8.76693 10.7417L12.0003 13.975L15.2336 10.7417C15.5586 10.4167 16.0836 10.4167 16.4086 10.7417C16.7336 11.0667 16.7336 11.5917 16.4086 11.9167L12.5836 15.7417C12.2586 16.0667 11.7336 16.0667 11.4086 15.7417L7.58359 11.9167C7.25859 11.5917 7.25859 11.0667 7.58359 10.7417C7.90859 10.425 8.44193 10.4167 8.76693 10.7417Z" fill="#141413"></path>
            </svg>
          </a>
        </div>
        <a class="SiteHeader_link-label__s59w1" href="/not-available-yet/" style="font-family: 'Product Sans Regular' !important; font-size: 26px;">Products</a>
        <a class="SiteHeader_link-label__s59w1" href="/company/" style="font-family: 'Product Sans Regular' !important; font-size: 26px;">Company</a>
        <a class="SiteHeader_link-label__s59w1" href="/open-roles/"  style="font-family: 'Product Sans Regular' !important; font-size: 26px;">Careers</a>
        <a href="/not-available-yet/" class="ButtonLink_button__hVduT ButtonLink_primary__yV6bX ButtonLink_small__4mz6F SiteHeader_nav-cta-a__e5H8v" rel="noopener" aria-label="Try Murshed">
          <span class="ButtonLink_label__DqhYH" style="font-family: 'Product Sans Regular' !important; font-size: 22px;">Book a Free Consultation Call</span>
        </a>
      </nav>

    <div id="humbergermenu" style="display: none">   
      <div class="MobileNav_core-mobile-nav__Z_kbE wrapper xs:grid xs:grid-2">
        <div class="MobileNav_controls__Fr5Ii xs:grid xs:grid-2 xs:col-start-1 xs:col-span-2">
        <div class="MobileNav_logo-mark__d5VUH xs:col-start-1 xs:col-span-1" style="width: auto;">
        <a href="/">
        <img alt="Logo" src="/logo.svg" height="75">
      </a>
      </div>
      <button id="close-humberger-menu" class="MobileNav_btn-close-mobile-nav__9IUB8 xs:col-start-2 xs:col-span-1">
        <svg class="Icon_icon__UdTNj" width="24" height="24" viewBox="0 0 40 40">
        <path d="m10.543 30.958-1.5-1.5 9.5-9.458-9.5-9.458 1.5-1.5 9.458 9.5 9.458-9.5 1.5 1.5-9.5 9.458 9.5 9.458-1.5 1.5-9.458-9.5-9.458 9.5Z" fill="#ffffff">
      </path>
      </svg>
      </button>
      </div>
      <div class="MobileNav_footer-top__dnH1m xs:col-start-1 xs:col-span-2">
        <div class="MobileNav_claude-select__F_qk3">
        <button class="MobileNav_btn-claude__s7ywz">
        <a href="https://murshed.gatara.org" target="_blank">
        <span style="font-family: 'Product Sans Regular' !important;">Murshed
      </span>
      </a>
      <svg class="Icon_icon__UdTNj MobileNav_icon-caret__4cotZ" width="24" height="24" viewBox="0 0 24 24">
        <path d="M8.76693 10.7417L12.0003 13.975L15.2336 10.7417C15.5586 10.4167 16.0836 10.4167 16.4086 10.7417C16.7336 11.0667 16.7336 11.5917 16.4086 11.9167L12.5836 15.7417C12.2586 16.0667 11.7336 16.0667 11.4086 15.7417L7.58359 11.9167C7.25859 11.5917 7.25859 11.0667 7.58359 10.7417C7.90859 10.425 8.44193 10.4167 8.76693 10.7417Z" fill="#ffffff">
      </path>
      </svg>
      </button>
      
      </div>
      <ul class="MobileNav_footer-primary__r7Gh0">
        <li>
        <a href="/not-available-yet/" style="font-family: 'Product Sans Regular' !important;">Product
      </a>
      </li>
      <li>
        <a href="/company/" style="font-family: 'Product Sans Regular' !important;">Company
      </a>
      </li>
      <li>
        <a href="/open-roles/" style="font-family: 'Product Sans Regular' !important;">Careers
      </a>
      </li>
      </ul>
      <ul class="MobileNav_footer-additional__077im">
        <li>
        <a href="mailto:info@gatara.org">Press Inquiries
      </a>
      </li>
      <li>
        <a href="https://linkedin.com/company/gatara-ai" rel="noopener" target="_blank">LinkedIn
      </a>
      </li>
      <li>
        <a href="https://www.instagram.com/gatara.ai" rel="noopener" target="_blank">Instagram

      </a>
      </li>

      <li>
        <a href="https://x.com/gatara_ai" rel="noopener" target="_blank">Twitter / X
      </a>
      </li>
      <li>
        <a href="https://www.facebook.com/share/1L4wWMNr1W/" rel="noopener" target="_blank">Facebook

      </a>
      </li>
      </ul>
      </div>
      <div class="MobileNav_footer-bottom__6UcuR xs:col-start-1 xs:col-span-2">
        <div class="MobileNav_copyright__bfnmJ">© 2024 Anthropic PBC
      </div>
      </div>
      </div>

      </div>

    </div>
  </header>
`;