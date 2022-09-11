import { TextField } from '@mui/material'
import { Controller, useFormContext } from 'react-hook-form'
import { FormInputProps } from './index'

export function TInputText({ name, control, label }: FormInputProps) {
  const handleChange = (e: any) => {
    e.target.value
    // debugger
  }
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true, minLength: { value: 2, message: 'error message' } }} //<< required
      // render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
      render={({ field: { onChange, value }, fieldState: { error }, formState: { errors } }) => (
        <TextField
          helperText={error ? error.message : null}
          size='small'
          error={!!errors[name]}
          // onChange={onChange}
          onChange={e => {
            onChange(e)
            handleChange(e)
          }}
          value={value}
          fullWidth
          label={label}
          variant='outlined'
          required //<< required
        />
      )}
    />
  )
}
