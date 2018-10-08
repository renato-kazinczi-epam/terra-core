import React from 'react';
import intlContexts from './intl-context-setup';
import CheckboxField from '../../src/CheckboxField';

it('should render a default checkbox field', () => {
  const checkBox = (<CheckboxField legend="Default CheckboxField" />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an invalid checkbox field', () => {
  const checkBox = (<CheckboxField legend="Invalid CheckboxField" isInvalid error="Test Error" />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render a help message', () => {
  const checkBox = (<CheckboxField legend="Help CheckboxField" help="This will help up determine how many chairs to request" />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render an optional part on the label', () => {
  const checkBox = (<CheckboxField legend="Optional CheckboxField" showOptional />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render required checkbox field', () => {
  const checkBox = (<CheckboxField legend="Required CheckboxField" required />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the required indicator when requested', () => {
  const checkBox = (<CheckboxField legend="Hidden Required CheckboxField" required hideRequired />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should display the required icon for fields with hideRequired, but have a state of invalid', () => {
  const checkBox = (<CheckboxField legend="Hidden Required CheckboxField" required hideRequired isInvalid />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should render the legend with custom attributes properly', () => {
  const checkBox = (<CheckboxField legend="Custom Legend CheckboxField" legendAttrs={{ class: 'application-legend' }} />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});

it('should hide the legend when requested', () => {
  const checkBox = (<CheckboxField legend="Hidden Legend legend" legendAttrs={{ class: 'application-legend' }} isLegendHidden />);
  const wrapper = shallow(checkBox, intlContexts.shallowContext);
  expect(wrapper).toMatchSnapshot();
});
