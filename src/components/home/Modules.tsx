import styles from "./Modules.module.css";

export default function Modules() {
    return (
        <section className={styles.modules}>
            <div className={styles.wrapper}>
                <h2>Modules</h2>
                <p>The course is organized in the following modules:</p>
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
                        JavaScript, the concept of <strong>function</strong>,
                        the basics of <strong>control flow</strong> and the
                        purpose of <strong>variables</strong> and{" "}
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
                        <strong>iteration</strong>,{" "}
                        <strong>nested function calls</strong> and finally your
                        first <strong>algorithm</strong>.
                    </p>
                </article>
                <article>
                    <h3>
                        <a href="lessons/category/idiomatic-javascript">
                            Module 03 - Idiomatic JavaScript
                        </a>
                    </h3>
                    <p>
                        The language evolved through the years and welcomed a
                        lot of expressive constructs. You'll see how to solve
                        problems in idiomatic ways by writing more concise and
                        readable code.
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
                        introduction to concurrent programming in JavaScript,
                        from <strong>callbacks</strong> and{" "}
                        <strong>timeouts</strong> to{" "}
                        <strong>async/await</strong> passing through{" "}
                        <strong>Promises</strong>.
                    </p>
                </article>
            </div>
        </section>
    );
}
