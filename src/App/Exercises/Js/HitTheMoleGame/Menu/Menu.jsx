import './menu.css';

export const Menu = ({ label, children }) => {
  return (
    <div classMane="menu">
      <div className="menu-label">{label}</div>
      {children}
    </div>
  );
};
