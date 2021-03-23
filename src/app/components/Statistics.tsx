import type {FC} from 'react';
import React, {memo} from 'react';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import {useStoreContext} from '@technote-space/ga-framework';
import {sprintf} from 'sprintf-js';

const useStyles = makeStyles(() => createStyles({
  wrap: {
    background: '#555',
    marginTop: 10,
    padding: 5,
  },
  param: {
    margin: 5,
  },
}));

const Statistics: FC = memo(() => {
  const {store: {logic: {fitness, progress}}} = useStoreContext();
  const classes                               = useStyles();

  return <div className={classes.wrap}>
    <div>
      <div className={classes.param}>
        Progress: {sprintf('%.4f', progress)}
      </div>
      <div className={classes.param}>
        Fitness: {sprintf('%.3f', fitness)}
      </div>
    </div>
  </div>;
});

Statistics.displayName = 'Statistics';
export default Statistics;
