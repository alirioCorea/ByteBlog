export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.garajedoce.com/wp-content/uploads/2023/01/cabecera-chat-GPT.webp"
          alt="Imagen del post"
        />
      </div>
      <div className="texts">
        <h2>Titulo del post</h2>
        <p className="info">
          <a className="author">Josue Corea</a>
          <time>2023-03-01 08:50</time>
        </p>
        <p className="summary">Contenido del post</p>
      </div>
    </div>
  );
}
