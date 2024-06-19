import styled from "@emotion/styled";
import { Footer } from "../Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../Heaader";

export const MainLayout = () => {
    return (
        <>
            <Content>
                <Header />
                <Outlet />
            </Content>
            <Footer />
        </>
    );
};

const Content = styled("div")`
  margin-top: 20px;
  margin-right: 120px;
  margin-left: 120px;
`;