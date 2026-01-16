
interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const JobSearch = ({search, setSearch}: Props) => {
  return (
    <input
    type="text"
    placeholder="Search job title or company..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full border p-3 rounded-lg"
    />
  );
};

export default JobSearch;
