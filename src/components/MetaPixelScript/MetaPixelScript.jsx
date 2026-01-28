// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// const MetaPixelScript = () => {
//   const location = useLocation();

//   useEffect(() => {
//     const isCanadaRoute = location.pathname.startsWith("/ca");

//     // Remove any previously injected scripts
//     const removeById = (id) => {
//       const el = document.getElementById(id);
//       if (el) el.remove();
//     };
//     removeById("fb-pixel-script");
//     removeById("fb-pixel-noscript");
//     removeById("gtm-script");
//     removeById("gtm-noscript");

//     if (isCanadaRoute) {
//       // // ----- Meta Pixel -----
//       // const script = document.createElement('script');
//       // script.id = 'fb-pixel-script';
//       // script.innerHTML = `
//       // !function (f, b, e, v, n, t, s) {
//       // if (f.fbq) return; n = f.fbq = function () {
//       //   n.callMethod ?
//       //   n.callMethod.apply(n, arguments) : n.queue.push(arguments)
//       //   };
//       // if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
//       // n.queue = []; t = b.createElement(e); t.async = !0;
//       // t.src = v; s = b.getElementsByTagName(e)[0];
//       // s.parentNode.insertBefore(t, s)
//       //   }(window, document, 'script',
//       // 'https://connect.facebook.net/en_US/fbevents.js');
//       //   fbq('init', '1962594564480460');
//       //   fbq('track', 'PageView');
//       // `;
//       // document.head.appendChild(script);
//       // const noscript = document.createElement('noscript');
//       // noscript.id = 'fb-pixel-noscript';
//       // noscript.innerHTML = `
//       //   <img height="1" width="1" style="display:none"
//       //   src="https://www.facebook.com/tr?id=1962594564480460&ev=PageView&noscript=1" />
//       // `;
//       // document.head.appendChild(noscript);
//     } else {
//       // ----- Meta Pixel -----
//       // const script = document.createElement('script');
//       // script.id = 'fb-pixel-script';
//       // script.innerHTML = `
//       // !function (f, b, e, v, n, t, s) {
//       // if (f.fbq) return; n = f.fbq = function () {
//       //   n.callMethod ?
//       //   n.callMethod.apply(n, arguments) : n.queue.push(arguments)
//       //   };
//       // if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
//       // n.queue = []; t = b.createElement(e); t.async = !0;
//       // t.src = v; s = b.getElementsByTagName(e)[0];
//       // s.parentNode.insertBefore(t, s)
//       //   }(window, document, 'script',
//       // 'https://connect.facebook.net/en_US/fbevents.js');
//       //   fbq('init', '1962594564480460');
//       //   fbq('track', 'PageView');
//       // `;
//       // document.head.appendChild(script);

//       // const noscript = document.createElement('noscript');
//       // noscript.id = 'fb-pixel-noscript';
//       // noscript.innerHTML = `
//       //   <img height="1" width="1" style="display:none"
//       //   src="https://www.facebook.com/tr?id=1962594564480460&ev=PageView&noscript=1" />
//       // `;
//       // document.head.appendChild(noscript);

//       // ----- Google Tag Manager -----

//       const gtmScript = document.createElement("script");
//       gtmScript.id = "gtm-script";
//       gtmScript.innerHTML = `
//       (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//       new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//       j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//       'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//       })(window,document,'script','dataLayer','GTM-MX45PL99');
//       `;
//       document.head.appendChild(gtmScript);

//       const gtmNoScript = document.createElement("noscript");
//       gtmNoScript.id = "gtm-noscript";
//       gtmNoScript.innerHTML = `
//       <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX45PL99"
//       height="0" width="0" style="display:none;visibility:hidden"></iframe>
//       `;
//       document.body.insertBefore(gtmNoScript, document.body.firstChild);
//     }
//   }, [location]);

//   return null;
// };

// export default MetaPixelScript;

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MetaPixelScript = () => {
  const location = useLocation();

  useEffect(() => {
    const isCanadaRoute =
      location.pathname === "/ca/register" ||
      location.pathname === "/ca/google";

    // helper: remove elements that match ID or src/content containing 17460343588
    const removeGoogleAdsScripts = () => {
      const allScripts = document.querySelectorAll("script, img, iframe");
      allScripts.forEach((el) => {
        const src = el.src || "";
        const inner = el.innerHTML || "";
        if (src.includes("17460343588") || inner.includes("17460343588")) {
          el.remove();
        }
      });
    };

    // helper: remove by IDs we add manually
    const removeByIds = (ids) => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };

    // Always clean before applying
    removeByIds([
      "google-ads-tag",
      "google-init",
      "google-event-tag",
      "gtm-script",
      "gtm-noscript",
    ]);

    // If not Canada — remove Google Ads stuff
    if (!isCanadaRoute) {
      removeGoogleAdsScripts();
    }

    // // cleanup any previous tags before adding new ones
    // removeByIds([
    //   "google-ads-tag",
    //   "google-init",
    //   "google-event-tag",
    //   "gtm-script",
    //   "gtm-noscript",
    //   "google-viewthrough",
    // ]);

    if (isCanadaRoute) {
      // ----- Google Ads Global Tag (for Canada routes) -----
      const googleTag = document.createElement("script");
      googleTag.id = "google-ads-tag";
      googleTag.async = true;
      googleTag.src =
        "https://www.googletagmanager.com/gtag/js?id=AW-17460343588";
      document.head.appendChild(googleTag);

      const googleInit = document.createElement("script");
      googleInit.id = "google-init";
      googleInit.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-17460343588');
      `;
      document.head.appendChild(googleInit);

      // ✅ Optional: Conversion event (only on specific conversion pages)
      // If your "Thank you" page is like /ca/thank-you or similar:
      if (location.pathname.includes("/thank-you")) {
        const googleEventTag = document.createElement("script");
        googleEventTag.id = "google-event-tag";
        googleEventTag.innerHTML = `
          gtag('event', 'conversion', {
            'send_to': 'AW-17460343588/rqGQCJ-mt4YbEKTm3oVB',
            'value': 1.0,
            'currency': 'CAD'
          });
        `;
        document.head.appendChild(googleEventTag);
      }
    } else {
      // ----- Google Tag Manager (non-Canada routes) -----
      const gtmScript = document.createElement("script");
      gtmScript.id = "gtm-script";
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MX45PL99');
      `;
      document.head.appendChild(gtmScript);

      const gtmNoScript = document.createElement("noscript");
      gtmNoScript.id = "gtm-noscript";
      gtmNoScript.innerHTML = `
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MX45PL99"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      `;
      document.body.insertBefore(gtmNoScript, document.body.firstChild);
    }

    // ✅ Cleanup on route change
    return () => {
      removeByIds([
        "google-ads-tag",
        "google-init",
        "google-event-tag",
        "gtm-script",
        "gtm-noscript",
        "google-viewthrough",
      ]);
      removeGoogleAdsScripts();
    };
  }, [location]);

  return null;
};

export default MetaPixelScript;
