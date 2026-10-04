import {
  Noto_Sans_JP,
  Noto_Sans_SC,
  Noto_Serif_JP,
  Noto_Serif_SC,
  Source_Sans_3,
  Source_Serif_4,
} from "next/font/google"
import localFont from "next/font/local"

/**
 * Source Sans 3 by Paul D. Hunt
 */
export const sourceSans3 = Source_Sans_3({
  variable: "--font-source-sans-3",
  subsets: ["latin"],
})

/**
 * Source Serif 4 by Frank Grießhammer
 */
export const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
  preload: false,
})

/**
 * Iosevka by Belleve Invis
 *
 * Style Set 09 (Source Code Pro Style). Chosen over Source Code Pro itself
 * because Iosevka uses latin glyphs of width 500 rather than Source Code Pro's
 * 600. This allows it to maintain alignment alongside CJK characters if
 * necessary. Inteded to be used with Noto Sans SC and Noto Serif JP.
 */
export const isosevkaSS09 = localFont({
  src: "../fonts/IosevkaFixedSS09-Regular.woff2",
  variable: "--font-iosevka-ss09",
  adjustFontFallback: false,
})

/**
 * Noto Sans Simplified Chinese by Joo-Yeon Kang, Paul D. Hunt, 西塚涼子, Sandoll
 * Communications, and Soo-Young Jang
 *
 * Equivlent to Adobe's Source Han Sans. Designed to work with Source Sans 3.
 */
export const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  preload: false,
  adjustFontFallback: false,
})

/**
 * Noto Serif Simplified Chinese by 한동훈, Frank Grießhammer, 西塚涼子, Sandoll
 * Communications, 박수현, and others
 *
 * Equivlent to Adobe's Source Han Serif. Designed to work with Source Serif 4.
 */
export const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  preload: false,
  adjustFontFallback: false,
})

/**
 * Noto Sans Japanese by Joo-Yeon Kang, Paul D. Hunt, 西塚涼子, Sandoll
 * Communications, and Soo-Young Jang
 *
 * Equivlent to Adobe's Source Han Sans. Designed to work with Source Sans 3.
 */
export const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  preload: false,
  adjustFontFallback: false,
})

/**
 * Noto Serif Japanese by 한동훈, Frank Grießhammer, 西塚涼子, Sandoll Communications,
 * 박수현, and others
 *
 * Equivlent to Adobe's Source Han Serif. Designed to work with Source Serif 4.
 */
export const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  preload: false,
  adjustFontFallback: false,
})

/**
 * Adobe NotDef by Ken Lunde
 *
 * In development, display Adobe NotDef for invalid font/language
 * configurations rather than falling back to a default silently.
 */
export const notDef = localFont({
  src: "../fonts/AdobeNotDef-Regular.otf",
  variable: "--font-notdef",
  preload: false,
  adjustFontFallback: false,
})

export const fontVariables = [
  sourceSans3,
  sourceSerif4,
  isosevkaSS09,
  notoSansJP,
  notoSansSC,
  notoSerifJP,
  notoSerifSC,
  // Flag mistakes using Adobe NotDef only during development. globals.css
  // falls back to defaults during prod.
  ...(process.env.NODE_ENV === "development" ? [notDef] : []),
]
  .map((font) => font.variable)
  .join(" ")
