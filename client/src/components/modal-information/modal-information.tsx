import { ModalInformationProps } from './modal-Information.types';

export default function ModalInformation({ message }: ModalInformationProps) {
  return (
    <article>
      <p>{message}</p>
    </article>
  );
}
