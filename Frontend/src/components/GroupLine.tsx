type Props = {
    groupName: string;
};

const GroupLine = (props: Props) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                color: "var(--white)",
                fontSize: "1.2rem",
                minHeight: "38px",
                borderBottom: "1px solid var(--white)",
                borderTop: "1px solid var(--white)",
                zIndex: 1000,
            }}
        >
            {props.groupName}
        </div>
    );
};

export default GroupLine;