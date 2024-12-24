import { ReactNode } from "react"

type CustomInputType = {
  className?: string
  children: ReactNode
}

const CustomInput = ({ className, children }: CustomInputType) => {
  return (
    <span
      className={`punish-counter rounded-md px-1.5 text-lightGrey text-[15px] m-0.5 ${className}`}
    >
      {children}
    </span>
  )
}

export default CustomInput
