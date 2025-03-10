import { useFormContext } from "react-hook-form"

type TextInputsProps = {
  name: string
  erroMessage?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TextInputs = ({ name, erroMessage, onChange }: TextInputsProps) => {
  const { register } = useFormContext()

  return (
    <div className="w-full max-w-sm min-w-[200px]">
      <input
        {...register(name)}
        id={name}
        className={`w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow ${erroMessage ? "border-red-600 border-2" : ""}`}
        onChange={(e) => onChange && onChange(e)}
      />
      {erroMessage && <p className="text-red-600 font-light">{erroMessage}</p>}
    </div>
  )
}

export default TextInputs
