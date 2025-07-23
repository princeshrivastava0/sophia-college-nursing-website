import Head from "next/head";

function CustomHead({
  title = "Sophia Nursing College",
  description = "Sophia Institute of Medical Science - Leading Nursing College in Gwalior, Madhya Pradesh.",
  url = "https://sophiainstitutes.com/nursing",
}) {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#e74c3c" />
      <meta
        name="keywords"
        content="Sophia Institute of Medical Science, Sophia Nursing College, Nursing College Gwalior, Nursing College Madhya Pradesh"
      />
      <meta name="description" content={description} />
      <title key={title}>{`Sophia Nursing College | ${title}`}</title>
      <link rel="icon" href="/nursing/favicon.png" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="no-referrer-when-downgrade" />

      {/* Open Graph Tags - for Social Media Sharing */}
      <meta property="og:title" content={`${title} | Sophia Nursing College`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content="https://sophiainstitutes.com/nursing/favicon.png"
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Sophia Nursing College" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollegeOrUniversity",
            name: "Sophia Nursing College",
            url: "https://sophiainstitutes.com/nursing",
            logo: "https://sophiainstitutes.com/nursing/favicon.png",
            address: {
              "@type": "PostalAddress",
              streetAddress: "City Center",
              addressLocality: "Gwalior",
              addressRegion: "Madhya Pradesh",
              postalCode: "474001",
              addressCountry: "IN",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-9522288213",
              contactType: "Inquiries",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"],
            },
            foundingDate: "1999",
            affiliation: {
              "@type": "EducationalOrganization",
              name: "Jiwaji University",
            },

            potentialAction: {
              "@type": "SearchAction",
              target: "https://sophiainstitutes.com/nursing?q={search_term}",
              "query-input": "required name=search_term",
            },
          }),
        }}
      />
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content={`${title} | Sophia Nursing College`}
      />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://sophiainstitutes.com/nursing/favicon.png"
      />
    </Head>
  );
}

export default CustomHead;
