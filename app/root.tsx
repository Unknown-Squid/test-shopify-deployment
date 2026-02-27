import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import "./globals.css";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col antialiased relative min-h-screen">
        <div 
          className="fixed inset-0 w-full h-full z-0"
          style={{
            backgroundImage: `url(/bakcground-image.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 20%',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed'
          }}
          aria-label="background"
        />
        <div className="relative z-10">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
