import { SharedHeader, VideoCard } from "@/components";
import { dummyCards } from "@/constants";
import { redirect } from "next/navigation";

// import { getAllVideosByUser } from "@/lib/actions/video";
// import { EmptyState, SharedHeader, VideoCard } from "@/components";

const ProfilePage = async ({ params, searchParams }: ParamsWithSearch) => {
  const { id } = await params;
  const { query, filter } = await searchParams;

  const user = {
    id: "123",
    name: "John Doe",
    email: "abc@gmail.com",
    image: "/assets/images/dummy.jpg",
  };

  // const { user, videos } = await getAllVideosByUser(id, query, filter);
  // if (!user) redirect("/404");

  return (
    <main className="wrapper page">
      <SharedHeader
        subHeader={user?.email}
        title={user?.name}
        userImg={user?.image ?? ""}
      />

      <section className="video-grid">
        {dummyCards.map((info) => (
          <VideoCard
            key={info.id}
            id={"1"}
            title={info.title}
            thumbnail={info.thumbnail}
            createdAt={info.createdAt}
            userImg={info?.userImg ?? ""}
            username={info?.username ?? "Guest"}
            views={info.views}
            visibility={info.visibility}
            duration={info.duration}
          />
        ))}
      </section>

      {/* {videos?.length > 0 ? (
        <section className="video-grid">
          {videos.map(({ video }) => (
            <VideoCard
              key={video.id}
              id={video.videoId}
              title={video.title}
              thumbnail={video.thumbnailUrl}
              createdAt={video.createdAt}
              userImg={user.image ?? ""}
              username={user.name ?? "Guest"}
              views={video.views}
              visibility={video.visibility}
              duration={video.duration}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="No Videos Available Yet"
          description="Video will show up here once you upload them."
        />
      )} */}
    </main>
  );
};

export default ProfilePage;
