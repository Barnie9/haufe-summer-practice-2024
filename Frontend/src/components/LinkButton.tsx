import { useState } from "react";

type Props = {
    link: string;
}

const LinkButton = (props: Props) => {
    const [ isHovered, setIsHovered ] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <a
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href={props.link}
            target={props.link}
            rel="noreferrer"
            style={{
                padding: "0.5rem 1rem",
                borderRadius: "10px",
                textDecoration: "none",
                fontSize: "1.2rem",
                backgroundColor: isHovered ? "var(--blue-secondary)" : "var(--blue-primary)",
                color: "var(--white)",
            }}
        >
            Link to
        </a>
    );
};

export default LinkButton;
