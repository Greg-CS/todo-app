import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://todo-app-eight-bay-15.vercel.app/",
    siteName: "Todo-app",
    description: "De Pe-erre",
  },
  twitter: {
    handle: "@Gregor_eth",
    site: "https://twitter.com/Gregor_eth",
    cardType: "summary_large_image",
  },
};

export default config;
