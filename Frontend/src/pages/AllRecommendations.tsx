import RecommendationCard from "../components/RecommendationCard";
import { useGetRecommendationsQuery } from "../redux/api/recommendationApi";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/slices/userSlice";

const AllRecommendations = () => {
    const user = useAppSelector(selectUser);

    const {
        data: recommendations,
        isSuccess: recommendationsIsSuccess,
    } = useGetRecommendationsQuery(user);

	return (
		<div
            style={{
                display: "grid",
                justifyContent: "center",
                gridAutoRows: "300px",
                gridTemplateColumns: "repeat(auto-fill, 300px)",
                height: "calc(100% - 4rem)",
                width: "calc(100% - 4rem)",
                gap: "2rem",
                padding: "2rem",
                overflowY: "auto",
            }}
        >
			{recommendationsIsSuccess && recommendations?.map((recommendation) => (
                <RecommendationCard key={recommendation.id} recommendation={recommendation} />
            ))}
		</div>
	);
};

export default AllRecommendations;
