export interface IEmail {
  label: string;
  address: string;
}

interface IContacts {
  emails: IEmail[],
}

export const contacts: IContacts = {
  emails: [
    {
      label: 'General requests',
      address: 'contact@funeral-pile.de',
    },
    {
      label: 'Booking',
      address: 'booking@funeral-pile.de',
    },
  ],
};
