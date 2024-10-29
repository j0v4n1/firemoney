import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import Modal from '../modal/modal';
import { NavbarType } from '../navbar/navbar.types';
import Offers from '../offers/offers';
import MoneyGuide from '../money-guide/money-guide';
import ReceivingMethods from '../receiving-methods/receiving-methods';
import ReasonsToChoose from '../reasons-to-choose/reasons-to-choose';
import OurClients from '../our-clients/our-clients';
import OurServices from '../our-services/our-services';
import Faq from '../faq/faq';
import GetMoney from '../get-money/get-money';
import { useEffect, useState } from 'react';
import { getUserData } from '../../utils/api';
import { Spinner } from 'react-bootstrap/';
import { setUser } from '../../store/slices/user/user';

export default function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserData()
      .then((data) => {
        setLoading(false);
        setUser(data.data.user);
        console.log(data.data.user);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return loading ? (
    <Spinner style={{ margin: 'auto' }} />
  ) : (
    <>
      <Header type={NavbarType.MAIN} />
      <main>
        <Offers />
        <MoneyGuide />
        <ReceivingMethods />
        <ReasonsToChoose />
        <OurClients />
        <OurServices />
        <Faq />
        <GetMoney />
      </main>
      <Footer />
      <Modal />
    </>
  );
}
