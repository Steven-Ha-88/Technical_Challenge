import { FC } from 'react';
import { useRouter } from "next/router";
interface Props {
  handleClick(page : Number) : void,
  page: number
}

const Pagination : FC<Props> = ({handleClick, page, children}) => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-evenly m-8">        
      <button
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`}
        onClick={() => handleClick(page - 1)}
        style={{ display: `${page === 1 ? "none" : "inline-block"}`}}
      >
        Prev
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={()=> handleClick(page + 1)}
        style={{ display: `${page === 5 ? "none" : "inline-block"}`}}
      >
        Next
      </button>
    </div>
    {children}
    <div className="flex justify-evenly m-8">        
      <button
        className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l`}
        onClick={() => handleClick(page - 1)}
        style={{ display: `${page === 1 ? "none" : "inline-block"}`}}
      >
        Prev
      </button>
      <button
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
        onClick={()=> handleClick(page + 1)}
        style={{ display: `${page === 5 ? "none" : "inline-block"}`}}
      >
        Next
      </button>
  </div>
</>
  );
}

export default Pagination;