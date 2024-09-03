import Header from '../header/header';
import Offers from '../offers/offers';
import ReceivingMethods from '../receiving-methods/receiving-methods';
import MoneyGuide from '../money-guide/money-guide';
import ReasonsToChoose from '../reasons-to-choose/reasons-to-choose';
import OurClients from '../our-clients/our-clients';
import OurServices from '../our-services/our-services';
import Faq from '../faq/faq';
import GetMoney from '../get-money/get-money';
import Footer from '../footer/footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Offers />
        <MoneyGuide />
        <ReceivingMethods />
        <ReasonsToChoose />
        <OurClients />
        <OurServices />
        <Faq />
        <GetMoney />
        <Footer />
      </main>
    </>
  );
}
