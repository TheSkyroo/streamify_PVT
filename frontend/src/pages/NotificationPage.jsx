import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { acceptFriendRequest, getFriendRequests } from "../lib/api";
import { CheckCircleIcon, LoaderIcon, UserXIcon } from "lucide-react";
import toast from "react-hot-toast";

const NotificationPage = () => {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["friendRequests"],
    queryFn: getFriendRequests,
  });

  const { mutate: acceptRequest, isPending } = useMutation({
    mutationFn: (requestId) => acceptFriendRequest(requestId),
    onSuccess: () => {
      toast.success("Friend request accepted");
      queryClient.invalidateQueries({ queryKey: ["friendRequests"] });
      queryClient.invalidateQueries({ queryKey: ["friends"] });
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to accept request");
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center py-10">
        <LoaderIcon className="size-10 animate-spin text-primary" />
      </div>
    );

  const { incomingReqs, acceptedReqs } = data || {
    incomingReqs: [],
    acceptedReqs: [],
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8 min-h-screen">
      <div className="container mx-auto space-y-8 max-w-4xl">
        <h1 className="text-3xl font-bold">Notifications</h1>

        {/* INCOMING REQUESTS */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            Friend Requests
            <span className="badge badge-primary badge-sm">
              {incomingReqs.length}
            </span>
          </h2>

          {incomingReqs.length === 0 ? (
            <div className="card bg-base-200 p-8 text-center opacity-70">
              <p>No pending friend requests</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {incomingReqs.map((req) => (
                <div
                  key={req._id}
                  className="card bg-base-200 hover:shadow-md transition-all sm:flex-row items-center justify-between p-5 gap-4"
                >
                  {/* SENDER INFO */}
                  <div className="flex items-center gap-4 flex-1">
                    <div className="avatar">
                      <div className="size-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={req.sender.profilePic || "/avatar.png"}
                          alt={req.sender.fullName}
                        />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">
                        {req.sender.fullName}
                      </h3>
                      <p className="text-sm opacity-70">
                        wants to be your friend
                      </p>
                      <div className="flex gap-2 text-xs mt-1">
                        <span className="badge badge-neutral badge-outline badge-sm">
                          Native: {req.sender.nativeLanguage}
                        </span>
                        <span className="badge badge-neutral badge-outline badge-sm">
                          Learning: {req.sender.learningLanguage}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="flex gap-2 w-full sm:w-auto">
                    <button
                      className="btn btn-primary btn-sm flex-1 sm:flex-none"
                      onClick={() => acceptRequest(req._id)}
                      disabled={isPending}
                    >
                      {isPending ? (
                        <LoaderIcon className="size-4 animate-spin" />
                      ) : (
                        <CheckCircleIcon className="size-4" />
                      )}
                      Accept
                    </button>
                    {/* Optional Reject button */}
                    <button className="btn btn-ghost btn-sm btn-circle text-error/80 hover:bg-error/10">
                      <UserXIcon className="size-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ACCEPTED REQUESTS (Ideally cleared manually, but simply showing list for now) */}
        {acceptedReqs.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold opacity-80">
              New Connections
            </h2>
            <div className="grid gap-3">
              {acceptedReqs.map((req) => (
                <div
                  key={req._id}
                  className="alert bg-base-200/50 border-none flex items-center justify-start gap-4"
                >
                  <div className="avatar size-10">
                    <img
                      src={req.recipient.profilePic || "/avatar.png"}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <span className="font-medium">
                      {req.recipient.fullName}
                    </span>{" "}
                    accepted your friend request.
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;
