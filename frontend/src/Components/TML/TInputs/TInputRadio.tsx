import React from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { Controller } from 'react-hook-form'
import { FormInputProps } from './index'

const options = [
  {
    label: 'Radio Option 1',
    value: '1'
  },
  {
    label: 'Radio Option 2',
    value: '2'
  }
]

export function TInputRadio({ name, control, label }: FormInputProps) {
  const generateRadioOptions = () => {
    return options.map((singleOption, i) => (
      <FormControlLabel key={i} value={singleOption.value} label={singleOption.label} control={<Radio />} />
    ))
  }

  return (
    <FormControl component='fieldset'>
      <FormLabel component='legend'>{label}</FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
          <RadioGroup value={value} onChange={onChange}>
            {generateRadioOptions()}
          </RadioGroup>
        )}
      />
    </FormControl>
  )
}

// export const TInputRadio: React.FC<FormInputProps> = ({ name, control, label }) => {
//   const generateRadioOptions = () => {
//     return options.map((singleOption, i) => (
//       <FormControlLabel key={i} value={singleOption.value} label={singleOption.label} control={<Radio />} />
//     ))
//   }

//   return (
//     <FormControl component='fieldset'>
//       <FormLabel component='legend'>{label}</FormLabel>
//       <Controller
//         name={name}
//         control={control}
//         render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
//           <RadioGroup value={value} onChange={onChange}>
//             {generateRadioOptions()}
//           </RadioGroup>
//         )}
//       />
//     </FormControl>
//   )
// }
