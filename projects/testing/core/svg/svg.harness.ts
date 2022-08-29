import {tuiHarnessWith, tuiWithPredicate} from '@taiga-ui/testing/utils';

@tuiWithPredicate
export class TuiSvgHarness extends tuiHarnessWith<TuiSvgHarness>(`tui-svg`) {}
