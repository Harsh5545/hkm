import React from 'react'

function Button(props) {
    const {className,style,onClick,value}=props
  return (
    <div>
        <button className={`${className} h-8 px-4 flex items-center justify-center bg-[#E7414D] rounded-md`} style={style} onClick={onClick}>{value}</button>
    </div>
  )
}

export default Button