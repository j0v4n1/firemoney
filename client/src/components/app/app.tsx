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
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import UserDashboard from '../user-dashboard/user-dashboard';
import styles from './app.module.css';
import commonStyles from '../../styles/common.module.css';
import { setIsAuthorizedUser, setTempNumber, setUser } from '../../store/slices/user/user';
import { setType } from '../../store/slices/modal/modal';
import { ModalTypes } from '../modal/modal.types';
import DashboardLoans from '../dashboard-loans/dashboard-loans';
import DashboardSettings from '../dashboard-settings/dashboard-settings';
import DashboardPersonal from '../dashboard-personal/dashboard-personal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const { isLoggingOut } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const [loadingAnimation, setLoadingAnimation] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      getUserData()
        .then((response) => {
          if (response.data.user.name === 'null') {
            dispatch(setType(ModalTypes.REGISTER));
            dispatch(setTempNumber(response.data.user.number));
            setLoading(false);
          } else {
            dispatch(setUser(response.data.user));
            dispatch(setIsAuthorizedUser(true));
            setLoading(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let animation: NodeJS.Timeout | null = setInterval(() => {
      if (loadingAnimation === '...') {
        setLoadingAnimation('.');
      } else {
        setLoadingAnimation((prev) => prev + '.');
      }
    }, 1000);
    return () => {
      animation && clearInterval(animation);
      animation = null;
    };
  }, [loadingAnimation]);

  return loading ? (
    <div className={styles['loading-wrapper']}>
      <h1 className={commonStyles['section-title']}>
        Подождите идёт загрузка<span className={styles['point-animation']}>{loadingAnimation}</span>
      </h1>
    </div>
  ) : (
    <BrowserRouter>
      {isLoggingOut ? (
        <div className={styles['wrapper']}>
          <Spinner />
        </div>
      ) : null}
      <Routes>
        <Route
          path={'/'}
          element={
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
            </>
          }
        />
        <Route
          path={'/dashboard'}
          element={
            <>
              <Header type={NavbarType.DASHBOARD} />
              <main>
                <UserDashboard />
              </main>
            </>
          }>
          <Route
            path={'personal'}
            element={
              <main>
                <DashboardPersonal />
              </main>
            }
          />
          <Route
            path={'loans'}
            element={
              <main>
                <DashboardLoans />
              </main>
            }
          />
          <Route
            path={'settings'}
            element={
              <main>
                <DashboardSettings />
              </main>
            }
          />
        </Route>
      </Routes>
      <Footer />
      <Modal />
    </BrowserRouter>
  );
}
