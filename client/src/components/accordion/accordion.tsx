import { accordionItems } from '../../mocks/data';
import styles from './accordion.module.css';
import AccordionItem from '../accordion-item/accordion-item';

export default function Accordion() {
  const accordionItemsList = accordionItems.map((item) => (
    <AccordionItem key={item.id} id={item.id} header={item.header} body={item.body}></AccordionItem>
  ));
  return <div className={styles['accordion']}>{accordionItemsList}</div>;
}
