"use client"

import { useState } from "react"
import { notations } from "./data"

type NotationProps = {}

const Notation = ({}: NotationProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="my-10 bg-slate-800 p-2 rounded-lg">
      <h2>
        <button onClick={() => setIsOpen(!isOpen)}>Notation {isOpen ? "↑" : "↓"}</button>
      </h2>
      <table className={`table-fixed mt-3 ${isOpen ? "" : "hidden"}`}>
        <thead>
          <tr>
            <th className="border-b border-slate-600 font-medium p-2 pl-8 pt-0 pb-3 text-slate-200 text-left">
              Name
            </th>
            <th className="border-b border-slate-600 font-medium p-2 pl-8 pt-0 pb-3 text-slate-200 text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {notations.map((notation, index) => (
            <tr key={index}>
              <td className="border-b border-slate-700 p-2 pl-8 text-slate-200 break-keep">
                {notation.notation}
              </td>
              <td className="border-b border-slate-700 p-2 pl-8 text-slate-200 break-keep">
                {notation.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Notation
