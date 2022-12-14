import axios from "axios";
import { useState } from "react";

export default function Fav() {
    const [packageName, setPackageName] = useState("");
    const [result, setResult] = useState("");

    const fetchPackages = (packageName = "") => {
        axios
            .get(
                `https://api.npms.io/v2/search?${
                    packageName && `q=${packageName}`
                }`
            )
            .then((res) => {
                setResult(res.data.results);
                console.log(result);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="mx-16 my-12 text-text_color">
            <p className="font-bold">Search for NPM Packages</p>
            <input
                className="border-2 border-stale-700 w-full"
                onChange={(e) => {
                    setPackageName(e.target.value);
                }}
                onClick={fetchPackages}
                value={packageName}
            />
            <p className="font-bold my-9">Result</p>
            <div className="overflow-auto h-28">
                {/* {
                    result.map((curEle) => 
                        <div>
                            <li>curEle.package.name</li>
                        </div>
                    )
                } */}
            </div>
            <p className="font-bold">Why is this your fav?</p>
            <input
                className="border-2 border-stale-700 h-36 w-full"
            />
            <br />
            <button class="bg-button_color text-white font-bold py-2 px-4 -mx-0 my-4 rounded -right-0">
                Submit
            </button>
        </div>
    );
}
