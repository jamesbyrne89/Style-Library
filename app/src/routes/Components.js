import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import customVideoPlayer from '../components/snippets';
import '../styles/styles.css';


class Components extends Component {

    render() {
        return (
            <Router>
                <div className="app-container">
                    <div>
                        <main className="app-content">
                            <section className="content-container">
                                <h1 className="page-title">Components</h1>
                                <article>Purpose</article>
                                <article>Focus alpha lean startup hypotheses bootstrapping. Product management vesting period seed money entrepreneur leverage learning curve graphical user interface technology network effects low hanging fruit niche market disruptive. First mover advantage supply chain agile development interaction design crowdfunding A/B testing. Gamification market ownership business model canvas.</article>
                                <article>Custom Video Player</article>
                                <article className="snippet">
                                    <customVideoPlayer />
                                </article>
                                <article>Primary colours</article>
                                <article>
                                </article>
                                <article></article>
                                <article></article>
                                <article></article>
                                <article></article>
                                <article></article>
                            </section>
                        </main>
                    </div>
                </div>
            </Router>
        )
    }
}

export default Components;
