import { IoMdSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <div className="searchBox d-flex align-items-center px-2">
      <IoMdSearch className="mr-2" />
      <input type="text" placeholder="Search here.." />
    </div>
  );
};

export default SearchBox;
