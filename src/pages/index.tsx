import type { ReactNode } from "react";
import { useEffect } from "react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Block from "../components/home/Block";

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
                <Block className={styles.about}>
                    <h2>
                        Programming?{" "}
                        <em>I am not good with computers, thanks!</em>
                    </h2>
                    <article>
                        <p>
                            I beg to disagree: if you can read and write your
                            own language, you can understand a{" "}
                            <em>programming language</em> as well. Just a little
                            feel for logic is needed.
                        </p>
                        <p>
                            Programming stimulates your brain and sharpens your{" "}
                            <strong>problem setting</strong> and{" "}
                            <strong>problem solving</strong> skills, and keeps
                            you in a virtuous regime of{" "}
                            <strong>perpetual learning</strong>.
                        </p>
                        <p>
                            It's also a very creative and fun activity! You can
                            mix it with your hobbies and passions. You can
                            instantly share your efforts online, to promote your
                            activities or to support your local community.
                        </p>
                        <p>
                            We are surrounded by connected devices. A great
                            portion of our lives relies on them. Knowing how to
                            program them is not only relevant to professionals,
                            but to all those who want to increase their{" "}
                            <strong>digital awareness</strong>.
                        </p>
                    </article>
                </Block>
                <Block className={styles.modules}>
                    <h2>The Course</h2>
                    <p>
                        The course lessons are organized in modules, each one
                        followed by <strong>recap questions</strong> and{" "}
                        <strong>solved exercises</strong>.
                    </p>
                    <article>
                        <h3>
                            <a href="lessons/category/foundations">
                                Module 01 - Foundations
                            </a>
                        </h3>
                        <p>
                            If you have never read a single line of code before,
                            this is the right place to start.
                        </p>
                        <p>
                            You will learn the core <strong>syntax</strong> of
                            JavaScript, the concept of <strong>function</strong>
                            , the basics of <strong>control flow</strong> and
                            the purpose of <strong>variables</strong> and{" "}
                            <strong>data types</strong>.
                        </p>
                    </article>
                    <article>
                        <h3>
                            <a href="lessons/category/getting-comfortable">
                                Module 02 - Getting comfortable
                            </a>
                        </h3>
                        <p>
                            Things get more interesting: the case for{" "}
                            <strong>iteration</strong> and{" "}
                            <strong>arrays</strong>,{" "}
                            <strong>nested function calls</strong> and
                            eventually your first <strong>algorithm</strong>.
                        </p>
                    </article>
                    <article>
                        <h3>
                            <a href="lessons/category/idiomatic-javascript">
                                Module 03 - Idiomatic JavaScript
                            </a>
                        </h3>
                        <p>
                            The language evolved over the years and introduced a
                            lot of expressive constructs. You'll see how to
                            solve problems in idiomatic ways by writing more
                            concise and readable code.
                        </p>
                    </article>
                    <article>
                        <h3>
                            <a href="lessons/category/asynchronous-code">
                                Module 04 - Asynchronous Code
                            </a>
                        </h3>
                        <p>
                            A rite of passage for every programmer. A thorough
                            introduction to concurrent programming in
                            JavaScript, from <strong>callbacks</strong> and{" "}
                            <strong>timeouts</strong> to{" "}
                            <strong>async/await</strong> passing through{" "}
                            <strong>Promises</strong>.
                        </p>
                    </article>
                    <article>
                        <h3>
                            <a href="lessons/category/network-requests">
                                Module 05 - Network Requests
                            </a>
                        </h3>
                        <p>
                            Retrieving data from outer sources and sending it
                            over to them: the main purpose of the Internet.
                        </p>
                    </article>
                </Block>
                <Block className={styles.starting}>
                    <h2>What you need</h2>
                    <p>
                        Just desire to have a good time, and to achieve new
                        skills!
                    </p>
                    <p>
                        It would be ideal to{" "}
                        <Link to="/setup">
                            setup a local working environment
                        </Link>
                        , but if you don't succeed for any reason you can use{" "}
                        <Link to="https://runjs.co/" target="_blank">
                            an online code playground
                        </Link>
                        .
                    </p>
                    <p>
                        Don't waste more time and{" "}
                        <Link to="/lessons/intro">start your journey</Link>!
                    </p>
                </Block>
            </Layout>
        </>
    );
}
