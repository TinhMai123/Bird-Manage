import React from 'react';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter,
} from 'cdbreact';

const SideBar = () => {
    return (
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0">
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                Navigation
            </CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <a href='/'><CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem></a>
                    <a href='/BreedingManagement'><CDBSidebarMenuItem icon="venus-double">Pairing</CDBSidebarMenuItem></a>
                    <a href='/BirdManagement'><CDBSidebarMenuItem icon="crow">Bird Manage</CDBSidebarMenuItem></a>
                    <a href='/'><CDBSidebarMenuItem icon="igloo">Cage Manage</CDBSidebarMenuItem></a>
                    <a href='/'><CDBSidebarMenuItem icon="utensils">Meal</CDBSidebarMenuItem></a>

                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{ padding: '20px 5px', height: '100vh' }}

                >
                </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default SideBar;