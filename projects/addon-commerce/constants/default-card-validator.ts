import {tuiIsCardLengthValid, tuiIsCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import type {TuiBooleanHandler} from '@taiga-ui/cdk';

export const tuiDefaultCardValidator: TuiBooleanHandler<string> = card =>
    card.length > 11 && tuiIsCardLengthValid(card) && tuiIsCardNumberValid(card);
