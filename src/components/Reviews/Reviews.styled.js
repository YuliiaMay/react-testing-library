import styled from "styled-components";

export const ReviewsContainer = styled.section`
    margin-top: 40px;
`;

export const ReviewsErrMessage = styled.p`
    margin-top: 40px;
    color: #EB8382;
`;

export const Review = styled.li`
    color: #446381;
    font-size: 16px;
    border: 1px solid #826F8C;
    padding: 12px;

    &:not(:last-child) {
        margin-bottom: 24px;
    }
`;

export const Content = styled.p`
    margin-bottom: 16px;
`;

export const Author = styled.p`
    color: #EB8382;
`;

export const Date = styled.p`
    color: #EB8382;
`;



