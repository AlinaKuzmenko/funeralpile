import { ISocialLink, socialLinks } from './info';
import './styles.scss';

function Contacts() {
  return (
    <ul className="socialMedia">
      {socialLinks.map((link: ISocialLink) => (
        <li key={link.id}>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.icon}
              alt={`Link to ${link.id}`}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Contacts;
