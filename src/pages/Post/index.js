import "./post.css";
import styles from "./Post.module.css";

import { useParams } from "react-router-dom";
import posts from "json/posts.json";
import PostModelo from "components/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrado from "pages/NaoEncontrado";
import PaginaPadrao from "components/PaginaPadrao";
import PostCard from "components/PostCard";

export default function Post() {
  const parametros = useParams();
  // Number para converter o string parametros.id para number
  const post = posts.find((post) => Number(parametros.id) === post.id);
  if (!post) {
    return <NaoEncontrado />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(parametros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);
  console.log(postsRecomendados);
  return (
    // <Routes>
    //   <Route path="*" element={<PaginaPadrao />}>
    //     <Route
    //       index
    //       element={
    //         <PostModelo
    //           fotoCapa={require(`assets/posts/${post.id}/capa.png`)}
    //           titulo={post.titulo}
    //         >
    //           <div className="post-markdown-container">
    //             <ReactMarkdown>{post.texto}</ReactMarkdown>
    //           </div>
    //         </PostModelo>
    //       }
    //     />
    //   </Route>
    // </Routes>
    <PaginaPadrao>
      <PostModelo
        fotoCapa={require(`assets/posts/${post.id}/capa.png`)}
        titulo={post.titulo}
      >
        <div className="post-markdown-container">
          <ReactMarkdown>{post.texto}</ReactMarkdown>
        </div>
        <h2 className={styles.tituloOutrosPosts}>
          Outros posts que você pode gostar:
        </h2>
        <ul className={styles.postsRecomendados}>
          {postsRecomendados.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </PostModelo>
    </PaginaPadrao>
  );
}
