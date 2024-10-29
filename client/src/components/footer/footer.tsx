import Navbar from '../navbar/navbar';
import styles from './footer.module.css';
import commonStyles from '../../styles/common.module.css';
import { NavbarPosition, NavbarType } from '../navbar/navbar.types';
import wallet from '../../images/wallet_footer.png';
import mastercard from '../../images/mastercard_footer.png';
import mir from '../../images/mir.png';
import youtube from '../../images/youtube.svg';
import instagram from '../../images/instagram.svg';
import facebook from '../../images/facebook.svg';

export default function Footer() {
  return (
    <footer className={styles['footer']}>
      <Navbar position={NavbarPosition.FOOTER} type={NavbarType.MAIN} />
      <div className={commonStyles['line'] + ' ' + styles['line_color']}></div>
      <article className={styles['footer__article']}>
        <h3 className={styles['footer__article-title']}>Список кредиторов</h3>
        <p className={styles['footer__article-paragraph']}>
          ООО "МКК СКОРФИН", 344101, г. Ростов-на-Дону, ул. Портовая, д. 193, оф. 302, Лицензия №
          1703020008232, ИНН 3664223480, ОГРН 1163668109428, процентная ставка 0,99% в день <br />
          ООО МФК "Быстроденьги", 123290 г. Москва, 1-й Магистральный туп., д.11 стр.10, Лицензия №
          2110573000002, ИНН 7325081622, ОГРН 1087325005899, процентная ставка 0% в день <br />
          ООО "МКК КАНГАРИЯ", 344101, г. Ростов-на-Дону, ул. Ленинградская, д. 7, пом. № П-13,
          Лицензия № 1904067009295, ИНН 9201526872, ОГРН 1189204008564, процентная ставка 0% в день
          <br />
          ООО МКК "Киберлэндинг", 420043, г. Казань, ул. Достоевского, д. 52, оф. 3, Лицензия №
          1803392008777, ИНН 1659182700, ОГРН 1171690064920, процентная ставка 0% в день
          <br /> ООО МКК "Кредиттер", 115280, г. Москва, ул. Ленинская Слобода, д. 19, стр. 6, ком.
          6, 7, Лицензия № 1903045009373, ИНН 7702463482, ОГРН 1197746100530, процентная ставка
          0,99% в день
          <br /> ООО МФК "Лайм-Займ", 630102, г. Новосибирск, ул. Кирова, д. 48, оф. 1401, Лицензия
          № 651303045004102, ИНН 7724889891, ОГРН 1137746831606, процентная ставка 0% в день <br />
          ООО МКК "Академическая", 630091, г. Новосибирск, ул. Державина, 28, оф. 301, Лицензия №
          1903550009325, ИНН 5407973316, ОГРН 1195476007605, процентная ставка 0% в день <br />
          ООО МКК "КАППАДОКИЯ", 443045, г. Самара, ул. Авроры, д. 150, пом. №н4, офис 306.3,
          Лицензия № 1903475009492, ИНН 7459007268, ОГРН 1197456052199, процентная ставка 0% в день
          <br /> ООО МКК "ДЗП-Центр", 190031, г. Санкт-Петербург, пер. Спасский, д. 14/35, лит. А,
          пом. 38 Н, Лицензия № 651403140005467, ИНН 7838500558, ОГРН 1147847029990, процентная
          ставка 0% в день <br />
          ООО МКК "Кватро", 443030, г. Самара, ул. Чернореченская, д. 21, оф. 425, Лицензия №
          1903550009364, ИНН 5402053330, ОГРН 1195476044609, процентная ставка 0% в день
          <br /> ООО МКК "Турбозайм", 123290, г. Москва, туп. Магистральный 1-й, д. 11, стр.10,
          Лицензия № 651303045003951, ИНН 7702820127, ОГРН 1137746702367, процентная ставка 0,99% в
          день
        </p>
      </article>
      <div className={styles['footer__cards-and-data']}>
        <div className={styles['footer__wrapper-card-list']}>
          <h3 className={styles['footer__card-list-title']}>Какие карты принимаем</h3>
          <ul className={styles['footer__card-list']}>
            <li className={styles['footer__card']}>
              <img className={styles['footer__card-img']} src={wallet} alt="" />
            </li>
            <li className={styles['footer__card']}>
              <img className={styles['footer__card-img']} src={mastercard} alt="" />
            </li>
            <li className={styles['footer__card']}>
              <img className={styles['footer__card-img']} src={mir} alt="" />
            </li>
          </ul>
        </div>
        <div className={styles['footer__personal-data']}>
          <h3 className={styles['footer__personal-data-title']}>
            Мы явлемся обработчиками{' '}
            <a className={styles['footer__personal-data-link']} href="#">
              персональных данных
            </a>
          </h3>
        </div>
      </div>
      <article className={styles['footer__article']}>
        <h3 className={styles['footer__article-title']}>Соглашения и условия</h3>
        <p className={styles['footer__article-paragraph']}>
          Займы и кредиты предоставляются партнерами Imoneys Сredit на сумму от 3 000 до 1 000 000
          рублей включительно на срок от 13 до 260 недель. Проценты за пользование денежных средств
          составляют от 40 до 360 процентов годовых. Расчетная сумма (основной долг и проценты) к
          возврату от 500 до 250 000 рублей. Условия актуальны на 01.06.2021 и не являются публичной
          офертой. Пример расчета общей стоимости займа: заём на 15 000 руб. и сроком 25 недель;
          проценты за весь период составят 5 000 руб. Итого ПСК 264,392 %. За услуги сервиса может
          быть взята плата в размере от 48 до 446 руб. за активацию сервиса.
        </p>
        <p className={styles['footer__article-paragraph']}>
          В случае невозвращения в условленный срок суммы кредита или суммы процентов за пользование
          заёмными средствами кредитор вынуждено начислит штраф за просрочку платежа. Большинство
          кредиторов идут на уступки и дают 3 дополнительных рабочих дня для оплаты. Они
          предусмотрены на случай, к примеру, если банковский перевод занял больше времени, чем
          обычно. Однако, в случае неполучения от Вас какой-либо реакции в течение продолжительного
          времени, будет начислен штраф за просрочку срока погашения размером в среднем 0,10% от
          первоначальной суммы для займов, 0,03% от суммы задолженности в среднем для
          потребительских кредитов и кредитных карт. При несоблюдении Вами условий по погашению
          кредитов и займов, данные о Вас могут быть переданы в реестр должников или БКИ, что
          негативно может сказаться на Вашей кредитной истории и рейтинге кредитоспособности.
          Рекомендуем Вам вносить платеж в день получения данных напоминаний. Погашая задолженность
          в срок, Вы формируете хорошую кредитную историю, что повышает Ваш рейтинг
          кредитоспособности и шансы в дальнейшем получить кредит на более выгодных условиях.
        </p>
      </article>
      <div className={styles['footer__bottom']}>
        <h3 className={styles['footer__copyright']}>
          Imoneys Сredit ©2015–2024 Все права на сайт защищены.
        </h3>
        <div className={styles['footer__social']}>
          <button className={styles['footer__btn']}>отписаться</button>
          <ul className={styles['footer__social-list']}>
            <li className={styles['footer__social-item']}>
              <img className={styles['footer__social-img']} src={youtube} alt="" />
            </li>
            <li className={styles['footer__social-item']}>
              <img className={styles['footer__social-img']} src={instagram} alt="" />
            </li>
            <li className={styles['footer__social-item']}>
              <img className={styles['footer__social-img']} src={facebook} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
