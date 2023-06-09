import { ColorRing } from "react-loader-spinner";
import { LoaderWrapper } from "./Loader.styled";


const Loader = () => {
    return (
        <LoaderWrapper>
            <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
            {/* <ThreeDots color="#0066cc" height={80} width={80} /> */}
        </LoaderWrapper>
    );
};

export default Loader;