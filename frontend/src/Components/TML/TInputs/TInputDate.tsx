// import DateFnsUtils from '@date-io/date-fns'
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { Controller, useFormContext } from 'react-hook-form' //@mui/material
import { FormInputProps } from './index'
const DATE_FORMAT = 'dd-MMM-yy'

export function TInputDate({ name, control, label }: FormInputProps) {
  return (
    <></>
    // <MuiPickersUtilsProvider utils={DateFnsUtils}>
    // <Controller
    //   name={name}
    //   control={control}
    //   render={({ field, fieldState, formState }) => (
    //     <KeyboardDatePicker
    //       fullWidth
    //       variant='inline'
    //       defaultValue={new Date()}
    //       id={`date-${Math.random()}`}
    //       label={label}
    //       rifmFormatter={(val) => val.replace(/[^[a-zA-Z0-9-]*$]+/gi, '')}
    //       refuse={/[^[a-zA-Z0-9-]*$]+/gi}
    //       autoOk
    //       KeyboardButtonProps={{
    //         'aria-label': 'change date',
    //       }}
    //       format={DATE_FORMAT}
    //       {...field}
    //     />
    //   )}
    // />
    // </MuiPickersUtilsProvider>
  )
}
