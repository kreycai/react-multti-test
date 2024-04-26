import * as S from "./style"
import { ReactNode, CSSProperties, useState } from "react"

interface Props{
    type?: 'text' | 'password' | 'number' | 'email' | 'url' | 'date' | 'checkbox' | 'radio' | 'file' | 'hidden';
    label: string;
    placeholder?: string;
    name: string;
    marginBottom?: number;
    marginTop?: number;
    typeInp: 'input' | 'select';
    options?: {label: string, value: string | number}[];
}

export function CommonInput({ type, label, placeholder, name, marginBottom = 0, marginTop = 0, typeInp, options = [] }: Props) {
    const [isEmpty, setIsEmpty] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setIsEmpty(event.target.value === "");
    };
    return (
        <S.Input style={{marginBottom: `${marginBottom}px`, marginTop:`${marginTop}px`}}>
            <label htmlFor={name}>{label}</label>
            {typeInp == 'input' ?
                <input name={name} placeholder={placeholder} type={type} />
                : typeInp == 'select' &&
                <select onChange={handleChange} name={name} id="" defaultValue="escolha uma opção">
                    <option value="" disabled selected hidden>Selecione uma opção</option>
                    {options?.map((e)=>{
                        return <option value={e?.value}>{e?.label}</option>
                    })}
                </select>
            }

        </S.Input>
    )
}