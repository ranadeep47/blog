import ThemeSwitch from './theme-switch';


const Header: React.FC = () => {
  return (
    <header className="bg-blue-100 py-2">
      <div className="max-w-prose mx-auto">
        <div className="flex justify-end">
          <ThemeSwitch />
        </div>
      </div>      
    </header>
  );
};

export default Header;
