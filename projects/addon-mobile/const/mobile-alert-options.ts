// import {TuiDialogOptions} from '@taiga-ui/core';
// TODO: fix typing
const MOBILE_ALERT_OPTIONS: any = {
    size: 'fullscreen',
    closeable: false,
};

export const TUI_IOS_ALERT_OPTIONS: any = {
    dismissible: false,
    ...MOBILE_ALERT_OPTIONS,
};

export const TUI_ANDROID_ALERT_OPTIONS: any = {
    dismissible: true,
    ...MOBILE_ALERT_OPTIONS,
};
