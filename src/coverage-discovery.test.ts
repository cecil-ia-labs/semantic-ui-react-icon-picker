import { IconDropdown, IconPickerModal } from './index';

describe('TypeScript test discovery', () => {
  it('resolves exports in a TS test file', () => {
    expect(IconDropdown).toBeDefined();
    expect(IconPickerModal).toBeDefined();
  });
});
