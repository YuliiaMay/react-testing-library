import styled from "styled-components";

export const CastContainer = styled.section`
    margin-top: 40px;
`;

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
`;

export const CastItem = styled.li`
    max-width: calc((100% - 7 * 8px) / 8);
    border: 1px solid #446381;
`;

export const Image = styled.img`
    height: 230px;
`;

export const Player = styled.p`
    font-size: 18px;
    margin-bottom: 24px;
    color: #414141
`;

export const Character = styled.p`
    font-size: 18px;
`;



