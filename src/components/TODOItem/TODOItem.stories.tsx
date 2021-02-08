import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { FlexContainerDecorator } from '../../../.storybook/decorators';
import { ITODOItemProps, TODOItem, TODOItemStatus } from './TODOItem';

export default {
  title: 'Components/TODOItem',
  component: TODOItem,
  decorators: [FlexContainerDecorator],
};

const Template: Story<ITODOItemProps> = (args) => {
  return <TODOItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'setup storybook',
  status: TODOItemStatus.Undo,
};
