import axios from "axios";
import { useState } from "react";

export default function Fav() {
    const [packageName, setPackageName] = useState("");
    const [result, setResult] = useState("");
    const name = [];

    const handleChange = (evt) => {
        setPackageName(evt.target.value);
        fetchPackages(packageName);
        showPackages();
        console.log(name);
    };

    const fetchPackages = (packageName = "") => {
        axios
            .get(
                `https://api.npms.io/v2/search?${
                    packageName && `q=${packageName}`
                }`
            )
            .then((res) => {
                setResult(res.data.results);
                // console.log(result);
            })
            .catch((err) => console.log(err));
    };

    const showPackages = () => {
        for (let i = 0; i < result.length; i++) {
            name.push(result[i].package.name);
        }
    };

    // const displayPackages = () => {
    //     return name.map((ele) => <li>{ele}</li>);
    // };

    return (
        <div className="mx-16 my-12 text-text_color">
            <p className="font-bold">Search for NPM Packages</p>
            <input
                className="border-2 border-box_color w-full"
                onChange={handleChange}
                value={packageName}
            />
            <p className="font-bold my-9">Result</p>
            <table className="overflow-auto h-28">
                {/* {
                    name.map((ele)=>(
                        <tr>
                            <td>{ele}</td>
                        </tr>
                    ))
                } */}
            </table>
            <p className="font-bold">Why is this your fav?</p>
            <input className="border-2 border-box_color h-36 w-full" />
            <br />
            <button class="bg-button_color text-white font-bold py-2 px-4 -mx-0 my-4 rounded -right-0">
                Submit
            </button>
        </div>
    );
}
