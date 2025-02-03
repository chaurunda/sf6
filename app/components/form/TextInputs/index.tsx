import { useFormContext } from "react-hook-form"

type TextInputsProps = {
  name: string
  erroMessage?: string
}

const TextInputs = ({ name, erroMessage }: TextInputsProps) => {
  const { register } = useFormContext()

  return (
    <>
      <input
        {...register(name)}
        id={name}
        className={`text-black w-[200px] ${erroMessage ? "border-red-600 border-2" : ""}`}
      />
      {erroMessage && <p className="text-red-600 font-light">{erroMessage}</p>}
    </>
  )
}

export default TextInputs
