"use server"
import B from "../components/inputs/B"
import D from "../components/inputs/D"
import DI from "../components/inputs/DI"
import DP from "../components/inputs/DP"
import F from "../components/inputs/F"
import HCB from "../components/inputs/HCB"
import HCF from "../components/inputs/HCF"
import HK from "../components/inputs/HK"
import HP from "../components/inputs/HP"
import KK from "../components/inputs/KK"
import KKK from "../components/inputs/KKK"
import LK from "../components/inputs/LK"
import LP from "../components/inputs/LP"
import MK from "../components/inputs/MK"
import MP from "../components/inputs/MP"
import PP from "../components/inputs/PP"
import PPP from "../components/inputs/PPP"
import QCB from "../components/inputs/QCB"
import QCF from "../components/inputs/QCF"
import U from "../components/inputs/U"
import K from "../components/inputs/base/K"
import P from "../components/inputs/base/P"

export async function getSVG(combo: string) {
  "use server"
  switch (combo) {
    case "B":
    case "4":
      return <B />
    case "D":
    case "2":
      return <D />
    case "DI":
      return <DI />
    case "DP":
    case "623":
      return <DP />
    case "F":
    case "6":
      return <F />
    case "HCB":
    case "63214":
      return <HCB />
    case "HCF":
    case "41236":
      return <HCF />
    case "HK":
      return <HK />
    case "HP":
      return <HP />
    case "KK":
      return <KK />
    case "KKK":
      return <KKK />
    case "LK":
      return <LK />
    case "LP":
      return <LP />
    case "MK":
      return <MK />
    case "MP":
      return <MP />
    case "PP":
      return <PP />
    case "PPP":
      return <PPP />
    case "QCB":
    case "214":
      return <QCB />
    case "QCF":
    case "236":
      return <QCF />
    case "U":
    case "8":
    case "j.":
      return <U />
    case "K":
      return <K />
    case "P":
      return <P />
    case "5":
      return ""
    default:
      return <span className="mx-1">{combo}</span>
  }
}
