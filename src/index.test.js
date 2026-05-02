import * as library from './index';
import IconDropdown from './IconDropdown';
import IconPickerModal from './IconPickerModal';

describe('src/index exports', () => {
  it('exports IconDropdown', () => {
    expect(library.IconDropdown).toBe(IconDropdown);
  });

  it('exports IconPickerModal', () => {
    expect(library.IconPickerModal).toBe(IconPickerModal);
  });
});
