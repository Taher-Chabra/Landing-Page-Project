import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export const StyledTabs = styled(Tabs)({
   '& .MuiTabs-indicator': {
     backgroundColor: 'transparent',
   },
   '& .MuiTabs-flexContainer': {
     width: '70%',
     margin: '0 auto 1rem auto',
     justifyContent: 'space-between',
   },
});
 
export const StyledTab = styled((props) => (
   <Tab disableRipple {...props} />
 ))(({ theme }) => ({
   border: '0.5px solid #AFAFAF',
   backgroundColor: 'rgba(248, 248, 248, 1)',
   textTransform: 'none',
   width: 'max-content',
   minHeight: 29,
   borderRadius: 4,
   padding: '0.3rem 0.6rem',
   [theme.breakpoints.up('sm')]: {
     minWidth: 0,
   },
   fontWeight: theme.typography.fontWeightRegular,
   color: 'rgb(0, 0, 0)',
   fontFamily: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"'].join(','),
   '&:hover': {
     color: 'red',
     opacity: 1,
   },
   '&.Mui-selected': {
     color: 'white',
     backgroundColor: 'rgba(253, 111, 0, 1)',
     fontWeight: theme.typography.fontWeightMedium,
   },
   '&.Mui-focusVisible': {
     backgroundColor: 'rgba(253, 111, 0, 1)',
   },
}));