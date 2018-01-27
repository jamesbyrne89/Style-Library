import React, { Component } from 'react';
import Head from 'next/head';
import NavBar from '../components/NavBar';
import Colour from '../components/Colour';


const colourVals = {
    neutral: [
        {
            name: 'White',
            hex: '#ffffff',
            rgb: 'rgb(255,255,255)'
        },
        {
            name: 'Black',
            hex: '#000000',
            rgb: 'rgb(0,0,0)'
        },
        {
            name: 'Lilac',
            hex: '#605471',
            rgb: 'rgb(96,84,113)'
        },
        {
            name: 'Cream',
            hex: '#f8ede0',
            rgb: 'rgb(96,84,113)'
        },
        {
            name: "Grey",
            hex: "#e0e0e0",
            rgb: "rgb(224,224,224)"
        }
    ],
    primary: [
        {
            name: "Coral",
            hex: "#FC6962",
            rgb: "rgb(252,105,98)"
        }
    ]
}

const Colours = () => {
    return (
        <div>
            <Head>
                <title>Style Library: Colours</title>
                <link href="https://fonts.googleapis.com/css?family=Lato:400,700,900" rel="stylesheet"></link>
                <link href="/static/styles/styles.css" rel="stylesheet"></link>
            </Head>
            <NavBar />
            <main className="app-content">
                <section className="content-container">
                <h1 className="page-title">Colours</h1>
                <article>Purpose</article>
                <article>Focus alpha lean startup hypotheses bootstrapping. Product management vesting period seed money entrepreneur leverage learning curve graphical user interface technology network effects low hanging fruit niche market disruptive. First mover advantage supply chain agile development interaction design crowdfunding A/B testing. Gamification market ownership business model canvas.</article>
                <article>Neutrals</article>
                <article>
                <ul className="colour-palette">
                        {colourVals.neutral.map((col, i) => {
                            return <li key={i}><Colour key={i} col={col} /></li>
                        })}
                    </ul>

                </article>
                <article>Primary colours</article>
                <article>
                    <ul className="colour-palette">
                    {colourVals.primary.map((col, i) => {
                            return <li key={i}><Colour key={i} col={col} /></li>
                        })}
                        <li>
                            <div className="colour__sample"></div>
                            <span className="colour__hex">#edf207</span>
                            <span className="colour__rgb">rgb(237,242,7)</span>
                        </li>
                        <li>
                            <div className="colour__sample"></div>
                            <span className="colour__hex">#f8ede0</span>
                            <span className="colour__rgb">rgb(248,237,224)</span>
                        </li>
                        <li>
                            <div className="colour__sample"></div>
                            <span className="colour__hex">#edf207</span>
                            <span className="colour__rgb">rgb(237,242,7)</span>
                        </li>
                    </ul>
                </article>
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

export default Colours;