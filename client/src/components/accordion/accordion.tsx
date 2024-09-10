import { accordionItems } from '../../mocks/data';
import styles from './accordion.module.css';
import { Accordion as AccordionBootstrap } from 'react-bootstrap/';

export default function Accordion() {
  const accordionItemsList = accordionItems.map((item, index) => (
    <AccordionBootstrap.Item
      className={styles['accordion__item']}
      key={item.id}
      eventKey={`${index}`}>
      <AccordionBootstrap.Button className={styles['accordion__header']}>
        {item.header}
      </AccordionBootstrap.Button>
      <AccordionBootstrap.Body>{item.body}</AccordionBootstrap.Body>
    </AccordionBootstrap.Item>
  ));
  return (
    <AccordionBootstrap className={styles['accordion']}>{accordionItemsList}</AccordionBootstrap>
  );
}
