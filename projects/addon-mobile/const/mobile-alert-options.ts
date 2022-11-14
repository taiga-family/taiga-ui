import {TuiDialogOptions} from '@taiga-ui/core';

export type TuiMobileAlertOptions = Omit<
    TuiDialogOptions<unknown>,
    'data' | 'required' | 'dismissible' | 'header' | 'label'
>;

const MOBILE_ALERT_OPTIONS: TuiMobileAlertOptions = {
    size: `fullscreen`,
    closeable: false,
};

export type TuiIosAlertOptions = Omit<
    TuiDialogOptions<unknown>,
    'data' | 'required' | 'header' | 'label'
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
