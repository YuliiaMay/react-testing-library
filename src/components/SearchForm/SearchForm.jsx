import { FcSearch } from "react-icons/fc";
import { Container, Form, SearchInput, SearchFormButton } from "./SearchForm.styled";

const SearchForm = ({ onSubmit }) => {
    return (
        <Container>
            <Form onSubmit={onSubmit}>
                <SearchInput
                    type="text"
                    name="title"
                />
                <SearchFormButton type="submit">
                    <FcSearch size={32}/>
                </SearchFormButton>
            </Form>
        </Container>
        
    )
}

export default SearchForm;