import "./tripsPage/styles.css";
import React, { Component } from "react";
import anime from "animejs";

export default class BallsAnimation extends Component {
    state = {
        colorArray: ["#2A722A", "#1778E0", "#3F4F7D"]
    };

    animation() {
        anime({
            targets: "svg g",
            fill: this.state.colorArray.sort((a, b) => 0.5 - Math.random()),
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: "cubicBezier(.5, .05, .1, .3)",
            loop: true,
            duration: 1000,
            delay: function (el, i) {
                return i * 100;
            }
        });
    }

    componentDidMount() {
        this.animation();
    }
    render() {
        return (
            <div className="centered h-25 w-25">
                <svg width="100" height="100" viewBox="0 0 57 57" xmlns="http://www.w3.org/2000/svg">
                    <g fillRule="evenodd">
                        <g transform="translate(1 1)" stroke-width="2">
                            <circle cx="5" cy="50" r="5">
                                <animate attributeName="cy" begin="0s" dur="2.2s" values="50;5;50;50" calcMode="linear" repeatCount="indefinite" />
                                <animate attributeName="cx" begin="0s" dur="2.2s" values="5;27;49;5" calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="27" cy="5" r="5">
                                <animate attributeName="cy" begin="0s" dur="2.2s" from="5" to="5" values="5;50;50;5" calcMode="linear" repeatCount="indefinite" />
                                <animate attributeName="cx" begin="0s" dur="2.2s" from="27" to="27" values="27;49;5;27" calcMode="linear" repeatCount="indefinite" />
                            </circle>
                            <circle cx="49" cy="50" r="5">
                                <animate attributeName="cy" begin="0s" dur="2.2s" values="50;50;5;50" calcMode="linear" repeatCount="indefinite" />
                                <animate attributeName="cx" from="49" to="49" begin="0s" dur="2.2s" values="49;5;27;49" calcMode="linear" repeatCount="indefinite" />
                            </circle>
                        </g>
                    </g>
                </svg>
            </div>
        );
    }
}
