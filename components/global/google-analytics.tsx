import Script from "next/script";

const GoogleAnalytics = ({
  gaTrackingId,
}: {
  gaTrackingId: string | undefined;
}) => {
  if (!gaTrackingId) return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        async={true}
        src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
      />
      <Script id="ga-script" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaTrackingId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
