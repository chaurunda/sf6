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
      return <B />
    case "D":
      return <D />
    case "DI":
      return <DI />
    case "DP":
      return <DP />
    case "F":
      return <F />
    case "HCB":
      return <HCB />
    case "HCF":
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
      return <QCB />
    case "QCF":
      return <QCF />
    case "U":
      return <U />
    case "K":
      return <K />
    case "P":
      return <P />
    default:
      return <span className="mx-1">{combo}</span>
  }
}
