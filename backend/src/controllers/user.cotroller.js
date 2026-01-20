import User from "../models/User";

export async function getRecommendedUsers(req, res) {
    try {
        const currentUserId = req.user.id;
        const currentUser = req.user

        const recommendedUsers = await User.find({
            $and: [
                { _id: { $ne: currentUserId } },//excludes current user
                { $id: { $nin: currentUser.friends } }, //excludes current user's friends
                { isOnboarded: true }
            ]
        })
        res.status(200).json(recommendedUsers);

    } catch (error) {
        console.error("Error in getRecommendedUser controller", error.message);
        res.status(500).json({ message: "Internal Server Error" });

    }

}

export async function getMyFriends(req, res) {
    try {
        const user = await User.findById(req.user.id).select("friends").populate("friends", "fullName profilePic nativeLanguage learningLanguage");

        res.status(200).json(user.friends);

    } catch (error){
        console.error("Error in getMyFreinds controller",error.message);
        res.status(500).json({message:"Internal Server Error"});
    }
    
}