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
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" style={{ height: "auto", minHeight: "97vh" }}>
            <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
                Navigation
            </CDBSidebarHeader>
            <CDBSidebarContent>
                <CDBSidebarMenu>
                    <a href='/'><CDBSidebarMenuItem icon="chart-line">Dashboard</CDBSidebarMenuItem></a>
                    <a href='/BreedingManagement'><CDBSidebarMenuItem icon="border-all">Sơ đồ lồng</CDBSidebarMenuItem></a>
                    <a href='/BirdManagement'><CDBSidebarMenuItem icon="crow">Quản lí chim</CDBSidebarMenuItem></a>
                    <a href='/'><CDBSidebarMenuItem icon="igloo">Quản lí lồng</CDBSidebarMenuItem></a>
                    <a href='/MealManagement'><CDBSidebarMenuItem icon="utensils">Quản lí khẩu phần</CDBSidebarMenuItem></a>

                </CDBSidebarMenu>
            </CDBSidebarContent>

            {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{ padding: '20px 5px', height: '100vh' }}

                >
                </div>
            </CDBSidebarFooter> */}
        </CDBSidebar>
    );
};

export default SideBar;