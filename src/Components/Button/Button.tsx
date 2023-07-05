import classNames from 'classnames';
import style from './Button.module.scss';

type typeButton = 'button' | 'submit' | 'reset'

interface ButtonProps {
  children: React.ReactNode,
  type?: typeButton,
  className: string,
  disabled: boolean,
  active: boolean,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: React.FC<ButtonProps> = ({ children, type = 'button', className, disabled, active, onClick }) => {
  const classes = classNames(
    style.btn,
    className,
    { active }
  )

  return (
    <button
      type={ type }
      className={ classes }
      onClick={ onClick ? (e) => onClick(e) : undefined }
    >
      { children }
    </button>
  )
}

export default Button