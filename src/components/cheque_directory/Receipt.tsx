import React from 'react';
import './Receipt.css';
// @ts-ignore
import qr from './Img.png';

const Receipt = () => {
    return (
        <div className="receipt">
            <div className="header">
                <p>КАССОВЫЙ ЧЕК</p>
                <p>Продажа №277 Смена №48</p>
            </div>
            <div className="wrapper">
                <p>Поверка счетчиков</p>
                <p className="sum">1.000 x 2300.00 = 2300.00</p>
                <div className="total">
                    <p>ИТОГ</p>
                    <div className="total-amount-wrapper">
                        <p className="equals">=</p>
                        <p className="total-amount">2300.00</p>
                    </div>
                </div>
                <div className="sum-wrapper">
                    <div className="sum-item">
                        <p>Сумма без НДС</p>
                        <div className="sum-amount-wrapper">
                            <p>=</p>
                            <p>2300.00</p>
                        </div>
                    </div>
                    <div className="sum-item">
                        <p>Наличными</p>
                        <div className="sum-amount-wrapper">
                            <p>=</p>
                            <p>2300.00</p>
                        </div>
                    </div>
                </div>
                <p>ООО "Артиз лаб"</p>
                <p>153000, Ивановская обл., Иваново г.о., г. Иваново, ул. Почтовая, д. 6, литер "Г", оф 5</p>

                <div className="inf">
                    <p>Кассир:</p>
                    <p>Администратор</p>
                </div>
                <div className="inf">
                    <p>Место расчетов:</p>
                    <p>Артиз лаб</p>
                </div>
                <div className="inf">
                    <p>Сайт ФНС:</p>
                    <p>www.nalog.gov.ru</p>
                </div>
                <div className="wrapper_qr-code_other_inf">
                    <div className="wrapper_inf">
                        <p>РН ККТ: 346346346346</p>
                        <p>ЗН ККТ: 003096056346</p>
                        <p>ФН: №3463636436636</p>
                        <p>ФД: №34634634346</p>
                        <p>ФП: №346346346364</p>
                        <p>ИНН: 3235235235</p>
                        <p>СНО: УСН доход</p>
                        <p>Смена №00048 Чек №00004</p>
                        <p>Приход: 22.01.2024</p>
                    </div>

                    <img className="qr" src={qr} alt=""/>
                </div>
            </div>
            <div className="footer">
                <p>Онлайн касса Эвотор</p>
                <p>ХОРОШЕГО ДНЯ!</p>
            </div>

        </div>
    );
};

export default Receipt;
