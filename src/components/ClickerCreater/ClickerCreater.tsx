import Clicker from "components/Clicker";
import React from "react";

const ClickerCreater = () => {
    const [clickerArr, setClickerArr] = React.useState<number[] | null>(null);
    const onClickHandler = () => {
        clickerArr === null ? setClickerArr([0]) : setClickerArr([...clickerArr, 0])
    }
    return (
        <>
            <button onClick={onClickHandler}>Добавить кликер</button>
            {clickerArr?.map((item, index) => <Clicker key={index} clickerNumber={item} />)}
        </>
    )
}
export default ClickerCreater;