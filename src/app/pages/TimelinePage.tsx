import React, {FC} from 'react';
import {Timeline, useStoreContext} from '@technote-space/ga-framework';

const TimelinePage: FC = () => {
  const {store: {histories}} = useStoreContext();

  return <Timeline data={histories}/>;
};

export default TimelinePage;
