import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as React from 'react';
import { TODOItem } from '../TODOItem';

export interface ITODOListProps {
  items: { title: string }[];
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
