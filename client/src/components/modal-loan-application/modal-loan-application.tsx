import { useAppSelector } from '../../store/store.types';

export default function ModalLoanApplication() {
  const { loan, term } = useAppSelector((state) => state.calculator);
  return (
    <article>
      <p style={{ fontSize: 18, fontWeight: 300 }}>
        Вы собираетесь взять кредит в размере <br /> {loan} ₽ на {term}{' '}
        {(term as number) <= 4 ? 'дня' : 'дней'}
      </p>
    </article>
  );
}
