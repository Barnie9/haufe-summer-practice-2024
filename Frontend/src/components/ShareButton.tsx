import { Recommendation } from "../types";
import IconButton from "./IconButton";
import { IconShare } from "@tabler/icons-react";

type Props = {
	recommendation: Recommendation;
};

const ShareButton = (props: Props) => {
	return (
		<IconButton onClick={() => {}}>
			<IconShare size={20} />
		</IconButton>
	);
};

export default ShareButton;
