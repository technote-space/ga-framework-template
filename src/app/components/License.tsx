import React, {useMemo, useCallback, FC} from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import license from '../../../ThirdPartyNotices.txt';

const useStyles = makeStyles(() => createStyles({
  wrap: {
    background: '#555',
    marginTop: 10,
    padding: 5,
    textAlign: 'center',
  },
  link: {
    cursor: 'pointer',
  },
}));

const License: FC = () => {
  const classes     = useStyles();
  const handleClick = useCallback(async() => {
    const res  = await axios.get(license, {
      responseType: 'blob',
    });
    const blob = new Blob([res.data]);
    saveAs(blob, 'ThirdPartyNotices.txt');
  }, []);

  return useMemo(() => <div className={classes.wrap}>
    <a onClick={handleClick} className={classes.link}>License</a>
  </div>, [classes]);
};

export default License;
