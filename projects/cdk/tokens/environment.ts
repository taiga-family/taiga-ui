import {inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {WA_NAVIGATOR, WA_USER_AGENT, WA_WINDOW} from '@ng-web-apis/common';
import {isIos} from '@ng-web-apis/platform';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';
import {fromEvent, map} from 'rxjs';

// https://stackoverflow.com/a/11381730/2706426 http://detectmobilebrowsers.com/
const firstRegex =
    /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/;
const secondRegex =
    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ \-/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ /])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/;

export const TUI_IS_MOBILE = tuiCreateTokenFromFactory(
    () =>
        firstRegex.test(inject(WA_USER_AGENT).toLowerCase()) ||
        secondRegex.test(inject(WA_USER_AGENT).slice(0, 4).toLowerCase()),
);

export const TUI_IS_IOS = tuiCreateTokenFromFactory(() => isIos(inject(WA_NAVIGATOR)));

export const TUI_IS_ANDROID = tuiCreateTokenFromFactory(
    () => inject(TUI_IS_MOBILE) && !inject(TUI_IS_IOS),
);

export const TUI_IS_WEBKIT = tuiCreateTokenFromFactory(
    () => !!inject<any>(WA_WINDOW)?.webkitConvertPointFromNodeToPage,
);

export const TUI_PLATFORM = tuiCreateTokenFromFactory<'android' | 'ios' | 'web'>(() => {
    if (inject(TUI_IS_IOS)) {
        return 'ios';
    }

    return inject(TUI_IS_ANDROID) ? 'android' : 'web';
});

export const TUI_IS_TOUCH = tuiCreateTokenFromFactory(() => {
    const media = inject(WA_WINDOW).matchMedia('(pointer: coarse)');

    return toSignal(fromEvent(media, 'change').pipe(map(() => media.matches)), {
        initialValue: media.matches,
    });
});

/**
 * Detect if app is running under Cypress
 * {@link https://docs.cypress.io/faq/questions/using-cypress-faq#Is-there-any-way-to-detect-if-my-app-is-running-under-Cypress Cypress docs}
 */
export const TUI_IS_CYPRESS = tuiCreateTokenFromFactory(
    () => !!inject<any>(WA_WINDOW).Cypress,
);

/**
 * Manually provide `true` when running tests in Playwright
 */
export const TUI_IS_PLAYWRIGHT = tuiCreateTokenFromFactory<boolean>(TUI_FALSE_HANDLER);

/**
 * Detect if app is running under any of test frameworks
 */
export const TUI_IS_E2E = tuiCreateTokenFromFactory(
    () => inject(TUI_IS_CYPRESS) || inject(TUI_IS_PLAYWRIGHT),
);
