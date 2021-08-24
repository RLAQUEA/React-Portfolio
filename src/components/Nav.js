import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function LabTabs() {
  const classes = useStyles();
  const [Nav, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <TabContext value={Nav}>
        <AppBar position="static">
          <TabList onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Home" value="1" />
            <Tab label="About" value="2" />
            <Tab label="Contact" value="3" />
          </TabList>
        </AppBar>
        <TabPanel value="1">Home</TabPanel>
        <TabPanel value="2">About</TabPanel>
        <TabPanel value="3">Contact</TabPanel>
      </TabContext>
    </div>
  );
}
