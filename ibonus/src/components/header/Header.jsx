import {useDispatch} from "react-redux";
import {fetchBonusData, openModal} from "../../redux/slice";
import {Button} from "../button/Button";
import './Header.css'

export function Header() {
    const dispatch = useDispatch();

    return (
        <header className="header">
            <div className="header__text">
                <h3 className="title-head">Логотип</h3>
            </div>
            <Button className="header__button" imgLink='/src/assets/information-button.svg' onClick={() => {
                dispatch(fetchBonusData());
                dispatch(openModal());
            }} />
        </header>
    )
}