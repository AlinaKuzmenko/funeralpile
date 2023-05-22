import Text from '../Text';
import Heading2 from '../Heading2';
import ContentBlock from '../ContentBlock';
import { contacts, IEmail } from './info';
import './styles.scss';

interface IContacts {
  className?: string;
  variant?: 'row' | 'column';
}

function Contacts({ className, variant = 'column' }: IContacts) {
  return (
    <ContentBlock className={`contacts ${className}`}>
      <Heading2>
        Contacts
      </Heading2>
      <div className={`container ${variant}`}>
        {contacts.emails.map((email: IEmail) => (
          <div
            key={email.address}
            className="email"
          >
            <Text variant="body3">
              {`${email.label}:`}
            </Text>
            <Text
              variant="body3"
              className="email"
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
