import {useDispatch, useSelector} from 'react-redux'
import {Button} from '../button/Button'
import {closeModal} from '../../redux/slice';
import {format} from 'date-fns'
import './Modal.css'

export function Modal() {
    const {modalState, bonusInfo, status} = useSelector((state) => state.toolkit);
    const date = format(new Date(bonusInfo.data.dateBurning), 'dd.MM')
    const dispatch = useDispatch();

    return (
        <div className={modalState ? "modal active" : "modal"} onClick={() => dispatch(closeModal())}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>

                <p className="modal__title">{status === "loading" ? null : bonusInfo.data.currentQuantity} бонусов</p>
                <div className="modal__bottom">
                    <div className="modal__info">
                        <p className="date info">{status === "loading" ? null : date} сгорит</p>
                        <img className='info' src="/src/assets/fire.svg" alt="" />
                        <p className="fire__bonus info">{status === "loading" ? null : bonusInfo.data.forBurningQuantity} бонусов</p>
                    </div>
                    <Button className="modal__button" imgLink='/src/assets/back-button.svg' onClick={() => {
                        dispatch(closeModal());
                    }} />

                </div>
            </div>
        </div>
    )
}