//import "../globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import language from "../../language";
import { notFound } from "next/navigation";
import i18nConfig from "../../../i18nConfig";
import { StoreProvider } from "@/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LayoutBasic(props) {
  const { children, params } = props;
  const {locale} = params;

  let messages;
  try {
    messages = language[locale];
    if (messages === undefined) {
      messages = language[i18nConfig.defaultLocale];
    }
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <StoreProvider>{children}</StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
};
