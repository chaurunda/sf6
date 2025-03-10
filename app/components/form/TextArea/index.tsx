import { useFormContext } from "react-hook-form"

type TextAreaProps = { name: string }

const TextArea = ({ name }: TextAreaProps) => {
  const { register } = useFormContext()

  return (
    <div className="relative w-full max-w-sm min-w-[200px]">
      <textarea
        className="w-full placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
        placeholder=" "
        {...register(name)}
      ></textarea>
    </div>
  )
}

export default TextArea
