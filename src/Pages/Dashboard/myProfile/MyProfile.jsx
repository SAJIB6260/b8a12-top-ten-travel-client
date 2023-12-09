import useAdmin from "../../../hook/useAdmin";
import useGuide from "../../../hook/useGuide";
import Profile from "../commonPage/Profile";
import GuideStory from "../tourGuide/GuideStory";


const MyProfile = () => {
    const [isAdmin] = useAdmin();
    const [isGuide] = useGuide();
    return (
        <>
            {
                isAdmin ? <><div><Profile></Profile></div></>
                    :
                    <>
                        {
                            isGuide ? <> <div className="flex flex-col md:flex-row md:justify-between">
                                <div>
                                    <GuideStory></GuideStory>
                                </div>
                                <div className="my-2"><Profile></Profile></div>
                                </div></>
                                :
                                <> <div><Profile></Profile></div></>
                        }
                    </>
            }
        </>
    );
};

export default MyProfile;