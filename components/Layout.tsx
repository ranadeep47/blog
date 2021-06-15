import Header from '../components/Header';
import Meta from '../components/Meta';

type Props = {
  children: React.ReactNode;
  pageTitle?: string;
};

const Layout: React.FC<Props> = ({ children, pageTitle }: Props) => {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <Header />
      <div className="max-w-prose mx-auto px-4">
        <main className="pt-4 pb-12">{children}</main>
      </div>
    </>
  );
};

export default Layout;
