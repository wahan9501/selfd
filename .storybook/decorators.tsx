import { useStorybookMoveable } from '../src/hooks/useMoveable';

export const FlexContainerDecorator = (Story: any) =>
  useStorybookMoveable(<Story />);
