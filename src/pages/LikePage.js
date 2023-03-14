import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Card from "../components/Card";

const LikePage = () => {
    // verifier si ont a des id de films dans notre localStorage
    const [listData, setListData] = useState([]);

    useEffect(() => {
        let moviesId = window.localStorage.movies
            ? window.localStorage.movies.split(",")
            : [];

        for (let i = 0; i < moviesId.length; i++) {
            axios
                .get(
                    `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=f113cbe6322cbb26c79070e606cd0147`
                )
                .then((res) =>
                    setListData((listData) => [...listData, res.data])
                );
        }
    }, []);

    return (
        <div className="user-list-page">
            <Header />
            <h2>
                Coups de coeur <span>💘</span>
            </h2>
            <div className="result">
                {listData.length > 0 ? (
                    listData.map((movie) => (
                        <Card movie={movie} key={movie.id} />
                    ))
                ) : (
                    <h2>Aucun coup de coeur enregistrer pour le moment</h2>
                )}
            </div>
        </div>
    );
};

export default LikePage;
