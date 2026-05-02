import React from 'react';
import { Modal, Button, Popup, Input } from 'semantic-ui-react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { icons as allIcons } from './icons';
import type { IconName } from './icons';
import type { IconPickerModalProps } from './IconPickerModal.types';

const SCROLLABLE_CONTAINER_HEIGHT = 400;
const INITIAL_LIMIT = 64;
const PAGE_SIZE = 32;

interface IconPickerModalState {
  open: boolean;
  filteredIcons: readonly IconName[];
  limit: number;
}

class IconPickerModal extends React.Component<IconPickerModalProps, IconPickerModalState> {
  constructor(props: IconPickerModalProps) {
    super(props);
    this.state = {
      open: false,
      filteredIcons: allIcons,
      limit: INITIAL_LIMIT
    };
  }

  onSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { limit } = this.state;
    const query = event.target.value;
    const matchingIcons = allIcons.filter((icon) => icon.match(query));
    const adjustedLimit = Math.min(
      Math.max(INITIAL_LIMIT, limit),
      matchingIcons.length
    );

    this.setState({
      filteredIcons: matchingIcons,
      limit: adjustedLimit
    });
  };

  fetchMore = (): void => {
    const { filteredIcons, limit } = this.state;
    if (limit > filteredIcons.length) {
      return;
    }

    this.setState({
      limit: Math.min(limit + PAGE_SIZE, filteredIcons.length)
    });
  };

  close = (): void => {
    this.setState({
      open: false,
      filteredIcons: allIcons,
      limit: INITIAL_LIMIT
    });
  };

  renderTrigger(): React.ReactNode {
    const { value } = this.props;
    return (
      <Button
        icon={value || undefined}
        content={value ? undefined : 'Select Icon'}
        onClick={() => this.setState({ open: true })}
      />
    );
  }

  renderIcons(): React.ReactNode {
    const { onChange } = this.props;
    const { filteredIcons, limit } = this.state;

    return filteredIcons.slice(0, limit).map((icon) => (
      <div key={icon} className='two wide column'>
        <Popup
          content={icon}
          trigger={
            <Button
              icon={icon}
              onClick={() => {
                onChange?.(icon);
                this.close();
              }}
            />
          }
        />
      </div>
    ));
  }

  renderContent(): React.ReactNode {
    const { filteredIcons, limit } = this.state;
    return (
      <InfiniteScroll
        className='ui grid'
        style={{ alignContent: 'flex-start' }}
        dataLength={limit}
        next={this.fetchMore}
        hasMore={limit < filteredIcons.length}
        initialScrollY={0}
        height={SCROLLABLE_CONTAINER_HEIGHT}
        loader={<div />}
      >
        {this.renderIcons()}
      </InfiniteScroll>
    );
  }

  renderActionBar(): React.ReactNode {
    return (
      <React.Fragment>
        <Input
          autoFocus
          icon='search'
          placeholder='Search...'
          onChange={this.onSearch}
          style={{ float: 'left' }}
        />
        <Button content='Cancel' onClick={this.close} />
      </React.Fragment>
    );
  }

  render(): React.ReactNode {
    const { open } = this.state;

    return (
      <Modal
        trigger={this.renderTrigger()}
        closeIcon
        open={open}
        onClose={this.close}
      >
        <Modal.Header>Select an Icon</Modal.Header>
        <Modal.Content>{this.renderContent()}</Modal.Content>
        <Modal.Actions>{this.renderActionBar()}</Modal.Actions>
      </Modal>
    );
  }
}

export default IconPickerModal;
