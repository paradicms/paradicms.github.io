import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";

type FeatureItem = {
  title: string;
  // Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const benefits: FeatureItem[] = [
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
        You don't need to install any software on your machine in order to use
        Paradicms, but can use it in conjunction with free cloud services such
        as Google Sheets and GitHub.
      </>
    ),
  },
  {
    title: "Rendering data",
    description: (
      <>
        Paradicms provides multiple ways of rendering collection data as{" "}
        <Link to="https://lib-static.github.io/">static web sites</Link>, from
        single- and multi-page digital exhibitions to faceted search interfaces.
        The generated sites -- a set of HTML, CSS, and JavaScript files -- can
        be hosted on your institution's web pages or by using a variety of free
        services, such as GitHub Pages.
      </>
    ),
  },
];

const features: FeatureItem[] = [
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
      </>
    ),
  },
  {
    title: "Modern",
    // Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Paradicms is built using modern technologies, including Docker,
        React.js, Next.js, TypeScript, and typed Python.
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
        <section className={clsx("padding-vert--lg", styles.benefits)}>
          <div className="container">
            <div className="row">
              <div className="col text--center">
                <h1 className={styles.sectionHeader}>Why Paradicms?</h1>
              </div>
            </div>
            <div className="row padding-bottom--md">
              {benefits.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
            <div className="row">
              {features.map((props, idx) => (
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
                <figure>
                  <figcaption className="padding-bottom--sm text--center">
                    A faceted search interface generated from the{" "}
                    <Link to="https://airtable.com/shryU3j5IXFxjrdEy/tblUeStXG6w5MMGlF/viwlbQDtd6H80rzVw">
                      Costume Core Airtable Template
                    </Link>
                  </figcaption>
                  <img
                    className={styles.screenshotImg}
                    src="/img/index-screenshot.png"
                  />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
