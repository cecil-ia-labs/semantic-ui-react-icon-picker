import type { IconName } from './icons';
import type { IconSelectionChangeHandler } from './types/icon-picker';

/**
 * Public props for the `IconDropdown` component.
 */
export interface IconDropdownProps {
  /**
   * Currently selected icon name.
   */
  value?: IconName;
  /**
   * Called whenever the selected icon changes or is cleared.
   */
  onChange?: IconSelectionChangeHandler;
}
