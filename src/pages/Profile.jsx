import { useLocation, useParams, useSearchParams } from "react-router-dom"

const Profile = () => {
    const { username } = useParams();
    const location = useLocation();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(location, searchParams);
    console.log(searchParams.get("name"));

    return (
        <div>
            <h1>Profile ({username})</h1>
            <button onClick={() => {
                searchParams.set("name", "jilani");
                setSearchParams(searchParams);
            }}>
                update search params 1st way
            </button>
            <button onClick={() => {
                setSearchParams({ name: "gulzar" })
            }}>
                update search params 2ndway
            </button>
        </div>
    )
}

export default Profile