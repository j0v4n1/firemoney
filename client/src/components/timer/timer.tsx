import { useEffect } from 'react';
import { setSeconds, setIsTimerRunning } from '../../store/slices/timer/timer';
import { setIsButtonDisabled } from '../../store/slices/modal/modal';
import { useAppDispatch, useAppSelector } from '../../store/store.types';
import { formatTime } from '../../utils/utils';

let globalTimer: NodeJS.Timeout | null = null;

export default function Timer() {
  const dispatch = useAppDispatch();
  const seconds = useAppSelector((state) => state.timer.seconds);
  const isTimerRunning = useAppSelector((state) => state.timer.isTimerRunning);
  const isButtonDisabled = useAppSelector((state) => state.modal.isButtonDisabled);
  const timesResendCode = useAppSelector((state) => state.modal.timesResendCode);

  useEffect(() => {
    if (isButtonDisabled && !isTimerRunning && !globalTimer) {
      dispatch(setIsTimerRunning(true));
      switch (timesResendCode) {
        case 1:
          dispatch(setSeconds(10));
          globalTimer = setInterval(() => {
            dispatch((dispatch, getState) => {
              const currentSeconds = getState().timer.seconds;
              if (currentSeconds === 1) {
                clearInterval(globalTimer!);
                dispatch(setIsButtonDisabled(false));
                dispatch(setSeconds(10));
                dispatch(setIsTimerRunning(false));
                globalTimer = null;
              } else {
                dispatch(setSeconds(currentSeconds - 1));
              }
            });
          }, 1000);
          break;
        case 2:
          dispatch(setSeconds(60));
          globalTimer = setInterval(() => {
            dispatch((dispatch, getState) => {
              const currentSeconds = getState().timer.seconds;
              if (currentSeconds === 1) {
                clearInterval(globalTimer!);
                dispatch(setIsButtonDisabled(false));
                dispatch(setSeconds(60));
                dispatch(setIsTimerRunning(false));
                globalTimer = null;
              } else {
                dispatch(setSeconds(currentSeconds - 1));
              }
            });
          }, 1000);
          break;
        case 3:
          dispatch(setSeconds(3600));
          globalTimer = setInterval(() => {
            dispatch((dispatch, getState) => {
              const currentSeconds = getState().timer.seconds;
              if (currentSeconds === 1) {
                clearInterval(globalTimer!);
                dispatch(setIsButtonDisabled(false));
                dispatch(setSeconds(3600));
                dispatch(setIsTimerRunning(false));
                globalTimer = null;
              } else {
                dispatch(setSeconds(currentSeconds - 1));
              }
            });
          }, 1000);
          break;
        default:
          break;
      }
    }
  }, [isButtonDisabled, timesResendCode, isTimerRunning, dispatch]);

  return (
    <div>
      <p>{`Получить повторно через ${
        seconds > 60 && seconds <= 3600 ? `${formatTime(seconds)}` : `${seconds} секунд.`
      }`}</p>
    </div>
  );
}
