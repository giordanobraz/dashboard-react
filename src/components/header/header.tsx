import "./header.scss";
export default function Header() {
  return (
    <div className="content_header">
      <input type="text" name="search" placeholder="Search" />
      <button>
        <i className="icon ion-md-notifications"></i>
      </button>
    </div>
  );
}
