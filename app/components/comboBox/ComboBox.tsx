import { FC } from "react"

type ComboBoxProps = {
  children: React.ReactNode
}

const ComboBox: FC<ComboBoxProps> = ({ children }) => {
  return (
    <div className="mb-3 rounded-lg p-2.5 flex w-full bg-lightGrey justify-center">{children}</div>
  )
}

export default ComboBox
