export default function toNumber(
    value?: string | number | undefined
): number | undefined {
    return typeof value === 'string'
        ? parseInt(value.replace(/\D/, ''))
        : value;
}
