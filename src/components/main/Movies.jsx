import Main from "./Main";

const data = [
  "https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg",
  "https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg",
  "https://www.movieposters.com/cdn/shop/products/wandavision.mp_240x360_crop_center.progressive.jpg?v=1614371756",
  "https://s.yimg.com/ny/api/res/1.2/ZzAHlDHi8a2xdBRRbruaYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTkyOA--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/d05a3f087fa57f6d41b865d53a42a5f5",
  "https://m.media-amazon.com/images/I/91uzbH0vmcL._AC_UF1000,1000_QL80_.jpg",
  "https://files.ekmcdn.com/allwallpapers/images/star-wars-rise-of-skywalker-61x91-5cm-movie-posters-34243-1-p.jpg",
];

const Movies = () => {
  return (
    <div className="container">
      {data.map((images) => (
        <Main images={images} />
      ))}
    </div>
  );
};

export default Movies;
