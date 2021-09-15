import {isCardLengthValid, isCardNumberValid} from '@taiga-ui/addon-commerce/utils';
import {TuiBooleanHandler} from '@taiga-ui/cdk';

export const tuiDefaultCardValidator: TuiBooleanHandler<string> = card =>
    card.length > 11 && isCardLengthValid(card) && isCardNumberValid(card);
