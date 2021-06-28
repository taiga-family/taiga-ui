export interface Country {
    mask: string;
    /**
     * @deprecated property `name` will be deleted soon
     *
     * Use this token to get countries names:
     * ```
     * import {TUI_COUNTRIES} from '@taiga-ui/kit';
     * ```
     * TODO: remove property `name` in 3.0
     */
    name: string;
}
