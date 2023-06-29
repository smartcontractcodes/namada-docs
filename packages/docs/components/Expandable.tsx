import clsx from "clsx";
import { useState, useRef} from "react";

const Expandable = ({ children }) => {
    const [expanded, setExpanded] = useState(false);
    const containerRef = useRef(null);

    const toggleExpand = () => {
    setExpanded(!expanded);
    if (!expanded) {
        containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    const styles = {
        collapsed: {
            height: "200px",
            WebkitMaskImage: `linear-gradient(rgba(0, 0, 0, 1) 65%, transparent 100%)`,
            maskImage: `linear-gradient(rgba(0, 0, 0, 1) 65%, transparent 100%)`,
        },
        expanded: {
            height: "auto",
        },
    };

return (
        <div className="nx-mt-4 nx-mb-12 nx-relative" ref={containerRef}>
            <div
            className={clsx("nx-w-full nx-overflow-hidden")}
            style={expanded ? styles.expanded : styles.collapsed}
            >
            {children}
            </div>

            <button
            onClick={toggleExpand}
            style={{ bottom: expanded ? "-0.2em" : "-1.35em" }}
            className={clsx(
                "nx-absolute nx-w-full nx-text-center nx-left-0",
                "nx-uppercase nx-text-sm"
            )}
            >
            <span
                className={clsx(
                "nx-px-4 nx-py-2 nx-text-primary-800 nx-inline-block",
                "nx-bg-primary-100 dark:nx-bg-primary-400/10 nx-font-semibold nx-rounded"
                )}
            >
                {expanded ? "Collapse" : "Expand"}
            </span>
            </button>
        </div>
    );
};

export default Expandable;
