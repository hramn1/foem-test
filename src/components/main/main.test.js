import React from "react";
import renderer from "react-test-renderer";
import Main from "./main";

const Settings = {
  NAME_FILM: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`],
  GENRE: `Drama`,
  YEAR: `2014`,
};
it(`Main rendering`, () => {
  const tree = renderer
.create(<Main
  nameFilm = {Settings.NAME_FILM}
  genreFilm = {Settings.GENRE}
  yearFilm = {Settings.YEAR}
/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
