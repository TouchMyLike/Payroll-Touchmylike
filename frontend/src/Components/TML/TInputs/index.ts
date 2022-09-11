import { TInputText } from './TInputText'
import { TInputSlider } from './TInputSlider'
import { TInputRadio } from './TInputRadio'
import { TInputMultiCheckbox } from './TInputMultiCheckbox'
import { TInputDropdown } from './TInputDropdown'
import { TInputDate } from './TInputDate'
export { TInputText, TInputSlider, TInputRadio, TInputMultiCheckbox, TInputDropdown, TInputDate }

export interface FormInputProps {
  name: string
  control: any
  label: string
  setValue?: any
  clearTitle?: string
}
