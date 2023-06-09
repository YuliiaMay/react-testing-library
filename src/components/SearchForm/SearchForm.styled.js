import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    margin-bottom: 40px; 
`;

export const Form = styled.form`
    padding: 0;
    display: flex;
    justify-content: center;
    border: 1px solid #EB8382;
`;

export const SearchInput = styled.input`
    width: 400px;
    margin-top: 0; 
    height: 30px;
    font-size: 24px;
    color: #446381;
    padding: 8px;
    background-color: #FEF1E9;
    border: none;
`;

export const SearchFormButton = styled.button`
    display: inline-block;
    background-color: #EAAC8B;
    width: 48px;
    height: 48px;
    border: 0;
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
    
    &:hover {
        opacity: 1;
    }
`;