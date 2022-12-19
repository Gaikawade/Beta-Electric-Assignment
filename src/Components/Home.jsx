import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  function AddFav(){
    navigate('/fav');
  }

    return (
        <div className="mx-16 my-12 text-text_color">
            <p className="font-bold">Welcome to Favorite NPM Packages</p>
            <br />
            <div className="border-2 border-box_color flex flex-col items-center justify-center h-40 my-16">
                <p>You don't have any favs yet. Please add.</p>
                <br />
                <button className="font-bold bg-button_color rounded p-2 text-button_text" onClick={AddFav}>
                    Add Fav
                </button>
            </div>
        </div>
    );
}
