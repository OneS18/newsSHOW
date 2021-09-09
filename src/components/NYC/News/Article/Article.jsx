import "./Article.scss";

const Article = (props) => {
  const image = props.img;
  if (image === null) {
    // eslint-disable-next-line jsx-a11y/alt-text
    return null;
  }

  return (
    <div className="blog-post">
      <div className="blog-post__img">
        <img src={image} alt="" />
      </div>
      <div className="blog-post__info">
        <div className="blog-post__date">
          <span>{props.publishedAt}</span>
        </div>
        <h1 className="blog-post__title">{props.title}</h1>
        <p className="blog-post__text">{props.description}</p>
        <a href={props.url} className="blog-post__cta">
          Read More
        </a>
      </div>
    </div>
  );
};

export default Article;
