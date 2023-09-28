import React, { ReactNode } from 'react'

type ButtonProps = {
    children: ReactNode;
  };

function Button(props: ButtonProps) {
  return (
    <button className='md:ml-8 bg-indigo-600 text-white py-2 px-6 font-[Poppins] rounded md:m1-8 hover:bg-indigo-400 duration-500'>
        {props.children}
    </button>
  )
}

export default Button