import axios from "axios";
import { useState } from "react";

export default function Fav() {
    const [packageName, setPackageName] = useState("");
    const [result, setResult] = useState("");
    console.log(packageName);

    const fetchPackages = (packageName = "") => {
        axios
            .get(`https://api.npms.io/v2/search?q=${packageName}`)
            .then((res) => {
                setResult(res.data.results);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    // useEffect(() => {
    //     return () => {
    //         axios
    //             .get(
    //                 `https://api.npms.io/v2/search?${
    //                     packageName && `&q=${packageName}`
    //                 }`
    //             )
    //             .then((res) => console.log(res))
    //             .catch((err) => console.log(err));
    //     };
    // }, []);
    const { arr } = [];
    const showPackages = (result) => {
        result.forEach((x) => {
            arr.push(
                <div key={arr.indexOf(x)}>
                    <p> name: {x.name}</p>
                </div>
            );
        });
        console.log(arr);
        return { arr };
    };
    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <p className="font-bold">Search for NPM Packages</p>
            <input
                className="border-2 border-stale-700 w-96 "
                onChange={(e) => {
                    setPackageName(e.target.value);
                }}
                onClick={fetchPackages}
                value={packageName}
            />
            <ul>
                <li>{showPackages}</li>
            </ul>
            <p className="font-bold">Result</p>
            <div></div>
            <p className="font-bold">Why is this your fav?</p>
            <input
                className="border-2 border-stale-700 h-36 w-96"
                type="text"
                name="name"
            />
            <br />
            <button class="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded ">
                Submit
            </button>
        </div>
    );
}
