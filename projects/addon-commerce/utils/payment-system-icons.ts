import {TuiPaymentSystem} from '@taiga-ui/addon-commerce/types';

// TODO: Make it a token in 4.0, think about mono icons for card component
export const TUI_PAYMENT_SYSTEM_ICONS: Record<TuiPaymentSystem, string> = {
    amex: `tuiIconAmex`,
    dinersclub: `tuiIconDinersClub`,
    discover: `tuiIconDiscover`,
    electron: `tuiIconElectronMono`,
    humo: `tuiIconHumo`,
    jcb: `tuiIconJCB`,
    maestro: `tuiIconMaestro`,
    mastercard: `tuiIconMastercard`,
    mir: `tuiIconMir`,
    rupay: `tuiIconRuPay`,
    unionpay: `tuiIconUnionPay`,
    uzcard: `tuiIconUzcard`,
    verve: `tuiIconVerve`,
    visa: `tuiIconVisaMono`,
};
