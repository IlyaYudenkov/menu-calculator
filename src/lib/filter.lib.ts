export const normalizeFilter = (value: string) => {
    return value
        .toLowerCase()
        .replace(/["'«»`]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
}