import InputBox from "./InputBox"
import Posts from "./Posts"
import Stories from "./Stories"


function Feed() {
    return (
        <div className="pb-44 pt-6 mr-4 xl:mr-40">
            <div className="mx-auto max-w-md md:mx-w-lg lg:max-w-2xl">
                <Stories />
                <InputBox />
                <Posts />
            </div>
        </div>
    )
}

export default Feed
