import Svgloader from "./components/Svgloader"
import B from "./components/inputs/B"
import D from "./components/inputs/D"
import DI from "./components/inputs/DI"
import DP from "./components/inputs/DP"
import F from "./components/inputs/F"
import HCB from "./components/inputs/HCB"
import HCF from "./components/inputs/HCF"
import HK from "./components/inputs/HK"
import HP from "./components/inputs/HP"
import KK from "./components/inputs/KK"
import KKK from "./components/inputs/KKK"
import LK from "./components/inputs/LK"
import LP from "./components/inputs/LP"
import MK from "./components/inputs/MK"
import MP from "./components/inputs/MP"
import PP from "./components/inputs/PP"
import PPP from "./components/inputs/PPP"
import QCB from "./components/inputs/QCB"
import QCF from "./components/inputs/QCF"
import U from "./components/inputs/U"
import K from "./components/inputs/base/K"
import P from "./components/inputs/base/P"

export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <div className="flex  flex-col items-center justify-between">
        <div className="mb-32 grid text-center lg:mb-0 grid-cols-4 lg:text-left">
          <LK />
          <MK></MK>
          <HK></HK>
          <K></K>

          <LP></LP>
          <MP></MP>
          <HP></HP>
          <P></P>

          <B></B>
          <D></D>
          <F></F>
          <U></U>

          <DI></DI>
          <DP></DP>
          <KK></KK>
          <KKK></KKK>

          <HCB></HCB>
          <HCF></HCF>
          <PP></PP>
          <PPP></PPP>

          <QCB></QCB>
          <QCF></QCF>
        </div>
      </div>
      <Svgloader></Svgloader>
    </main>
  )
}
