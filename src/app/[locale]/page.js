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
import Main from "@/components/sections/Main";
import Legal from "@/components/sections/Legal";

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
      <Main {...settingSite.header} />
      <p>chingada</p>
      <Legal legals={settingSite.legals} />
      <Footer locale={locale} {...settingSite.footer} />
    </>
  );
}
