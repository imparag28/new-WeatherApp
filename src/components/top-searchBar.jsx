import AddLocationIcon from "@mui/icons-material/AddLocation";
import SearchIcon from "@mui/icons-material/Search";
import IconSearch from "../icons/search";
export default function TopSearchBar({
  inputText,
  setInputText,
  onClickSearch,
}) {
  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  return (
    <div className="flex   ">
      <div className="pt-3 relative mx-auto text-gray-600 drop-shadow-lg">
        <input
          className="border-2 border-gray-300 bg-white h-[60px] px-5 pr-16 rounded-lg font-medium  focus:outline-none text-lg"
          type="search"
          name="search"
          placeholder="Search"
          value={inputText}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="absolute right-0 top-0 mt-6 mr-4"
          onClick={onClickSearch}
        >
          <SearchIcon />
        </button>
      </div>
    </div>
  );
}
