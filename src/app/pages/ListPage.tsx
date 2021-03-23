import type {FC} from 'react';
import React, {memo} from 'react';
import {List, useStoreContext} from '@technote-space/ga-framework';
import {TableCell} from '@material-ui/core';
import {sprintf} from 'sprintf-js';

const ListPage: FC = memo(() => {
  const {store: {logic: {population}}} = useStoreContext();

  return <List
    population={population}
    render={row => <>
      <TableCell component="th" scope="row" style={{width: 160}}>
        {sprintf('%.3f', row.fitness)}
      </TableCell>
      <TableCell>
        {row.value}
      </TableCell></>}
    defaultPerPage={30}
  />;
});

ListPage.displayName = 'ListPage';
export default ListPage;
