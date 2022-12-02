type ClientCardProps = {
  icon?: string;
  name: string;
  desc: string;
};

function ClientCard({ icon, name, desc }: ClientCardProps) {
  return (
    <div className="flex-shrink-0 flex flex-col relative w-64 h-[11.5rem] px-5 py-2 bg-white rounded-std shadow-below">
      {/* Client icon */}
      <div className="flex items-center h-12">
        <img src={icon} className="w-auto h-full" alt="bank logo" aria-hidden />
      </div>
      {/* Client name */}
      <p className="font-bold line-clamp-1">{name}</p>
      {/* Client description */}
      <p className="text-xs line-clamp-5">{desc}</p>
      {/* Menu button */}
      <button className="absolute top-2 right-2 btn">
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.25 11.8125C5.97487 11.8125 6.5625 11.2249 6.5625 10.5C6.5625 9.77513 5.97487 9.1875 5.25 9.1875C4.52513 9.1875 3.9375 9.77513 3.9375 10.5C3.9375 11.2249 4.52513 11.8125 5.25 11.8125Z"
            fill="currentColor"
          />
          <path
            d="M10.5 11.8125C11.2249 11.8125 11.8125 11.2249 11.8125 10.5C11.8125 9.77513 11.2249 9.1875 10.5 9.1875C9.77513 9.1875 9.1875 9.77513 9.1875 10.5C9.1875 11.2249 9.77513 11.8125 10.5 11.8125Z"
            fill="currentColor"
          />
          <path
            d="M15.75 11.8125C16.4749 11.8125 17.0625 11.2249 17.0625 10.5C17.0625 9.77513 16.4749 9.1875 15.75 9.1875C15.0251 9.1875 14.4375 9.77513 14.4375 10.5C14.4375 11.2249 15.0251 11.8125 15.75 11.8125Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}

export default ClientCard;
