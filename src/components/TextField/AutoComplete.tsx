import { FunctionComponent, useState, useEffect } from 'react'
import TextField from './index'

interface Option {
  label: string
  value: string
}

interface PropTypes {
  className?: string
  inputClassName?: string
  placeholder?: string
  value: string
  options: Option[]
  onChange?: () => void
  onSelect?: () => void
  onFocusChange?: () => void
  onMouseDown?: () => void
}


const AutoComplete: FunctionComponent<PropTypes> = props => {
  const [showOptions, setShowOptions] = useState(false)
  useEffect(() => {

  }, [props])

  return (
    <div>
      <TextField />
    </div>
  )
}

export default AutoComplete
