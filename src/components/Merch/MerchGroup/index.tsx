import { IMerchItem, MerchGroupName, TMerchGroup } from '../info';
import styles from './styles.module.scss';

interface IMerchGroup {
  name: TMerchGroup;
  merchList: IMerchItem[];
}

function MerchGroup({ name, merchList }: IMerchGroup) {
  return (
    <div className={styles.merchGroup}>
      <h3 className={styles.heading}>
        {MerchGroupName[name]}
      </h3>
      {merchList.map((t: IMerchItem) => (
        <div
          key={t.id}
          className={styles.item}
        >
          <figure
            className={styles.figure}
          >
            <img
              width={168}
              height={126}
              src={t.image}
              alt={t.name}
            />
            <figcaption className={styles.figcaption}>
              <span className={styles.name}>
                {t.name}
              </span>
              <span className={styles.price}>
                {`€${t.price}`}
              </span>
            </figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default MerchGroup;
