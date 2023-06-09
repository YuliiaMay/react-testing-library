import { NavLink, Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.main`
    margin: auto;
    margin-top: 40px;
    margin-botton: 40px;
    width: 1250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
export const Container = styled.section`
    display: flex;
    flex-direction: row;
    gap: 36px;
    border: 2px solid #EB8382;
    padding: 40px;

`;

export const Image = styled.img`
    max-height: 600px;
`;

export const MovieInfo = styled.div`
    color: #826F8C;
    font-size: 24px;
    
`;

export const MovieTitle = styled.h1`
    margin: 0;
    font-size: 40px;
    color: #414141;
    margin-bottom: 48px; 
`;

export const ReleaseDate = styled.span`
    // color: #446381;
`;

export const Score = styled.p`
    margin-bottom: 32px; 
`;

export const Subtitle = styled.h2`
    margin-bottom: 24px; 
    font-size: 36px;
    color: #446381;
`;

export const Overview = styled.p`
    margin-bottom: 32px; 
`;

export const Genres = styled.ul`
    // margin-bottom: 24px; 
    // font-size: 36px;
    // color: #446381;
    display: flex;
    flex-direction: row;
    gap: 24px;
`;

export const GenresItem = styled.li`
    background-color: #EB8382;
    padding: 8px;
    border-radius: 20px;
`;

export const Genre = styled.span`
    color: #fff;
`;

export const AdditionalContainer = styled.section`
    width: 1250px;
    border-bottom: 2px solid #EB8382;
    // border-left: 2px solid #EB8382;
    // border-right: 2px solid #EB8382;
    padding-top: 40px;
    padding-bottom: 40px;
    color: #826F8C;
    font-size: 24px;
`;

export const InfoList = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 36px;
`;

export const InfoItem = styled.li`
    background-color: #transparant;
    border-radius: 20px;
    border: 2px solid #fff;
    padding: 8px;
    color: #414141;

    &:hover,
    &:focus {
        border: 1px solid #fff;
        background-color: #EB8382;
        color: #fff;
    }
`;


export const StyledNavLink = styled(NavLink)`
    &.active {
        color: #EB8382;
    }
`;

export const GoBackLink = styled(Link)`
    color: #826F8C;
    font-size: 24px;
    margin-bottom: 32px; 
    width: 120px;
    text-align: center;
    border-radius: 20px;
    border: 2px solid #fff;
    background-color: transparant; 


    &:hover,
    &:focus {
        color: #EB8382;
        background-color: #fff; 
        border: 2px solid #EB8382;
    }

`




