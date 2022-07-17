import example from './html/example.html';

export default {
  title: 'Components / Button',
  argTypes: { onclick: { action: 'clicked' } },
};

export const Example = () => example;
