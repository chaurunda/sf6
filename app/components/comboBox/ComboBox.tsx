import { FC, ReactNode } from "react"

type ComboBoxProps = {
  children: ReactNode
}

const ComboBox: FC<ComboBoxProps> = ({ children }) => {
  return <div className="mb-3 rounded-lg p-4 w-full bg-lightGrey">{children}</div>
}

export default ComboBox
