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

export type AddFormData = {
  characterName: string
  title?: string
  combo: string
  comment?: string
  source?: string
}

const Add = () => {
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

  return (
    <PageLayout name="Add Combo">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit, onInvalid)}>
          <LabelFor title="Character Name" name="characterName">
            <SelectInput name="characterName"></SelectInput>
          </LabelFor>
          <LabelFor title="Section's name" name="title">
            <TextInputs name="title" />
          </LabelFor>
          <LabelFor title="Combo *" name="combo">
            <TextInputs name="combo" erroMessage={methods.formState.errors.combo?.message} />
          </LabelFor>
          <LabelFor title="Source" name="source">
            <TextInputs name="source" />
          </LabelFor>
          <LabelFor title="Comment" name="comment">
            <TextArea name="comment"></TextArea>
          </LabelFor>
          <button type="submit">Envoyer</button>
        </form>
      </FormProvider>
    </PageLayout>
  )
}

export default Add
