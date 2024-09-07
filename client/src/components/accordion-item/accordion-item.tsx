import { useState } from 'react';
import styles from './accordion-item.module.css';
import { AccordionItemProps } from './accordion-item.types';

export default function AccordionItem({ id, header, body }: AccordionItemProps) {
  const [isHidden, setIsHidden] = useState(true);
  const [itemId, setItemId] = useState<number | null>(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  return (
    <div
      key={id}
      className={
        (!isHidden && itemId === id) || isFirstRender
          ? `${styles['accordion__item']} ${styles['accordion__item_background']}`
          : styles['accordion__item']
      }>
      <div
        onClick={() => {
          setIsFirstRender(false);
          setItemId(id);
          if (id === itemId) {
            setIsHidden(!isHidden);
          }
        }}
        className={styles['accordion__header-wrapper']}>
        <h3
          className={
            (!isHidden && itemId === id) || isFirstRender
              ? `${styles['accordion__header']}`
              : `${styles['accordion__header']}  ${styles['accordion__header_padding']}`
          }>
          {header}
        </h3>
        <div
          className={
            (!isHidden && itemId === id) || isFirstRender
              ? `${styles['accordion__arrow']} ${styles['accordion__arrow_rotate']}`
              : styles['accordion__arrow']
          }></div>
      </div>
      <p
        className={
          (!isHidden && itemId === id) || isFirstRender
            ? `${styles['accordion__body']} ${styles['accordion__body_hidden']}`
            : styles['accordion__body']
        }>
        {body}
      </p>
    </div>
  );
}
