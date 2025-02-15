
import "./globals.css";
import siteMetadata from "@/lib/utility/siteMetadata";




export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),

  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title
  },

  description: siteMetadata.description,

  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: 'en-US',
    type: 'website'

  },

  robot: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    },

    twitter: {
      car: 'summary-large-image',
      title: siteMetadata.title,
      images: [siteMetadata.socialBanner]
    }
  }



}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased !min-h-screen !max-w-[100vw] relative`}
      >
        {children}
      </body>
    </html>
  );
}
