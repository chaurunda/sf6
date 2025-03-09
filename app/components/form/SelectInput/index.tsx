import { useFormContext } from "react-hook-form"

type SelectInputProps = { name: string }

const SelectInput = ({ name }: SelectInputProps) => {
  const { register } = useFormContext()
  const characters = [
    "aki",
    "akuma",
    "blanka",
    "cammy",
    "chunli",
    "deejay",
    "dhalsim",
    "ed",
    "ehonda",
    "guile",
    "jamie",
    "jp",
    "juri",
    "ken",
    "kimberly",
    "lily",
    "luke",
    "mbison",
    "manon",
    "marissa",
    "rashid",
    "ryu",
    "terry",
    "zangief",
  ]
  return (
    <select id={name} className="text-black w-[200px]" {...register(name)}>
      {characters.map((chara) => (
        <option key={chara} value={chara}>
          {chara}
        </option>
      ))}
    </select>
  )
}

export default SelectInput
