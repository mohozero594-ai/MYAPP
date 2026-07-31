export default function Search({ search, setSearch }) {
  return (
    <div className="search-box">
      <i className="fa-solid fa-magnifying-glass"></i>

      <input
        type="text"
        className="form-control"
        placeholder="ابحث في المقالات..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
