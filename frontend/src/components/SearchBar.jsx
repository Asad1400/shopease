import React from 'react';
import Button from '@mui/material/Button';
import { IoIosSearch } from 'react-icons/io';

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center bg-white">
      <div className="relative w-[90%] bg-[#e5e5e5] rounded-md p-4">
        <input
          type="text"
          placeholder="Search for products"
          className="w-[80%] h-[35px] bg-inherit outline-none px-3 rounded-md"
        />
        <Button
          className="!absolute top-[16px] right-[16px] !min-w-[35px] !w-[35px] !h-[35px] !p-0 !rounded-full !bg-gray-200 hover:!bg-gray-300 transition-all duration-300 hover:scale-105"
        >
          <IoIosSearch className="text-black text-[28px]" />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;