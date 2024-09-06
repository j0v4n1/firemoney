import { useState } from 'react';
import styles from './accordion-item.module.css';
import { AccordionItemProps } from './accordion-item.types';

export default function AccordionItem({ id, header, body }: AccordionItemProps) {
  const [isHidden, setIsHidden] = useState(true);
  const [itemId, setItemId] = useState<number | null>(null);

  return (
    <div key={id} className={styles['accordion__item']}>
      <div
        onClick={() => {
          setItemId(id);
          if (id === itemId) {
            setIsHidden(!isHidden);
          }
        }}
        className={styles['accordion__header-wrapper']}>
        <h3 className={styles['accordion__header']}>{header}</h3>
        <button className={styles['accordion__btn']}></button>
      </div>
      <p
        className={
          isHidden && itemId === id
            ? `${styles['accordion__body']} ${styles['accordion__body_hidden']}`
            : styles['accordion__body']
        }>
        {body}
      </p>
    </div>
  );
}
