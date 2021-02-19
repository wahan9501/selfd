import { StoryContext } from '@storybook/react/dist/client/preview/types-6-0';
import { useStorybookMoveable } from '../src/hooks/useMoveable';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

/* Global variables from toolbar */
export const globalTypes = {
  wrapper: {
    name: 'Wrapper',
    description: 'Wrap the component with a flex container',
    defaultValue: false,
    toolbar: {
      items: [
        { title: 'on', value: true },
        { title: 'off', value: false },
      ],
    },
  },
};

/* Decorators */
export const WrapperDecorator = (Story: any, context: StoryContext) => {
  const isWrapperOn = context.globals.wrapper;

  return isWrapperOn ? useStorybookMoveable(<Story />) : <Story />;
};
