import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardLink = styled(Link)`
    text-decoration: none;
    color: #446381;
` 

export const Card = styled.div`
    width: 325px;
    height: 600px;
    cursor: pointer;
    border: 3px solid #FFC5B3;
    background-color: #C37A87;
    max-width: calc((100% - 3 * 30px) / 4);

    &:hover,
    &:focus {
        transform: scale(1.015);
    }
`;

export const Image = styled.img`
    display: block;
    max-width: 100%;
    height: 490px;
    background-size: cover;

`;

export const CardMovieInfo = styled.div`
    padding: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`;

export const Title = styled.p`
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 24px;
    color: #FFFFFF;
`;

export const Rating = styled.p`
    margin: 0;
    font-size: 20px;
    color: #446381;
`;

