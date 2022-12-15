import axios from "axios";
import { useState } from "react";
import {BiCircle} from "react-icons/bi"

export default function Fav() {
    const [packageName, setPackageName] = useState("");
    const [result, setResult] = useState("");
    const [list, setList] = useState([]);
    const name = [];

    const handleChange = (evt) => {
        setPackageName(evt.target.value);
        fetchPackages(packageName);
        extractPackageNames();
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

    const extractPackageNames = () => {
        for (let i = 0; i < result.length; i++) {
            name.push(result[i].package.name);
        }
        setList(name);
    };

    return (
        <div className="mx-16 my-12 text-text_color">
            <p className="font-bold">Search for NPM Packages</p>
            <input
                className="border-2 border-box_color w-full mb-7"
                onChange={handleChange}
                value={packageName}
            />
            <p className="font-bold">Result</p>
            <div className="flex flex-col overflow-auto h-28 list-none mt-3">
                {list.map((ele) => (
                    <li className="flex ">
                        <BiCircle className="flex flex-col"/>{ele}
                    </li>
                ))}
            </div>
            <p className="font-bold mt-8">Why is this your fav?</p>
            <input className="border-2 border-box_color h-36 w-full" />
            <br />
            <button class="bg-button_color text-white font-bold py-2 px-4 -mx-0 my-4 rounded -right-0">
                Submit
            </button>
        </div>
    );
}
