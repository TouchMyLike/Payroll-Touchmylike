import { FormProvider, useForm } from 'react-hook-form'
import { Button, Paper, Typography } from '@mui/material'
import { TInputDate, TInputDropdown, TInputMultiCheckbox, TInputRadio, TInputSlider, TInputText } from '../TInputs'

interface IFormInput {
  textValue: string
  text2: string
  radioValue: string
  checkboxValue: string[]
  dateValue: Date
  dropdownValue: string
  sliderValue: number
}

const defaultValues = {
  textValue: '',
  text2: '',
  radioValue: '',
  checkboxValue: [],
  dateValue: new Date(),
  dropdownValue: '',
  sliderValue: 0
}
export default function TFormTest() {
  const methods = useForm<IFormInput>({ defaultValues: defaultValues })
  const { handleSubmit, reset, control, setValue, watch } = methods
  const onSubmit = (data: IFormInput) => console.log(data)

  return (
    <Paper
      style={{
        display: 'grid',
        gridRowGap: '20px',
        padding: '20px',
        margin: '10px 300px'
      }}
    >
      <Typography variant='h6'> Form Demo test text</Typography>

      <TInputText name='textValue' control={control} label='Text Input' />
      <TInputText name='text2' control={control} label='Text Input' />
      <TInputRadio name='radioValue' control={control} label={'Radio Input'} />
      <TInputDropdown name='dropdownValue' control={control} label='Dropdown Input' />
      <TInputDate name='dateValue' control={control} label='Date Input' />
      <TInputMultiCheckbox control={control} setValue={setValue} name={'checkboxValue'} label={'Checkbox Input'} />
      <TInputSlider name='sliderValue' control={control} setValue={setValue} label={'Slider Input'} />

      <Button onClick={handleSubmit(onSubmit)} variant={'contained'}>
        Submit
      </Button>
      <Button onClick={() => reset()} variant={'outlined'}>
        Reset
      </Button>
    </Paper>
  )
}
