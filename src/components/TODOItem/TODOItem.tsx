import Checkbox from '@material-ui/core/Checkbox';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import * as React from 'react';

export enum TODOItemStatus {
  Undo,
  Done,
}

export interface ITODOItemProps {
  title: string;
  status: TODOItemStatus;
}

export function TODOItem(props: ITODOItemProps) {
  const { title } = props;
  const [checked, setChecked] = React.useState(false);

  return (
    <ListItem button>
      <ListItemIcon>
        <Checkbox
          checked={checked}
          onChange={(ev) => setChecked(ev.target.checked)}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      </ListItemIcon>
      <ListItemText>{title}</ListItemText>
    </ListItem>
  );
}
