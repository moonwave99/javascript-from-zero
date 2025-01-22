import {
    SandpackLayout,
    SandpackConsole,
    SandpackProvider,
    SandpackCodeEditor,
} from "@codesandbox/sandpack-react";

import styles from "./styles.module.css";

export const theme = {
    colors: {
        surface1: "#282A36",
        surface2: "#252525",
        surface3: "#2F2F2F",
        clickable: "#999999",
        base: "#808080",
        disabled: "#4D4D4D",
        hover: "#C5C5C5",
        accent: "#0971F1",
        error: "#ff453a",
        errorSurface: "#ffeceb",
    },
    syntax: {
        plain: "#FFFFFF",
        comment: {
            color: "#757575",
            fontStyle: "italic",
        },
        keyword: "#0971F1",
        tag: "#d28cf6",
        punctuation: "#ffffff",
        definition: "#9dc6f9",
        property: "rgb(80, 250, 123)",
        static: "#FF453A",
        string: "#bf5af2",
    },
    font: {
        body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
        mono: '"Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace',
        size: "15.2px",
        lineHeight: "20px",
    },
};

type LiveCodeBlockProps = {
    source: string;
    language?: string;
    showConsole?: boolean;
    showLineNumbers?: boolean;
    interactive?: boolean;
};

export default function LiveCodeBlock({
    source,
    showConsole = false,
    showLineNumbers = false,
    interactive = false,
}: LiveCodeBlockProps) {
    return (
        <SandpackProvider
            files={{ "index.js": source.replace(/\n$/, "") }}
            theme={theme}
        >
            <SandpackLayout className={styles.outer}>
                <div className={styles.wrapper}>
                    <SandpackCodeEditor
                        readOnly={!interactive}
                        showLineNumbers={showLineNumbers}
                    />
                    <details
                        className={styles.consoleWrapper}
                        open={showConsole}
                    >
                        <summary>Show Results</summary>
                        <SandpackConsole
                            resetOnPreviewRestart
                            standalone
                            className={styles.console}
                            showSyntaxError
                        />
                    </details>
                </div>
            </SandpackLayout>
        </SandpackProvider>
    );
}
