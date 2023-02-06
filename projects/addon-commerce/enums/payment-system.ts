export const enum TuiPaymentSystem {
    Visa = `visa`,
    Electron = `electron`,
    Mastercard = `mastercard`,
    Maestro = `maestro`,
    Mir = `mir`,
}

export type TuiPaymentSystemT = 'electron' | 'maestro' | 'mastercard' | 'mir' | 'visa';
