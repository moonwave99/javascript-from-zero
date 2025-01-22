import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import { Sandpack } from "@codesandbox/sandpack-react";

import { theme } from "../../theme/LiveCodeBlock";

import styles from "./index.module.css";

export default function CodePlayground(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1>Code Playground</h1>
                    <p>You can test your JavaScript code here.</p>
                </header>
                <Sandpack
                    theme={theme}
                    template="vanilla"
                    files={{
                        "index.js": "// write your code",
                    }}
                    options={{
                        layout: "console",
                        autorun: false,
                        autoReload: false,
                        editorHeight: "500px",
                        recompileMode: "delayed",
                        recompileDelay: 500,
                    }}
                />
            </main>
        </Layout>
    );
}
