import React from "react";
import CustomHeader from "../../../components/CustomHeader/CustomHeader";
import MoviesCardsComponent from "../../components/MoviesCardsComponent/MoviesCardsComponent";

function MoviesScreen() {
  return (
    <div>
      <CustomHeader title="MOVIE APP" />
      <MoviesCardsComponent title="POPULARES" />
    </div>
  );
}

export default MoviesScreen;
