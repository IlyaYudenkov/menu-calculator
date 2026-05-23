import type { ReactNode } from "react"
import { InputText } from "./ui/Text"
import { InputSelect } from "./ui/Select"
import { InputTextAndSelect } from "./ui/TextAndSelect"

interface InputProps {
    children: ReactNode
}

export default function Input({ children }: InputProps) {
    return (
        { children }
    )
}

Input.Text = InputText
Input.Select = InputSelect
Input.TextAndSelect = InputTextAndSelect


