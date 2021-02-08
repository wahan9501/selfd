// Button.stories.tsx

import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import { ITODOItemProps, TODOItem, TODOItemStatus } from "./TODOItem";

export default {
  title: "Components/TODOItem",
  component: TODOItem,
} as Meta;

const Template: Story<ITODOItemProps> = (args) => <TODOItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "setup storybook",
  status: TODOItemStatus.Undo,
};
