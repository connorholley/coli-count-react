import "./Layout.css";

export function Layout({ children }) {
  return (
    <>
      <nav className="navbar">
        <div className="logo">coliicount</div>
      </nav>
      {children}
    </>
  );
}
