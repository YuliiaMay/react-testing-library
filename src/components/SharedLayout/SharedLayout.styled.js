import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
    height: 100%;
    font-size: 32px;
    color: #010101;
    background-color: #FFE6D7;
    margin: 0 auto;
    padding: 0 16px;
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px 0;
    margin-bottom: 16px;
    border-bottom: 1px solid #446381;

    > nav {
        display: flex;
    }
`;

export const StyledLink = styled(NavLink)`
    color: #446381;
    padding: 8px 16px;
    border-radius: 4px;
    text-decoration: none;
    font-weight: 500;

    &.active {
        color: #EB8382;
    }
`;