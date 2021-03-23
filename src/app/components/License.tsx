import type {FC} from 'react';
import React, {memo, useCallback} from 'react';
import axios from 'axios';
import {saveAs} from 'file-saver';
import {makeStyles, createStyles} from '@material-ui/core/styles';
import license from '^/ThirdPartyNotices.txt';

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

const License: FC = memo(() => {
  const classes     = useStyles();
  const handleClick = useCallback(async() => {
    const res  = await axios.get(license, {
      responseType: 'blob',
    });
    const blob = new Blob([res.data]);
    saveAs(blob, 'ThirdPartyNotices.txt');
  }, []);

  return <div className={classes.wrap}>
    <a onClick={handleClick} className={classes.link}>License</a>
  </div>;
});

License.displayName = 'License';
export default License;
