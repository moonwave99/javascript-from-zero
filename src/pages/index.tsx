import type { ReactNode } from "react";
import { useEffect } from "react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Modules from "../components/home/Modules";

import styles from "./index.module.css";

function Hero() {
    return (
        <header className={styles.hero}>
            <div className={styles.content}>
                <Heading as="h1" className={styles.title}>
                    <span>JavaScript</span>
                    <span>From Zero</span>
                </Heading>
                <p className="hero__subtitle">
                    From your first function
                    <br />
                    to concurrent programming
                </p>

                <Link
                    className="button button--primary button--lg"
                    to="/lessons/intro"
                >
                    Let's Get Started!
                </Link>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    useEffect(() => {
        function onScroll() {
            document.body.classList.toggle("scrolled", window.scrollY > 0);
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <Head>
                <body className="homepage" />
            </Head>
            <Layout
                title={siteConfig.title}
                description="Description will go into a meta tag in <head />"
            >
                <Hero />
                <Modules />
            </Layout>
        </>
    );
}
