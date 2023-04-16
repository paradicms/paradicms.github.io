import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Figure from "../../src/components/Figure";

import styles from "./index.module.css";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const featureItems: FeatureItem[] = [
  {
    title: "Flexible data entry",
    description: (
      <>
        Paradicms doesn't force you to use a built-in editor. It extracts and
        transforms data from a variety of formats -- including Airtable, Excel,
        Google Sheets, Markdown, and Omeka -- into a Linked Data representation.
      </>
    ),
  },
  {
    title: "No local installation, no self-hosting",
    description: (
      <>
        Paradicms adheres to the principles of{" "}
        <Link to="http://go-dh.github.io/mincomp/">minimal computing</Link>. You
        don't need to install any software on your machine in order to use
        Paradicms, but can use it in conjunction with free cloud services such
        as Google Sheets and GitHub.
      </>
    ),
  },
  {
    title: "Multiple user interfaces",
    description: (
      <>
        Paradicms provides multiple ways of rendering collection data as{" "}
        <Link to="https://lib-static.github.io/">static web sites</Link>, from
        single- and multi-page digital exhibitions to faceted search interfaces.
        The generated sites -- a set of HTML, CSS, and JavaScript files -- can
        be hosted on your institution's server or by using a variety of free
        services, such as GitHub Pages.
      </>
    ),
  },
  {
    title: "Linked Data native",
    // Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Paradicms represents collection data using{" "}
        <Link to="https://www.w3.org/RDF/">RDF</Link> graphs and standard
        vocabularies such as{" "}
        <Link to="https://en.wikipedia.org/wiki/Dublin_Core">Dublin Core</Link>,{" "}
        <Link to="https://www.loc.gov/standards/vracore/">VRA Core</Link>, and{" "}
        <Link to="https://www.w3.org/TR/owl-time/"> OWL Time</Link>.
      </>
    ),
  },
  {
    title: "Open source",
    // Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Paradicms is <b>free</b> to use and extend. Its source code is available
        on <Link to="https://github.com/paradicms">GitHub</Link> under the{" "}
        <Link to="https://www.gnu.org/licenses/gpl-3.0.en.html">
          GPLv3 license
        </Link>
        . Paradicms is built using modern open source technologies, including
        Docker, React.js, Next.js, TypeScript, and typed Python.
      </>
    ),
  },
  {
    title: "Your data, your way",
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        With Paradicms, you control your own collection data. You are free to
        share your collection on the public web, or host a website on internal
        servers. There is no central server, advertising, or behind-the-scenes
        data sharing.
      </>
    ),
  },
];

function Feature({title, description}: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      {/*<div className="text--center">*/}
      {/*    <Svg className={styles.featureSvg} role="img" />*/}
      {/*</div>*/}
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className="text--justify">{description}</p>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout>
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/introduction/getting-started"
            >
              Get started
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={clsx("padding-vert--lg", styles.featuresSection)}>
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h1 className={styles.sectionHeader}>Why Paradicms?</h1>
              </div>
            </div>
            <div className="row padding-bottom--md">
              {featureItems.slice(0, 3).map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
            <div className="row">
              {featureItems.slice(3).map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
        <section
          className={clsx("padding-bottom--lg", styles.screenshotSection)}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <Figure
                  caption={
                    <>A faceted search interface generated by Paradicms</>
                  }
                  src={"/img/index-screenshot.png"}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
