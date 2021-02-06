import { FunctionComponent } from 'react'
import './styles.scss'

interface PropTypes {
  className?: string
  placeholder?: string
  onChange?: () => void
  onFocusChange?: () => void
  onMouseDown?: () => void
}

const TextField: FunctionComponent<PropTypes> = props => {
  const {
    className,
    placeholder,
    onChange,
    onMouseDown
  } = props;
  return (
    <div className="text-field">
      <input
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        onMouseDown={onMouseDown}
      />
    </div>
  )
}

TextField.defaultProps = {
  className: '',
  placeholder: ''
}

export default TextField
