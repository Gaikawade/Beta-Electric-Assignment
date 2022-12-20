import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Fav() {
    const [packageName, setPackageName] = useState("");
    const [result, setResult] = useState("");
    const [list, setList] = useState([]);
    const [selectedPackage, setSelectedPackage] = useState("");
    const [whyFav, setWhyFav] = useState("");
    const name = [];

    const navigate = useNavigate();

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

    function AddFav() {
        navigate("/");
    }

    function handleSubmit() {
        localStorage.setItem(selectedPackage, whyFav);
        AddFav();
    }

    return (
        <div className="mx-16 my-12 text-text_color">
            <p className="font-bold">Search for NPM Packages</p>
            <input
                className="border-2 border-box_color w-full mb-7"
                onChange={handleChange}
                value={packageName}
            />
            <p className="font-bold">Result</p>
            <div className=" overflow-auto h-28 mt-3 list-none">
                {list.map((ele) => (
                    <li>
                        <input
                            type="checkbox"
                            className="rounded-full"
                            onChange={() => setSelectedPackage(ele)}
                        />
                        {console.log(selectedPackage)}
                        <lable>
                            <span>{ele}</span>
                        </lable>
                    </li>
                ))}
            </div>
            <p className="font-bold mt-8">Why is this your fav?</p>
            <input
                className="border-2 border-box_color h-36 w-full "
                onChange={(evt) => setWhyFav(evt.target.value)}
            />
            <br />
            <button
                class="bg-button_color text-white font-bold py-2 px-4 -mx-0 my-4 rounded -right-0"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </div>
    );
}
