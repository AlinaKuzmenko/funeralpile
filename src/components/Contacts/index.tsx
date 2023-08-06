import Text from '../Text';
import Heading2 from '../Heading2';
import ContentBlock from '../ContentBlock';
import { contacts, IEmail } from './info';
import styles from './styles.module.scss';

function Contacts() {
  return (
    <ContentBlock className={styles.contacts}>
      <Heading2>
        Contacts
      </Heading2>
      <div className={styles.container}>
        {contacts.emails.map((email: IEmail) => (
          <div
            key={email.address}
            className={styles.email}
          >
            <Text variant="body3">
              {`${email.label}:`}
            </Text>
            <Text
              variant="body3"
              className={styles.email}
            >
              <a href={`mailto:${email.address}`}>
                {email.address}
              </a>
            </Text>
          </div>
        ))}
      </div>
    </ContentBlock>
  );
}

export default Contacts;
