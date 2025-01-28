import {
    SandpackLayout,
    SandpackProvider,
    SandpackCodeEditor,
} from "@codesandbox/sandpack-react";

import styles from "./styles.module.css";

const theme = {
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
    showLineNumbers?: boolean;
    showConsole?: boolean;
};

const splitter = "// ** output **";

type ParsedInput = {
    source: string;
    output: string[];
};

function parseInput(input: string): ParsedInput {
    const [source, rest] = input.split(splitter);
    return { source, output: rest.split("\n").filter((x) => !!x) };
}

export default function StaticCodeBlock({
    source,
    showLineNumbers = false,
    showConsole,
}: LiveCodeBlockProps) {
    const { source: parsedSource, output } = parseInput(source);
    return (
        <SandpackProvider files={{ "index.js": parsedSource }} theme={theme}>
            <SandpackLayout className={styles.outer}>
                <div className={styles.wrapper}>
                    <SandpackCodeEditor
                        readOnly
                        showLineNumbers={showLineNumbers}
                    />
                    <details
                        className={styles.consoleWrapper}
                        open={showConsole}
                    >
                        <summary>Show / Hide Results</summary>
                        <ul className={styles.output}>
                            {output.length ? (
                                output.map((log, index) => (
                                    <li key={index} className={styles.line}>
                                        <Log log={log} />
                                    </li>
                                ))
                            ) : (
                                <li className={styles.line}>No output</li>
                            )}
                        </ul>
                    </details>
                </div>
            </SandpackLayout>
        </SandpackProvider>
    );
}

type LogProps = {
    log: string;
};

function Log({ log }: LogProps) {
    return (
        <>
            {log
                .replace(/^\/\//, "")
                .split(", ")
                .map((token, index) => (
                    <span key={index} className={getTokenClass(token)}>
                        {token}
                    </span>
                ))}
        </>
    );
}

function getTokenClass(token) {
    if (isNumber(token)) {
        return styles.static;
    }
    if (isBoolean(token)) {
        return styles.static;
    }
    return styles.string;
}

function isBoolean(x) {
    return x === "true" || x === "false";
}

function isNumber(x) {
    return Number(x) == x;
}
