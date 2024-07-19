import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Label from './label';
import { LabelProps } from './label.types';

export default {
  title: 'Example/Label',
  component: Label,
  argTypes: {
    text: { control: 'text' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Label',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: 'Label',
  disabled: true,
};
