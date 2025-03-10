"use client"
import TextInputs from "../components/form/TextInputs"
import PageLayout from "../PageLayout"
import { FormProvider, useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import LabelFor from "../components/form/LabelFor"
import TextArea from "../components/form/TextArea"
import SelectInput from "../components/form/SelectInput"
import { useMutation } from "@tanstack/react-query"
import { postForm } from "../utils/queries"
import ComboBox from "../components/comboBox/ComboBox"
import SvgHandler from "../components/SvgHandler"
import { useState } from "react"

export type AddFormData = {
  characterName: string
  title?: string
  combo: string
  comment?: string
  source?: string
}

const Add = () => {
  const [writtenCombo, setWrittenCombo] = useState({ combo: "" })
  const { mutate } = useMutation({
    mutationFn: (payload: AddFormData) => postForm(payload),
  })

  const onSubmit = (data: AddFormData) => {
    mutate(data)
  }

  const schema = yup
    .object({
      characterName: yup.string().required(),
      title: yup.string(),
      combo: yup.string().required(),
      comment: yup.string(),
      source: yup.string(),
    })
    .required()

  const methods = useForm<AddFormData>({
    resolver: yupResolver(schema),
  })

  const onInvalid = (data: any) => {
    console.log(data)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCombo = {
      combo: e.target.value,
    }
    setWrittenCombo(newCombo)
  }

  return (
    <PageLayout name="Add Combo">
      <div className="flex gap-4">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit, onInvalid)} className="w-full">
            <LabelFor title="Character Name" name="characterName">
              <SelectInput name="characterName"></SelectInput>
            </LabelFor>
            <LabelFor title="Section's name" name="title">
              <TextInputs name="title" />
            </LabelFor>
            <LabelFor title="Combo *" name="combo">
              <TextInputs
                name="combo"
                erroMessage={methods.formState.errors.combo?.message}
                onChange={handleChange}
              />
            </LabelFor>
            <LabelFor title="Source" name="source">
              <TextInputs name="source" />
            </LabelFor>
            <LabelFor title="Comment" name="comment">
              <TextArea name="comment"></TextArea>
            </LabelFor>
            <button
              className="rounded-md border bg-white border-slate-300 py-2 px-4 mt-3 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="submit"
            >
              Envoyer
            </button>
          </form>
        </FormProvider>
        <div className="w-full hidden sm:block">
          <ComboBox>
            <SvgHandler list={writtenCombo}></SvgHandler>
          </ComboBox>
        </div>
      </div>
    </PageLayout>
  )
}

export default Add
