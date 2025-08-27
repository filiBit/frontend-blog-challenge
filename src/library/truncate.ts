export function truncate(text: string, length: number): string {
    return text.length > length ? text.slice(0, length - 1) + "..." : text;
}
