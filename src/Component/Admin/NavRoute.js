
import { AiFillDashboard } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BiUser } from 'react-icons/bi';
import { BiCategory } from 'react-icons/bi';
import {MdProductionQuantityLimits} from 'react-icons/md';
import {TiVendorAndroid} from 'react-icons/ti';


export const navConfig = [
    {
        path:'/admin',
        title:'Dashboard',
        icon: <AiFillDashboard/>
    },
 
    {
        path:'/admin/user',
        title:'User',
        icon: <BiUser/>
    },
    {
        path:'/admin/vendor',
        title:'Vendor',
        icon:<TiVendorAndroid/>
    },
    {
        path:'/admin/category',
        title:'Category',
        icon: <BiCategory/>
    },
    {
        path:'/admin/product',
        title:'Product',
        icon:<MdProductionQuantityLimits/>
    },
  
]