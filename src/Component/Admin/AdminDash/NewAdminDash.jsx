import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';
import { getVendor } from '../../redux/Vendor/Action';
import { getUsers } from '../../redux/Login/Action';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function NewAdminDash() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const dispatch = useDispatch()
  React.useEffect(()=>{
    dispatch(getVendor());
    dispatch(getUsers());
  },[])
  const userdata = useSelector(state =>state.user)
  console.log(userdata);
  const uservalue = userdata.users.data;
          //vendorInfo
  const vendordata = useSelector(state =>state.vendor)
  const vendorvalue = vendordata.vendors.data;
  console.log(vendordata);
  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 424 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="Users" {...a11yProps(0)} />
        <Tab label="vendors" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
      <table className="table table-bordered table-responsive-sm">
                <thead className='thead-dark'>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Location</th>
              
                </tr>
                </thead>
                <tbody>
                {
                  uservalue?.map((val,ind)=>{
                    return (
                      <tr>
                        <td>{++ind}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.location}</td>
                       
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
              </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <table className="table">
                <thead className='thead-dark'>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Location</th>
                
                </tr>
                </thead>
                <tbody>
                {
                  vendorvalue?.map((val,ind)=>{
                    return (
                      <tr>
                        <td>{++ind}</td>
                        <td>{val.name}</td>
                        <td>{val.email}</td>
                        <td>{val.location}</td>
                      </tr>
                    )
                  })
                }
                </tbody>
              </table>
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}