'use client'

import {useState} from 'react';
import { StyledTab, StyledTabs } from './ProjectTabsStyles';
import Box from '@mui/material/Box';
import ProjectsCardsView from './ProjectsCardsView';

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
      {value === index && children}
    </div>
  );
}

export default function ProjectsTabs() {
  const [value, setValue] = useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <StyledTabs value={value} onChange={handleChange} aria-label="Project Tabs">
          <StyledTab label="All" />
          <StyledTab label="UI/UX" />
          <StyledTab label="Web Design" />
          <StyledTab label="App Design" />
          <StyledTab label="Graphic Design" />
        </StyledTabs>
      </Box>

      <Box sx={{marginTop: '1.5rem'}}>
        <TabPanel value={value} index={0}>
          <ProjectsCardsView category="all"/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <ProjectsCardsView category="uiux"/>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <ProjectsCardsView category="web"/>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ProjectsCardsView category="app"/>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <ProjectsCardsView category="graphic"/>
        </TabPanel>
      </Box>
    </Box>
  );
}

