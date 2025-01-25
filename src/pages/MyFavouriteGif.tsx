const MyFavoriteGif = () => {
  const favoriteGif = {
    id: "favorite-gif",
    title: "It's Illegal for You to Ask Me That",
    images: {
      fixed_height: {
        url: "https://media0.giphy.com/media/v1.Y2lkPTUyMWE4MDU0bmFlOGx6b2ZjenFndDIzbWExaDk0b3d4ZTlrdnBibDF0c3U3MjdiayZlcD12MV9naWZzX3NlYXJjaCZjdD1n/GHdE1VNN1KknPeZqoQ/200.gif",
      },
    },
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>My Favorite GIF</h2>
      <img
        src={favoriteGif.images.fixed_height.url}
        alt={favoriteGif.title}
        style={{ width: "100%", maxWidth: "500px", borderRadius: "8px" }}
      />
      <p>{favoriteGif.title}</p>
    </div>
  );
};

export default MyFavoriteGif;
