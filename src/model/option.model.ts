export interface IOption<T = unknown> {
    id: string
    label: string
    value: string
    meta?: T
}
