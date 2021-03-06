import React from "react";
import "../style/index.scss";
import Head from "../components/metas/head";
import Footer from "../components/partials/footer";
import News from "../components/partials/news";
import BackgroundImage from "../components/partials/fixedBackgroundImage";
import DataTable from "../components/partials/dataTable";
import Contact from "../components/partials/contact";
import AjaxSample from "../components/partials/ajaxSample"





export default () => {

    // UniqueなKeyを入れていないので、開発環境ではエラーが出る
    let aboutData = [
        { term: "Term", description: "Description" },
        { term: "配列で", description: "表現できます。" },
        { term: "改行は", description: "&lt;br/&gt;を入れることで<br/>表現できます。" },
        { term: "社名", description: "株式会社xxxxxxxx" },
        { term: "本社", description: "東京都 中央区<br/>なんとかかんとか）" },
    ];

    return (
        <>
            <Head pageTitle={"INSTANT-LP"}/>
            <div className="content">
                <BackgroundImage/>
                <section className="body__eyeCatch">
                    <div className="eyeCatch__area">
                        <div className="eyeCatch__body">
                            <img className="eyeCatch__image" src="./images/logo.png" alt="ロゴ画像"/>
                        </div>
                    </div>
                </section>
                <section>
                    <main className="body__main">
                        <div className="body__contents news__area" id="news">
                            <News />
                        </div>
                        <div className="body__contents">
                            <h2 className="module__heading news__heading">このサイトについて</h2>
                            <div className="module__greeting">
                                Reactベースのサイトジェネレータである<a href={"https://www.gatsbyjs.org/"}>Gatsby.JS</a>を使ったサイトのテンプレートです。
                                <br/>
                                <span className="strong">React.Component</span>でパーツを設計し、追加していくことが可能です。
                                <br/>
                                また、静的なHTMLだけでなくReactが動作する状態のJSを書き出してくれるので、Ajaxなどの処理もComponent内で実装することができます。
                            </div>
                            <div className="module__greeting">
                                Gatsby.JSはmarkdownやWordpress REST APIなどから記事を生成するプラグインが充実しており、
                                このデモでは<span className="strong">GoogleDrive</span>にアップロードした
                                <ul className="module__list">
                                    <li>.docxファイルから<a href={"/release/demo"}>記事</a></li>
                                    <li>.csvファイルから<a href={"#news"}>ニュース</a></li>
                                </ul>
                                を生成する機能を実装しています。
                            </div>
                        </div>

                        <div className="body__contents module__area">
                            <AjaxSample/>
                        </div>

                        <div className="body__contents">
                            <h2 className="module__heading">404ページ</h2>
                            <div className="module__body">
                                <a href={"/404"}>404ページ</a>はこちら。
                            </div>
                        </div>

                        <div className="body__contents module__area">
                            <h2 className="module__heading module__heading">箇条書き</h2>
                            <div className="module__body">
                                ここはコンポーネント化していません。ごくごく普通のhtmlです。
                                <ol className="module__list">
                                    <li className="module__listItem">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    </li>
                                    <li className="module__listItem">
                                        Aliquid, enim exercitationem harum id illo.
                                    </li>
                                    <li className="module__listItem">
                                        incidunt iure iusto magnam maxime mollitia possimus quisquam.
                                    </li>
                                </ol>
                            </div>
                        </div>

                        <h2 className="module__heading about__heading">DataTableコンポーネント</h2>
                        <div className="body__contents">
                            <DataTable data={aboutData}/>
                        </div>

                        <div className="body__contents members__area">
                            <h2 className="module__heading members__heading">作者について</h2>
                            <div className="members__people">
                                <div className="members__horizontal">
                                    <div className="members__photo">
                                        <img src="images/author.png" alt="photo_CTO"/>
                                    </div>
                                    <div className="members__horizontalItem">
                                        <div className="members__name">小野沢 敦</div>
                                        <div className="members__caption">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
                                    </div>
                                </div>
                                <div className="members__body">
                                    この辺りも特に工夫せず、ただのhtmlで書いています。あまり使いまわさない要素は、下手にコンポーネント化しなくてもいいかも。
                                </div>
                                <div className="members__body">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aperiam dolore dolorem doloribus, earum eius et labore necessitatibus odio placeat praesentium quam quas quia rerum saepe tempore vel voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolore doloribus ea enim fugiat iure, iusto minus neque quae quam quia quis sint sit suscipit unde? Maxime nesciunt placeat vero?
                                </div>
                            </div>

                        </div>

                        <h2 id="contact" className="module__heading contact__heading">Contactコンポーネント</h2>
                        <div className="body__contents">
                            <Contact/>
                        </div>
                    </main>
                </section>
            </div>
            <Footer/>
        </>
    )
}