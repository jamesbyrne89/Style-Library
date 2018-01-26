import React, { Component } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';



const Typography = () => {
    return (
        <div>
            <Head>
                <title>Style Library: Typography</title>
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
                <link href="/static/styles/styles.css" rel="stylesheet"></link>
            </Head>
            <NavBar />
            <main className="app-content">
                <section className="content-container">
                <h1 className="page-title">Typography</h1>
                <article>Purpose</article>
                <article>Spicy jalapeno bacon ipsum dolor amet pork loin hamburger ham porchetta prosciutto kevin turkey buffalo beef ribs leberkas fatback chuck. Filet mignon andouille shank tri-tip pig bresaola, meatloaf jowl beef brisket. Bacon boudin tail, pancetta capicola ground round ham andouille ball tip. Chuck picanha bresaola kielbasa beef ribs, boudin venison ribeye. Salami t-bone beef biltong, andouille hamburger fatback corned beef. Hamburger leberkas sirloin andouille corned beef.</article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                <article></article>
                </section>
            </main>
        </div>
    )
}

export default Typography;