import Button from "./Button";

const Header = ({ onAdd }) => {

 
  return (
    <header className="header">
      <h1 style={{ color: "green" }}>Task Tracker</h1>
      <Button color="green" text="Add" onClick={onAdd} />
    </header>
  );
};

export default Header;
