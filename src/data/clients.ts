import dbsIcon from './dbs.png';
import proudFootIcon from './proudfoot.png';
import rmiIcon from './rmi.png';

type Client = {
  icon: string;
  name: string;
  desc: string;
};

export const clients: Client[] = [
  {
    icon: dbsIcon,
    name: 'DBS Bank',
    desc: 'DBS Bank Limited is a Singaporean multinational banking and financial services corporation headquartered at the Marina Bay Financial Centre in the Marina Bay district of Singapore.',
  },
  {
    icon: proudFootIcon,
    name: 'Proudfoot',
    desc: 'Proudfoot engages teams and leadership, at all levels, to create innovative solutions to operational constraints and solve the people challenge associated with making sure that change takes place.',
  },
  {
    icon: rmiIcon,
    name: 'RMI',
    desc: 'RMI is a trusted global verification partner for Asia-Pacific organisations, offering a highly personalised and comprehensive background screening service.',
  },
];
