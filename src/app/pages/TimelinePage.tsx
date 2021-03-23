import type {FC} from 'react';
import React, {memo} from 'react';
import {Timeline, useStoreContext} from '@technote-space/ga-framework';

const TimelinePage: FC = memo(() => {
  const {store: {histories}} = useStoreContext();

  return <Timeline data={histories}/>;
});

TimelinePage.displayName = 'TimelinePage';
export default TimelinePage;
