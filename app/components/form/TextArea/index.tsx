import { useFormContext } from "react-hook-form"

type TextAreaProps = { name: string }

const TextArea = ({ name }: TextAreaProps) => {
  const { register } = useFormContext()

  return <textarea {...register(name)} id={name} className="text-black w-[200px]" />
}

export default TextArea
