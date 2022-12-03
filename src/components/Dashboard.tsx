import { useEffect, useState } from 'react';
import axios from 'axios';
import { clients } from '../data/clients';
import ClientCard from './ClientCard';

interface CoinsData extends Record<string, string | number> {
  image: string;
  name: string;
  current_price: number;
  market_cap: number;
}

function Dashboard() {
  const [coinsData, setCoinsData] = useState<CoinsData[]>([]); // coin data state
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    async function fetchData() {
      const { data, status } = await axios.get<CoinsData[]>(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr&per_page=10',
      );
      // only set coin state and set loading if request successful
      if (status === 200) {
        setCoinsData(data);
        setLoading(false);
      }
    }

    fetchData();
  }, []); // no deps because data fetched only on load

  return (
    <div className="relative flex flex-col gap-8 sm:gap-11 min-h-[calc(100vh-4rem)] p-std sm:p-8 mb-16 sm:mb-0">
      {/* Welcome text */}
      <p className="text-[1.75rem] font-bold leading-none">
        Hi Radhika, welcome back!
      </p>
      {/* Client list */}
      <div>
        <p className="text-xl font-bold">Your client list</p>
        <p className="text-sm">
          You currently servicing {clients.length}{' '}
          {clients.length > 1 ? 'clients' : 'client'}
        </p>
        <div className="overflow-x-auto mt-6 mb-3">
          <div className="flex gap-4">
            {clients.map((client, idx) => (
              <ClientCard
                key={`${idx}-${client.name}`}
                icon={client.icon}
                name={client.name}
                desc={client.desc}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Approval list */}
      <div className="mb-16">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-xl font-bold">Recent approvals</p>
            <p className="text-sm">
              You can find the recent on-going approvals here
            </p>
          </div>
          {/* Create approval button */}
          <button className="btn h-8 bg-primary hover:bg-primary active:bg-primary text-white rounded-full px-4 md:px-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            <span className="hidden sm:block">Create new approval</span>
          </button>
        </div>
        {/* Coin data table */}
        <div className="w-full overflow-x-auto">
          <table className="min-w-max w-full mt-6 mb-3 border-separate border-spacing-y-3 rounded-full">
            <thead>
              <tr className="h-11 bg-white rounded-full shadow-below">
                {['Image', 'Name', 'Current price', 'Market cap'].map(
                  (colTitle) => (
                    <th
                      key={colTitle}
                      className="text-start text-sm font-normal px-4"
                    >
                      {colTitle}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {/* Only render data when there's data exist */}
              {loading
                ? null
                : coinsData.map((coin) => (
                    <tr
                      key={coin.name}
                      className="h-16 bg-white rounded-full shadow-below"
                    >
                      <td className="px-4">
                        <img
                          className="w-11 h-11"
                          src={coin.image}
                          alt={`${coin.name} icon`}
                          aria-hidden
                        />
                      </td>
                      <td className="px-4 font-bold">{coin.name}</td>
                      <td className="px-4 font-bold">
                        Rp. {coin.current_price.toLocaleString('id')}
                      </td>
                      <td className="px-4 font-bold">
                        Rp. {coin.market_cap.toLocaleString('id')}
                      </td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
        {/* All approvals button/link */}
        <button className="btn text-primary min-h-max px-0 hover:bg-transparent active:bg-transparent leading-none">
          See all approvals here
        </button>
      </div>
      {/* Copyright text */}
      <p className="absolute bottom-0 inset-x-0 text-center sm:text-right py-6 px-8">
        &copy; Manning&Co. 2022
      </p>
    </div>
  );
}

export default Dashboard;
