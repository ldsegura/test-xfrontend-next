"use client";
import { useAppDispatch, useAppselector } from "@/redux/hooks";
import { useGetPageDataQuery } from "@/redux/services/pageDataApi";
import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { useState, useEffect } from "react";

export default function Home(props) {
  const {params} = props;
  const {locale} = params;
  const [settingSite, setSettingSite] = useState(null);
  //const pageData = useAppselector(state => state.pageDataReducer);
  const { data, error, isLoading, isFetching } = useGetPageDataQuery(null);
  const t = useTranslations("website");
  useEffect(() => {
    if(!isLoading && !isFetching && data) {
      setSettingSite(data[locale.toLowerCase()])
    }
  },[locale, isLoading, isFetching, data]);

  if(isLoading || isFetching || settingSite == null) return <p>Loading...</p>
  if(error) return <p>error...</p>
  return (
    <>
      <Header {...settingSite.navbar} />
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.js</code>
        </p>
        <p>{t("housing")}</p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      {/* <ul>
        {locales.map((locale) => {
          const { pathname, query, asPath } = router;
          return <li key={locale}>
            <Link href={{ pathname, query }}
              as={asPath}
              locale={locale}
              legacyBehavior
            >
              {locale}
            </Link>
          </li>
        })
        }
      </ul> */}
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
      <Footer />
    </>
  );
}
