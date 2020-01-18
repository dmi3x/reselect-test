import React from "react";
import Title from "./Title";
import TitleCounter from "./TitleCounter";
import TitleCounter2 from "./TitleCounter2";
import Status from "./Status";
import Button from "./Button";

const App = () => {
    return (
        <>
            <TitleCounter />
            <TitleCounter2 />
            <Title text="Просто статический заголовок" />
            <Status />
            <Button />
        </>
    )
};

export default App;