import type { ReactNode } from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import { Hook, Console, Decode } from "console-feed";

import {
    Sandpack,
    SandpackCodeEditor,
    SandpackCodeViewer,
    SandpackLayout,
    SandpackProvider,
    useSandpackClient,
    useSandpackConsole,
    SandpackConsole,
    SandpackPreview,
} from "@codesandbox/sandpack-react";

import { theme } from "../../theme/LiveCodeBlock";

import styles from "./index.module.css";

export default function CodePlayground(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Code Playground | ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <main className={styles.main}>
                <SandpackProvider
                    theme={theme}
                    template="vanilla"
                    files={{
                        "index.js": "console.log('yo');",
                    }}
                    options={{
                        autorun: false,
                        autoReload: false,
                        recompileMode: "delayed",
                        recompileDelay: 500,
                        bundlerURL: "http://localhost:3001/",
                    }}
                >
                    <SandpackLayout>
                        <SandpackCodeEditor
                            style={{
                                height: "700px",
                            }}
                        />
                        {/* This will render the pre on the right side of your sandpack component */}
                        <SandpackPreview style={{ display: "none" }} />
                        <ConsoleWrapper />
                    </SandpackLayout>
                </SandpackProvider>
                {/* <Sandpack
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
                        bundlerURL: "http://localhost:3001/",
                    }}
                /> */}
            </main>
        </Layout>
    );
}

function ConsoleWrapper() {
    const { logs } = useSandpackConsole({
        resetOnPreviewRestart: true,
    });
    console.log(logs);
    return (
        <div style={{ flex: 1, paddingTop: "16px" }}>
            <Console
                logs={logs}
                variant="dark"
                styles={{
                    BASE_FONT_SIZE: 14,
                    BASE_LINE_HEIGHT: 14,
                    BASE_FONT_FAMILY:
                        '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
                }}
            />
        </div>
    );
}
