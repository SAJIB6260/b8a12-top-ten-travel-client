import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import useOverview from '../../../hook/useOverview';
import Card from '../../../Components/Card/Card';
import usePackages from '../../../hook/usePackages';
import { Link } from 'react-router-dom';
import TourCard from './tourCard';
import useAxiosSecure from '../../../hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import MeetGuide from './MeetGuide';

const TourismTab = () => {

    const [overview] = useOverview();
    const [packages] = usePackages();

    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })
    const guideUser = users.filter((gUser) => gUser.role === "tour-guide");

    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList 
            onChange={handleChange} 
            aria-label="lab API tabs example"
            centered
            >
              <Tab label="Overview" value="1" />
              <Tab label="Our Packages" value="2" />
              <Tab label="Meet Our Tour Guides" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
            {
            overview.map(view => <Card key={view.id} view={view}></Card>)
          }
            </div>
          </TabPanel>
          <TabPanel value="2">
            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8">
            {
                packages.slice(0,3).map(tourPackage => <TourCard key={tourPackage._id} tourPackage={tourPackage}></TourCard>)
            }
        </div>
        <div className="flex justify-center">
            <Link to="package"><button className="bg-[#16CAC9] hover:bg-[#F99615] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 my-7 lg:my-10">Show All</button></Link>
            </div>
        </TabPanel>
          <TabPanel value="3">
            <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3'>
              {
                guideUser.map(guide => <MeetGuide key={guide._id} guide={guide}></MeetGuide>)
              }
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    );
};

export default TourismTab;