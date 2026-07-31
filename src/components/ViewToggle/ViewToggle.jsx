
export default function ViewToggle({view, setView}) {
  return (
    <>
      <div className="view-toggle">
        <button
          className={view === "grid" ? "active" : ""}
          onClick={() => setView("grid")}
        >
          <i className="fa-solid fa-grip"></i>
        </button>

        <button
          className={view === "list" ? "active" : ""}
          onClick={() => setView("list")}
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </>
  );
}
