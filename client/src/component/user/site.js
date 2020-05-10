import React from 'react';
import UserLayout from '../hoc/user';
import UpdateSiteNfo from './updateSiteNfo';

const ManageSite = () => {
    return (
        <UserLayout>
           <UpdateSiteNfo/>
        </UserLayout>
    );
};

export default ManageSite;