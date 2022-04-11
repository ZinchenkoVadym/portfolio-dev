import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './TabsMU.scss'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{paddingTop: '10px' }}>
                    <Typography component={'ul'}>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
        'color': 'white',
    };
}


export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
            <Box sx={{ width: '100%'}} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <Tabs
                    TabIndicatorProps={{style: {background:'#f9004d'}}}
                    value={value}
                    onChange={handleChange}
                    allowScrollButtonsMobile={true}
                >
                    <Tab sx={{
                        color: 'white',
                        '&.Mui-selected': {
                            color: '#f9004d',
                        },
                    }} label="Technical Skills" {...a11yProps(0)}/>
                    <Tab sx={{
                        color: 'white',
                        '&.Mui-selected': {
                            color: '#f9004d',
                        },
                    }} label=" Soft Skills" {...a11yProps(1)}/>

                </Tabs>
            </Box>
                <TabPanel
                    value={value} index={0}>
                <ul className='skills'>
                    <li>HTML 5</li>
                    <li>CSS(SCSS)</li>
                    <li>JS</li>
                    <li>React</li>
                    <li>Web-pack(basic)</li>
                    <li>MUI</li>
                    <li>jQuery</li>
                    <li>Redux</li>
                </ul>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ul className='skills'>
                    <li>Communication</li>
                    <li>Adaptability</li>
                    <li>Collaboration</li>
                    <li>Enthusiasm</li>
                    <li>Patience</li>
                    <li>Creativity</li>
                </ul>
            </TabPanel>

        </Box>
    );
}