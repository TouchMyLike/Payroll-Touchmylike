import { useState } from 'react'
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'
import { FormInputProps } from './index'

export function TInputDropdown(props: FormInputProps) {
  const { name, control, label } = props

  const [clear, setClear] = useState(true)
  const [options, setOptions] = useState([
    {
      label: 'Dropdown Option 1',
      value: '1'
    },
    {
      label: 'Dropdown Option 2',
      value: '2'
    }
  ])
  const clearTitle = props.clearTitle || 'None'

  const generateSingleOptions = () => {
    return options.map((option: any, index: number) => {
      return (
        <MenuItem key={index} value={option.value}>
          {option.label}
        </MenuItem>
      )
    })
  }

  return (
    <FormControl size={'small'}>
      <InputLabel>{label}</InputLabel>
      <Controller
        render={({ field: { onChange, value } }) => (
          <Select label={label} value={value} onChange={onChange}>
            {clear && <MenuItem value=''>{clearTitle}</MenuItem>}
            {generateSingleOptions()}
          </Select>
        )}
        control={control}
        name={name}
      />
    </FormControl>
  )
}
