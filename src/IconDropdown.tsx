import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { icons } from './icons';
import type { IconName } from './icons';
import type { IconDropdownProps } from './IconDropdown.types';
import styles from './styles.module.css';


const IconDropdown: React.FC<IconDropdownProps> = ({ value, onChange }) => (
  <div className={styles['icon-picker']}>
    <Dropdown
      placeholder='Select an icon...'
      fluid
      selection
      search
      clearable
      selectOnBlur={false}
      value={value}
      options={icons.map((icon) => ({
        key: icon,
        text: icon,
        value: icon,
        icon,
        className: styles['icon-picker-item']
      }))}
      onChange={(_, data) => onChange?.(data.value as IconName | undefined)}
    />
  </div>
);

export default IconDropdown;
