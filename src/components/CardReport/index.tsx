import React from "react";

import profileImg from '../../assets/img/profile.jpg'
import heartIcon from '../../assets/icons/heart.svg';

import "./styles.scss";

export function CardReport() {
  return (
    <article id="card-report">
      <header>
        <div className="profile">
          <img src={profileImg} alt="" />
          <p>Jackson Marcony</p>
        </div>
        <div className="fav">
            <button>
            <img src={heartIcon} alt="" />

            </button>
        </div>
      </header>
      <div className="content">
        <h2 className="title-card-report">Refeitorio</h2>
        <p className="paragraph">
          asset main.07d081ee1232b01aa0e6.hot-update.json 55 bytes [emitted]
          [immutable] [hmr] assets by path static/js/*.js 1.89 MiB asset
          static/js/bundle.js 1.85 MiB [emitted] (name: main) 1 related asset
          asset static/js/src_pages_Home_index_tsx.chunk.js 41.4 KiB [emitted] 1
          related asset asset index.html 1.67 KiB [emitted] asset
          asset-manifest.json
        </p>
      </div>

      <div className="img-report">
          <img src={profileImg} alt="" />
      </div>
    </article>
  );
}
