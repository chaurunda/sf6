import { FC } from "react"

type ComboBoxProps = {
  children: React.ReactNode
}

const ComboBox: FC<ComboBoxProps> = ({ children }) => {
  return <div className="mb-3 rounded-lg p-4 flex w-full bg-lightGrey flex-wrap">{children}</div>
}

export default ComboBox
