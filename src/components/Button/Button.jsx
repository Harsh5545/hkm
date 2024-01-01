import React from 'react'
import classNames from 'classnames'
function Button(props) {
    const {className,style,onClick,value,children}=props
    const defaultStyles = "";
  // Combine default styles and provided className
  const combinedClassName = classNames(defaultStyles, className);
  return (
    <div>
        <button className={combinedClassName} style={style} onClick={onClick}>{value}
        {children}
        </button>
    </div>
  )
}

export default Button