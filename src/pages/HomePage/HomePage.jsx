import Directory from "../../components/DirectoryComponent/Directory";
import "./homepage.styles.scss";

const HomePage = (props) => {
    console.log(props);
    return (
        <div className="homepage">
            hello
            <Directory />
        </div>
    );
}

export default HomePage;