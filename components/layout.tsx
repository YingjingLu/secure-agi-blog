import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import { Analytics } from '@vercel/analytics/react';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children} <Analytics /></main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
