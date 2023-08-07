import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';

// TODO: Make it a token in 4.0, think about mono icons for card component
export const TUI_PAYMENT_SYSTEM_ICONS: Record<TuiPaymentSystem, string> = {
    mir: `tuiIconMir`,
    visa: `tuiIconVisaMono`,
    electron: `tuiIconElectronMono`,
    mastercard: `tuiIconMastercard`,
    maestro: `tuiIconMaestro`,
    amex: `tuiIconAmex`,
    dinersclub: `tuiIconDinersClub`,
    discover: `tuiIconDiscover`,
    humo: `tuiIconHumo`,
    jcb: `tuiIconJCB`,
    rupay: `tuiIconRuPay`,
    unionpay: `tuiIconUnionPay`,
    uzcard: `tuiIconUzcard`,
    verve: `tuiIconVerve`,
};
