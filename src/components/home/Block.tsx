import type { ReactNode } from "react";
import cx from "clsx";
import styles from "./Block.module.css";

type BlockProps = {
    className?: string;
    children: ReactNode;
};

export default function Block({ className, children }: BlockProps) {
    return (
        <section className={cx(styles.block, className)}>
            <div className={styles.wrapper}>{children}</div>
        </section>
    );
}
