import List from '@material-ui/core/List';
import * as React from 'react';
import { ITODOItemProps, TODOItem } from '../TODOItem';

export interface ITODOListProps {
  items: ITODOItemProps[];
}

export function TODOList(props: ITODOListProps) {
  const { items } = props;

  return (
    <List>
      {items.map((item) => (
        <TODOItem {...item} />
      ))}
    </List>
  );
}
