import { Metadata } from "next";
import Head from "next/head";

interface TestActionProps {
  metadata: any;
}

const TestAction = ({ metadata }: TestActionProps) => {
  return (
    <div>
      <Head>
        {/* <title>{metadata.title}</title> */}
        <meta name="description" content={metadata.description} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images.url} />
      </Head>
      <p>Test</p>
    </div>
  );
};

export async function getServerSideProps() {
  const metadata: Metadata = {
    title: "Newfemme - Paling Mengerti Wanita",
    description: "Newfemme - Paling Mengerti Wanita",
    openGraph: {
      images: {
        url: "https://newfemme.co/assets/img/nf_logo.png",
      },
      type: "website",
      title: "Newfemme - Paling Mengerti Wanita",
      description: "Newfemme - Paling Mengerti Wanita",
    },
  };

  return {
    props: {
      metadata,
    },
  };
}

export default TestAction;
