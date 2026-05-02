import type { IconName } from './icons';
import type { IconSelectionChangeHandler } from './types/icon-picker';

/**
 * Public props for the `IconPickerModal` component.
 */
export interface IconPickerModalProps {
  /**
   * Currently selected icon name.
   */
  value?: IconName;
  /**
   * Called whenever an icon is selected from the modal.
   */
  onChange?: IconSelectionChangeHandler;
}
