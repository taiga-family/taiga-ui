export function successLog(message: string): void {
    console.info('\x1B[32m%s\x1B[0m', message, '\u2713');
}

export function infoLog(message: string): void {
    console.info('\x1B[34m%s\x1B[0m', message);
}
