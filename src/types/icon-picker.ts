import type { IconName } from '../icons';

/**
 * Callback contract used by public icon picker components when the selected icon changes.
 */
export type IconSelectionChangeHandler = (value: IconName | undefined) => void;
