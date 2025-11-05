"use client";
import { useState, useEffect } from "react";
import es from "../locales/es.json";
import en from "../locales/en.json";

export default function useTranslation() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const translations = lang === "es" ? es : en;

  const toggleLang = () => setLang(lang === "es" ? "en" : "es");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return { t: translations, lang, toggleLang };
}
