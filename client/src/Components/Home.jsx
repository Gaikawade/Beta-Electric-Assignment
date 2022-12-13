import React from "react";
import { useNavigate } from "react-router";
export default function Home() {
  const navigate = useNavigate();

  function AddFav(){
    navigate('/fav');
  }

    return (
        <div className="flex h-screen flex-col items-center justify-center">
            <p className="font-bold">Welcome to Favorite NPM Packages</p>
            <br />
            <div className="border-2 flex flex-col items-center justify-center w-4/5">
                <p>You don't have any favs yet. Please add.</p>
                <br />
                <button className="font-bold bg-button_color rounded p-2 text to-button_text" onClick={AddFav}>
                    Add Fav
                </button>
            </div>
        </div>
    );
}
