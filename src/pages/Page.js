import React from 'react';
import '../../src/Page.css';
// import map from '../assets/map.png';
import call from '../assets/call.png';
import icon from '../assets/icon.png';
import download from '../assets/download.png';
import elem from '../assets/elem.png';
import elemB from '../assets/ElemB.png';
import elemC from '../assets/ElemC.png';
import photoDirector from '../assets/Photo.png';
import offManag from '../assets/off_manag.png';
import buhg from '../assets/buhg.png';
import manag from '../assets/manag.png';
export default function Page() {
  return (
    <div className="landing">
      <section className="secound_block">
        <div className="text">
          <p className="important">
            Главная — <span className="contacts_small">Контакты</span>
          </p>
        </div>
        <div className="title">
          <h2>Контакты</h2>
        </div>
      </section>
      <section className="third">
        <div className="map"></div>
        <div className="info">
          <div className="icon">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 16V12"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 8H12.01"
                stroke="#818181"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className="info_text">
            <p className="info_text_subscrible">
              Вход в офис находится на углу здания со стороны Ленинградского проспекта на
              пересечении с ул. Балтийская.
            </p>
          </div>
        </div>

        <div className="contacts">
          <div className="contacts_title">
            <h3>Контакты</h3>
          </div>
          <div className="list">
            <div className="phoneOne">
              <h4>8-900-000-00-00</h4>
              <p className="city-text">Москва</p>
            </div>
            <div className="phoneTwo">
              <h4>8-900-000-00-00</h4>
              <button className="button_phone">
                <img src={icon} alt="" className="" />
              </button>
              <button className="button_mail">
                <img src={icon} alt="" className="" />
              </button>
              <p className="country-text">Россия</p>
            </div>

            <div className="mail">
              <h4>metall-market@mail.ru</h4>
              <p className="graphics">Ежедневно 9:00 — 18:00</p>
            </div>

            <div className="adress">
              <h4>Адрес</h4>
              <p className="adress_subscribe">123456, г. Москва, ул. Ленина 3А, помещ. 2-7</p>
            </div>

            <div className="time">
              <h4>Время работы</h4>
              <p className="time_work">Ежедневно 9:00 — 18:00</p>
            </div>

            <button className="first_button">
              <img src={download} alt="" className="install" />
              <p className="catalog">Карта проезда</p>
            </button>

            <button className="secound_button">
              <img src={call} alt="" className="call" />
              <p className="secound_button_catalog">Заказать звонок</p>
            </button>
          </div>
        </div>
      </section>
      <section className="fourth">
        <img src={elem} alt="" className="element" />
        <img src={elemB} alt="" className="elementB" />
        <img src={elemC} alt="" className="elementC" />
        <div className="progressA">
          <div className="bar1" width={30}></div>
          <div className="bar2" width={70}></div>
        </div>
      </section>
      <section className="fifth">
        <div className="title_and_subscrible">
          <h2>Наша команда</h2>
          <div className="subscrible">
            <p className="typography">
              Металл-Маркет — это команда профессионалов, влюбленных в свое дело. Уверены, что
              развитие компании начинается с развития ее сотрудников.
            </p>
          </div>
          <div className="list">
            <div className="team_card_one">
              <img src={photoDirector} alt="" className="photoDirector" />
              <div className="name_and_position">
                <div className="name">
                  <h3 className="full_name">Ворончихин Сергей Вячеславович</h3>
                </div>
                <div className="position">
                  <p>Директор</p>
                </div>
              </div>
            </div>
            <div className="team_card_two">
              <img src={offManag} alt="" className="office_manager" />
              <div className="name_and_position">
                <div className="name">
                  <h3 className="full_name">Ситникова Александра Константиновна</h3>
                </div>
                <div className="position">
                  <p>Офис-менеджер</p>
                </div>
<<<<<<< HEAD
              </div>
            </div>
            <div className="team_card_three">
              <img src={buhg} alt="" className="buhg" />
              <div className="name_and_position">
                <div className="name">
                  <h3 className="full_name">Алазрева Валерия Максимовна</h3>
                </div>
                <div className="position">
                  <p>Бухгалтер</p>
                </div>
              </div>
            </div>
            <div className="team_card_four">
              <img src={manag} alt="" className="manag" />
              <div className="name_and_position">
                <div className="name">
                  <h3 className="full_name">Наумов Илья Семёнович</h3>
                </div>
                <div className="position">
                  <p>Руководитель отдела продаж</p>
=======
              </div>
            </div>
            <div className="team_card_three">
              <img src={buhg} alt="" className="buhg" />
              <div className="name_and_position">
                <div className="name">
                  <h3 className="full_name">Алазрева Валерия Максимовна</h3>
                </div>
                <div className="position">
                  <p>Бухгалтер</p>
>>>>>>> df26032e9c2edb369e361d14652e04dc6c8dc8db
                </div>
              </div>
            </div>
            <div className="team_card_four">
              <img src={manag} alt="" className="manag" />
              <div className="name_and_position">
                <div className="name">
                  <h3 className="full_name">Наумов Илья Семёнович</h3>
                </div>
                <div className="position">
                  <p>Руководитель отдела продаж</p>
                </div>
              </div>
            </div>
          </div>
          <div className="progressB">
            <div className="bar1" width={30}></div>
            <div className="bar2" width={70}></div>
          </div>
        </div>
        <div className="progressB">
          <div className="bar1" width={30}></div>
          <div className="bar2" width={70}></div>
        </div>
      </section>
      <section className="sixth">
        <div className="requisites">
          <h2>Реквизиты</h2>
          <p className="typography">
            Металл-Маркет — компания, которая dolor sit amet consectetur. Ac sem nisi nullam mi
            odio. Justo eu egestas arcu rhoncus et. Eleifend morbi sit proin sed proin. Mattis purus
            sit malesuada in praesent ac nisi convallis. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="table">
          <div className="oneRow">
            <div className="oneRow_left_cell">
              <p className="typography_cell">Полное наименование</p>
            </div>
            <div className="oneRow_right_cell">
              <p>Металл-Маркет</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>
          <div className="twoRow">
            <div className="twoRow_left_cell">
              <p className="typography_cell">Юридический адрес</p>
            </div>
            <div className="twoRow_right_cell">
              <p>123456, Россия, Москва, ул. Ленина, 145а, 801</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>
          <div className="threeRow">
            <div className="threeRow_left_cell">
              <p className="typography_cell">ИНН</p>
            </div>
            <div className="threeRow_right_cell">
              <p>1234567890</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>
          <div className="fourRow">
            <div className="fourRow_left_cell">
              <p className="typography_cell">КПП</p>
            </div>
            <div className="fourRow_right_cell">
              <p>1234567890</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>
          <div className="fiveRow">
            <div className="fiveRow_left_cell">
              <p className="typography_cell">ОГРН</p>
            </div>
            <div className="fiveRow_right_cell">
              <p>1234567890</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>
          <div className="sixRow">
            <div className="sixRow_left_cell">
              <p className="typography_cell">Расчетный счет</p>
            </div>
            <div className="sixRow_right_cell">
              <p>12345678909876543210</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>

          <div className="sevenRow">
            <div className="sevenRow_left_cell">
              <p className="typography_cell">Корреспондентский счет</p>
            </div>
            <div className="sevenRow_right_cell">
              <p>12345678909876543210</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>

          <div className="eghtRow">
            <div className="eghtRow_left_cell">
              <p className="typography_cell">БИК</p>
            </div>
            <div className="eghtRow_right_cell">
              <p>12345678909876</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>

          <div className="nineRow">
            <div className="nineRow_left_cell">
              <p className="typography_cell">Банк</p>
            </div>
            <div className="nineRow_right_cell">
              <p>ПАО «Сбербанк»</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>

          <div className="tenRow">
            <div className="tenRow_left_cell">
              <p className="typography_cell">Директор</p>
            </div>
            <div className="tenRow_right_cell">
              <p>Лебедев Кирилл Александрович</p>
            </div>
          </div>
          <div className="line">
            <svg
              width="351"
              height="1"
              viewBox="0 0 351 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <line y1="0.5" x2="351" y2="0.5" stroke="#D9D9D9" />
            </svg>
          </div>

          <div className="download">
            <div className="text_and_icon">
              <button className="text_and_icon_button">
                <img src={download} alt="" className="" />
              </button>
              <div className="text_and_icon_text">
                <h3>Скачать реквизиты</h3>
                <p>Скачать pdf файл</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
