/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister, Controller, Control } from "react-hook-form"
import { Select as SelectA, SelectProps as SelectPropsA } from "antd"
import styled, { createGlobalStyle } from "styled-components"

type SelectProps = SelectPropsA & {
    id?: string,
    name?: string,
    classNameContainer?: string,
    label?: string,
    error?: string,
    control?: Control<any>
}

export const Select = (props: SelectProps) => {
    const { id, name, classNameContainer, label, error, control } = props;
    return (
        <div className={classNameContainer}>
            {/* <GlobalStyle /> */}
            {!!label && <label htmlFor={id}>{label}</label>}
            <Controller
                control={control}
                name={name}
                render={({ field }) => (
                    <SelectS
                        {...field}
                        defaultValue={field.value}
                        {...props}
                    >
                    </SelectS>


                )}
            />
            {!!error && <p className="text-red-500 text-14">{error}</p>}
        </div>
    )
}

const SelectS = styled(SelectA)`
    border: 1px solid black;
    &:hover{
        .ant-select-selector{
            border: none !important;
        }
    }
    &:focus{
        .ant-select-selector{
            border: none !important;
        }
    }
    .ant-select-selector{
        height: fit-content !important;
        padding: 10px !important;
        &::after{
            line-height: 22px !important;
        }
    }
    .ant-select-selection-item{
        line-height: 22px !important;
        height: fit-content !important;
        
    }
`;