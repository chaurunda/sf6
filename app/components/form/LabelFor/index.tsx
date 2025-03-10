import { ReactNode } from "react"

type LabelForProps = {
  name: string
  title: string
  children: ReactNode
}

const LabelFor = ({ name, title, children }: LabelForProps) => {
  return (
    <div className="p-2">
      <label htmlFor={name}>{title}</label>
      {children}
    </div>
  )
}

export default LabelFor
