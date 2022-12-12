import React from "react";

export default function Home() {
    return (
        <div className="">
            <p className="font-bold">Search for NPM Packages</p>
            <input
                className="border-2 border-stale-700 w-96 "
                type="text"
                name="name"
            />
            <p className="font-bold">Result</p>
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
