import ThemeSwitch from './theme-switch';
import Link from 'next/link';

type Props = {
  showBlog?: boolean
}

const Header: React.FC<Props> = (props: Props) => {
  return (
    <header className="bg-blue-100 dark:bg-gray-700 py-2">
      <div className="max-w-prose mx-auto">
        <div className={`flex ${props.showBlog ? "justify-between" : "justify-end"}`}>
          { props.showBlog ? (
          <Link href="/">
            <h3 className="cursor-pointer text-2xl font-bold">Blog</h3>
          </Link>
          ) : null}
          <ThemeSwitch />
        </div>
      </div>      
    </header>
  );
};

export default Header;
