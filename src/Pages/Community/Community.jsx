import useStory from "../../hook/useStory";
import StoryCard from "./StoryCard";


const Community = () => {
    const [stories] = useStory();

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl text-center text-[#16CAC9] font-semibold">Guide&rsquo;s Story Here </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {
                stories.map(story => <StoryCard key={story._id} story={story}></StoryCard>)
            }
        </div>
        </div>
    );
};

export default Community;