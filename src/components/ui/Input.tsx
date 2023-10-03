/* eslint-disable @typescript-eslint/no-explicit-any */
import { HTMLInputTypeAttribute } from 'react'
import { UseFormRegister } from 'react-hook-form'
//rafc
type InputProps = {
    label?: string
    id?: string
    type?: HTMLInputTypeAttribute
    register?: UseFormRegister<any>
    error?: string
    placeholder?: string
    className?: string
    name?: string,
    disabled?: boolean
}
export const Input = ({ label, id, register, type = "text", error, placeholder, className = '', name, disabled }: InputProps) => {
    return (
        <div className={className}>
            {!!label && <label htmlFor={id}>{label}</label>}
            <input
                id={id}
                placeholder={placeholder}
                type={type}
                className="p-10 mt-8 w-full rounded-6 bg-[#333] disabled:bg-[#dfdfdf]"
                {...register?.(name)}
                disabled={disabled}
            />
            {!!error && <p className="text-red-500 text-14">{error}</p>}
        </div>
    )
}
