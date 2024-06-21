import { styled } from "@mui/material";
import { SideBar } from "../../components/admin/SideBar";
import { ContentContainer } from "../../components/admin/ContentContainer";
import { AdminHeader } from "../AdminHeader";
import { Navigate, Outlet } from "react-router-dom";


export const AdminLayout = () => {
    return (
        <MainContainer>
            <Navigate to={'male'} />
            <SideBar />
            <ContentContainer>
                <AdminHeader />
                <Outlet />
            </ContentContainer>
        </MainContainer>
    );
};

const MainContainer = styled("div")`
  margin-left: 220px;
`;