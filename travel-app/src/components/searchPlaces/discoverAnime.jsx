import "../tripsPage/styles.css";
import React, { Component } from "react";
import anime from "animejs";

export default class DiscoverAnimation extends Component {
    state = {
        colorArray: ["#E77022", "#2A722A", "#1778E0"]
    };

    animation() {
        anime({
            targets: "svg path",
            stroke: this.state.colorArray.sort((a, b) => 0.5 - Math.random()),
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
            <div className="d-flex h-100 w-100 mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="100%" height="80%" viewBox="0 0 832.02831 750" preserveAspectRatio="none">
                    <g>
                        <title>Layer 1</title>
                        <path fill="#e6e6e6" d="m393.37761,644.35677s-12.753,-31.391 25.505,-54.934l-25.505,54.934z" data-name="Path 482" id="efdf5e1f-6b90-40c1-9274-afa2b16f39be" />
                        <path fill="#e6e6e6" d="m383.69365,643.78573s-3.89,-22.374 -34,-22.182l34,22.182z" data-name="Path 483" id="af7fe47f-56e6-4bb6-aa0f-d6efaf86a160" />
                        <path fill="#e6e6e6" d="m665.33278,644.35677s-16.8484,-41.47168 33.69551,-72.57516l-33.69551,72.57516z" data-name="Path 482" id="a08d42bc-6ae2-46d7-9736-aba59e52cc48" />
                        <path fill="#e6e6e6" d="m644.61214,643.60235s-5.13923,-29.55906 -44.91853,-29.30538" data-name="Path 483" id="bafd7749-4c33-42a1-9524-e744b9f16454" />
                        <polygon id="svg_1" fill="#cbcbcb" points="483.215 179.569 466.576 170.731 467.821 170.069 484.46 178.908 483.215 179.569" />
                        <polygon id="svg_2" fill="#cbcbcb" points="468.701 179.569 467.457 178.908 484.095 170.069 485.34 170.731 468.701 179.569" />
                        <rect id="svg_3" transform="rotate(-62.8678 -108.891 475.961)" fill="#cbcbcb" height="5.28154" width="1.76077" y="713.36989" x="421.02393" />
                        <path
                            id="svg_4"
                            fill="#cbcbcb"
                            d="m442.31431,162.97841l-9.35556,-4.794l0.80288,-1.56707l9.35555,4.794l-0.80287,1.56707zm-18.71111,-9.58808l-9.35577,-4.79447l0.80288,-1.56706l9.35577,4.79447l-0.80288,1.56706zm-18.71132,-9.5885l-9.35555,-4.794l0.80287,-1.56707l9.35555,4.794l-0.80287,1.56707zm-18.71111,-9.58808l-9.35577,-4.794l0.80288,-1.56707l9.35577,4.794l-0.80288,1.56707zm-18.71132,-9.58808l-9.35555,-4.794l0.80287,-1.56707l9.35555,4.794l-0.80287,1.56707z"
                        />
                        <rect id="svg_5" transform="rotate(-62.8678 -99.4305 601.726)" fill="#cbcbcb" height="5.28154" width="1.76077" y="894.27878" x="538.09644" />
                        <path
                            id="svg_6"
                            fill="#e5e5e5"
                            d="m97.57114,228.92045q0,0.82486 -0.05345,1.63595a24.78151,24.78151 0 0 1 -2.322,8.9969c-0.01036,0.02414 -0.02248,0.04655 -0.03275,0.069c-0.06212,0.131 -0.12592,0.262 -0.19141,0.39133a24.48771,24.48771 0 0 1 -1.31874,2.32723a24.90345,24.90345 0 0 1 -20.43827,11.50168l0.24655,14.17714l3.215,-1.69285l0.57407,1.09122l-3.76492,1.98246l0.46026,26.33045l0.00514,0.35168l-2.48581,0.55335l0.00513,-0.35339l0.78265,-42.43833a24.854,24.854 0 0 1 -17.58352,-7.65056c-0.15682,-0.162 -0.312,-0.32925 -0.46371,-0.49475l-0.01726,-0.019a24.95626,24.95626 0 0 1 -4.54066,-7.02651c0.02416,0.02757 0.05,0.05344 0.07416,0.081a24.93445,24.93445 0 0 1 11.82226,-32.12957c0.08619,-0.04309 0.17415,-0.08447 0.26035,-0.12756a24.95344,24.95344 0 0 1 32.32778,9.814c0.15176,0.25514 0.29831,0.51545 0.43963,0.77747a24.79836,24.79836 0 0 1 2.99952,11.85166z"
                        />
                        <circle id="svg_7" fill="#e5e5e5" r="32.67421" cy="206.96164" cx="94.21547" />
                        <path id="svg_8" opacity="0.2" d="m70.08987,185.13783a32.67676,32.67676 0 0 0 54.4449,34.58143a32.677,32.677 0 1 1 -54.4449,-34.58143z" />
                        <polygon
                            id="svg_9"
                            fill="#3f3d56"
                            points="95.983 297.986 92.646 297.05 92.653 296.691 93.653 242.341 93.703 239.631 93.704 239.552 93.879 230.056 94.132 216.293 94.132 216.291 94.304 206.962 94.396 206.962 94.572 217.069 94.801 230.224 94.965 239.558 94.965 239.627 94.972 240.012 94.972 240.014 95.289 258.209 95.322 260.017 95.977 297.624 95.983 297.986"
                        />
                        <rect id="svg_10" transform="rotate(-27.7659 -331.028 48.3268)" fill="#3f3d56" height="1.61576" width="6.10398" y="432.64624" x="-52.91602" />
                        <path
                            stroke="null"
                            id="svg_11"
                            d="m517.90299,101.20757a755.33262,827.23331 0 0 0 -112.31071,1.89073c-17.99821,1.78174 -36.28276,3.70625 -53.94843,8.00599c-14.22908,3.46329 -30.74351,9.31675 -39.60937,22.95045a20.23,22.15571 0 0 0 -3.15856,19.39542c2.11393,7.77204 7.37259,14.24142 12.973,19.30847c12.88965,11.66208 28.88241,18.44839 43.16811,27.71356c26.08306,16.91653 49.95454,39.71773 65.27662,68.68246c6.74233,12.74569 13.1558,29.69306 5.64824,43.73727c-7.355,13.75884 -23.77401,18.49902 -37.16391,20.73439c-16.78297,2.80184 -34.07053,2.04188 -50.9235,0.47293a530.59843,581.1065 0 0 1 -55.04403,-8.82955c-35.64397,-7.49577 -70.96347,-17.03079 -107.10281,-21.36679a310.18389,339.71053 0 0 0 -54.60711,-1.72936c-16.44879,1.21512 -33.03846,4.06451 -48.49087,10.56018c-11.90742,5.0055 -24.60012,12.57863 -31.03203,25.20838c-6.20008,12.17454 -3.78185,26.21413 2.96927,37.44681c8.12298,13.51523 20.7896,22.77659 33.95874,29.54568c14.99422,7.70721 31.03194,12.703 47.09018,16.9517c8.14428,2.15487 16.33261,4.10271 24.52171,6.04068c1.70836,0.40429 2.4383,-2.46957 0.72379,-2.87531c-16.514,-3.90808 -33.07575,-7.82895 -49.17965,-13.48626c-14.90243,-5.23524 -30.15309,-11.94159 -42.35684,-22.93457c-9.87287,-8.89334 -19.25993,-21.88332 -18.67719,-36.65253c0.58745,-14.8887 11.99364,-25.28416 23.17326,-31.68278c13.9714,-7.99648 29.84486,-11.89163 45.399,-13.92744a275.83847,302.09574 0 0 1 53.62773,-0.79878c36.05407,3.00446 71.30255,11.99913 106.65231,19.84465c34.34149,7.62174 69.75489,14.67941 104.94829,12.72452c13.94925,-0.77484 28.89574,-2.96399 41.21227,-10.67513c5.63916,-3.53058 10.72402,-8.50964 13.59003,-14.98923a30.65161,33.56936 0 0 0 2.34204,-19.72451c-1.99719,-14.6806 -9.95881,-28.29322 -17.90274,-39.98648a176.44329,193.23906 0 0 0 -30.07601,-34.12025a237.23906,259.82203 0 0 0 -39.79556,-28.39223c-7.47662,-4.31118 -15.05944,-8.45667 -22.18472,-13.45004c-6.83177,-4.78772 -13.57092,-10.54845 -17.74291,-18.32075c-3.60836,-6.72231 -4.2702,-14.39464 -0.51186,-21.2125c3.80132,-6.89583 10.35072,-11.70525 16.80926,-15.21976c15.56089,-8.46771 33.65205,-10.7343 50.67704,-13.05691a749.56039,820.91162 0 0 1 110.22278,-6.0188q13.42661,0.34589 26.83522,1.21749c1.75028,0.11276 1.74432,-2.86944 0,-2.98183l-0.00005,0.00004z"
                        />
                        <path
                            id="svg_12"
                            fill="#3f3d56"
                            d="m491.60724,5.05212l6.22944,-4.98234c-4.83937,-0.53392 -6.82778,2.10537 -7.64155,4.19439c-3.78071,-1.5699 -7.89647,0.48753 -7.89647,0.48753l12.46394,4.52485a9.43172,9.43172 0 0 0 -3.15536,-4.22443z"
                        />
                        <path
                            id="svg_13"
                            fill="#3f3d56"
                            d="m461.37514,20.82538l6.22944,-4.98235c-4.83938,-0.53391 -6.82778,2.10537 -7.64156,4.19439c-3.78071,-1.56989 -7.89646,0.48754 -7.89646,0.48754l12.46393,4.52485a9.43165,9.43165 0 0 0 -3.15535,-4.22443z"
                        />
                        <path
                            id="svg_14"
                            fill="#3f3d56"
                            d="m491.60724,45.7997l6.22944,-4.98234c-4.83937,-0.53392 -6.82778,2.10537 -7.64155,4.19439c-3.78071,-1.5699 -7.89647,0.48753 -7.89647,0.48753l12.46394,4.52485a9.43172,9.43172 0 0 0 -3.15536,-4.22443z"
                        />
                        <g data-name="Group 27" id="e2dfab6d-8627-4cc0-b13e-69de57259a01">
                            <circle fill="#ff6583" r="18.76847" cy="34.41297" cx="398.21854" data-name="Ellipse 7" id="bedd3b2f-f695-46eb-9812-80ad4d1341b6" />
                            <path
                                fill="#6c63ff"
                                d="m457.07314,92.24736l-92.0731,0a1.88476,1.88476 0 0 1 -0.34417,-0.02729l43.54727,-75.42421a3.04826,3.04826 0 0 1 5.307,0l29.224,50.61377l1.39957,2.42155l12.93943,22.41618z"
                                data-name="Path 63"
                                id="efdddea5-7f44-48b8-bec9-83339a7f085f"
                            />
                            <path
                                fill="#6c63ff"
                                d="m508.33475,92.24825l-79.63353,0l15.4306,-22.41441l1.11,-1.61523l20.10819,-29.20986a4.0685,4.0685 0 0 1 6.04372,-0.36091a3.63814,3.63814 0 0 1 0.28961,0.36091l36.65141,53.2395z"
                                data-name="Path 65"
                                id="f8d22fd6-a75d-4da9-80c1-fba8d7f50740"
                            />
                        </g>
                        <path
                            id="svg_15"
                            fill="#f1f1f1"
                            d="m376.97458,265.23485c8.72718,4.362 14.04042,10.123 14.04042,16.4418c0,13.612 -24.63124,24.6467 -55.015,24.6467c-13.21,0 -25.32924,-2.08756 -34.81287,-5.56414c10.07289,5.03473 24.69484,8.20486 40.97454,8.20486c30.38374,0 55.015,-11.03469 55.015,-24.6467c0,-7.69393 -7.87272,-14.56269 -20.20209,-19.08252z"
                        />
                        <path
                            id="svg_16"
                            fill="#f1f1f1"
                            d="m396.38697,274.58487c9.8476,4.922 15.843,11.42264 15.843,18.55263c0,15.35955 -27.79345,27.8109 -62.07792,27.8109c-14.906,0 -28.58106,-2.35556 -39.28223,-6.27847c11.36608,5.68109 27.86523,9.25821 46.23495,9.25821c34.28447,0 62.07792,-12.45135 62.07792,-27.8109c-0.00003,-8.6817 -8.88347,-16.43224 -22.79572,-21.53237z"
                        />
                        <path
                            id="svg_17"
                            fill="#f1f1f1"
                            d="m369.54546,269.35329c6.14852,3.07317 9.89184,7.13194 9.89184,11.58368c0,9.59 -17.35335,17.36425 -38.75949,17.36425a72.80142,72.80142 0 0 1 -24.52658,-3.92008c7.09662,3.5471 17.39817,5.78054 28.86764,5.78054c21.40614,0 38.7595,-7.77423 38.7595,-17.36426c0,-5.42057 -5.54655,-10.25979 -14.23291,-13.44413z"
                        />
                        <path id="svg_18" fill="#3f3d56" d="m283.15492,267.59281s1.3511,19.74867 40.08163,19.74867s50.29379,-19.74867 50.29379,-19.74867l-90.37542,0z" />
                        <path
                            id="svg_19"
                            fill="#3f3d56"
                            d="m338.12869,215.77736a27.18737,27.18737 0 0 0 -19.584,-5.357a27.28234,27.28234 0 0 1 -3.30355,53.62914a27.28791,27.28791 0 0 0 22.88759,-48.27214l-0.00004,0z"
                        />
                        <rect id="svg_20" fill="#3f3d56" height="62.85804" width="2.64072" y="206.85629" x="322.79645" />
                        <path
                            id="svg_21"
                            fill="#cbcbcb"
                            d="m498.9836,160.15271l-0.01419,-0.02423l-0.03567,-1.53542l8.27287,-12.01131l-8.263,10.86207l-0.02965,0.32455l-0.28281,-12.277l7.1455,-12.453l-7.1657,10.29623l0.07478,-25.43486l-0.00043,-0.08467l-0.00215,0.08328l-0.4745,20.04608l-6.5124,-8.1427l6.49134,9.86965l-0.14227,10.98156l-5.99276,-10.71755l5.97084,12.332l-0.07951,6.10629l-0.21877,16.91726l-0.0159,1.26411q0.82779,0.00628 1.63884,-0.02756l-0.37479,-16.24935l0.01033,-0.12543z"
                        />
                        <path
                            id="svg_22"
                            fill="#cbcbcb"
                            d="m459.37282,165.43415l-0.01419,-0.02423l-0.03567,-1.53542l8.27288,-12.01132l-8.263,10.86208l-0.02966,0.32455l-0.28281,-12.277l7.1455,-12.453l-7.16573,10.29619l0.07478,-25.43486l-0.00043,-0.08467l-0.00215,0.08327l-0.4745,20.04608l-6.5124,-8.1427l6.49134,9.86966l-0.14227,10.98156l-5.99276,-10.71755l5.97084,12.332l-0.07951,6.10628l-0.21877,16.91727l-0.0159,1.26411q0.82781,0.00628 1.63884,-0.02756l-0.37479,-16.24935l0.01036,-0.12539z"
                        />
                        <path
                            id="svg_23"
                            fill="#cbcbcb"
                            d="m478.73809,148.7096l-0.01419,-0.02423l-0.03567,-1.53542l8.27288,-12.01132l-8.263,10.86207l-0.02965,0.32456l-0.28281,-12.277l7.1455,-12.453l-7.1657,10.29623l0.07478,-25.43486l-0.00043,-0.08467l-0.00215,0.08327l-0.4745,20.04608l-6.5124,-8.1427l6.49134,9.86966l-0.14227,10.98155l-5.99276,-10.71755l5.97084,12.332l-0.07951,6.10628l-0.21877,16.91727l-0.0159,1.26411q0.82781,0.00628 1.63884,-0.02757l-0.37479,-16.24934l0.01032,-0.12542z"
                        />
                        <circle id="svg_24" fill="#6c63ff" r="10.56287" cy="431.43713" cx="180.58986" />
                        <polygon
                            id="svg_25"
                            fill="#ffb7b7"
                            points="582.3989868164062,625.4190063476562 572.6199951171875,629.052001953125 553.9520263671875,593.06201171875 568.385009765625,587.7000122070312 582.3989868164062,625.4190063476562 "
                        />
                        <path
                            id="svg_26"
                            fill="#2f2e41"
                            d="m588.41466,633.971l-31.53152,11.7152l-0.14819,-0.39882a13.09338,13.09338 0 0 1 7.71251,-16.83295l0.00078,-0.00029l19.25843,-7.15522l4.70799,12.67208z"
                        />
                        <polygon
                            id="svg_27"
                            fill="#ffb7b7"
                            points="486.1619873046875,635.573974609375 475.72998046875,635.572998046875 470.76702880859375,595.3350219726562 486.16400146484375,595.3359985351562 486.1619873046875,635.573974609375 "
                        />
                        <path
                            id="svg_28"
                            fill="#2f2e41"
                            d="m487.97188,645.6862l-33.63758,-0.00125l0,-0.42546a13.09339,13.09339 0 0 1 13.09268,-13.09249l0.00084,0l20.54468,0.00083l-0.00062,13.51837z"
                        />
                        <path
                            id="svg_29"
                            fill="#2f2e41"
                            d="m533.92393,356.50462l-3.40369,-6.80737l-28.93133,14.46567l0.85092,5.95645l-5.531,7.23283s-9.36014,5.10553 -7.65829,22.124l1.70184,16.16751l2.1273,20.84758l-14.89111,51.48071l-7.6583,68.07372l-5.531,54.88444l26.804,-1.27638l24.67677,-89.34678l43.397,96.15413l29.78225,-7.65829l-40.84423,-95.30322l-5.10553,-39.99331s3.40368,-21.273 -12.76383,-35.73871l2.55277,-7.65829l0,-9.43719l8.50921,-45.02179l-8.08375,-19.14571z"
                        />
                        <rect transform="rotate(-74.2488 -295.014 1131.59)" id="svg_30" opacity="0.2" height="0.99996" width="68.9611" y="1745.21008" x="513.3311" />
                        <rect id="svg_31" fill="#3f3d56" height="4.25461" width="41.69516" y="436.49125" x="491.37786" />
                        <ellipse id="svg_32" fill="#3f3d56" ry="4.25461" rx="1.70184" cy="439.04402" cx="491.37786" />
                        <circle transform="rotate(-28.6632 -432.713 325.223)" id="svg_33" fill="#ffb7b7" r="22.68164" cy="777.82038" cx="394.45338" />
                        <circle id="svg_34" fill="#2f2e41" r="20.06577" cy="297.43468" cx="544.88911" />
                        <path id="svg_35" fill="#2f2e41" d="m570.35292,295.28541a20.06687,20.06687 0 1 1 -39.14289,8.22881a20.06708,20.06708 0 0 0 39.14289,-8.22881z" />
                        <path
                            stroke="null"
                            id="svg_36"
                            fill="#2f2e41"
                            d="m491.08114,319.30036a23.72427,23.72427 0 1 0 14.157,-19.09959c-3.96261,-3.19569 -8.8755,-2.20524 -12.86957,1.16743c-4.51668,3.81351 -5.85708,6.4332 -9.36,12.70453c3.44438,0.48375 4.62807,4.74387 8.07257,5.22763z"
                        />
                        <path
                            id="svg_37"
                            fill="#6c63ff"
                            d="m574.45519,387.51133c-0.25386,6.72194 -0.75692,19.95277 -0.75692,20.62813c0,0.71163 -10.03072,21.48028 -14.364,30.41866l0,0.00454c-0.3083,0.63 -0.58473,1.20114 -0.82951,1.70428a4.0285,4.0285 0 0 1 -3.70315,2.27538l-18.93734,-0.34a4.03611,4.03611 0 0 1 -3.96608,-3.93434l-2.11229,-83.31478a2.05975,2.05975 0 0 1 2.05785,-2.11221l24.4219,0a5.4908,5.4908 0 0 1 4.94056,3.10032l11.72139,24.24972a15.4994,15.4994 0 0 1 1.52756,7.32025l0.00003,0.00005z"
                        />
                        <path
                            id="svg_38"
                            fill="#6c63ff"
                            d="m531.56867,432.55075a54.23154,54.23154 0 0 1 -12.93943,-10.93548a60.00786,60.00786 0 0 1 -14.95544,-34.88819c-0.96286,-11.07247 1.23419,-19.30274 6.53,-24.46263c6.73159,-6.55907 15.8944,-5.60606 16.28116,-5.562l0.41022,0.04648l6.20761,5.25261l-1.75662,2.076l-5.5545,-4.7c-1.70019,-0.085 -8.64149,-0.10336 -13.712,4.85623c-4.66723,4.56519 -6.58376,12.05381 -5.69648,22.25783a57.30793,57.30793 0 0 0 14.20782,33.2369a52.6568,52.6568 0 0 0 12.2903,10.44039l-1.31264,2.38186z"
                        />
                        <rect id="svg_40" fill="#3f3d56" height="52.6946" width="0.90663" y="388.42153" x="525.2416" />
                        <path
                            id="svg_41"
                            fill="#3f3d56"
                            d="m574.45519,387.51133c-0.25386,6.72194 -0.75692,19.95277 -0.75692,20.62813c0,0.71163 -10.03072,21.48028 -14.364,30.41866l8.07712,-46.89939a10.33774,10.33774 0 0 1 6.71289,-7.973a15.21462,15.21462 0 0 1 0.33091,3.8256z"
                        />
                        <path
                            id="svg_42"
                            fill="#ffb7b7"
                            d="m524.82945,485.79963a7.979,7.979 0 0 0 -2.5951,-11.95656l1.64153,-18.1595l-10.79217,-3.68908l-1.958,25.67728a8.02231,8.02231 0 0 0 13.70373,8.12786l0.00001,0z"
                        />
                        <path
                            id="svg_43"
                            fill="#cbcbcb"
                            d="m526.23946,468.228l-19.12309,-0.69345l0.809,-92.22237a12.44854,12.44854 0 0 1 8.43338,-11.8485a11.30933,11.30933 0 0 1 7.11255,-0.00623a12.45,12.45 0 0 1 8.42155,12.74221l-5.65339,92.02834z"
                        />
                        <path id="svg_44" fill="#cbcbcb" d="m694.00073,646l-381,0a1,1 0 0 1 0,-2l381,0a1,1 0 0 1 0,2z" />
                    </g>
                </svg>
            </div>
        );
    }
}
