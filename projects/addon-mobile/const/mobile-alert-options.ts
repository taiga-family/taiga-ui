import {TuiDialogOptions} from '@taiga-ui/core';

export type TuiMobileAlertOptions = Omit<
    TuiDialogOptions<unknown>,
    'border' | 'data' | 'dismissible' | 'header' | 'label' | 'position' | 'required'
>;

const MOBILE_ALERT_OPTIONS: TuiMobileAlertOptions = {
    size: `fullscreen`,
    closeable: false,
};

export type TuiIosAlertOptions = Omit<
    TuiDialogOptions<unknown>,
    'border' | 'data' | 'header' | 'label' | 'position' | 'required'
>;

export const TUI_IOS_ALERT_OPTIONS: TuiIosAlertOptions = {
    dismissible: false,
    ...MOBILE_ALERT_OPTIONS,
};

export type TuiAndroidAlertOptions = TuiIosAlertOptions;

export const TUI_ANDROID_ALERT_OPTIONS: TuiAndroidAlertOptions = {
    dismissible: true,
    ...MOBILE_ALERT_OPTIONS,
};
