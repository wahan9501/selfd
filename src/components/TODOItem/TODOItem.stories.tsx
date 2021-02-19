import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import { WrapperDecorator } from '../../../.storybook/preview';
import { ITODOItemProps, TODOItem, TODOItemStatus } from './TODOItem';

export default {
  title: 'Components/TODOItem',
  component: TODOItem,
  decorators: [WrapperDecorator],
};

const Template: Story<ITODOItemProps> = (args) => {
  return <TODOItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  title: 'setup storybook',
  status: TODOItemStatus.Undo,
};
