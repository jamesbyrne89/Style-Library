import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
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
                                    <script defer src="https://use.fontawesome.com/releases/v5.0.4/js/all.js"></script>

                                    <div class="wh-player">
                                        <video class="wh-player__video viewer" src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"></video>
                                        <button class="overlay-btn">{'\u25B6'}</button>
                                        <div class="wh-player__controls">

                                            <button class="wh-player__button toggle" title="Toggle Play">{'\u25B6'}</button>
                                            <div class="progress">
                                                <div class="progress__filled"></div>
                                            </div>
                                            <button class="wh-player__button restart">{'&#x21ba'}</button>
                                            <div class="wh-player__volume-controls">
                                                <button class="wh-player__button volume" title="Toggle Volume"><i class="fa fa-volume-up"></i></button>
                                                <input type="range" name="volume" class="wh-player__slider wh-player__volume" min="0" max="1" step="0.05" value="1" />
                                            </div>
                                            <button class="wh-player__button fullscreen"><i class="fa fa-expand"></i></button>
                                        </div>
                                    </div>
                                </article>
                                <article>Buttons</article>
                                <article>
                                    <div class="snippet">
                                        <button class="btn btn-primary">Checkout</button>
                                        <button class="btn btn-secondary"></button>
                                    </div>
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
