
    import { css, injectGlobal }  from 'styled-components';
    
    export const global__webkit_keyframes =   () => injectGlobal`@-webkit-keyframes indeterminate { left: -35%;
right: 100%;
left: 100%;
right: -90%;
left: 100%;
right: -90%; }
@-webkit-keyframes indeterminate-short { left: -200%;
right: 100%;
left: 107%;
right: -8%;
left: 107%;
right: -8%; }
@-webkit-keyframes container-rotate { -webkit-transform: rotate(360deg); }
@-webkit-keyframes fill-unfill-rotate { -webkit-transform: rotate(135deg);
-webkit-transform: rotate(270deg);
-webkit-transform: rotate(405deg);
-webkit-transform: rotate(540deg);
-webkit-transform: rotate(675deg);
-webkit-transform: rotate(810deg);
-webkit-transform: rotate(945deg);
-webkit-transform: rotate(1080deg); }
@-webkit-keyframes blue-fade-in-out { opacity: 1;
opacity: 1;
opacity: 0;
opacity: 0;
opacity: 1;
opacity: 1; }
@-webkit-keyframes red-fade-in-out { opacity: 0;
opacity: 0;
opacity: 1;
opacity: 1;
opacity: 0; }
@-webkit-keyframes yellow-fade-in-out { opacity: 0;
opacity: 0;
opacity: 1;
opacity: 1;
opacity: 0; }
@-webkit-keyframes green-fade-in-out { opacity: 0;
opacity: 0;
opacity: 1;
opacity: 1;
opacity: 0; }
@-webkit-keyframes left-spin { -webkit-transform: rotate(130deg);
-webkit-transform: rotate(-5deg);
-webkit-transform: rotate(130deg); }
@-webkit-keyframes right-spin { -webkit-transform: rotate(-130deg);
-webkit-transform: rotate(5deg);
-webkit-transform: rotate(-130deg); }
@-webkit-keyframes fade-out { opacity: 1;
opacity: 0; }
@-webkit-keyframes pulse-animation { opacity: 1;
-webkit-transform: scale(1);
transform: scale(1);
opacity: 0;
-webkit-transform: scale(1.5);
transform: scale(1.5);
opacity: 0;
-webkit-transform: scale(1.5);
transform: scale(1.5); }`;
export const global_keyframes =   () => injectGlobal`@keyframes indeterminate { left: -35%;
right: 100%;
left: 100%;
right: -90%;
left: 100%;
right: -90%; }
@keyframes indeterminate-short { left: -200%;
right: 100%;
left: 107%;
right: -8%;
left: 107%;
right: -8%; }
@keyframes container-rotate { -webkit-transform: rotate(360deg);
transform: rotate(360deg); }
@keyframes fill-unfill-rotate { -webkit-transform: rotate(135deg);
transform: rotate(135deg);
-webkit-transform: rotate(270deg);
transform: rotate(270deg);
-webkit-transform: rotate(405deg);
transform: rotate(405deg);
-webkit-transform: rotate(540deg);
transform: rotate(540deg);
-webkit-transform: rotate(675deg);
transform: rotate(675deg);
-webkit-transform: rotate(810deg);
transform: rotate(810deg);
-webkit-transform: rotate(945deg);
transform: rotate(945deg);
-webkit-transform: rotate(1080deg);
transform: rotate(1080deg); }
@keyframes blue-fade-in-out { opacity: 1;
opacity: 1;
opacity: 0;
opacity: 0;
opacity: 1;
opacity: 1; }
@keyframes red-fade-in-out { opacity: 0;
opacity: 0;
opacity: 1;
opacity: 1;
opacity: 0; }
@keyframes yellow-fade-in-out { opacity: 0;
opacity: 0;
opacity: 1;
opacity: 1;
opacity: 0; }
@keyframes green-fade-in-out { opacity: 0;
opacity: 0;
opacity: 1;
opacity: 1;
opacity: 0; }
@keyframes left-spin { -webkit-transform: rotate(130deg);
transform: rotate(130deg);
-webkit-transform: rotate(-5deg);
transform: rotate(-5deg);
-webkit-transform: rotate(130deg);
transform: rotate(130deg); }
@keyframes right-spin { -webkit-transform: rotate(-130deg);
transform: rotate(-130deg);
-webkit-transform: rotate(5deg);
transform: rotate(5deg);
-webkit-transform: rotate(-130deg);
transform: rotate(-130deg); }
@keyframes fade-out { opacity: 1;
opacity: 0; }
@keyframes pulse-animation { opacity: 1;
-webkit-transform: scale(1);
transform: scale(1);
opacity: 0;
-webkit-transform: scale(1.5);
transform: scale(1.5);
opacity: 0;
-webkit-transform: scale(1.5);
transform: scale(1.5); }`;
export const global_font_face =   () => injectGlobal`@font-face  { font-family: "Roboto";
src: local(Roboto Thin), url("../fonts/roboto/Roboto-Thin.woff2") format("woff2"), url("../fonts/roboto/Roboto-Thin.woff") format("woff");
font-weight: 100; }
@font-face  { font-family: "Roboto";
src: local(Roboto Light), url("../fonts/roboto/Roboto-Light.woff2") format("woff2"), url("../fonts/roboto/Roboto-Light.woff") format("woff");
font-weight: 300; }
@font-face  { font-family: "Roboto";
src: local(Roboto Regular), url("../fonts/roboto/Roboto-Regular.woff2") format("woff2"), url("../fonts/roboto/Roboto-Regular.woff") format("woff");
font-weight: 400; }
@font-face  { font-family: "Roboto";
src: local(Roboto Medium), url("../fonts/roboto/Roboto-Medium.woff2") format("woff2"), url("../fonts/roboto/Roboto-Medium.woff") format("woff");
font-weight: 500; }
@font-face  { font-family: "Roboto";
src: local(Roboto Bold), url("../fonts/roboto/Roboto-Bold.woff2") format("woff2"), url("../fonts/roboto/Roboto-Bold.woff") format("woff");
font-weight: 700; }`;
export const materialize_red = css`background-color: #e51c23;`;;
export const materialize_red_text = css`color: #e51c23;`;;
export const materialize_red_and_lighten_5 = css`background-color: #fdeaeb;`;;
export const materialize_red_text_and_text_lighten_5 = css`color: #fdeaeb;`;;
export const materialize_red_and_lighten_4 = css`background-color: #f8c1c3;`;;
export const materialize_red_text_and_text_lighten_4 = css`color: #f8c1c3;`;;
export const materialize_red_and_lighten_3 = css`background-color: #f3989b;`;;
export const materialize_red_text_and_text_lighten_3 = css`color: #f3989b;`;;
export const materialize_red_and_lighten_2 = css`background-color: #ee6e73;`;;
export const materialize_red_text_and_text_lighten_2 = css`color: #ee6e73;`;;
export const materialize_red_and_lighten_1 = css`background-color: #ea454b;`;;
export const materialize_red_text_and_text_lighten_1 = css`color: #ea454b;`;;
export const materialize_red_and_darken_1 = css`background-color: #d0181e;`;;
export const materialize_red_text_and_text_darken_1 = css`color: #d0181e;`;;
export const materialize_red_and_darken_2 = css`background-color: #b9151b;`;;
export const materialize_red_text_and_text_darken_2 = css`color: #b9151b;`;;
export const materialize_red_and_darken_3 = css`background-color: #a21318;`;;
export const materialize_red_text_and_text_darken_3 = css`color: #a21318;`;;
export const materialize_red_and_darken_4 = css`background-color: #8b1014;`;;
export const materialize_red_text_and_text_darken_4 = css`color: #8b1014;`;;
export const red = css`background-color: #F44336;`;;
export const red_text = css`color: #F44336;`;;
export const red_and_lighten_5 = css`background-color: #FFEBEE;`;;
export const red_text_and_text_lighten_5 = css`color: #FFEBEE;`;;
export const red_and_lighten_4 = css`background-color: #FFCDD2;`;;
export const red_text_and_text_lighten_4 = css`color: #FFCDD2;`;;
export const red_and_lighten_3 = css`background-color: #EF9A9A;`;;
export const red_text_and_text_lighten_3 = css`color: #EF9A9A;`;;
export const red_and_lighten_2 = css`background-color: #E57373;`;;
export const red_text_and_text_lighten_2 = css`color: #E57373;`;;
export const red_and_lighten_1 = css`background-color: #EF5350;`;;
export const red_text_and_text_lighten_1 = css`color: #EF5350;`;;
export const red_and_darken_1 = css`background-color: #E53935;`;;
export const red_text_and_text_darken_1 = css`color: #E53935;`;;
export const red_and_darken_2 = css`background-color: #D32F2F;`;;
export const red_text_and_text_darken_2 = css`color: #D32F2F;`;;
export const red_and_darken_3 = css`background-color: #C62828;`;;
export const red_text_and_text_darken_3 = css`color: #C62828;`;;
export const red_and_darken_4 = css`background-color: #B71C1C;`;;
export const red_text_and_text_darken_4 = css`color: #B71C1C;`;;
export const red_and_accent_1 = css`background-color: #FF8A80;`;;
export const red_text_and_text_accent_1 = css`color: #FF8A80;`;;
export const red_and_accent_2 = css`background-color: #FF5252;`;;
export const red_text_and_text_accent_2 = css`color: #FF5252;`;;
export const red_and_accent_3 = css`background-color: #FF1744;`;;
export const red_text_and_text_accent_3 = css`color: #FF1744;`;;
export const red_and_accent_4 = css`background-color: #D50000;`;;
export const red_text_and_text_accent_4 = css`color: #D50000;`;;
export const pink = css`background-color: #e91e63;`;;
export const pink_text = css`color: #e91e63;`;;
export const pink_and_lighten_5 = css`background-color: #fce4ec;`;;
export const pink_text_and_text_lighten_5 = css`color: #fce4ec;`;;
export const pink_and_lighten_4 = css`background-color: #f8bbd0;`;;
export const pink_text_and_text_lighten_4 = css`color: #f8bbd0;`;;
export const pink_and_lighten_3 = css`background-color: #f48fb1;`;;
export const pink_text_and_text_lighten_3 = css`color: #f48fb1;`;;
export const pink_and_lighten_2 = css`background-color: #f06292;`;;
export const pink_text_and_text_lighten_2 = css`color: #f06292;`;;
export const pink_and_lighten_1 = css`background-color: #ec407a;`;;
export const pink_text_and_text_lighten_1 = css`color: #ec407a;`;;
export const pink_and_darken_1 = css`background-color: #d81b60;`;;
export const pink_text_and_text_darken_1 = css`color: #d81b60;`;;
export const pink_and_darken_2 = css`background-color: #c2185b;`;;
export const pink_text_and_text_darken_2 = css`color: #c2185b;`;;
export const pink_and_darken_3 = css`background-color: #ad1457;`;;
export const pink_text_and_text_darken_3 = css`color: #ad1457;`;;
export const pink_and_darken_4 = css`background-color: #880e4f;`;;
export const pink_text_and_text_darken_4 = css`color: #880e4f;`;;
export const pink_and_accent_1 = css`background-color: #ff80ab;`;;
export const pink_text_and_text_accent_1 = css`color: #ff80ab;`;;
export const pink_and_accent_2 = css`background-color: #ff4081;`;;
export const pink_text_and_text_accent_2 = css`color: #ff4081;`;;
export const pink_and_accent_3 = css`background-color: #f50057;`;;
export const pink_text_and_text_accent_3 = css`color: #f50057;`;;
export const pink_and_accent_4 = css`background-color: #c51162;`;;
export const pink_text_and_text_accent_4 = css`color: #c51162;`;;
export const purple = css`background-color: #9c27b0;`;;
export const purple_text = css`color: #9c27b0;`;;
export const purple_and_lighten_5 = css`background-color: #f3e5f5;`;;
export const purple_text_and_text_lighten_5 = css`color: #f3e5f5;`;;
export const purple_and_lighten_4 = css`background-color: #e1bee7;`;;
export const purple_text_and_text_lighten_4 = css`color: #e1bee7;`;;
export const purple_and_lighten_3 = css`background-color: #ce93d8;`;;
export const purple_text_and_text_lighten_3 = css`color: #ce93d8;`;;
export const purple_and_lighten_2 = css`background-color: #ba68c8;`;;
export const purple_text_and_text_lighten_2 = css`color: #ba68c8;`;;
export const purple_and_lighten_1 = css`background-color: #ab47bc;`;;
export const purple_text_and_text_lighten_1 = css`color: #ab47bc;`;;
export const purple_and_darken_1 = css`background-color: #8e24aa;`;;
export const purple_text_and_text_darken_1 = css`color: #8e24aa;`;;
export const purple_and_darken_2 = css`background-color: #7b1fa2;`;;
export const purple_text_and_text_darken_2 = css`color: #7b1fa2;`;;
export const purple_and_darken_3 = css`background-color: #6a1b9a;`;;
export const purple_text_and_text_darken_3 = css`color: #6a1b9a;`;;
export const purple_and_darken_4 = css`background-color: #4a148c;`;;
export const purple_text_and_text_darken_4 = css`color: #4a148c;`;;
export const purple_and_accent_1 = css`background-color: #ea80fc;`;;
export const purple_text_and_text_accent_1 = css`color: #ea80fc;`;;
export const purple_and_accent_2 = css`background-color: #e040fb;`;;
export const purple_text_and_text_accent_2 = css`color: #e040fb;`;;
export const purple_and_accent_3 = css`background-color: #d500f9;`;;
export const purple_text_and_text_accent_3 = css`color: #d500f9;`;;
export const purple_and_accent_4 = css`background-color: #aa00ff;`;;
export const purple_text_and_text_accent_4 = css`color: #aa00ff;`;;
export const deep_purple = css`background-color: #673ab7;`;;
export const deep_purple_text = css`color: #673ab7;`;;
export const deep_purple_and_lighten_5 = css`background-color: #ede7f6;`;;
export const deep_purple_text_and_text_lighten_5 = css`color: #ede7f6;`;;
export const deep_purple_and_lighten_4 = css`background-color: #d1c4e9;`;;
export const deep_purple_text_and_text_lighten_4 = css`color: #d1c4e9;`;;
export const deep_purple_and_lighten_3 = css`background-color: #b39ddb;`;;
export const deep_purple_text_and_text_lighten_3 = css`color: #b39ddb;`;;
export const deep_purple_and_lighten_2 = css`background-color: #9575cd;`;;
export const deep_purple_text_and_text_lighten_2 = css`color: #9575cd;`;;
export const deep_purple_and_lighten_1 = css`background-color: #7e57c2;`;;
export const deep_purple_text_and_text_lighten_1 = css`color: #7e57c2;`;;
export const deep_purple_and_darken_1 = css`background-color: #5e35b1;`;;
export const deep_purple_text_and_text_darken_1 = css`color: #5e35b1;`;;
export const deep_purple_and_darken_2 = css`background-color: #512da8;`;;
export const deep_purple_text_and_text_darken_2 = css`color: #512da8;`;;
export const deep_purple_and_darken_3 = css`background-color: #4527a0;`;;
export const deep_purple_text_and_text_darken_3 = css`color: #4527a0;`;;
export const deep_purple_and_darken_4 = css`background-color: #311b92;`;;
export const deep_purple_text_and_text_darken_4 = css`color: #311b92;`;;
export const deep_purple_and_accent_1 = css`background-color: #b388ff;`;;
export const deep_purple_text_and_text_accent_1 = css`color: #b388ff;`;;
export const deep_purple_and_accent_2 = css`background-color: #7c4dff;`;;
export const deep_purple_text_and_text_accent_2 = css`color: #7c4dff;`;;
export const deep_purple_and_accent_3 = css`background-color: #651fff;`;;
export const deep_purple_text_and_text_accent_3 = css`color: #651fff;`;;
export const deep_purple_and_accent_4 = css`background-color: #6200ea;`;;
export const deep_purple_text_and_text_accent_4 = css`color: #6200ea;`;;
export const indigo = css`background-color: #3f51b5;`;;
export const indigo_text = css`color: #3f51b5;`;;
export const indigo_and_lighten_5 = css`background-color: #e8eaf6;`;;
export const indigo_text_and_text_lighten_5 = css`color: #e8eaf6;`;;
export const indigo_and_lighten_4 = css`background-color: #c5cae9;`;;
export const indigo_text_and_text_lighten_4 = css`color: #c5cae9;`;;
export const indigo_and_lighten_3 = css`background-color: #9fa8da;`;;
export const indigo_text_and_text_lighten_3 = css`color: #9fa8da;`;;
export const indigo_and_lighten_2 = css`background-color: #7986cb;`;;
export const indigo_text_and_text_lighten_2 = css`color: #7986cb;`;;
export const indigo_and_lighten_1 = css`background-color: #5c6bc0;`;;
export const indigo_text_and_text_lighten_1 = css`color: #5c6bc0;`;;
export const indigo_and_darken_1 = css`background-color: #3949ab;`;;
export const indigo_text_and_text_darken_1 = css`color: #3949ab;`;;
export const indigo_and_darken_2 = css`background-color: #303f9f;`;;
export const indigo_text_and_text_darken_2 = css`color: #303f9f;`;;
export const indigo_and_darken_3 = css`background-color: #283593;`;;
export const indigo_text_and_text_darken_3 = css`color: #283593;`;;
export const indigo_and_darken_4 = css`background-color: #1a237e;`;;
export const indigo_text_and_text_darken_4 = css`color: #1a237e;`;;
export const indigo_and_accent_1 = css`background-color: #8c9eff;`;;
export const indigo_text_and_text_accent_1 = css`color: #8c9eff;`;;
export const indigo_and_accent_2 = css`background-color: #536dfe;`;;
export const indigo_text_and_text_accent_2 = css`color: #536dfe;`;;
export const indigo_and_accent_3 = css`background-color: #3d5afe;`;;
export const indigo_text_and_text_accent_3 = css`color: #3d5afe;`;;
export const indigo_and_accent_4 = css`background-color: #304ffe;`;;
export const indigo_text_and_text_accent_4 = css`color: #304ffe;`;;
export const blue = css`background-color: #2196F3;`;;
export const blue_text = css`color: #2196F3;`;;
export const blue_and_lighten_5 = css`background-color: #E3F2FD;`;;
export const blue_text_and_text_lighten_5 = css`color: #E3F2FD;`;;
export const blue_and_lighten_4 = css`background-color: #BBDEFB;`;;
export const blue_text_and_text_lighten_4 = css`color: #BBDEFB;`;;
export const blue_and_lighten_3 = css`background-color: #90CAF9;`;;
export const blue_text_and_text_lighten_3 = css`color: #90CAF9;`;;
export const blue_and_lighten_2 = css`background-color: #64B5F6;`;;
export const blue_text_and_text_lighten_2 = css`color: #64B5F6;`;;
export const blue_and_lighten_1 = css`background-color: #42A5F5;`;;
export const blue_text_and_text_lighten_1 = css`color: #42A5F5;`;;
export const blue_and_darken_1 = css`background-color: #1E88E5;`;;
export const blue_text_and_text_darken_1 = css`color: #1E88E5;`;;
export const blue_and_darken_2 = css`background-color: #1976D2;`;;
export const blue_text_and_text_darken_2 = css`color: #1976D2;`;;
export const blue_and_darken_3 = css`background-color: #1565C0;`;;
export const blue_text_and_text_darken_3 = css`color: #1565C0;`;;
export const blue_and_darken_4 = css`background-color: #0D47A1;`;;
export const blue_text_and_text_darken_4 = css`color: #0D47A1;`;;
export const blue_and_accent_1 = css`background-color: #82B1FF;`;;
export const blue_text_and_text_accent_1 = css`color: #82B1FF;`;;
export const blue_and_accent_2 = css`background-color: #448AFF;`;;
export const blue_text_and_text_accent_2 = css`color: #448AFF;`;;
export const blue_and_accent_3 = css`background-color: #2979FF;`;;
export const blue_text_and_text_accent_3 = css`color: #2979FF;`;;
export const blue_and_accent_4 = css`background-color: #2962FF;`;;
export const blue_text_and_text_accent_4 = css`color: #2962FF;`;;
export const light_blue = css`background-color: #03a9f4;`;;
export const light_blue_text = css`color: #03a9f4;`;;
export const light_blue_and_lighten_5 = css`background-color: #e1f5fe;`;;
export const light_blue_text_and_text_lighten_5 = css`color: #e1f5fe;`;;
export const light_blue_and_lighten_4 = css`background-color: #b3e5fc;`;;
export const light_blue_text_and_text_lighten_4 = css`color: #b3e5fc;`;;
export const light_blue_and_lighten_3 = css`background-color: #81d4fa;`;;
export const light_blue_text_and_text_lighten_3 = css`color: #81d4fa;`;;
export const light_blue_and_lighten_2 = css`background-color: #4fc3f7;`;;
export const light_blue_text_and_text_lighten_2 = css`color: #4fc3f7;`;;
export const light_blue_and_lighten_1 = css`background-color: #29b6f6;`;;
export const light_blue_text_and_text_lighten_1 = css`color: #29b6f6;`;;
export const light_blue_and_darken_1 = css`background-color: #039be5;`;;
export const light_blue_text_and_text_darken_1 = css`color: #039be5;`;;
export const light_blue_and_darken_2 = css`background-color: #0288d1;`;;
export const light_blue_text_and_text_darken_2 = css`color: #0288d1;`;;
export const light_blue_and_darken_3 = css`background-color: #0277bd;`;;
export const light_blue_text_and_text_darken_3 = css`color: #0277bd;`;;
export const light_blue_and_darken_4 = css`background-color: #01579b;`;;
export const light_blue_text_and_text_darken_4 = css`color: #01579b;`;;
export const light_blue_and_accent_1 = css`background-color: #80d8ff;`;;
export const light_blue_text_and_text_accent_1 = css`color: #80d8ff;`;;
export const light_blue_and_accent_2 = css`background-color: #40c4ff;`;;
export const light_blue_text_and_text_accent_2 = css`color: #40c4ff;`;;
export const light_blue_and_accent_3 = css`background-color: #00b0ff;`;;
export const light_blue_text_and_text_accent_3 = css`color: #00b0ff;`;;
export const light_blue_and_accent_4 = css`background-color: #0091ea;`;;
export const light_blue_text_and_text_accent_4 = css`color: #0091ea;`;;
export const cyan = css`background-color: #00bcd4;`;;
export const cyan_text = css`color: #00bcd4;`;;
export const cyan_and_lighten_5 = css`background-color: #e0f7fa;`;;
export const cyan_text_and_text_lighten_5 = css`color: #e0f7fa;`;;
export const cyan_and_lighten_4 = css`background-color: #b2ebf2;`;;
export const cyan_text_and_text_lighten_4 = css`color: #b2ebf2;`;;
export const cyan_and_lighten_3 = css`background-color: #80deea;`;;
export const cyan_text_and_text_lighten_3 = css`color: #80deea;`;;
export const cyan_and_lighten_2 = css`background-color: #4dd0e1;`;;
export const cyan_text_and_text_lighten_2 = css`color: #4dd0e1;`;;
export const cyan_and_lighten_1 = css`background-color: #26c6da;`;;
export const cyan_text_and_text_lighten_1 = css`color: #26c6da;`;;
export const cyan_and_darken_1 = css`background-color: #00acc1;`;;
export const cyan_text_and_text_darken_1 = css`color: #00acc1;`;;
export const cyan_and_darken_2 = css`background-color: #0097a7;`;;
export const cyan_text_and_text_darken_2 = css`color: #0097a7;`;;
export const cyan_and_darken_3 = css`background-color: #00838f;`;;
export const cyan_text_and_text_darken_3 = css`color: #00838f;`;;
export const cyan_and_darken_4 = css`background-color: #006064;`;;
export const cyan_text_and_text_darken_4 = css`color: #006064;`;;
export const cyan_and_accent_1 = css`background-color: #84ffff;`;;
export const cyan_text_and_text_accent_1 = css`color: #84ffff;`;;
export const cyan_and_accent_2 = css`background-color: #18ffff;`;;
export const cyan_text_and_text_accent_2 = css`color: #18ffff;`;;
export const cyan_and_accent_3 = css`background-color: #00e5ff;`;;
export const cyan_text_and_text_accent_3 = css`color: #00e5ff;`;;
export const cyan_and_accent_4 = css`background-color: #00b8d4;`;;
export const cyan_text_and_text_accent_4 = css`color: #00b8d4;`;;
export const teal = css`background-color: #009688;`;;
export const teal_text = css`color: #009688;`;;
export const teal_and_lighten_5 = css`background-color: #e0f2f1;`;;
export const teal_text_and_text_lighten_5 = css`color: #e0f2f1;`;;
export const teal_and_lighten_4 = css`background-color: #b2dfdb;`;;
export const teal_text_and_text_lighten_4 = css`color: #b2dfdb;`;;
export const teal_and_lighten_3 = css`background-color: #80cbc4;`;;
export const teal_text_and_text_lighten_3 = css`color: #80cbc4;`;;
export const teal_and_lighten_2 = css`background-color: #4db6ac;`;;
export const teal_text_and_text_lighten_2 = css`color: #4db6ac;`;;
export const teal_and_lighten_1 = css`background-color: #26a69a;`;;
export const teal_text_and_text_lighten_1 = css`color: #26a69a;`;;
export const teal_and_darken_1 = css`background-color: #00897b;`;;
export const teal_text_and_text_darken_1 = css`color: #00897b;`;;
export const teal_and_darken_2 = css`background-color: #00796b;`;;
export const teal_text_and_text_darken_2 = css`color: #00796b;`;;
export const teal_and_darken_3 = css`background-color: #00695c;`;;
export const teal_text_and_text_darken_3 = css`color: #00695c;`;;
export const teal_and_darken_4 = css`background-color: #004d40;`;;
export const teal_text_and_text_darken_4 = css`color: #004d40;`;;
export const teal_and_accent_1 = css`background-color: #a7ffeb;`;;
export const teal_text_and_text_accent_1 = css`color: #a7ffeb;`;;
export const teal_and_accent_2 = css`background-color: #64ffda;`;;
export const teal_text_and_text_accent_2 = css`color: #64ffda;`;;
export const teal_and_accent_3 = css`background-color: #1de9b6;`;;
export const teal_text_and_text_accent_3 = css`color: #1de9b6;`;;
export const teal_and_accent_4 = css`background-color: #00bfa5;`;;
export const teal_text_and_text_accent_4 = css`color: #00bfa5;`;;
export const green = css`background-color: #4CAF50;`;;
export const green_text = css`color: #4CAF50;`;;
export const green_and_lighten_5 = css`background-color: #E8F5E9;`;;
export const green_text_and_text_lighten_5 = css`color: #E8F5E9;`;;
export const green_and_lighten_4 = css`background-color: #C8E6C9;`;;
export const green_text_and_text_lighten_4 = css`color: #C8E6C9;`;;
export const green_and_lighten_3 = css`background-color: #A5D6A7;`;;
export const green_text_and_text_lighten_3 = css`color: #A5D6A7;`;;
export const green_and_lighten_2 = css`background-color: #81C784;`;;
export const green_text_and_text_lighten_2 = css`color: #81C784;`;;
export const green_and_lighten_1 = css`background-color: #66BB6A;`;;
export const green_text_and_text_lighten_1 = css`color: #66BB6A;`;;
export const green_and_darken_1 = css`background-color: #43A047;`;;
export const green_text_and_text_darken_1 = css`color: #43A047;`;;
export const green_and_darken_2 = css`background-color: #388E3C;`;;
export const green_text_and_text_darken_2 = css`color: #388E3C;`;;
export const green_and_darken_3 = css`background-color: #2E7D32;`;;
export const green_text_and_text_darken_3 = css`color: #2E7D32;`;;
export const green_and_darken_4 = css`background-color: #1B5E20;`;;
export const green_text_and_text_darken_4 = css`color: #1B5E20;`;;
export const green_and_accent_1 = css`background-color: #B9F6CA;`;;
export const green_text_and_text_accent_1 = css`color: #B9F6CA;`;;
export const green_and_accent_2 = css`background-color: #69F0AE;`;;
export const green_text_and_text_accent_2 = css`color: #69F0AE;`;;
export const green_and_accent_3 = css`background-color: #00E676;`;;
export const green_text_and_text_accent_3 = css`color: #00E676;`;;
export const green_and_accent_4 = css`background-color: #00C853;`;;
export const green_text_and_text_accent_4 = css`color: #00C853;`;;
export const light_green = css`background-color: #8bc34a;`;;
export const light_green_text = css`color: #8bc34a;`;;
export const light_green_and_lighten_5 = css`background-color: #f1f8e9;`;;
export const light_green_text_and_text_lighten_5 = css`color: #f1f8e9;`;;
export const light_green_and_lighten_4 = css`background-color: #dcedc8;`;;
export const light_green_text_and_text_lighten_4 = css`color: #dcedc8;`;;
export const light_green_and_lighten_3 = css`background-color: #c5e1a5;`;;
export const light_green_text_and_text_lighten_3 = css`color: #c5e1a5;`;;
export const light_green_and_lighten_2 = css`background-color: #aed581;`;;
export const light_green_text_and_text_lighten_2 = css`color: #aed581;`;;
export const light_green_and_lighten_1 = css`background-color: #9ccc65;`;;
export const light_green_text_and_text_lighten_1 = css`color: #9ccc65;`;;
export const light_green_and_darken_1 = css`background-color: #7cb342;`;;
export const light_green_text_and_text_darken_1 = css`color: #7cb342;`;;
export const light_green_and_darken_2 = css`background-color: #689f38;`;;
export const light_green_text_and_text_darken_2 = css`color: #689f38;`;;
export const light_green_and_darken_3 = css`background-color: #558b2f;`;;
export const light_green_text_and_text_darken_3 = css`color: #558b2f;`;;
export const light_green_and_darken_4 = css`background-color: #33691e;`;;
export const light_green_text_and_text_darken_4 = css`color: #33691e;`;;
export const light_green_and_accent_1 = css`background-color: #ccff90;`;;
export const light_green_text_and_text_accent_1 = css`color: #ccff90;`;;
export const light_green_and_accent_2 = css`background-color: #b2ff59;`;;
export const light_green_text_and_text_accent_2 = css`color: #b2ff59;`;;
export const light_green_and_accent_3 = css`background-color: #76ff03;`;;
export const light_green_text_and_text_accent_3 = css`color: #76ff03;`;;
export const light_green_and_accent_4 = css`background-color: #64dd17;`;;
export const light_green_text_and_text_accent_4 = css`color: #64dd17;`;;
export const lime = css`background-color: #cddc39;`;;
export const lime_text = css`color: #cddc39;`;;
export const lime_and_lighten_5 = css`background-color: #f9fbe7;`;;
export const lime_text_and_text_lighten_5 = css`color: #f9fbe7;`;;
export const lime_and_lighten_4 = css`background-color: #f0f4c3;`;;
export const lime_text_and_text_lighten_4 = css`color: #f0f4c3;`;;
export const lime_and_lighten_3 = css`background-color: #e6ee9c;`;;
export const lime_text_and_text_lighten_3 = css`color: #e6ee9c;`;;
export const lime_and_lighten_2 = css`background-color: #dce775;`;;
export const lime_text_and_text_lighten_2 = css`color: #dce775;`;;
export const lime_and_lighten_1 = css`background-color: #d4e157;`;;
export const lime_text_and_text_lighten_1 = css`color: #d4e157;`;;
export const lime_and_darken_1 = css`background-color: #c0ca33;`;;
export const lime_text_and_text_darken_1 = css`color: #c0ca33;`;;
export const lime_and_darken_2 = css`background-color: #afb42b;`;;
export const lime_text_and_text_darken_2 = css`color: #afb42b;`;;
export const lime_and_darken_3 = css`background-color: #9e9d24;`;;
export const lime_text_and_text_darken_3 = css`color: #9e9d24;`;;
export const lime_and_darken_4 = css`background-color: #827717;`;;
export const lime_text_and_text_darken_4 = css`color: #827717;`;;
export const lime_and_accent_1 = css`background-color: #f4ff81;`;;
export const lime_text_and_text_accent_1 = css`color: #f4ff81;`;;
export const lime_and_accent_2 = css`background-color: #eeff41;`;;
export const lime_text_and_text_accent_2 = css`color: #eeff41;`;;
export const lime_and_accent_3 = css`background-color: #c6ff00;`;;
export const lime_text_and_text_accent_3 = css`color: #c6ff00;`;;
export const lime_and_accent_4 = css`background-color: #aeea00;`;;
export const lime_text_and_text_accent_4 = css`color: #aeea00;`;;
export const yellow = css`background-color: #ffeb3b;`;;
export const yellow_text = css`color: #ffeb3b;`;;
export const yellow_and_lighten_5 = css`background-color: #fffde7;`;;
export const yellow_text_and_text_lighten_5 = css`color: #fffde7;`;;
export const yellow_and_lighten_4 = css`background-color: #fff9c4;`;;
export const yellow_text_and_text_lighten_4 = css`color: #fff9c4;`;;
export const yellow_and_lighten_3 = css`background-color: #fff59d;`;;
export const yellow_text_and_text_lighten_3 = css`color: #fff59d;`;;
export const yellow_and_lighten_2 = css`background-color: #fff176;`;;
export const yellow_text_and_text_lighten_2 = css`color: #fff176;`;;
export const yellow_and_lighten_1 = css`background-color: #ffee58;`;;
export const yellow_text_and_text_lighten_1 = css`color: #ffee58;`;;
export const yellow_and_darken_1 = css`background-color: #fdd835;`;;
export const yellow_text_and_text_darken_1 = css`color: #fdd835;`;;
export const yellow_and_darken_2 = css`background-color: #fbc02d;`;;
export const yellow_text_and_text_darken_2 = css`color: #fbc02d;`;;
export const yellow_and_darken_3 = css`background-color: #f9a825;`;;
export const yellow_text_and_text_darken_3 = css`color: #f9a825;`;;
export const yellow_and_darken_4 = css`background-color: #f57f17;`;;
export const yellow_text_and_text_darken_4 = css`color: #f57f17;`;;
export const yellow_and_accent_1 = css`background-color: #ffff8d;`;;
export const yellow_text_and_text_accent_1 = css`color: #ffff8d;`;;
export const yellow_and_accent_2 = css`background-color: #ffff00;`;;
export const yellow_text_and_text_accent_2 = css`color: #ffff00;`;;
export const yellow_and_accent_3 = css`background-color: #ffea00;`;;
export const yellow_text_and_text_accent_3 = css`color: #ffea00;`;;
export const yellow_and_accent_4 = css`background-color: #ffd600;`;;
export const yellow_text_and_text_accent_4 = css`color: #ffd600;`;;
export const amber = css`background-color: #ffc107;`;;
export const amber_text = css`color: #ffc107;`;;
export const amber_and_lighten_5 = css`background-color: #fff8e1;`;;
export const amber_text_and_text_lighten_5 = css`color: #fff8e1;`;;
export const amber_and_lighten_4 = css`background-color: #ffecb3;`;;
export const amber_text_and_text_lighten_4 = css`color: #ffecb3;`;;
export const amber_and_lighten_3 = css`background-color: #ffe082;`;;
export const amber_text_and_text_lighten_3 = css`color: #ffe082;`;;
export const amber_and_lighten_2 = css`background-color: #ffd54f;`;;
export const amber_text_and_text_lighten_2 = css`color: #ffd54f;`;;
export const amber_and_lighten_1 = css`background-color: #ffca28;`;;
export const amber_text_and_text_lighten_1 = css`color: #ffca28;`;;
export const amber_and_darken_1 = css`background-color: #ffb300;`;;
export const amber_text_and_text_darken_1 = css`color: #ffb300;`;;
export const amber_and_darken_2 = css`background-color: #ffa000;`;;
export const amber_text_and_text_darken_2 = css`color: #ffa000;`;;
export const amber_and_darken_3 = css`background-color: #ff8f00;`;;
export const amber_text_and_text_darken_3 = css`color: #ff8f00;`;;
export const amber_and_darken_4 = css`background-color: #ff6f00;`;;
export const amber_text_and_text_darken_4 = css`color: #ff6f00;`;;
export const amber_and_accent_1 = css`background-color: #ffe57f;`;;
export const amber_text_and_text_accent_1 = css`color: #ffe57f;`;;
export const amber_and_accent_2 = css`background-color: #ffd740;`;;
export const amber_text_and_text_accent_2 = css`color: #ffd740;`;;
export const amber_and_accent_3 = css`background-color: #ffc400;`;;
export const amber_text_and_text_accent_3 = css`color: #ffc400;`;;
export const amber_and_accent_4 = css`background-color: #ffab00;`;;
export const amber_text_and_text_accent_4 = css`color: #ffab00;`;;
export const orange = css`background-color: #ff9800;`;;
export const orange_text = css`color: #ff9800;`;;
export const orange_and_lighten_5 = css`background-color: #fff3e0;`;;
export const orange_text_and_text_lighten_5 = css`color: #fff3e0;`;;
export const orange_and_lighten_4 = css`background-color: #ffe0b2;`;;
export const orange_text_and_text_lighten_4 = css`color: #ffe0b2;`;;
export const orange_and_lighten_3 = css`background-color: #ffcc80;`;;
export const orange_text_and_text_lighten_3 = css`color: #ffcc80;`;;
export const orange_and_lighten_2 = css`background-color: #ffb74d;`;;
export const orange_text_and_text_lighten_2 = css`color: #ffb74d;`;;
export const orange_and_lighten_1 = css`background-color: #ffa726;`;;
export const orange_text_and_text_lighten_1 = css`color: #ffa726;`;;
export const orange_and_darken_1 = css`background-color: #fb8c00;`;;
export const orange_text_and_text_darken_1 = css`color: #fb8c00;`;;
export const orange_and_darken_2 = css`background-color: #f57c00;`;;
export const orange_text_and_text_darken_2 = css`color: #f57c00;`;;
export const orange_and_darken_3 = css`background-color: #ef6c00;`;;
export const orange_text_and_text_darken_3 = css`color: #ef6c00;`;;
export const orange_and_darken_4 = css`background-color: #e65100;`;;
export const orange_text_and_text_darken_4 = css`color: #e65100;`;;
export const orange_and_accent_1 = css`background-color: #ffd180;`;;
export const orange_text_and_text_accent_1 = css`color: #ffd180;`;;
export const orange_and_accent_2 = css`background-color: #ffab40;`;;
export const orange_text_and_text_accent_2 = css`color: #ffab40;`;;
export const orange_and_accent_3 = css`background-color: #ff9100;`;;
export const orange_text_and_text_accent_3 = css`color: #ff9100;`;;
export const orange_and_accent_4 = css`background-color: #ff6d00;`;;
export const orange_text_and_text_accent_4 = css`color: #ff6d00;`;;
export const deep_orange = css`background-color: #ff5722;`;;
export const deep_orange_text = css`color: #ff5722;`;;
export const deep_orange_and_lighten_5 = css`background-color: #fbe9e7;`;;
export const deep_orange_text_and_text_lighten_5 = css`color: #fbe9e7;`;;
export const deep_orange_and_lighten_4 = css`background-color: #ffccbc;`;;
export const deep_orange_text_and_text_lighten_4 = css`color: #ffccbc;`;;
export const deep_orange_and_lighten_3 = css`background-color: #ffab91;`;;
export const deep_orange_text_and_text_lighten_3 = css`color: #ffab91;`;;
export const deep_orange_and_lighten_2 = css`background-color: #ff8a65;`;;
export const deep_orange_text_and_text_lighten_2 = css`color: #ff8a65;`;;
export const deep_orange_and_lighten_1 = css`background-color: #ff7043;`;;
export const deep_orange_text_and_text_lighten_1 = css`color: #ff7043;`;;
export const deep_orange_and_darken_1 = css`background-color: #f4511e;`;;
export const deep_orange_text_and_text_darken_1 = css`color: #f4511e;`;;
export const deep_orange_and_darken_2 = css`background-color: #e64a19;`;;
export const deep_orange_text_and_text_darken_2 = css`color: #e64a19;`;;
export const deep_orange_and_darken_3 = css`background-color: #d84315;`;;
export const deep_orange_text_and_text_darken_3 = css`color: #d84315;`;;
export const deep_orange_and_darken_4 = css`background-color: #bf360c;`;;
export const deep_orange_text_and_text_darken_4 = css`color: #bf360c;`;;
export const deep_orange_and_accent_1 = css`background-color: #ff9e80;`;;
export const deep_orange_text_and_text_accent_1 = css`color: #ff9e80;`;;
export const deep_orange_and_accent_2 = css`background-color: #ff6e40;`;;
export const deep_orange_text_and_text_accent_2 = css`color: #ff6e40;`;;
export const deep_orange_and_accent_3 = css`background-color: #ff3d00;`;;
export const deep_orange_text_and_text_accent_3 = css`color: #ff3d00;`;;
export const deep_orange_and_accent_4 = css`background-color: #dd2c00;`;;
export const deep_orange_text_and_text_accent_4 = css`color: #dd2c00;`;;
export const brown = css`background-color: #795548;`;;
export const brown_text = css`color: #795548;`;;
export const brown_and_lighten_5 = css`background-color: #efebe9;`;;
export const brown_text_and_text_lighten_5 = css`color: #efebe9;`;;
export const brown_and_lighten_4 = css`background-color: #d7ccc8;`;;
export const brown_text_and_text_lighten_4 = css`color: #d7ccc8;`;;
export const brown_and_lighten_3 = css`background-color: #bcaaa4;`;;
export const brown_text_and_text_lighten_3 = css`color: #bcaaa4;`;;
export const brown_and_lighten_2 = css`background-color: #a1887f;`;;
export const brown_text_and_text_lighten_2 = css`color: #a1887f;`;;
export const brown_and_lighten_1 = css`background-color: #8d6e63;`;;
export const brown_text_and_text_lighten_1 = css`color: #8d6e63;`;;
export const brown_and_darken_1 = css`background-color: #6d4c41;`;;
export const brown_text_and_text_darken_1 = css`color: #6d4c41;`;;
export const brown_and_darken_2 = css`background-color: #5d4037;`;;
export const brown_text_and_text_darken_2 = css`color: #5d4037;`;;
export const brown_and_darken_3 = css`background-color: #4e342e;`;;
export const brown_text_and_text_darken_3 = css`color: #4e342e;`;;
export const brown_and_darken_4 = css`background-color: #3e2723;`;;
export const brown_text_and_text_darken_4 = css`color: #3e2723;`;;
export const blue_grey = css`background-color: #607d8b;`;;
export const blue_grey_text = css`color: #607d8b;`;;
export const blue_grey_and_lighten_5 = css`background-color: #eceff1;`;;
export const blue_grey_text_and_text_lighten_5 = css`color: #eceff1;`;;
export const blue_grey_and_lighten_4 = css`background-color: #cfd8dc;`;;
export const blue_grey_text_and_text_lighten_4 = css`color: #cfd8dc;`;;
export const blue_grey_and_lighten_3 = css`background-color: #b0bec5;`;;
export const blue_grey_text_and_text_lighten_3 = css`color: #b0bec5;`;;
export const blue_grey_and_lighten_2 = css`background-color: #90a4ae;`;;
export const blue_grey_text_and_text_lighten_2 = css`color: #90a4ae;`;;
export const blue_grey_and_lighten_1 = css`background-color: #78909c;`;;
export const blue_grey_text_and_text_lighten_1 = css`color: #78909c;`;;
export const blue_grey_and_darken_1 = css`background-color: #546e7a;`;;
export const blue_grey_text_and_text_darken_1 = css`color: #546e7a;`;;
export const blue_grey_and_darken_2 = css`background-color: #455a64;`;;
export const blue_grey_text_and_text_darken_2 = css`color: #455a64;`;;
export const blue_grey_and_darken_3 = css`background-color: #37474f;`;;
export const blue_grey_text_and_text_darken_3 = css`color: #37474f;`;;
export const blue_grey_and_darken_4 = css`background-color: #263238;`;;
export const blue_grey_text_and_text_darken_4 = css`color: #263238;`;;
export const grey = css`background-color: #9e9e9e;`;;
export const grey_text = css`color: #9e9e9e;`;;
export const grey_and_lighten_5 = css`background-color: #fafafa;`;;
export const grey_text_and_text_lighten_5 = css`color: #fafafa;`;;
export const grey_and_lighten_4 = css`background-color: #f5f5f5;`;;
export const grey_text_and_text_lighten_4 = css`color: #f5f5f5;`;;
export const grey_and_lighten_3 = css`background-color: #eeeeee;`;;
export const grey_text_and_text_lighten_3 = css`color: #eeeeee;`;;
export const grey_and_lighten_2 = css`background-color: #e0e0e0;`;;
export const grey_text_and_text_lighten_2 = css`color: #e0e0e0;`;;
export const grey_and_lighten_1 = css`background-color: #bdbdbd;`;;
export const grey_text_and_text_lighten_1 = css`color: #bdbdbd;`;;
export const grey_and_darken_1 = css`background-color: #757575;`;;
export const grey_text_and_text_darken_1 = css`color: #757575;`;;
export const grey_and_darken_2 = css`background-color: #616161;`;;
export const grey_text_and_text_darken_2 = css`color: #616161;`;;
export const grey_and_darken_3 = css`background-color: #424242;`;;
export const grey_text_and_text_darken_3 = css`color: #424242;`;;
export const grey_and_darken_4 = css`background-color: #212121;`;;
export const grey_text_and_text_darken_4 = css`color: #212121;`;;
export const black = css`background-color: #000000;`;;
export const black_text = css`color: #000000;`;;
export const white = css`background-color: #FFFFFF;`;;
export const white_text = css`color: #FFFFFF;`;;
export const transparent = css`background-color: transparent;`;;
export const transparent_text = css`color: transparent;`;;
export const tag_html = css`font-family: sans-serif;
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
&input[type="button"] {-webkit-appearance: button;
cursor: pointer;}
&input[disabled] {cursor: default;}
-webkit-box-sizing: border-box;
box-sizing: border-box;
line-height: 1.5;
font-family: "Roboto", sans-serif;
font-weight: normal;
color: rgba(0, 0, 0, 0.87);
@media only screen and (min-width: 0) {
font-size: 14px;
}
@media only screen and (min-width: 992px) {
font-size: 14.5px;
}
@media only screen and (min-width: 1200px) {
font-size: 15px;
}`;;
export const tag_body = css`margin: 0;`;;
export const tag_article = css`display: block;`;;
export const tag_aside = css`display: block;`;;
export const tag_details = css`display: block;`;;
export const tag_figcaption = css`display: block;`;;
export const tag_figure = css`display: block;
margin: 1em 40px;`;;
export const tag_footer = css`display: block;`;;
export const tag_header = css`display: block;`;;
export const tag_hgroup = css`display: block;`;;
export const tag_main = css`display: block;`;;
export const tag_menu = css`display: block;`;;
export const tag_nav = css`display: block;
-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
&ul a span.badge {display: inline-block;
float: none;
margin-left: 4px;
line-height: 22px;
height: 22px;}
color: #fff;
background-color: #ee6e73;
width: 100%;
height: 56px;
line-height: 56px;
&a {color: #fff;}
&i {display: block;
font-size: 24px;
height: 56px;
line-height: 56px;}
&[class^="mdi-"] {display: block;
font-size: 24px;
height: 56px;
line-height: 56px;}
&[class*="mdi-"] {display: block;
font-size: 24px;
height: 56px;
line-height: 56px;}
&i.material-icons {display: block;
font-size: 24px;
height: 56px;
line-height: 56px;}
&.nav-wrapper {position: relative;
height: 100%;}
&a.button-collapse {@media only screen and (min-width: 993px) {
display: none;
}}
&.button-collapse {float: left;
position: relative;
z-index: 1;
height: 56px;
margin: 0 18px;}
&.button-collapse i {height: 56px;
line-height: 56px;}
&.brand-logo {position: absolute;
color: #fff;
display: inline-block;
font-size: 2.1rem;
padding: 0;}
&.brand-logo.center {left: 50%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);}
&.brand-logo {@media only screen and (max-width: 992px) {
left: 50%;
-webkit-transform: translateX(-50%);
transform: translateX(-50%);
}}
&.brand-logo.left {@media only screen and (max-width: 992px) {
padding: 0;
-webkit-transform: none;
transform: none;
}}
&.brand-logo.right {@media only screen and (max-width: 992px) {
padding: 0;
-webkit-transform: none;
transform: none;
}}
&.brand-logo.left {@media only screen and (max-width: 992px) {
left: 0.5rem;
}}
&.brand-logo.right {@media only screen and (max-width: 992px) {
right: 0.5rem;
left: auto;
}}
&.brand-logo.right {right: 0.5rem;
padding: 0;}
&.brand-logo i {float: left;
margin-right: 15px;}
&.brand-logo [class^="mdi-"] {float: left;
margin-right: 15px;}
&.brand-logo [class*="mdi-"] {float: left;
margin-right: 15px;}
&.brand-logo i.material-icons {float: left;
margin-right: 15px;}
&.nav-title {display: inline-block;
font-size: 32px;
padding: 28px 0;}
&ul {margin: 0;}
&ul li {-webkit-transition: background-color .3s;
transition: background-color .3s;
float: left;
padding: 0;}
&ul li.active {background-color: rgba(0, 0, 0, 0.1);}
&ul a {-webkit-transition: background-color .3s;
transition: background-color .3s;
font-size: 1rem;
color: #fff;
display: block;
padding: 0 15px;
cursor: pointer;}
&ul a.btn {margin-top: -2px;
margin-left: 15px;
margin-right: 15px;}
&ul a.btn-large {margin-top: -2px;
margin-left: 15px;
margin-right: 15px;}
&ul a.btn-large {margin-top: -2px;
margin-left: 15px;
margin-right: 15px;}
&ul a.btn-flat {margin-top: -2px;
margin-left: 15px;
margin-right: 15px;}
&ul a.btn-floating {margin-top: -2px;
margin-left: 15px;
margin-right: 15px;}
&ul a.btn > .material-icons {height: inherit;
line-height: inherit;}
&ul a.btn-large > .material-icons {height: inherit;
line-height: inherit;}
&ul a.btn-large > .material-icons {height: inherit;
line-height: inherit;}
&ul a.btn-flat > .material-icons {height: inherit;
line-height: inherit;}
&ul a.btn-floating > .material-icons {height: inherit;
line-height: inherit;}
&ul a:hover {background-color: rgba(0, 0, 0, 0.1);}
&ul.left {float: left;}
&form {height: 100%;}
&.input-field {margin: 0;
height: 100%;}
&.input-field input {height: 100%;
font-size: 1.2rem;
border: none;
padding-left: 2rem;}
&.input-field input:focus {border: none;
-webkit-box-shadow: none;
box-shadow: none;}
&.input-field input[type=text]:valid {border: none;
-webkit-box-shadow: none;
box-shadow: none;}
&.input-field input[type=password]:valid {border: none;
-webkit-box-shadow: none;
box-shadow: none;}
&.input-field input[type=email]:valid {border: none;
-webkit-box-shadow: none;
box-shadow: none;}
&.input-field input[type=url]:valid {border: none;
-webkit-box-shadow: none;
box-shadow: none;}
&.input-field input[type=date]:valid {border: none;
-webkit-box-shadow: none;
box-shadow: none;}
&.input-field label {top: 0;
left: 0;}
&.input-field label i {color: rgba(255, 255, 255, 0.7);
-webkit-transition: color .3s;
transition: color .3s;}
&.input-field label.active i {color: #fff;}
@media only screen and (min-width: 601px) {
height: 64px;
line-height: 64px;
}
&.nav-wrapper i {@media only screen and (min-width: 601px) {
height: 64px;
line-height: 64px;
}}
&a.button-collapse {@media only screen and (min-width: 601px) {
height: 64px;
line-height: 64px;
}}
&a.button-collapse i {@media only screen and (min-width: 601px) {
height: 64px;
line-height: 64px;
}}`;;
export const tag_section = css`display: block;`;;
export const tag_summary = css`display: block;`;;
export const tag_audio = css`display: inline-block;
vertical-align: baseline;
&:not([controls]) {display: none;
height: 0;}`;;
export const tag_canvas = css`display: inline-block;
vertical-align: baseline;`;;
export const tag_progress = css`display: inline-block;
vertical-align: baseline;`;;
export const tag_video = css`display: inline-block;
vertical-align: baseline;`;;
export const tag_template = css`display: none;`;;
export const tag_a = css`background-color: transparent;
&:active {outline: 0;}
&:hover {outline: 0;}
color: #039be5;
text-decoration: none;
-webkit-tap-highlight-color: transparent;
text-decoration: none;`;;
export const tag_b = css`font-weight: bold;`;;
export const tag_strong = css`font-weight: bold;
font-weight: 500;`;;
export const tag_dfn = css`font-style: italic;`;;
export const tag_h1 = css`font-size: 2em;
margin: 0.67em 0;
font-weight: 400;
line-height: 1.1;
&a {font-weight: inherit;}
font-size: 4.2rem;
line-height: 110%;
margin: 2.1rem 0 1.68rem 0;`;;
export const tag_mark = css`background: #ff0;
color: #000;`;;
export const tag_small = css`font-size: 80%;
font-size: 75%;`;;
export const tag_sub = css`font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
bottom: -0.25em;`;;
export const tag_sup = css`font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
top: -0.5em;`;;
export const tag_img = css`border: 0;`;;
export const tag_svg = css`&:not(:root) {overflow: hidden;}`;;
export const tag_hr = css`-webkit-box-sizing: content-box;
box-sizing: content-box;
height: 0;`;;
export const tag_pre = css`overflow: auto;
font-family: monospace, monospace;
font-size: 1em;`;;
export const tag_code = css`font-family: monospace, monospace;
font-size: 1em;`;;
export const tag_kbd = css`font-family: monospace, monospace;
font-size: 1em;`;;
export const tag_samp = css`font-family: monospace, monospace;
font-size: 1em;`;;
export const tag_button = css`color: inherit;
font: inherit;
margin: 0;
overflow: visible;
text-transform: none;
-webkit-appearance: button;
cursor: pointer;
&::-moz-focus-inner {border: 0;
padding: 0;}
&:focus {outline: none;
background-color: #2ab7a9;}`;;
export const tag_input = css`color: inherit;
font: inherit;
margin: 0;
&::-moz-focus-inner {border: 0;
padding: 0;}
line-height: normal;
&:not([type]) {background-color: transparent;
border: none;
border-bottom: 1px solid #9e9e9e;
border-radius: 0;
outline: none;
height: 3rem;
width: 100%;
font-size: 1rem;
margin: 0 0 20px 0;
padding: 0;
-webkit-box-shadow: none;
box-shadow: none;
-webkit-box-sizing: content-box;
box-sizing: content-box;
-webkit-transition: all 0.3s;
transition: all 0.3s;}
&:not([type]):disabled {color: rgba(0, 0, 0, 0.42);
border-bottom: 1px dotted rgba(0, 0, 0, 0.42);}
&:not([type])[readonly="readonly"] {color: rgba(0, 0, 0, 0.42);
border-bottom: 1px dotted rgba(0, 0, 0, 0.42);}
&:not([type]):disabled + label {color: rgba(0, 0, 0, 0.42);}
&:not([type])[readonly="readonly"] + label {color: rgba(0, 0, 0, 0.42);}
&:not([type]):focus:not([readonly]) {border-bottom: 1px solid #26a69a;
-webkit-box-shadow: 0 1px 0 0 #26a69a;
box-shadow: 0 1px 0 0 #26a69a;}
&:not([type]):focus:not([readonly]) + label {color: #26a69a;}
&:not([type]).validate + label {width: 100%;}
&:not([type]).invalid + label:after {display: none;}
&:not([type]).valid + label:after {display: none;}
&:not([type]).invalid + label.active:after {display: block;}
&:not([type]).valid + label.active:after {display: block;}
&:not([type]).valid + label:after {content: attr(data-success);
color: #4CAF50;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}
&:not([type]):focus.valid + label:after {content: attr(data-success);
color: #4CAF50;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}
&:not([type]).invalid + label:after {content: attr(data-error);
color: #F44336;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}
&:not([type]):focus.invalid + label:after {content: attr(data-error);
color: #F44336;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}
&:not([type]) + label:after {display: block;
content: "";
position: absolute;
top: 100%;
left: 0;
opacity: 0;
-webkit-transition: .2s opacity ease-out, .2s color ease-out;
transition: .2s opacity ease-out, .2s color ease-out;}`;;
export const tag_optgroup = css`color: inherit;
font: inherit;
margin: 0;
font-weight: bold;`;;
export const tag_select = css`color: inherit;
font: inherit;
margin: 0;
text-transform: none;
&:focus {outline: 1px solid #c9f3ef;}
display: none;
background-color: rgba(255, 255, 255, 0.9);
width: 100%;
padding: 5px;
border: 1px solid #f2f2f2;
border-radius: 2px;
height: 3rem;
&:disabled {color: rgba(0, 0, 0, 0.42);}`;;
export const tag_textarea = css`color: inherit;
font: inherit;
margin: 0;
overflow: auto;
width: 100%;
height: 3rem;
background-color: transparent;`;;
export const tag_fieldset = css`border: 1px solid #c0c0c0;
margin: 0 2px;
padding: 0.35em 0.625em 0.75em;`;;
export const tag_legend = css`border: 0;
padding: 0;`;;
export const tag_table = css`border-collapse: collapse;
border-spacing: 0;
border: none;
width: 100%;
display: table;`;;
export const tag_td = css`padding: 0;
border: none;
padding: 15px 5px;
display: table-cell;
text-align: left;
vertical-align: middle;
border-radius: 2px;`;;
export const tag_th = css`padding: 0;
border: none;
padding: 15px 5px;
display: table-cell;
text-align: left;
vertical-align: middle;
border-radius: 2px;`;;
export const tag_ul = css`&:not(.browser-default) {padding-left: 0;
list-style-type: none;}
&:not(.browser-default) > li {list-style-type: none;}`;;
export const valign_wrapper = css`display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;`;;
export const clearfix = css`clear: both;`;;
export const z_depth_0 = css`-webkit-box-shadow: none;
box-shadow: none;`;;
export const z_depth_1 = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);`;;
export const card_panel = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
-webkit-transition: -webkit-box-shadow .25s;
transition: -webkit-box-shadow .25s;
transition: box-shadow .25s;
transition: box-shadow .25s, -webkit-box-shadow .25s;
padding: 24px;
margin: 0.5rem 0 1rem 0;
border-radius: 2px;
background-color: #fff;`;;
export const card = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
position: relative;
margin: 0.5rem 0 1rem 0;
background-color: #fff;
-webkit-transition: -webkit-box-shadow .25s;
transition: -webkit-box-shadow .25s;
transition: box-shadow .25s;
transition: box-shadow .25s, -webkit-box-shadow .25s;
border-radius: 2px;
&.card-title {font-size: 24px;
font-weight: 300;}
&.card-title.activator {cursor: pointer;}
&.card-image {position: relative;}
&.card-image img {display: block;
border-radius: 2px 2px 0 0;
position: relative;
left: 0;
right: 0;
top: 0;
bottom: 0;
width: 100%;}
&.card-image .card-title {color: #fff;
position: absolute;
bottom: 0;
left: 0;
max-width: 100%;
padding: 24px;}
&.card-content {padding: 24px;
border-radius: 0 0 2px 2px;}
&.card-content p {margin: 0;
color: inherit;}
&.card-content .card-title {display: block;
line-height: 32px;
margin-bottom: 8px;}
&.card-content .card-title i {line-height: 32px;}
&.card-action {position: relative;
background-color: inherit;
border-top: 1px solid rgba(160, 160, 160, 0.2);
padding: 16px 24px;}
&.card-action:last-child {border-radius: 0 0 2px 2px;}
&.card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {color: #ffab40;
margin-right: 24px;
-webkit-transition: color .3s ease;
transition: color .3s ease;
text-transform: uppercase;}
&.card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating):hover {color: #ffd8a6;}
&.card-reveal {padding: 24px;
position: absolute;
background-color: #fff;
width: 100%;
overflow-y: auto;
left: 0;
top: 100%;
height: 100%;
z-index: 3;
display: none;}
&.card-reveal .card-title {cursor: pointer;
display: block;}`;;
export const toast = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
border-radius: 2px;
top: 35px;
width: auto;
margin-top: 10px;
position: relative;
max-width: 100%;
height: auto;
min-height: 48px;
line-height: 1.5em;
word-break: break-all;
background-color: #323232;
padding: 10px 25px;
font-size: 1.1rem;
font-weight: 300;
color: #fff;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
-webkit-box-pack: justify;
-webkit-justify-content: space-between;
-ms-flex-pack: justify;
justify-content: space-between;
cursor: default;
&.toast-action {color: #eeff41;
font-weight: 500;
margin-right: -25px;
margin-left: 3rem;}
@media only screen and (max-width: 600px) {
width: 100%;
border-radius: 0;
}`;;
export const btn = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
&:hover {-webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);}
border: none;
border-radius: 2px;
display: inline-block;
height: 36px;
line-height: 36px;
padding: 0 2rem;
text-transform: uppercase;
vertical-align: middle;
-webkit-tap-highlight-color: transparent;
&:disabled {pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;}
&:disabled:hover {background-color: #DFDFDF;
color: #9F9F9F;}
font-size: 1rem;
outline: 0;
&i {font-size: 1.3rem;
line-height: inherit;}
&:focus {background-color: #1d7d74;}
text-decoration: none;
color: #fff;
background-color: #26a69a;
text-align: center;
letter-spacing: .5px;
-webkit-transition: .2s ease-out;
transition: .2s ease-out;
cursor: pointer;
&:hover {background-color: #2bbbad;}`;;
export const btn_large = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
&:hover {-webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);}
border: none;
border-radius: 2px;
display: inline-block;
height: 36px;
line-height: 36px;
padding: 0 2rem;
text-transform: uppercase;
vertical-align: middle;
-webkit-tap-highlight-color: transparent;
&:disabled {pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;}
&:disabled {pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;}
&:disabled:hover {background-color: #DFDFDF;
color: #9F9F9F;}
&:disabled:hover {background-color: #DFDFDF;
color: #9F9F9F;}
font-size: 1rem;
outline: 0;
font-size: 1rem;
outline: 0;
&i {font-size: 1.3rem;
line-height: inherit;}
&i {font-size: 1.3rem;
line-height: inherit;}
&:focus {background-color: #1d7d74;}
text-decoration: none;
color: #fff;
background-color: #26a69a;
text-align: center;
letter-spacing: .5px;
-webkit-transition: .2s ease-out;
transition: .2s ease-out;
cursor: pointer;
&:hover {background-color: #2bbbad;}
height: 54px;
line-height: 54px;
&i {font-size: 1.6rem;}`;;
export const btn_floating = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
&:hover {-webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);}
&:disabled {pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;}
&:disabled:hover {background-color: #DFDFDF;
color: #9F9F9F;}
font-size: 1rem;
outline: 0;
&i {font-size: 1.3rem;
line-height: inherit;}
&:focus {background-color: #1d7d74;}
display: inline-block;
color: #fff;
position: relative;
overflow: hidden;
z-index: 1;
width: 40px;
height: 40px;
line-height: 40px;
padding: 0;
background-color: #26a69a;
border-radius: 50%;
-webkit-transition: .3s;
transition: .3s;
cursor: pointer;
vertical-align: middle;
&:hover {background-color: #26a69a;}
&:before {border-radius: 0;}
&i {width: inherit;
display: inline-block;
text-align: center;
color: #fff;
font-size: 1.6rem;
line-height: 40px;}`;;
export const dropdown_content = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
background-color: #fff;
margin: 0;
display: none;
min-width: 100px;
max-height: 650px;
overflow-y: auto;
opacity: 0;
position: absolute;
z-index: 999;
will-change: width, height;
&li {clear: both;
color: rgba(0, 0, 0, 0.87);
cursor: pointer;
min-height: 50px;
line-height: 1.5rem;
width: 100%;
text-align: left;
text-transform: none;}
&li:hover {background-color: #eee;}
&li.active {background-color: #eee;}
&li.selected {background-color: #eee;}
&li.active.selected {background-color: #e1e1e1;}
&li.divider {min-height: 0;
height: 1px;}
&li > a {font-size: 16px;
color: #26a69a;
display: block;
line-height: 22px;
padding: 14px 16px;}
&li > span {font-size: 16px;
color: #26a69a;
display: block;
line-height: 22px;
padding: 14px 16px;}
&li > span > label {top: 1px;
left: 0;
height: 18px;}
&li > a > i {height: inherit;
line-height: inherit;
float: left;
margin: 0 24px 0 0;
width: 24px;}`;;
export const collapsible = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
&.collection {margin: 0;
border: none;}
&span.badge {margin-top: calc(1.5rem - 11px);}
border-top: 1px solid #ddd;
border-right: 1px solid #ddd;
border-left: 1px solid #ddd;
margin: 0.5rem 0 1rem 0;`;;
export const side_nav = css`-webkit-box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
&span.badge {margin-top: calc(24px - 11px);}
&.collapsible {border: none;
-webkit-box-shadow: none;
box-shadow: none;}
&.collapsible li {padding: 0;}
&.collapsible-header {background-color: transparent;
border: none;
line-height: inherit;
height: inherit;
padding: 0 16px;}
&.collapsible-header:hover {background-color: rgba(0, 0, 0, 0.05);}
&.collapsible-header i {line-height: inherit;}
&.collapsible-body {border: 0;
background-color: #fff;}
&.collapsible-body li a {padding: 0 23.5px 0 31px;}
position: fixed;
width: 300px;
left: 0;
top: 0;
margin: 0;
-webkit-transform: translateX(-100%);
transform: translateX(-100%);
height: 100%;
height: calc(100% + 60px);
height: -moz-calc(100%);
padding-bottom: 60px;
background-color: #fff;
z-index: 999;
overflow-y: auto;
will-change: transform;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
-webkit-transform: translateX(-105%);
transform: translateX(-105%);
&.collapsible {margin: 0;}
&li {float: none;
line-height: 48px;}
&li.active {background-color: rgba(0, 0, 0, 0.05);}
&li > a {color: rgba(0, 0, 0, 0.87);
display: block;
font-size: 14px;
font-weight: 500;
height: 48px;
line-height: 48px;
padding: 0 32px;}
&li > a:hover {background-color: rgba(0, 0, 0, 0.05);}
&li > a.btn {margin: 10px 15px;}
&li > a.btn-large {margin: 10px 15px;}
&li > a.btn-large {margin: 10px 15px;}
&li > a.btn-flat {margin: 10px 15px;}
&li > a.btn-floating {margin: 10px 15px;}
&li > a.btn {color: #fff;}
&li > a.btn-large {color: #fff;}
&li > a.btn-large {color: #fff;}
&li > a.btn-floating {color: #fff;}
&li > a.btn-flat {color: #343434;}
&li > a.btn:hover {background-color: #2bbbad;}
&li > a.btn-large:hover {background-color: #2bbbad;}
&li > a.btn-large:hover {background-color: #2bbbad;}
&li > a.btn-floating:hover {background-color: #26a69a;}
&li > a > i {float: left;
height: 48px;
line-height: 48px;
margin: 0 32px 0 0;
width: 24px;
color: rgba(0, 0, 0, 0.54);}
&li > a > [class^="mdi-"] {float: left;
height: 48px;
line-height: 48px;
margin: 0 32px 0 0;
width: 24px;
color: rgba(0, 0, 0, 0.54);}
&li > a li > a > [class*="mdi-"] {float: left;
height: 48px;
line-height: 48px;
margin: 0 32px 0 0;
width: 24px;
color: rgba(0, 0, 0, 0.54);}
&li > a > i.material-icons {float: left;
height: 48px;
line-height: 48px;
margin: 0 32px 0 0;
width: 24px;
color: rgba(0, 0, 0, 0.54);}
&.divider {margin: 8px 0 0 0;}
&.subheader {cursor: initial;
pointer-events: none;
color: rgba(0, 0, 0, 0.54);
font-size: 14px;
font-weight: 500;
line-height: 48px;}
&.subheader:hover {background-color: transparent;}
&.user-view {position: relative;
padding: 32px 32px 0;
margin-bottom: 8px;}
&.userView {position: relative;
padding: 32px 32px 0;
margin-bottom: 8px;}
&.user-view > a {height: auto;
padding: 0;}
&.userView > a {height: auto;
padding: 0;}
&.user-view > a:hover {background-color: transparent;}
&.userView > a:hover {background-color: transparent;}
&.user-view .background {overflow: hidden;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -1;}
&.userView .background {overflow: hidden;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: -1;}
&.user-view .circle {display: block;}
&.user-view .name {display: block;}
&.user-view .email {display: block;}
&.userView .circle {display: block;}
&.userView .name {display: block;}
&.userView .email {display: block;}
&.user-view .circle {height: 64px;
width: 64px;}
&.userView .circle {height: 64px;
width: 64px;}
&.user-view .name {font-size: 14px;
line-height: 24px;}
&.user-view .email {font-size: 14px;
line-height: 24px;}
&.userView .name {font-size: 14px;
line-height: 24px;}
&.userView .email {font-size: 14px;
line-height: 24px;}
&.user-view .name {margin-top: 16px;
font-weight: 500;}
&.userView .name {margin-top: 16px;
font-weight: 500;}
&.user-view .email {padding-bottom: 16px;
font-weight: 400;}
&.userView .email {padding-bottom: 16px;
font-weight: 400;}
&a {@media only screen and (max-width: 992px) {
padding: 0 16px;
}}
&.user-view {@media only screen and (max-width: 992px) {
padding: 16px 16px 0;
}}
&.userView {@media only screen and (max-width: 992px) {
padding: 16px 16px 0;
}}
&.collapsible-body > ul:not(.collapsible) > li.active {background-color: #ee6e73;}
&.collapsible-body > ul:not(.collapsible) > li.active a {color: #fff;}
&.collapsible-body {padding: 0;}`;;
export const z_depth_1_half = css`-webkit-box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);
box-shadow: 0 3px 3px 0 rgba(0, 0, 0, 0.14), 0 1px 7px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -1px rgba(0, 0, 0, 0.2);`;;
export const z_depth_2 = css`-webkit-box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);
box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.3);`;;
export const z_depth_3 = css`-webkit-box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);
box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.3);`;;
export const z_depth_4 = css`-webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);`;;
export const modal = css`-webkit-box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.3);
display: none;
position: fixed;
left: 0;
right: 0;
background-color: #fafafa;
padding: 0;
max-height: 70%;
width: 55%;
margin: auto;
overflow-y: auto;
border-radius: 2px;
will-change: top, opacity;
@media only screen and (max-width: 992px) {
width: 80%;
}
&h1 {margin-top: 0;}
&h2 {margin-top: 0;}
&h3 {margin-top: 0;}
&h4 {margin-top: 0;}
&.modal-content {padding: 24px;}
&.modal-close {cursor: pointer;}
&.modal-footer {border-radius: 0 0 2px 2px;
background-color: #fafafa;
padding: 4px 6px;
height: 56px;
width: 100%;
text-align: right;}
&.modal-footer .btn {margin: 6px 0;}
&.modal-footer .btn-large {margin: 6px 0;}
&.modal-footer .btn-flat {margin: 6px 0;}`;;
export const z_depth_5 = css`-webkit-box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);
box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);`;;
export const hoverable = css`-webkit-transition: -webkit-box-shadow .25s;
transition: -webkit-box-shadow .25s;
transition: box-shadow .25s;
transition: box-shadow .25s, -webkit-box-shadow .25s;
&:hover {-webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);}`;;
export const divider = css`height: 1px;
overflow: hidden;
background-color: #e0e0e0;`;;
export const tag_blockquote = css`margin: 20px 0;
padding-left: 1.5rem;
border-left: 5px solid #ee6e73;`;;
export const tag_i = css`line-height: inherit;`;;
export const tag_i_and_left = css`float: left;
margin-right: 15px;`;;
export const tag_i_and_right = css`float: right;
margin-left: 15px;`;;
export const tag_i_and_tiny = css`font-size: 1rem;`;;
export const tag_i_and_small = css`font-size: 2rem;`;;
export const tag_i_and_medium = css`font-size: 4rem;`;;
export const tag_i_and_large = css`font-size: 6rem;`;;
export const tag_img_and_responsive_img = css`max-width: 100%;
height: auto;`;;
export const tag_video_and_responsive_video = css`max-width: 100%;
height: auto;`;;
export const pagination = css`&li {display: inline-block;
border-radius: 2px;
text-align: center;
vertical-align: top;
height: 30px;}
&li a {color: #444;
display: inline-block;
font-size: 1.2rem;
padding: 0 10px;
line-height: 30px;}
&li.active a {color: #fff;}
&li.active {background-color: #ee6e73;}
&li.disabled a {cursor: default;
color: #999;}
&li i {font-size: 2rem;}
&li.pages ul li {display: inline-block;
float: none;}
@media only screen and (max-width: 992px) {
width: 100%;
}
&li.prev {@media only screen and (max-width: 992px) {
width: 10%;
}}
&li.next {@media only screen and (max-width: 992px) {
width: 10%;
}}
&li.pages {@media only screen and (max-width: 992px) {
width: 80%;
overflow: hidden;
white-space: nowrap;
}}`;;
export const breadcrumb = css`font-size: 18px;
color: rgba(255, 255, 255, 0.7);
&i {display: inline-block;
float: left;
font-size: 24px;}
&[class^="mdi-"] {display: inline-block;
float: left;
font-size: 24px;}
&[class*="mdi-"] {display: inline-block;
float: left;
font-size: 24px;}
&i.material-icons {display: inline-block;
float: left;
font-size: 24px;}
&:before {content: '\\E5CC';
color: rgba(255, 255, 255, 0.7);
vertical-align: top;
display: inline-block;
font-family: 'Material Icons';
font-weight: normal;
font-style: normal;
font-size: 25px;
margin: 0 10px 0 8px;
-webkit-font-smoothing: antialiased;}
&:first-child:before {display: none;}
&:last-child {color: #fff;}`;;
export const parallax_container = css`position: relative;
overflow: hidden;
height: 500px;
&.parallax {position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
z-index: -1;}
&.parallax img {display: none;
position: absolute;
left: 50%;
bottom: 0;
min-width: 100%;
min-height: 100%;
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);
-webkit-transform: translateX(-50%);
transform: translateX(-50%);}`;;
export const pin_top = css`position: relative;`;;
export const pin_bottom = css`position: relative;`;;
export const pinned = css`position: fixed;`;;
export const tag_ul_and_staggered_list = css`&li {opacity: 0;}`;;
export const fade_in = css`opacity: 0;
-webkit-transform-origin: 0 50%;
transform-origin: 0 50%;`;;
export const hide_on_small_only = css`@media only screen and (max-width: 600px) {
display: none;
}`;;
export const hide_on_small_and_down = css`@media only screen and (max-width: 600px) {
display: none;
}`;;
export const hide_on_med_and_down = css`@media only screen and (max-width: 992px) {
display: none;
}`;;
export const hide_on_med_and_up = css`@media only screen and (min-width: 601px) {
display: none;
}`;;
export const hide_on_med_only = css`@media only screen and (min-width: 600px) and (max-width: 992px) {
display: none;
}`;;
export const hide_on_large_only = css`@media only screen and (min-width: 993px) {
display: none;
}`;;
export const show_on_large = css`@media only screen and (min-width: 993px) {
display: block;
}`;;
export const show_on_medium = css`@media only screen and (min-width: 600px) and (max-width: 992px) {
display: block;
}`;;
export const show_on_small = css`@media only screen and (max-width: 600px) {
display: block;
}`;;
export const show_on_medium_and_up = css`@media only screen and (min-width: 601px) {
display: block;
}`;;
export const show_on_medium_and_down = css`@media only screen and (max-width: 992px) {
display: block;
}`;;
export const center_on_small_only = css`@media only screen and (max-width: 600px) {
text-align: center;
}`;;
export const page_footer = css`padding-top: 20px;
color: #fff;
background-color: #ee6e73;
&.footer-copyright {overflow: hidden;
min-height: 50px;
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-align: center;
-webkit-align-items: center;
-ms-flex-align: center;
align-items: center;
padding: 10px 0px;
color: rgba(255, 255, 255, 0.8);
background-color: rgba(51, 51, 51, 0.08);}
&.footer-copyright {font-weight: 300;}`;;
export const tag_table_and_bordered = css`&> thead > tr {border-bottom: 1px solid #d0d0d0;}
&> tbody > tr {border-bottom: 1px solid #d0d0d0;}`;;
export const tag_table_and_striped = css`&> tbody > tr:nth-child(odd) {background-color: #f2f2f2;}
&> tbody > tr > td {border-radius: 0;}`;;
export const tag_table_and_highlight = css`&> tbody > tr {-webkit-transition: background-color .25s ease;
transition: background-color .25s ease;}
&> tbody > tr:hover {background-color: #f2f2f2;}`;;
export const tag_table_and_centered = css`&thead tr th {text-align: center;}
&tbody tr td {text-align: center;}`;;
export const tag_thead = css`border-bottom: 1px solid #d0d0d0;`;;
export const tag_table_and_responsive_table = css`@media only screen and (max-width: 992px) {
width: 100%;
border-collapse: collapse;
border-spacing: 0;
display: block;
position: relative;
}
&td:empty:before {@media only screen and (max-width: 992px) {
content: '\\00a0';
}}
&th {@media only screen and (max-width: 992px) {
margin: 0;
vertical-align: top;
}}
&td {@media only screen and (max-width: 992px) {
margin: 0;
vertical-align: top;
}}
&th {@media only screen and (max-width: 992px) {
text-align: left;
}}
&thead {@media only screen and (max-width: 992px) {
display: block;
float: left;
}}
&thead tr {@media only screen and (max-width: 992px) {
display: block;
padding: 0 10px 0 0;
}}
&thead tr th::before {@media only screen and (max-width: 992px) {
content: "\\00a0";
}}
&tbody {@media only screen and (max-width: 992px) {
display: block;
width: auto;
position: relative;
overflow-x: auto;
white-space: nowrap;
}}
&tbody tr {@media only screen and (max-width: 992px) {
display: inline-block;
vertical-align: top;
}}
&th {@media only screen and (max-width: 992px) {
display: block;
text-align: right;
}}
&td {@media only screen and (max-width: 992px) {
display: block;
min-height: 1.25em;
text-align: left;
}}
&tr {@media only screen and (max-width: 992px) {
padding: 0 10px;
}}
&thead {@media only screen and (max-width: 992px) {
border: 0;
border-right: 1px solid #d0d0d0;
}}`;;
export const tag_table_and_responsive_table_and_bordered = css`&th {@media only screen and (max-width: 992px) {
border-bottom: 0;
border-left: 0;
}}
&td {@media only screen and (max-width: 992px) {
border-left: 0;
border-right: 0;
border-bottom: 0;
}}
&tr {@media only screen and (max-width: 992px) {
border: 0;
}}
&tbody tr {@media only screen and (max-width: 992px) {
border-right: 1px solid #d0d0d0;
}}`;;
export const collection = css`margin: 0.5rem 0 1rem 0;
border: 1px solid #e0e0e0;
border-radius: 2px;
overflow: hidden;
position: relative;
&.collection-item {background-color: #fff;
line-height: 1.5rem;
padding: 10px 20px;
margin: 0;
border-bottom: 1px solid #e0e0e0;}
&.collection-item.avatar {min-height: 84px;
padding-left: 72px;
position: relative;}
&.collection-item.avatar:not(.circle-clipper) > .circle {position: absolute;
width: 42px;
height: 42px;
overflow: hidden;
left: 15px;
display: inline-block;
vertical-align: middle;}
&.collection-item.avatar :not(.circle-clipper) > .circle {position: absolute;
width: 42px;
height: 42px;
overflow: hidden;
left: 15px;
display: inline-block;
vertical-align: middle;}
&.collection-item.avatar i.circle {font-size: 18px;
line-height: 42px;
color: #fff;
background-color: #999;
text-align: center;}
&.collection-item.avatar .title {font-size: 16px;}
&.collection-item.avatar p {margin: 0;}
&.collection-item.avatar .secondary-content {position: absolute;
top: 16px;
right: 16px;}
&.collection-item:last-child {border-bottom: none;}
&.collection-item.active {background-color: #26a69a;
color: #eafaf9;}
&.collection-item.active .secondary-content {color: #fff;}
&a.collection-item {display: block;
-webkit-transition: .25s;
transition: .25s;
color: #26a69a;}
&a.collection-item:not(.active):hover {background-color: #ddd;}`;;
export const collection_and_with_header = css`&.collection-header {background-color: #fff;
border-bottom: 1px solid #e0e0e0;
padding: 10px 20px;}
&.collection-item {padding-left: 30px;}
&.collection-item.avatar {padding-left: 72px;}`;;
export const secondary_content = css`float: right;
color: #26a69a;`;;
export const video_container = css`position: relative;
padding-bottom: 56.25%;
height: 0;
overflow: hidden;
&iframe {position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;}
&object {position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;}
&embed {position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;}`;;
export const progress = css`position: relative;
height: 4px;
display: block;
width: 100%;
background-color: #acece6;
border-radius: 2px;
margin: 0.5rem 0 1rem 0;
overflow: hidden;
&.determinate {position: absolute;
top: 0;
left: 0;
bottom: 0;
background-color: #26a69a;
-webkit-transition: width .3s linear;
transition: width .3s linear;}
&.indeterminate {background-color: #26a69a;}
&.indeterminate:before {content: '';
position: absolute;
background-color: inherit;
top: 0;
left: 0;
bottom: 0;
will-change: left, right;
-webkit-animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
animation: indeterminate 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;}
&.indeterminate:after {content: '';
position: absolute;
background-color: inherit;
top: 0;
left: 0;
bottom: 0;
will-change: left, right;
-webkit-animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
animation: indeterminate-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
-webkit-animation-delay: 1.15s;
animation-delay: 1.15s;}`;;
export const hide = css`display: none;`;;
export const left_align = css`text-align: left;`;;
export const right_align = css`text-align: right;`;;
export const center = css`text-align: center;`;;
export const center_align = css`text-align: center;`;;
export const left = css`float: left;`;;
export const right = css`float: right;`;;
export const no_select = css`-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;`;;
export const circle = css`border-radius: 50%;`;;
export const center_block = css`display: block;
margin-left: auto;
margin-right: auto;`;;
export const truncate = css`display: block;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;`;;
export const no_padding = css`padding: 0;`;;
export const tag_span_and_badge = css`min-width: 3rem;
padding: 0 6px;
margin-left: 14px;
text-align: center;
font-size: 1rem;
line-height: 22px;
height: 22px;
color: #757575;
float: right;
-webkit-box-sizing: border-box;
box-sizing: border-box;`;;
export const tag_span_and_badge_and_new = css`font-weight: 300;
font-size: 0.8rem;
color: #fff;
background-color: #26a69a;
border-radius: 2px;
&:after {content: " new";}`;;
export const collection_item = css`&span.badge {margin-top: calc(0.75rem - 11px);}`;;
export const material_icons = css`text-rendering: optimizeLegibility;
-webkit-font-feature-settings: 'liga';
-moz-font-feature-settings: 'liga';
font-feature-settings: 'liga';`;;
export const container = css`margin: 0 auto;
max-width: 1280px;
width: 90%;
@media only screen and (min-width: 601px) {
width: 85%;
}
@media only screen and (min-width: 993px) {
width: 70%;
}
&.row {margin-left: -0.75rem;
margin-right: -0.75rem;}`;;
export const section = css`padding-top: 1rem;
padding-bottom: 1rem;`;;
export const section_and_no_pad = css`padding: 0;`;;
export const section_and_no_pad_bot = css`padding-bottom: 0;`;;
export const section_and_no_pad_top = css`padding-top: 0;`;;
export const row = css`margin-left: auto;
margin-right: auto;
margin-bottom: 20px;
&:after {content: "";
display: table;
clear: both;}
&.col {float: left;
-webkit-box-sizing: border-box;
box-sizing: border-box;
padding: 0 0.75rem;
min-height: 1px;}
&.col[class*="push-"] {position: relative;}
&.col[class*="pull-"] {position: relative;}
&.col.s1 {width: 8.3333333333%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s2 {width: 16.6666666667%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s3 {width: 25%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s4 {width: 33.3333333333%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s5 {width: 41.6666666667%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s6 {width: 50%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s7 {width: 58.3333333333%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s8 {width: 66.6666666667%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s9 {width: 75%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s10 {width: 83.3333333333%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s11 {width: 91.6666666667%;
margin-left: auto;
left: auto;
right: auto;}
&.col.s12 {width: 100%;
margin-left: auto;
left: auto;
right: auto;}
&.col.offset-s1 {margin-left: 8.3333333333%;}
&.col.pull-s1 {right: 8.3333333333%;}
&.col.push-s1 {left: 8.3333333333%;}
&.col.offset-s2 {margin-left: 16.6666666667%;}
&.col.pull-s2 {right: 16.6666666667%;}
&.col.push-s2 {left: 16.6666666667%;}
&.col.offset-s3 {margin-left: 25%;}
&.col.pull-s3 {right: 25%;}
&.col.push-s3 {left: 25%;}
&.col.offset-s4 {margin-left: 33.3333333333%;}
&.col.pull-s4 {right: 33.3333333333%;}
&.col.push-s4 {left: 33.3333333333%;}
&.col.offset-s5 {margin-left: 41.6666666667%;}
&.col.pull-s5 {right: 41.6666666667%;}
&.col.push-s5 {left: 41.6666666667%;}
&.col.offset-s6 {margin-left: 50%;}
&.col.pull-s6 {right: 50%;}
&.col.push-s6 {left: 50%;}
&.col.offset-s7 {margin-left: 58.3333333333%;}
&.col.pull-s7 {right: 58.3333333333%;}
&.col.push-s7 {left: 58.3333333333%;}
&.col.offset-s8 {margin-left: 66.6666666667%;}
&.col.pull-s8 {right: 66.6666666667%;}
&.col.push-s8 {left: 66.6666666667%;}
&.col.offset-s9 {margin-left: 75%;}
&.col.pull-s9 {right: 75%;}
&.col.push-s9 {left: 75%;}
&.col.offset-s10 {margin-left: 83.3333333333%;}
&.col.pull-s10 {right: 83.3333333333%;}
&.col.push-s10 {left: 83.3333333333%;}
&.col.offset-s11 {margin-left: 91.6666666667%;}
&.col.pull-s11 {right: 91.6666666667%;}
&.col.push-s11 {left: 91.6666666667%;}
&.col.offset-s12 {margin-left: 100%;}
&.col.pull-s12 {right: 100%;}
&.col.push-s12 {left: 100%;}
&.col.m1 {@media only screen and (min-width: 601px) {
width: 8.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m2 {@media only screen and (min-width: 601px) {
width: 16.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m3 {@media only screen and (min-width: 601px) {
width: 25%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m4 {@media only screen and (min-width: 601px) {
width: 33.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m5 {@media only screen and (min-width: 601px) {
width: 41.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m6 {@media only screen and (min-width: 601px) {
width: 50%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m7 {@media only screen and (min-width: 601px) {
width: 58.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m8 {@media only screen and (min-width: 601px) {
width: 66.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m9 {@media only screen and (min-width: 601px) {
width: 75%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m10 {@media only screen and (min-width: 601px) {
width: 83.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m11 {@media only screen and (min-width: 601px) {
width: 91.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.m12 {@media only screen and (min-width: 601px) {
width: 100%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.offset-m1 {@media only screen and (min-width: 601px) {
margin-left: 8.3333333333%;
}}
&.col.pull-m1 {@media only screen and (min-width: 601px) {
right: 8.3333333333%;
}}
&.col.push-m1 {@media only screen and (min-width: 601px) {
left: 8.3333333333%;
}}
&.col.offset-m2 {@media only screen and (min-width: 601px) {
margin-left: 16.6666666667%;
}}
&.col.pull-m2 {@media only screen and (min-width: 601px) {
right: 16.6666666667%;
}}
&.col.push-m2 {@media only screen and (min-width: 601px) {
left: 16.6666666667%;
}}
&.col.offset-m3 {@media only screen and (min-width: 601px) {
margin-left: 25%;
}}
&.col.pull-m3 {@media only screen and (min-width: 601px) {
right: 25%;
}}
&.col.push-m3 {@media only screen and (min-width: 601px) {
left: 25%;
}}
&.col.offset-m4 {@media only screen and (min-width: 601px) {
margin-left: 33.3333333333%;
}}
&.col.pull-m4 {@media only screen and (min-width: 601px) {
right: 33.3333333333%;
}}
&.col.push-m4 {@media only screen and (min-width: 601px) {
left: 33.3333333333%;
}}
&.col.offset-m5 {@media only screen and (min-width: 601px) {
margin-left: 41.6666666667%;
}}
&.col.pull-m5 {@media only screen and (min-width: 601px) {
right: 41.6666666667%;
}}
&.col.push-m5 {@media only screen and (min-width: 601px) {
left: 41.6666666667%;
}}
&.col.offset-m6 {@media only screen and (min-width: 601px) {
margin-left: 50%;
}}
&.col.pull-m6 {@media only screen and (min-width: 601px) {
right: 50%;
}}
&.col.push-m6 {@media only screen and (min-width: 601px) {
left: 50%;
}}
&.col.offset-m7 {@media only screen and (min-width: 601px) {
margin-left: 58.3333333333%;
}}
&.col.pull-m7 {@media only screen and (min-width: 601px) {
right: 58.3333333333%;
}}
&.col.push-m7 {@media only screen and (min-width: 601px) {
left: 58.3333333333%;
}}
&.col.offset-m8 {@media only screen and (min-width: 601px) {
margin-left: 66.6666666667%;
}}
&.col.pull-m8 {@media only screen and (min-width: 601px) {
right: 66.6666666667%;
}}
&.col.push-m8 {@media only screen and (min-width: 601px) {
left: 66.6666666667%;
}}
&.col.offset-m9 {@media only screen and (min-width: 601px) {
margin-left: 75%;
}}
&.col.pull-m9 {@media only screen and (min-width: 601px) {
right: 75%;
}}
&.col.push-m9 {@media only screen and (min-width: 601px) {
left: 75%;
}}
&.col.offset-m10 {@media only screen and (min-width: 601px) {
margin-left: 83.3333333333%;
}}
&.col.pull-m10 {@media only screen and (min-width: 601px) {
right: 83.3333333333%;
}}
&.col.push-m10 {@media only screen and (min-width: 601px) {
left: 83.3333333333%;
}}
&.col.offset-m11 {@media only screen and (min-width: 601px) {
margin-left: 91.6666666667%;
}}
&.col.pull-m11 {@media only screen and (min-width: 601px) {
right: 91.6666666667%;
}}
&.col.push-m11 {@media only screen and (min-width: 601px) {
left: 91.6666666667%;
}}
&.col.offset-m12 {@media only screen and (min-width: 601px) {
margin-left: 100%;
}}
&.col.pull-m12 {@media only screen and (min-width: 601px) {
right: 100%;
}}
&.col.push-m12 {@media only screen and (min-width: 601px) {
left: 100%;
}}
&.col.l1 {@media only screen and (min-width: 993px) {
width: 8.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l2 {@media only screen and (min-width: 993px) {
width: 16.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l3 {@media only screen and (min-width: 993px) {
width: 25%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l4 {@media only screen and (min-width: 993px) {
width: 33.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l5 {@media only screen and (min-width: 993px) {
width: 41.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l6 {@media only screen and (min-width: 993px) {
width: 50%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l7 {@media only screen and (min-width: 993px) {
width: 58.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l8 {@media only screen and (min-width: 993px) {
width: 66.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l9 {@media only screen and (min-width: 993px) {
width: 75%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l10 {@media only screen and (min-width: 993px) {
width: 83.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l11 {@media only screen and (min-width: 993px) {
width: 91.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.l12 {@media only screen and (min-width: 993px) {
width: 100%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.offset-l1 {@media only screen and (min-width: 993px) {
margin-left: 8.3333333333%;
}}
&.col.pull-l1 {@media only screen and (min-width: 993px) {
right: 8.3333333333%;
}}
&.col.push-l1 {@media only screen and (min-width: 993px) {
left: 8.3333333333%;
}}
&.col.offset-l2 {@media only screen and (min-width: 993px) {
margin-left: 16.6666666667%;
}}
&.col.pull-l2 {@media only screen and (min-width: 993px) {
right: 16.6666666667%;
}}
&.col.push-l2 {@media only screen and (min-width: 993px) {
left: 16.6666666667%;
}}
&.col.offset-l3 {@media only screen and (min-width: 993px) {
margin-left: 25%;
}}
&.col.pull-l3 {@media only screen and (min-width: 993px) {
right: 25%;
}}
&.col.push-l3 {@media only screen and (min-width: 993px) {
left: 25%;
}}
&.col.offset-l4 {@media only screen and (min-width: 993px) {
margin-left: 33.3333333333%;
}}
&.col.pull-l4 {@media only screen and (min-width: 993px) {
right: 33.3333333333%;
}}
&.col.push-l4 {@media only screen and (min-width: 993px) {
left: 33.3333333333%;
}}
&.col.offset-l5 {@media only screen and (min-width: 993px) {
margin-left: 41.6666666667%;
}}
&.col.pull-l5 {@media only screen and (min-width: 993px) {
right: 41.6666666667%;
}}
&.col.push-l5 {@media only screen and (min-width: 993px) {
left: 41.6666666667%;
}}
&.col.offset-l6 {@media only screen and (min-width: 993px) {
margin-left: 50%;
}}
&.col.pull-l6 {@media only screen and (min-width: 993px) {
right: 50%;
}}
&.col.push-l6 {@media only screen and (min-width: 993px) {
left: 50%;
}}
&.col.offset-l7 {@media only screen and (min-width: 993px) {
margin-left: 58.3333333333%;
}}
&.col.pull-l7 {@media only screen and (min-width: 993px) {
right: 58.3333333333%;
}}
&.col.push-l7 {@media only screen and (min-width: 993px) {
left: 58.3333333333%;
}}
&.col.offset-l8 {@media only screen and (min-width: 993px) {
margin-left: 66.6666666667%;
}}
&.col.pull-l8 {@media only screen and (min-width: 993px) {
right: 66.6666666667%;
}}
&.col.push-l8 {@media only screen and (min-width: 993px) {
left: 66.6666666667%;
}}
&.col.offset-l9 {@media only screen and (min-width: 993px) {
margin-left: 75%;
}}
&.col.pull-l9 {@media only screen and (min-width: 993px) {
right: 75%;
}}
&.col.push-l9 {@media only screen and (min-width: 993px) {
left: 75%;
}}
&.col.offset-l10 {@media only screen and (min-width: 993px) {
margin-left: 83.3333333333%;
}}
&.col.pull-l10 {@media only screen and (min-width: 993px) {
right: 83.3333333333%;
}}
&.col.push-l10 {@media only screen and (min-width: 993px) {
left: 83.3333333333%;
}}
&.col.offset-l11 {@media only screen and (min-width: 993px) {
margin-left: 91.6666666667%;
}}
&.col.pull-l11 {@media only screen and (min-width: 993px) {
right: 91.6666666667%;
}}
&.col.push-l11 {@media only screen and (min-width: 993px) {
left: 91.6666666667%;
}}
&.col.offset-l12 {@media only screen and (min-width: 993px) {
margin-left: 100%;
}}
&.col.pull-l12 {@media only screen and (min-width: 993px) {
right: 100%;
}}
&.col.push-l12 {@media only screen and (min-width: 993px) {
left: 100%;
}}
&.col.xl1 {@media only screen and (min-width: 1201px) {
width: 8.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl2 {@media only screen and (min-width: 1201px) {
width: 16.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl3 {@media only screen and (min-width: 1201px) {
width: 25%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl4 {@media only screen and (min-width: 1201px) {
width: 33.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl5 {@media only screen and (min-width: 1201px) {
width: 41.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl6 {@media only screen and (min-width: 1201px) {
width: 50%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl7 {@media only screen and (min-width: 1201px) {
width: 58.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl8 {@media only screen and (min-width: 1201px) {
width: 66.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl9 {@media only screen and (min-width: 1201px) {
width: 75%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl10 {@media only screen and (min-width: 1201px) {
width: 83.3333333333%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl11 {@media only screen and (min-width: 1201px) {
width: 91.6666666667%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.xl12 {@media only screen and (min-width: 1201px) {
width: 100%;
margin-left: auto;
left: auto;
right: auto;
}}
&.col.offset-xl1 {@media only screen and (min-width: 1201px) {
margin-left: 8.3333333333%;
}}
&.col.pull-xl1 {@media only screen and (min-width: 1201px) {
right: 8.3333333333%;
}}
&.col.push-xl1 {@media only screen and (min-width: 1201px) {
left: 8.3333333333%;
}}
&.col.offset-xl2 {@media only screen and (min-width: 1201px) {
margin-left: 16.6666666667%;
}}
&.col.pull-xl2 {@media only screen and (min-width: 1201px) {
right: 16.6666666667%;
}}
&.col.push-xl2 {@media only screen and (min-width: 1201px) {
left: 16.6666666667%;
}}
&.col.offset-xl3 {@media only screen and (min-width: 1201px) {
margin-left: 25%;
}}
&.col.pull-xl3 {@media only screen and (min-width: 1201px) {
right: 25%;
}}
&.col.push-xl3 {@media only screen and (min-width: 1201px) {
left: 25%;
}}
&.col.offset-xl4 {@media only screen and (min-width: 1201px) {
margin-left: 33.3333333333%;
}}
&.col.pull-xl4 {@media only screen and (min-width: 1201px) {
right: 33.3333333333%;
}}
&.col.push-xl4 {@media only screen and (min-width: 1201px) {
left: 33.3333333333%;
}}
&.col.offset-xl5 {@media only screen and (min-width: 1201px) {
margin-left: 41.6666666667%;
}}
&.col.pull-xl5 {@media only screen and (min-width: 1201px) {
right: 41.6666666667%;
}}
&.col.push-xl5 {@media only screen and (min-width: 1201px) {
left: 41.6666666667%;
}}
&.col.offset-xl6 {@media only screen and (min-width: 1201px) {
margin-left: 50%;
}}
&.col.pull-xl6 {@media only screen and (min-width: 1201px) {
right: 50%;
}}
&.col.push-xl6 {@media only screen and (min-width: 1201px) {
left: 50%;
}}
&.col.offset-xl7 {@media only screen and (min-width: 1201px) {
margin-left: 58.3333333333%;
}}
&.col.pull-xl7 {@media only screen and (min-width: 1201px) {
right: 58.3333333333%;
}}
&.col.push-xl7 {@media only screen and (min-width: 1201px) {
left: 58.3333333333%;
}}
&.col.offset-xl8 {@media only screen and (min-width: 1201px) {
margin-left: 66.6666666667%;
}}
&.col.pull-xl8 {@media only screen and (min-width: 1201px) {
right: 66.6666666667%;
}}
&.col.push-xl8 {@media only screen and (min-width: 1201px) {
left: 66.6666666667%;
}}
&.col.offset-xl9 {@media only screen and (min-width: 1201px) {
margin-left: 75%;
}}
&.col.pull-xl9 {@media only screen and (min-width: 1201px) {
right: 75%;
}}
&.col.push-xl9 {@media only screen and (min-width: 1201px) {
left: 75%;
}}
&.col.offset-xl10 {@media only screen and (min-width: 1201px) {
margin-left: 83.3333333333%;
}}
&.col.pull-xl10 {@media only screen and (min-width: 1201px) {
right: 83.3333333333%;
}}
&.col.push-xl10 {@media only screen and (min-width: 1201px) {
left: 83.3333333333%;
}}
&.col.offset-xl11 {@media only screen and (min-width: 1201px) {
margin-left: 91.6666666667%;
}}
&.col.pull-xl11 {@media only screen and (min-width: 1201px) {
right: 91.6666666667%;
}}
&.col.push-xl11 {@media only screen and (min-width: 1201px) {
left: 91.6666666667%;
}}
&.col.offset-xl12 {@media only screen and (min-width: 1201px) {
margin-left: 100%;
}}
&.col.pull-xl12 {@media only screen and (min-width: 1201px) {
right: 100%;
}}
&.col.push-xl12 {@media only screen and (min-width: 1201px) {
left: 100%;
}}`;;
export const tag_nav_and_nav_extended = css`height: auto;
&.nav-wrapper {min-height: 56px;
height: auto;}
&.nav-content {position: relative;
line-height: normal;}
&.nav-wrapper {@media only screen and (min-width: 601px) {
min-height: 64px;
}}`;;
export const navbar_fixed = css`position: relative;
height: 56px;
z-index: 997;
&nav {position: fixed;}
@media only screen and (min-width: 601px) {
height: 64px;
}`;;
export const tag_h2 = css`font-weight: 400;
line-height: 1.1;
&a {font-weight: inherit;}
font-size: 3.56rem;
line-height: 110%;
margin: 1.78rem 0 1.424rem 0;`;;
export const tag_h3 = css`font-weight: 400;
line-height: 1.1;
&a {font-weight: inherit;}
font-size: 2.92rem;
line-height: 110%;
margin: 1.46rem 0 1.168rem 0;`;;
export const tag_h4 = css`font-weight: 400;
line-height: 1.1;
&a {font-weight: inherit;}
font-size: 2.28rem;
line-height: 110%;
margin: 1.14rem 0 0.912rem 0;`;;
export const tag_h5 = css`font-weight: 400;
line-height: 1.1;
&a {font-weight: inherit;}
font-size: 1.64rem;
line-height: 110%;
margin: 0.82rem 0 0.656rem 0;`;;
export const tag_h6 = css`font-weight: 400;
line-height: 1.1;
&a {font-weight: inherit;}
font-size: 1rem;
line-height: 110%;
margin: 0.5rem 0 0.4rem 0;`;;
export const tag_em = css`font-style: italic;`;;
export const light = css`font-weight: 300;`;;
export const thin = css`font-weight: 200;`;;
export const flow_text = css`font-weight: 300;
@media only screen and (min-width: 360px) {
font-size: 1.2rem;
}
@media only screen and (min-width: 390px) {
font-size: 1.224rem;
}
@media only screen and (min-width: 420px) {
font-size: 1.248rem;
}
@media only screen and (min-width: 450px) {
font-size: 1.272rem;
}
@media only screen and (min-width: 480px) {
font-size: 1.296rem;
}
@media only screen and (min-width: 510px) {
font-size: 1.32rem;
}
@media only screen and (min-width: 540px) {
font-size: 1.344rem;
}
@media only screen and (min-width: 570px) {
font-size: 1.368rem;
}
@media only screen and (min-width: 600px) {
font-size: 1.392rem;
}
@media only screen and (min-width: 630px) {
font-size: 1.416rem;
}
@media only screen and (min-width: 660px) {
font-size: 1.44rem;
}
@media only screen and (min-width: 690px) {
font-size: 1.464rem;
}
@media only screen and (min-width: 720px) {
font-size: 1.488rem;
}
@media only screen and (min-width: 750px) {
font-size: 1.512rem;
}
@media only screen and (min-width: 780px) {
font-size: 1.536rem;
}
@media only screen and (min-width: 810px) {
font-size: 1.56rem;
}
@media only screen and (min-width: 840px) {
font-size: 1.584rem;
}
@media only screen and (min-width: 870px) {
font-size: 1.608rem;
}
@media only screen and (min-width: 900px) {
font-size: 1.632rem;
}
@media only screen and (min-width: 930px) {
font-size: 1.656rem;
}
@media only screen and (min-width: 960px) {
font-size: 1.68rem;
}
@media only screen and (max-width: 360px) {
font-size: 1.2rem;
}`;;
export const scale_transition = css`-webkit-transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63);
transition: -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63);
transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63);
transition: transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63), -webkit-transform 0.3s cubic-bezier(0.53, 0.01, 0.36, 1.63);`;;
export const scale_transition_and_scale_out = css`-webkit-transform: scale(0);
transform: scale(0);
-webkit-transition: -webkit-transform .2s;
transition: -webkit-transform .2s;
transition: transform .2s;
transition: transform .2s, -webkit-transform .2s;`;;
export const scale_transition_and_scale_in = css`-webkit-transform: scale(1);
transform: scale(1);`;;
export const card_and_small = css`position: relative;
&.card-image {max-height: 60%;
overflow: hidden;}
&.card-image + .card-content {max-height: 40%;}
&.card-content {max-height: 100%;
overflow: hidden;}
&.card-action {position: absolute;
bottom: 0;
left: 0;
right: 0;}
height: 300px;`;;
export const card_and_medium = css`position: relative;
&.card-image {max-height: 60%;
overflow: hidden;}
&.card-image + .card-content {max-height: 40%;}
&.card-content {max-height: 100%;
overflow: hidden;}
&.card-action {position: absolute;
bottom: 0;
left: 0;
right: 0;}
height: 400px;`;;
export const card_and_large = css`position: relative;
&.card-image {max-height: 60%;
overflow: hidden;}
&.card-image + .card-content {max-height: 40%;}
&.card-content {max-height: 100%;
overflow: hidden;}
&.card-action {position: absolute;
bottom: 0;
left: 0;
right: 0;}
height: 500px;`;;
export const card_and_horizontal = css`display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
&.card-image {max-width: 50%;}
&.card-image img {border-radius: 2px 0 0 2px;
max-width: 100%;
width: auto;}
&.card-stacked {display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: vertical;
-webkit-box-direction: normal;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-flex: 1;
-webkit-flex: 1;
-ms-flex: 1;
flex: 1;
position: relative;}
&.card-stacked .card-content {-webkit-box-flex: 1;
-webkit-flex-grow: 1;
-ms-flex-positive: 1;
flex-grow: 1;}`;;
export const card_and_horizontal_and_small = css`&.card-image {height: 100%;
max-height: none;
overflow: visible;}
&.card-image img {height: 100%;}`;;
export const card_and_horizontal_and_medium = css`&.card-image {height: 100%;
max-height: none;
overflow: visible;}
&.card-image img {height: 100%;}`;;
export const card_and_horizontal_and_large = css`&.card-image {height: 100%;
max-height: none;
overflow: visible;}
&.card-image img {height: 100%;}`;;
export const card_and_sticky_action = css`&.card-action {z-index: 2;}
&.card-reveal {z-index: 1;
padding-bottom: 64px;}`;;
export const $toast_container = css`display: block;
position: fixed;
z-index: 10000;
@media only screen and (max-width: 600px) {
min-width: 100%;
bottom: 0%;
}
@media only screen and (min-width: 601px) and (max-width: 992px) {
left: 5%;
bottom: 7%;
max-width: 90%;
}
@media only screen and (min-width: 993px) {
top: 10%;
right: 7%;
max-width: 86%;
}`;;
export const toast_and_rounded = css`border-radius: 24px;`;;
export const tabs = css`position: relative;
overflow-x: auto;
overflow-y: hidden;
height: 48px;
width: 100%;
background-color: #fff;
margin: 0 auto;
white-space: nowrap;
&.tab {display: inline-block;
text-align: center;
line-height: 48px;
height: 48px;
padding: 0;
margin: 0;
text-transform: uppercase;}
&.tab a {color: rgba(238, 110, 115, 0.7);
display: block;
width: 100%;
height: 100%;
padding: 0 24px;
font-size: 14px;
text-overflow: ellipsis;
overflow: hidden;
-webkit-transition: color .28s ease;
transition: color .28s ease;}
&.tab a:hover {background-color: transparent;
color: #ee6e73;}
&.tab a.active {background-color: transparent;
color: #ee6e73;}
&.tab.disabled a {color: rgba(238, 110, 115, 0.7);
cursor: default;}
&.tab.disabled a:hover {color: rgba(238, 110, 115, 0.7);
cursor: default;}
&.indicator {position: absolute;
bottom: 0;
height: 2px;
background-color: #f6b2b5;
will-change: left, right;}
@media only screen and (max-width: 992px) {
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
}
&.tab {@media only screen and (max-width: 992px) {
-webkit-box-flex: 1;
-webkit-flex-grow: 1;
-ms-flex-positive: 1;
flex-grow: 1;
}}
&.tab a {@media only screen and (max-width: 992px) {
padding: 0 12px;
}}`;;
export const tabs_and_tabs_transparent = css`background-color: transparent;
&.tab a {color: rgba(255, 255, 255, 0.7);}
&.tab.disabled a {color: rgba(255, 255, 255, 0.7);}
&.tab.disabled a:hover {color: rgba(255, 255, 255, 0.7);}
&.tab a:hover {color: #fff;}
&.tab a.active {color: #fff;}
&.indicator {background-color: #fff;}`;;
export const tabs_and_tabs_fixed_width = css`display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
&.tab {-webkit-box-flex: 1;
-webkit-flex-grow: 1;
-ms-flex-positive: 1;
flex-grow: 1;}`;;
export const material_tooltip = css`padding: 10px 8px;
font-size: 1rem;
z-index: 2000;
background-color: transparent;
border-radius: 2px;
color: #fff;
min-height: 36px;
line-height: 120%;
opacity: 0;
position: absolute;
text-align: center;
max-width: calc(100% - 4px);
overflow: hidden;
left: 0;
top: 0;
pointer-events: none;
visibility: hidden;`;;
export const backdrop = css`position: absolute;
opacity: 0;
height: 7px;
width: 14px;
border-radius: 0 0 50% 50%;
background-color: #323232;
z-index: -1;
-webkit-transform-origin: 50% 0%;
transform-origin: 50% 0%;
visibility: hidden;`;;
export const btn_flat = css`border: none;
border-radius: 2px;
display: inline-block;
height: 36px;
line-height: 36px;
padding: 0 2rem;
text-transform: uppercase;
vertical-align: middle;
-webkit-tap-highlight-color: transparent;
&:disabled {pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;}
&:disabled:hover {background-color: #DFDFDF;
color: #9F9F9F;}
font-size: 1rem;
outline: 0;
&i {font-size: 1.3rem;
line-height: inherit;}
-webkit-box-shadow: none;
box-shadow: none;
background-color: transparent;
color: #343434;
cursor: pointer;
-webkit-transition: background-color .2s;
transition: background-color .2s;
&:focus {-webkit-box-shadow: none;
box-shadow: none;}
&:hover {-webkit-box-shadow: none;
box-shadow: none;}
&:focus {background-color: rgba(0, 0, 0, 0.1);}`;;
export const btn_and_disabled = css`pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;
&:hover {background-color: #DFDFDF;
color: #9F9F9F;}`;;
export const disabled_and_btn_large = css`pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;
&:hover {background-color: #DFDFDF;
color: #9F9F9F;}`;;
export const btn_floating_and_disabled = css`pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;
&:hover {background-color: #DFDFDF;
color: #9F9F9F;}`;;
export const btn_large_and_disabled = css`pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;
&:hover {background-color: #DFDFDF;
color: #9F9F9F;}`;;
export const btn_flat_and_disabled = css`pointer-events: none;
background-color: #DFDFDF;
-webkit-box-shadow: none;
box-shadow: none;
color: #9F9F9F;
cursor: default;
&:hover {background-color: #DFDFDF;
color: #9F9F9F;}
background-color: transparent;
color: #b3b2b2;
cursor: default;`;;
export const btn_floating_and_btn_large = css`width: 56px;
height: 56px;
&i {line-height: 56px;}`;;
export const btn_floating_and_btn_large_and_halfway_fab = css`bottom: -28px;`;;
export const btn_floating_and_halfway_fab = css`position: absolute;
right: 24px;
bottom: -20px;`;;
export const btn_floating_and_halfway_fab_and_left = css`right: auto;
left: 24px;`;;
export const tag_button_and_btn_floating = css`border: none;`;;
export const fixed_action_btn = css`position: fixed;
right: 23px;
bottom: 23px;
padding-top: 15px;
margin-bottom: 0;
z-index: 997;
&ul {left: 0;
right: 0;
text-align: center;
position: absolute;
bottom: 64px;
margin: 0;
visibility: hidden;}
&ul li {margin-bottom: 15px;}
&ul a.btn-floating {opacity: 0;}
&.fab-backdrop {position: absolute;
top: 0;
left: 0;
z-index: -1;
width: 40px;
height: 40px;
background-color: #26a69a;
border-radius: 50%;
-webkit-transform: scale(0);
transform: scale(0);}`;;
export const fixed_action_btn_and_active = css`&ul {visibility: visible;}`;;
export const fixed_action_btn_and_horizontal = css`padding: 0 0 0 15px;
&ul {text-align: right;
right: 64px;
top: 50%;
-webkit-transform: translateY(-50%);
transform: translateY(-50%);
height: 100%;
left: auto;
width: 500px;}
&ul li {display: inline-block;
margin: 15px 15px 0 0;}`;;
export const fixed_action_btn_and_toolbar = css`padding: 0;
height: 56px;
&ul {display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
top: 0;
bottom: 0;
z-index: 1;}
&ul li {-webkit-box-flex: 1;
-webkit-flex: 1;
-ms-flex: 1;
flex: 1;
display: inline-block;
margin: 0;
height: 100%;
-webkit-transition: none;
transition: none;}
&ul li a {display: block;
overflow: hidden;
position: relative;
width: 100%;
height: 100%;
background-color: transparent;
-webkit-box-shadow: none;
box-shadow: none;
color: #fff;
line-height: 56px;
z-index: 1;}
&ul li a i {line-height: inherit;}`;;
export const fixed_action_btn_and_toolbar_and_active = css`&> a i {opacity: 0;}`;;
export const btn_block = css`display: block;`;;
export const input_field_and_col = css`&.dropdown-content [type="checkbox"] + label {top: 1px;
left: 0;
height: 18px;}
&label {left: 0.75rem;}
&.prefix ~ label {width: calc(100% - 3rem - 1.5rem);}
&.prefix ~ .validate ~ label {width: calc(100% - 3rem - 1.5rem);}`;;
export const waves_effect = css`position: relative;
cursor: pointer;
display: inline-block;
overflow: hidden;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
-webkit-tap-highlight-color: transparent;
vertical-align: middle;
z-index: 1;
-webkit-transition: .3s ease-out;
transition: .3s ease-out;
&.waves-ripple {position: absolute;
border-radius: 50%;
width: 20px;
height: 20px;
margin-top: -10px;
margin-left: -10px;
opacity: 0;
background: rgba(0, 0, 0, 0.2);
-webkit-transition: all 0.7s ease-out;
transition: all 0.7s ease-out;
-webkit-transition-property: opacity, -webkit-transform;
transition-property: opacity, -webkit-transform;
transition-property: transform, opacity;
transition-property: transform, opacity, -webkit-transform;
-webkit-transform: scale(0);
transform: scale(0);
pointer-events: none;}
&input[type="button"] {border: 0;
font-style: normal;
font-size: inherit;
text-transform: inherit;
background: none;}
&input[type="reset"] {border: 0;
font-style: normal;
font-size: inherit;
text-transform: inherit;
background: none;}
&input[type="submit"] {border: 0;
font-style: normal;
font-size: inherit;
text-transform: inherit;
background: none;}
&img {position: relative;
z-index: -1;}
&.waves-ripple {z-index: -1;}`;;
export const waves_effect_and_waves_light = css`&.waves-ripple {background-color: rgba(255, 255, 255, 0.45);}`;;
export const waves_effect_and_waves_red = css`&.waves-ripple {background-color: rgba(244, 67, 54, 0.7);}`;;
export const waves_effect_and_waves_yellow = css`&.waves-ripple {background-color: rgba(255, 235, 59, 0.7);}`;;
export const waves_effect_and_waves_orange = css`&.waves-ripple {background-color: rgba(255, 152, 0, 0.7);}`;;
export const waves_effect_and_waves_purple = css`&.waves-ripple {background-color: rgba(156, 39, 176, 0.7);}`;;
export const waves_effect_and_waves_green = css`&.waves-ripple {background-color: rgba(76, 175, 80, 0.7);}`;;
export const waves_effect_and_waves_teal = css`&.waves-ripple {background-color: rgba(0, 150, 136, 0.7);}`;;
export const waves_notransition = css`-webkit-transition: none;
transition: none;`;;
export const waves_circle = css`-webkit-transform: translateZ(0);
transform: translateZ(0);
-webkit-mask-image: -webkit-radial-gradient(circle, white 100%, black 100%);
text-align: center;
width: 2.5em;
height: 2.5em;
line-height: 2.5em;
border-radius: 50%;
-webkit-mask-image: none;`;;
export const waves_input_wrapper = css`border-radius: 0.2em;
vertical-align: bottom;
&.waves-button-input {position: relative;
top: 0;
left: 0;
z-index: 1;}`;;
export const waves_block = css`display: block;`;;
export const modal_overlay = css`position: fixed;
z-index: 999;
top: -25%;
left: 0;
bottom: 0;
right: 0;
height: 125%;
width: 100%;
background: #000;
display: none;
will-change: opacity;`;;
export const modal_and_modal_fixed_footer = css`padding: 0;
height: 70%;
&.modal-content {position: absolute;
height: calc(100% - 56px);
max-height: 100%;
width: 100%;
overflow-y: auto;}
&.modal-footer {border-top: 1px solid rgba(0, 0, 0, 0.1);
position: absolute;
bottom: 0;}`;;
export const modal_and_bottom_sheet = css`top: auto;
bottom: -100%;
margin: 0;
width: 100%;
max-height: 45%;
border-radius: 0;
will-change: bottom, opacity;`;;
export const collapsible_header = css`display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
cursor: pointer;
-webkit-tap-highlight-color: transparent;
line-height: 1.5;
padding: 1rem;
background-color: #fff;
border-bottom: 1px solid #ddd;
&i {width: 2rem;
font-size: 1.6rem;
display: inline-block;
text-align: center;
margin-right: 1rem;}`;;
export const collapsible_body = css`display: none;
border-bottom: 1px solid #ddd;
-webkit-box-sizing: border-box;
box-sizing: border-box;
padding: 2rem;`;;
export const side_nav_and_fixed = css`&.collapsible {border: none;
-webkit-box-shadow: none;
box-shadow: none;}
&.collapsible li {padding: 0;}
&.collapsible-header {background-color: transparent;
border: none;
line-height: inherit;
height: inherit;
padding: 0 16px;}
&.collapsible-header:hover {background-color: rgba(0, 0, 0, 0.05);}
&.collapsible-header i {line-height: inherit;}
&.collapsible-body {border: 0;
background-color: #fff;}
&.collapsible-body li a {padding: 0 23.5px 0 31px;}
left: 0;
-webkit-transform: translateX(0);
transform: translateX(0);
position: fixed;
@media only screen and (max-width: 992px) {
-webkit-transform: translateX(-105%);
transform: translateX(-105%);
}
&.collapsible-body > ul:not(.collapsible) > li.active {background-color: #ee6e73;}
&.collapsible-body > ul:not(.collapsible) > li.active a {color: #fff;}`;;
export const collapsible_and_popout = css`border: none;
-webkit-box-shadow: none;
box-shadow: none;
&> li {-webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
margin: 0 24px;
-webkit-transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
transition: margin 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);}
&> li.active {-webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);
margin: 16px 0;}`;;
export const chip = css`display: inline-block;
height: 32px;
font-size: 13px;
font-weight: 500;
color: rgba(0, 0, 0, 0.6);
line-height: 32px;
padding: 0 12px;
border-radius: 16px;
background-color: #e4e4e4;
margin-bottom: 5px;
margin-right: 5px;
&> img {float: left;
margin: 0 8px 0 -12px;
height: 32px;
width: 32px;
border-radius: 50%;}
&.close {cursor: pointer;
float: right;
font-size: 16px;
line-height: 32px;
padding-left: 8px;}`;;
export const chips = css`border: none;
border-bottom: 1px solid #9e9e9e;
-webkit-box-shadow: none;
box-shadow: none;
margin: 0 0 20px 0;
min-height: 45px;
outline: none;
-webkit-transition: all .3s;
transition: all .3s;
&:hover {cursor: text;}
&.chip.selected {background-color: #26a69a;
color: #fff;}
&.input {background: none;
border: 0;
color: rgba(0, 0, 0, 0.6);
display: inline-block;
font-size: 1rem;
height: 3rem;
line-height: 32px;
outline: 0;
margin: 0;
padding: 0;
width: 120px;}
&.input:focus {border: 0;
-webkit-box-shadow: none;
box-shadow: none;}
&.autocomplete-content {margin-top: 0;
margin-bottom: 0;}
&:empty ~ label {font-size: 0.8rem;
-webkit-transform: translateY(-140%);
transform: translateY(-140%);}`;;
export const chips_and_focus = css`border-bottom: 1px solid #26a69a;
-webkit-box-shadow: 0 1px 0 0 #26a69a;
box-shadow: 0 1px 0 0 #26a69a;`;;
export const prefix = css`&~ .chips {margin-left: 3rem;
width: 92%;
width: calc(100% - 3rem);}
&~ .select-wrapper {margin-left: 3rem;
width: 92%;
width: calc(100% - 3rem);}
&~ label {margin-left: 3rem;}`;;
export const materialboxed = css`display: block;
cursor: -webkit-zoom-in;
cursor: zoom-in;
position: relative;
-webkit-transition: opacity .4s;
transition: opacity .4s;
-webkit-backface-visibility: hidden;
&:hover:not(.active) {opacity: .8;}`;;
export const materialboxed_and_active = css`cursor: -webkit-zoom-out;
cursor: zoom-out;`;;
export const $materialbox_overlay = css`position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
background-color: #292929;
z-index: 1000;
will-change: opacity;`;;
export const materialbox_caption = css`position: fixed;
display: none;
color: #fff;
line-height: 50px;
bottom: 0;
left: 0;
width: 100%;
text-align: center;
padding: 0% 15%;
height: 50px;
z-index: 1000;
-webkit-font-smoothing: antialiased;`;;
export const tag_label = css`font-size: 0.8rem;
color: #9e9e9e;`;;
export const $$$$_webkit_input_placeholder = css`color: #d1d1d1;`;;
export const $$$$_moz_placeholder = css`color: #d1d1d1;`;;
export const $$_ms_input_placeholder = css`color: #d1d1d1;`;;
export const $$$$placeholder = css`color: #d1d1d1;`;;
export const tag_textarea_and_materialize_textarea = css`background-color: transparent;
border: none;
border-bottom: 1px solid #9e9e9e;
border-radius: 0;
outline: none;
height: 3rem;
width: 100%;
font-size: 1rem;
margin: 0 0 20px 0;
padding: 0;
-webkit-box-shadow: none;
box-shadow: none;
-webkit-box-sizing: content-box;
box-sizing: content-box;
-webkit-transition: all 0.3s;
transition: all 0.3s;
&:disabled {color: rgba(0, 0, 0, 0.42);
border-bottom: 1px dotted rgba(0, 0, 0, 0.42);}
&:disabled + label {color: rgba(0, 0, 0, 0.42);}
&:focus:not([readonly]) {border-bottom: 1px solid #26a69a;
-webkit-box-shadow: 0 1px 0 0 #26a69a;
box-shadow: 0 1px 0 0 #26a69a;}
&:focus:not([readonly]) + label {color: #26a69a;}
&:focus.valid + label:after {content: attr(data-success);
color: #4CAF50;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}
&:focus.invalid + label:after {content: attr(data-error);
color: #F44336;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}
&+ label:after {display: block;
content: "";
position: absolute;
top: 100%;
left: 0;
opacity: 0;
-webkit-transition: .2s opacity ease-out, .2s color ease-out;
transition: .2s opacity ease-out, .2s color ease-out;}
overflow-y: hidden;
padding: .8rem 0 1.6rem 0;
resize: none;
min-height: 3rem;`;;
export const tag_textarea_and_materialize_textarea_and_validate = css`&+ label {width: 100%;}
&+ label {height: 100%;}
&+ label::after {top: calc(100% - 12px);}
&+ label:not(.label-icon).active {-webkit-transform: translateY(-25px);
transform: translateY(-25px);}`;;
export const tag_textarea_and_materialize_textarea_and_invalid = css`&+ label:after {display: none;}
&+ label.active:after {display: block;}
border-bottom: 1px solid #F44336;
-webkit-box-shadow: 0 1px 0 0 #F44336;
box-shadow: 0 1px 0 0 #F44336;
&:focus {border-bottom: 1px solid #F44336;
-webkit-box-shadow: 0 1px 0 0 #F44336;
box-shadow: 0 1px 0 0 #F44336;}
&+ label:after {content: attr(data-error);
color: #F44336;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}`;;
export const tag_textarea_and_materialize_textarea_and_valid = css`&+ label:after {display: none;}
&+ label.active:after {display: block;}
border-bottom: 1px solid #4CAF50;
-webkit-box-shadow: 0 1px 0 0 #4CAF50;
box-shadow: 0 1px 0 0 #4CAF50;
&:focus {border-bottom: 1px solid #4CAF50;
-webkit-box-shadow: 0 1px 0 0 #4CAF50;
box-shadow: 0 1px 0 0 #4CAF50;}
&+ label:after {content: attr(data-success);
color: #4CAF50;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}`;;
export const tag_input_and_valid = css`&:not([type]) {border-bottom: 1px solid #4CAF50;
-webkit-box-shadow: 0 1px 0 0 #4CAF50;
box-shadow: 0 1px 0 0 #4CAF50;}
&:not([type]):focus {border-bottom: 1px solid #4CAF50;
-webkit-box-shadow: 0 1px 0 0 #4CAF50;
box-shadow: 0 1px 0 0 #4CAF50;}`;;
export const select_wrapper_and_valid = css`&> input.select-dropdown {border-bottom: 1px solid #4CAF50;
-webkit-box-shadow: 0 1px 0 0 #4CAF50;
box-shadow: 0 1px 0 0 #4CAF50;}
&+ label:after {content: attr(data-success);
color: #4CAF50;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}
&+ label {width: 100%;
pointer-events: none;}`;;
export const tag_input_and_invalid = css`&:not([type]) {border-bottom: 1px solid #F44336;
-webkit-box-shadow: 0 1px 0 0 #F44336;
box-shadow: 0 1px 0 0 #F44336;}
&:not([type]):focus {border-bottom: 1px solid #F44336;
-webkit-box-shadow: 0 1px 0 0 #F44336;
box-shadow: 0 1px 0 0 #F44336;}`;;
export const select_wrapper_and_invalid = css`&> input.select-dropdown {border-bottom: 1px solid #F44336;
-webkit-box-shadow: 0 1px 0 0 #F44336;
box-shadow: 0 1px 0 0 #F44336;}
&+ label:after {content: attr(data-error);
color: #F44336;
opacity: 1;
-webkit-transform: translateY(9px);
transform: translateY(9px);}
&+ label {width: 100%;
pointer-events: none;}`;;
export const select_wrapper = css`&+ label:after {display: block;
content: "";
position: absolute;
top: 100%;
left: 0;
opacity: 0;
-webkit-transition: .2s opacity ease-out, .2s color ease-out;
transition: .2s opacity ease-out, .2s color ease-out;}
position: relative;
&input.select-dropdown {position: relative;
cursor: pointer;
background-color: transparent;
border: none;
border-bottom: 1px solid #9e9e9e;
outline: none;
height: 3rem;
line-height: 3rem;
width: 100%;
font-size: 1rem;
margin: 0 0 20px 0;
padding: 0;
display: block;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;}
&span.caret {color: initial;
position: absolute;
right: 0;
top: 0;
bottom: 0;
height: 10px;
margin: auto 0;
font-size: 10px;
line-height: 10px;}
&+ label {position: absolute;
top: -26px;
font-size: 0.8rem;}
&input.select-dropdown:disabled {color: rgba(0, 0, 0, 0.42);
cursor: default;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;}
&i {color: rgba(0, 0, 0, 0.3);}`;;
export const input_field = css`position: relative;
margin-top: 1rem;
&label {color: #9e9e9e;
position: absolute;
top: 0;
left: 0;
height: 100%;
font-size: 1rem;
cursor: text;
-webkit-transition: -webkit-transform .2s ease-out;
transition: -webkit-transform .2s ease-out;
transition: transform .2s ease-out;
transition: transform .2s ease-out, -webkit-transform .2s ease-out;
-webkit-transform-origin: 0% 100%;
transform-origin: 0% 100%;
text-align: initial;
-webkit-transform: translateY(12px);
transform: translateY(12px);
pointer-events: none;}
&label:not(.label-icon).active {-webkit-transform: translateY(-14px) scale(0.8);
transform: translateY(-14px) scale(0.8);
-webkit-transform-origin: 0 0;
transform-origin: 0 0;}
&.prefix {position: absolute;
width: 3rem;
font-size: 2rem;
-webkit-transition: color .2s;
transition: color .2s;}
&.prefix.active {color: #26a69a;}
&.prefix ~ input {margin-left: 3rem;
width: 92%;
width: calc(100% - 3rem);}
&.prefix ~ textarea {margin-left: 3rem;
width: 92%;
width: calc(100% - 3rem);}
&.prefix ~ label {margin-left: 3rem;
width: 92%;
width: calc(100% - 3rem);}
&.prefix ~ .validate ~ label {margin-left: 3rem;
width: 92%;
width: calc(100% - 3rem);}
&.prefix ~ .autocomplete-content {margin-left: 3rem;
width: 92%;
width: calc(100% - 3rem);}
&.prefix ~ label {margin-left: 3rem;}
&.prefix ~ input {@media only screen and (max-width: 992px) {
width: 86%;
width: calc(100% - 3rem);
}}
&.prefix ~ input {@media only screen and (max-width: 600px) {
width: 80%;
width: calc(100% - 3rem);
}}
&input[type=search] {display: block;
line-height: inherit;}
&input[type=search]:focus {background-color: #fff;
border: 0;
-webkit-box-shadow: none;
box-shadow: none;
color: #444;}
&input[type=search]:focus + label i {color: #444;}
&input[type=search]:focus ~ .mdi-navigation-close {color: #444;}
&input[type=search]:focus ~ .material-icons {color: #444;}
&input[type=search] + label {left: 1rem;}
&input[type=search] ~ .mdi-navigation-close {position: absolute;
top: 0;
right: 1rem;
color: transparent;
cursor: pointer;
font-size: 2rem;
-webkit-transition: .3s color;
transition: .3s color;}
&input[type=search] ~ .material-icons {position: absolute;
top: 0;
right: 1rem;
color: transparent;
cursor: pointer;
font-size: 2rem;
-webkit-transition: .3s color;
transition: .3s color;}
&select {display: block;
position: absolute;
width: 0;
pointer-events: none;
height: 0;
top: 0;
left: 0;
opacity: 0;}`;;
export const input_field_and_inline = css`display: inline-block;
vertical-align: middle;
margin-left: 5px;
&input {margin-bottom: 1rem;}
&.select-dropdown {margin-bottom: 1rem;}`;;
export const nav_wrapper = css`&.input-field input[type=search] {height: inherit;
padding-left: 4rem;
width: calc(100% - 4rem);
border: 0;
-webkit-box-shadow: none;
box-shadow: none;}`;;
export const hiddendiv = css`display: none;
white-space: pre-wrap;
word-wrap: break-word;
overflow-wrap: break-word;
padding-top: 1.2rem;
position: absolute;
top: 0;`;;
export const autocomplete_content = css`margin-top: -20px;
margin-bottom: 20px;
display: block;
opacity: 1;
position: static;
&li .highlight {color: #444;}
&li img {height: 40px;
width: 40px;
margin: 5px 15px;}`;;
export const tag_form = css`&p {margin-bottom: 10px;
text-align: left;}
&p:last-child {margin-bottom: 0;}`;;
export const $_switch = css`-webkit-tap-highlight-color: transparent;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
&* {-webkit-tap-highlight-color: transparent;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;}
&label {cursor: pointer;}
&label input[type=checkbox] {opacity: 0;
width: 0;
height: 0;}
&label input[type=checkbox]:checked + .lever {background-color: #84c7c1;}
&label input[type=checkbox]:checked + .lever:before {left: 18px;}
&label input[type=checkbox]:checked + .lever:after {left: 18px;}
&label input[type=checkbox]:checked + .lever:after {background-color: #26a69a;}
&label .lever {content: "";
display: inline-block;
position: relative;
width: 36px;
height: 14px;
background-color: rgba(0, 0, 0, 0.38);
border-radius: 15px;
margin-right: 10px;
-webkit-transition: background 0.3s ease;
transition: background 0.3s ease;
vertical-align: middle;
margin: 0 16px;}
&label .lever:before {content: "";
position: absolute;
display: inline-block;
width: 20px;
height: 20px;
border-radius: 50%;
left: 0;
top: -3px;
-webkit-transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;
transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;}
&label .lever:after {content: "";
position: absolute;
display: inline-block;
width: 20px;
height: 20px;
border-radius: 50%;
left: 0;
top: -3px;
-webkit-transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
transition: left 0.3s ease, background .3s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;
transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease;
transition: left 0.3s ease, background .3s ease, box-shadow 0.1s ease, transform .1s ease, -webkit-box-shadow 0.1s ease, -webkit-transform .1s ease;}
&label .lever:before {background-color: rgba(38, 166, 154, 0.15);}
&label .lever:after {background-color: #F1F1F1;
-webkit-box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);}
&input[type=checkbox][disabled] + .lever {cursor: default;
background-color: rgba(0, 0, 0, 0.12);}
&label input[type=checkbox][disabled] + .lever:after {background-color: #949494;}
&label input[type=checkbox][disabled]:checked + .lever:after {background-color: #949494;}`;;
export const tag_select_and_browser_default = css`display: block;`;;
export const select_label = css`position: absolute;`;;
export const select_wrapper_and_disabled = css`&span.caret {color: rgba(0, 0, 0, 0.42);}
&+ label {color: rgba(0, 0, 0, 0.42);}`;;
export const select_dropdown = css`&li.disabled {color: rgba(0, 0, 0, 0.3);
background-color: transparent;}
&li.disabled > span {color: rgba(0, 0, 0, 0.3);
background-color: transparent;}
&li.optgroup {color: rgba(0, 0, 0, 0.3);
background-color: transparent;}
&li img {height: 40px;
width: 40px;
margin: 5px 15px;
float: right;}
&li.optgroup {border-top: 1px solid #eee;}
&li.optgroup.selected > span {color: rgba(0, 0, 0, 0.7);}
&li.optgroup > span {color: rgba(0, 0, 0, 0.4);}
&li.optgroup ~ li.optgroup-option {padding-left: 1rem;}`;;
export const select_dropdown_and_dropdown_content = css`&li.active {background-color: transparent;}
&li:hover {background-color: rgba(0, 0, 0, 0.06);}
&li.selected {background-color: rgba(0, 0, 0, 0.03);}`;;
export const file_field = css`position: relative;
&.file-path-wrapper {overflow: hidden;
padding-left: 10px;}
&input.file-path {width: 100%;}
&.btn {float: left;
height: 3rem;
line-height: 3rem;}
&.btn-large {float: left;
height: 3rem;
line-height: 3rem;}
&span {cursor: pointer;}
&input[type=file] {position: absolute;
top: 0;
right: 0;
left: 0;
bottom: 0;
width: 100%;
margin: 0;
padding: 0;
font-size: 20px;
cursor: pointer;
opacity: 0;
filter: alpha(opacity=0);}
&input[type=file]::-webkit-file-upload-button {display: none;}`;;
export const range_field = css`position: relative;`;;
export const table_of_contents_and_fixed = css`position: fixed;`;;
export const table_of_contents = css`&li {padding: 2px 0;}
&a {display: inline-block;
font-weight: 300;
color: #757575;
padding-left: 20px;
height: 1.5rem;
line-height: 1.5rem;
letter-spacing: .4;
display: inline-block;}
&a:hover {color: #a8a8a8;
padding-left: 19px;
border-left: 1px solid #ee6e73;}
&a.active {font-weight: 500;
padding-left: 18px;
border-left: 2px solid #ee6e73;}`;;
export const side_nav_and_right_aligned = css`right: 0;
-webkit-transform: translateX(105%);
transform: translateX(105%);
left: auto;
-webkit-transform: translateX(100%);
transform: translateX(100%);`;;
export const drag_target = css`height: 100%;
width: 10px;
position: fixed;
top: 0;
z-index: 998;`;;
export const side_nav_and_fixed_and_right_aligned = css`right: 0;
left: auto;
@media only screen and (max-width: 992px) {
-webkit-transform: translateX(105%);
transform: translateX(105%);
}`;;
export const $sidenav_overlay = css`position: fixed;
top: 0;
left: 0;
right: 0;
height: 120vh;
background-color: rgba(0, 0, 0, 0.5);
z-index: 997;
will-change: opacity;`;;
export const preloader_wrapper = css`display: inline-block;
position: relative;
width: 50px;
height: 50px;`;;
export const preloader_wrapper_and_small = css`width: 36px;
height: 36px;`;;
export const preloader_wrapper_and_big = css`width: 64px;
height: 64px;`;;
export const preloader_wrapper_and_active = css`-webkit-animation: container-rotate 1568ms linear infinite;
animation: container-rotate 1568ms linear infinite;`;;
export const tag_to = css`-webkit-transform: rotate(360deg);
-webkit-transform: rotate(360deg);
transform: rotate(360deg);
-webkit-transform: rotate(1080deg);
-webkit-transform: rotate(1080deg);
transform: rotate(1080deg);
-webkit-transform: rotate(130deg);
-webkit-transform: rotate(130deg);
transform: rotate(130deg);
-webkit-transform: rotate(-130deg);
-webkit-transform: rotate(-130deg);
transform: rotate(-130deg);
opacity: 0;
opacity: 0;`;;
export const spinner_layer = css`position: absolute;
width: 100%;
height: 100%;
opacity: 0;
border-color: #26a69a;`;;
export const spinner_blue = css`border-color: #4285f4;`;;
export const spinner_blue_only = css`border-color: #4285f4;`;;
export const spinner_red = css`border-color: #db4437;`;;
export const spinner_red_only = css`border-color: #db4437;`;;
export const spinner_yellow = css`border-color: #f4b400;`;;
export const spinner_yellow_only = css`border-color: #f4b400;`;;
export const spinner_green = css`border-color: #0f9d58;`;;
export const spinner_green_only = css`border-color: #0f9d58;`;;
export const active = css`&.spinner-layer.spinner-blue {-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, blue-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.spinner-layer.spinner-red {-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, red-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.spinner-layer.spinner-yellow {-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, yellow-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.spinner-layer.spinner-green {-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both, green-fade-in-out 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.spinner-layer {opacity: 1;
-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.spinner-layer.spinner-blue-only {opacity: 1;
-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.spinner-layer.spinner-red-only {opacity: 1;
-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.spinner-layer.spinner-yellow-only {opacity: 1;
-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.spinner-layer.spinner-green-only {opacity: 1;
-webkit-animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: fill-unfill-rotate 5332ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.circle-clipper.left .circle {-webkit-animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: left-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}
&.circle-clipper.right .circle {-webkit-animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;
animation: right-spin 1333ms cubic-bezier(0.4, 0, 0.2, 1) infinite both;}`;;
export const tag_from = css`opacity: 1;
opacity: 1;
opacity: 0;
opacity: 0;
opacity: 0;
opacity: 0;
opacity: 0;
opacity: 0;
-webkit-transform: rotate(130deg);
-webkit-transform: rotate(130deg);
transform: rotate(130deg);
-webkit-transform: rotate(-130deg);
-webkit-transform: rotate(-130deg);
transform: rotate(-130deg);
opacity: 1;
opacity: 1;`;;
export const gap_patch = css`position: absolute;
top: 0;
left: 45%;
width: 10%;
height: 100%;
overflow: hidden;
border-color: inherit;
&.circle {width: 1000%;
left: -450%;}`;;
export const circle_clipper = css`display: inline-block;
position: relative;
width: 50%;
height: 100%;
overflow: hidden;
border-color: inherit;
&.circle {width: 200%;
height: 100%;
border-width: 3px;
border-style: solid;
border-color: inherit;
border-bottom-color: transparent;
border-radius: 50%;
-webkit-animation: none;
animation: none;
position: absolute;
top: 0;
right: 0;
bottom: 0;}`;;
export const circle_clipper_and_left = css`&.circle {left: 0;
border-right-color: transparent;
-webkit-transform: rotate(129deg);
transform: rotate(129deg);}`;;
export const circle_clipper_and_right = css`&.circle {left: -100%;
border-left-color: transparent;
-webkit-transform: rotate(-129deg);
transform: rotate(-129deg);}`;;
export const $spinnerContainer_and_cooldown = css`-webkit-animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);
animation: container-rotate 1568ms linear infinite, fade-out 400ms cubic-bezier(0.4, 0, 0.2, 1);`;;
export const slider = css`position: relative;
height: 400px;
width: 100%;
&.slides {background-color: #9e9e9e;
margin: 0;
height: 400px;}
&.slides li {opacity: 0;
position: absolute;
top: 0;
left: 0;
z-index: 1;
width: 100%;
height: inherit;
overflow: hidden;}
&.slides li img {height: 100%;
width: 100%;
background-size: cover;
background-position: center;}
&.slides li .caption {color: #fff;
position: absolute;
top: 15%;
left: 15%;
width: 70%;
opacity: 0;}
&.slides li .caption p {color: #e0e0e0;}
&.slides li.active {z-index: 2;}
&.indicators {position: absolute;
text-align: center;
left: 0;
right: 0;
bottom: 0;
margin: 0;}
&.indicators .indicator-item {display: inline-block;
position: relative;
cursor: pointer;
height: 16px;
width: 16px;
margin: 0 12px;
background-color: #e0e0e0;
-webkit-transition: background-color .3s;
transition: background-color .3s;
border-radius: 50%;}
&.indicators .indicator-item.active {background-color: #4CAF50;}`;;
export const slider_and_fullscreen = css`height: 100%;
width: 100%;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
&ul.slides {height: 100%;}
&ul.indicators {z-index: 2;
bottom: 30px;}`;;
export const carousel = css`overflow: hidden;
position: relative;
width: 100%;
height: 400px;
-webkit-perspective: 500px;
perspective: 500px;
-webkit-transform-style: preserve-3d;
transform-style: preserve-3d;
-webkit-transform-origin: 0% 50%;
transform-origin: 0% 50%;
&.carousel-item {display: none;
width: 200px;
height: 200px;
position: absolute;
top: 0;
left: 0;}
&.carousel-item > img {width: 100%;}
&.indicators {position: absolute;
text-align: center;
left: 0;
right: 0;
bottom: 0;
margin: 0;}
&.indicators .indicator-item {display: inline-block;
position: relative;
cursor: pointer;
height: 8px;
width: 8px;
margin: 24px 4px;
background-color: rgba(255, 255, 255, 0.5);
-webkit-transition: background-color .3s;
transition: background-color .3s;
border-radius: 50%;}
&.indicators .indicator-item.active {background-color: #fff;}
&.carousel-item:not(.active) .materialboxed {pointer-events: none;}`;;
export const carousel_and_carousel_slider = css`top: 0;
left: 0;
&.carousel-fixed-item {position: absolute;
left: 0;
right: 0;
bottom: 20px;
z-index: 1;}
&.carousel-fixed-item.with-indicators {bottom: 68px;}
&.carousel-item {width: 100%;
height: 100%;
min-height: 400px;
position: absolute;
top: 0;
left: 0;}
&.carousel-item h2 {font-size: 24px;
font-weight: 500;
line-height: 32px;}
&.carousel-item p {font-size: 15px;}`;;
export const carousel_and_scrolling = css`&.carousel-item .materialboxed {pointer-events: none;}`;;
export const tap_target_wrapper = css`width: 800px;
height: 800px;
position: fixed;
z-index: 1000;
visibility: hidden;
-webkit-transition: visibility 0s .3s;
transition: visibility 0s .3s;
@media only screen and (max-width: 600px) {
width: 600px;
height: 600px;
}`;;
export const tap_target_wrapper_and_open = css`visibility: visible;
-webkit-transition: visibility 0s;
transition: visibility 0s;
&.tap-target {-webkit-transform: scale(1);
transform: scale(1);
opacity: .95;
-webkit-transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);
transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);}
&.tap-target-wave::before {-webkit-transform: scale(1);
transform: scale(1);}
&.tap-target-wave::after {visibility: visible;
-webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
-webkit-transition: opacity .3s, visibility 0s 1s, -webkit-transform .3s;
transition: opacity .3s, visibility 0s 1s, -webkit-transform .3s;
transition: opacity .3s, transform .3s, visibility 0s 1s;
transition: opacity .3s, transform .3s, visibility 0s 1s, -webkit-transform .3s;}`;;
export const tap_target = css`position: absolute;
font-size: 1rem;
border-radius: 50%;
background-color: #ee6e73;
-webkit-box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);
box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.14), 0 10px 50px 0 rgba(0, 0, 0, 0.12), 0 30px 10px -20px rgba(0, 0, 0, 0.2);
width: 100%;
height: 100%;
opacity: 0;
-webkit-transform: scale(0);
transform: scale(0);
-webkit-transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
transition: opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1);
transition: transform 0.3s cubic-bezier(0.42, 0, 0.58, 1), opacity 0.3s cubic-bezier(0.42, 0, 0.58, 1), -webkit-transform 0.3s cubic-bezier(0.42, 0, 0.58, 1);
@media only screen and (max-width: 600px) {
width: 600px;
height: 600px;
}`;;
export const tap_target_content = css`position: relative;
display: table-cell;`;;
export const tap_target_wave = css`position: absolute;
border-radius: 50%;
z-index: 10001;
&::before {content: '';
display: block;
position: absolute;
width: 100%;
height: 100%;
border-radius: 50%;
background-color: #ffffff;}
&::after {content: '';
display: block;
position: absolute;
width: 100%;
height: 100%;
border-radius: 50%;
background-color: #ffffff;}
&::before {-webkit-transform: scale(0);
transform: scale(0);
-webkit-transition: -webkit-transform .3s;
transition: -webkit-transform .3s;
transition: transform .3s;
transition: transform .3s, -webkit-transform .3s;}
&::after {visibility: hidden;
-webkit-transition: opacity .3s, visibility 0s, -webkit-transform .3s;
transition: opacity .3s, visibility 0s, -webkit-transform .3s;
transition: opacity .3s, transform .3s, visibility 0s;
transition: opacity .3s, transform .3s, visibility 0s, -webkit-transform .3s;
z-index: -1;}`;;
export const tap_target_origin = css`top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
z-index: 10002;
position: absolute;
&:not(.btn):not(.btn-large) {background: none;}
&:not(.btn):not(.btn-large):hover {background: none;}`;;
export const pulse = css`overflow: initial;
position: relative;
&::before {content: '';
display: block;
position: absolute;
width: 100%;
height: 100%;
top: 0;
left: 0;
background-color: inherit;
border-radius: inherit;
-webkit-transition: opacity .3s, -webkit-transform .3s;
transition: opacity .3s, -webkit-transform .3s;
transition: opacity .3s, transform .3s;
transition: opacity .3s, transform .3s, -webkit-transform .3s;
-webkit-animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
animation: pulse-animation 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
z-index: -1;}`;;
export const picker = css`font-size: 16px;
text-align: left;
line-height: 1.2;
color: #000000;
position: absolute;
z-index: 10000;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
outline: none;`;;
export const picker__input = css`cursor: default;`;;
export const picker__input_and_picker__input$$active = css`border-color: #0089ec;
border-color: #E3F2FD;`;;
export const picker__holder = css`width: 100%;
overflow-y: auto;
-webkit-overflow-scrolling: touch;
bottom: 0;
left: 0;
right: 0;
top: 100%;
position: fixed;
-webkit-transition: background 0.15s ease-out, top 0s 0.15s;
transition: background 0.15s ease-out, top 0s 0.15s;
-webkit-backface-visibility: hidden;`;;
export const picker__frame = css`bottom: 0;
left: 0;
right: 0;
top: 100%;
position: absolute;
margin: 0 auto;
min-width: 256px;
width: 300px;
max-height: 350px;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
filter: alpha(opacity=0);
-moz-opacity: 0;
opacity: 0;
-webkit-transition: all 0.15s ease-out;
transition: all 0.15s ease-out;
@media (min-height: 28.875em) {
overflow: visible;
top: auto;
bottom: -100%;
max-height: 80%;
}
@media (min-height: 40.125em) {
margin-bottom: 7.5%;
}
margin: 0 auto;
max-width: 325px;
@media only screen and (min-width: 601px) {
width: 80%;
max-width: 600px;
}`;;
export const picker__wrap = css`display: table;
width: 100%;
height: 100%;
@media (min-height: 28.875em) {
display: block;
}`;;
export const picker__box = css`background: #ffffff;
display: table-cell;
vertical-align: middle;
@media (min-height: 28.875em) {
display: block;
border: 1px solid #777777;
border-top-color: #898989;
border-bottom-width: 0;
border-radius: 5px 5px 0 0;
-webkit-box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24);
box-shadow: 0 12px 36px 16px rgba(0, 0, 0, 0.24);
}
@media only screen and (min-width: 601px) {
display: -webkit-box;
display: -webkit-flex;
display: -ms-flexbox;
display: flex;
}
padding: 0;
border-radius: 2px;
overflow: hidden;`;;
export const picker$$opened = css`&.picker__holder {top: 0;
background: transparent;
-ms-filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr=#1E000000,endColorstr=#1E000000)";
zoom: 1;
background: rgba(0, 0, 0, 0.32);
-webkit-transition: background 0.15s ease-out;
transition: background 0.15s ease-out;}
&.picker__frame {top: 0;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
filter: alpha(opacity=100);
-moz-opacity: 1;
opacity: 1;}
&.picker__frame {@media (min-height: 35.875em) {
top: 10%;
bottom: auto;
}}
&.picker__frame {@media (min-height: 38.875em) {
top: 10%;
bottom: auto;
}}`;;
export const picker__header = css`text-align: center;
position: relative;
margin-top: .75em;`;;
export const picker__month = css`display: inline-block;
margin-left: .25em;
margin-right: .25em;`;;
export const picker__year = css`display: inline-block;
margin-left: .25em;
margin-right: .25em;`;;
export const picker__select$$month = css`height: 2em;
padding: 0;
margin-left: .25em;
margin-right: .25em;
&:focus {border-color: rgba(0, 0, 0, 0.05);}`;;
export const picker__select$$year = css`height: 2em;
padding: 0;
margin-left: .25em;
margin-right: .25em;
&:focus {border-color: rgba(0, 0, 0, 0.05);}`;;
export const picker__select$$month_and_browser_default = css`display: inline;
background-color: #FFFFFF;
width: 40%;`;;
export const picker__select$$year_and_browser_default = css`display: inline;
background-color: #FFFFFF;
width: 26%;`;;
export const picker__nav$$prev = css`position: absolute;
padding: .5em 1.25em;
width: 1em;
height: 1em;
-webkit-box-sizing: content-box;
box-sizing: content-box;
top: -0.25em;
left: -1em;
padding-right: 1.25em;
&:hover {cursor: pointer;
color: #000000;
background: #a1ded8;}
&:before {content: " ";
border-top: .5em solid transparent;
border-bottom: .5em solid transparent;
border-right: 0.75em solid #676767;
width: 0;
height: 0;
display: block;
margin: 0 auto;}`;;
export const picker__nav$$next = css`position: absolute;
padding: .5em 1.25em;
width: 1em;
height: 1em;
-webkit-box-sizing: content-box;
box-sizing: content-box;
top: -0.25em;
right: -1em;
padding-left: 1.25em;
&:hover {cursor: pointer;
color: #000000;
background: #a1ded8;}
&:before {content: " ";
border-top: .5em solid transparent;
border-bottom: .5em solid transparent;
border-right: 0.75em solid #676767;
width: 0;
height: 0;
display: block;
margin: 0 auto;}
&:before {border-right: 0;
border-left: 0.75em solid #676767;}`;;
export const picker__nav$$disabled = css`cursor: default;
background: none;
border-right-color: #f5f5f5;
border-left-color: #f5f5f5;
&:hover {cursor: default;
background: none;
border-right-color: #f5f5f5;
border-left-color: #f5f5f5;}
&:before {cursor: default;
background: none;
border-right-color: #f5f5f5;
border-left-color: #f5f5f5;}
&:before:hover {cursor: default;
background: none;
border-right-color: #f5f5f5;
border-left-color: #f5f5f5;}`;;
export const picker__table = css`text-align: center;
border-collapse: collapse;
border-spacing: 0;
table-layout: fixed;
font-size: 1rem;
width: 100%;
margin-top: .75em;
margin-bottom: .5em;
&th {text-align: center;}
&td {text-align: center;}
&td {margin: 0;
padding: 0;}
margin-top: 0;
margin-bottom: .5em;`;;
export const picker__weekday = css`width: 14.285714286%;
font-size: .75em;
padding-bottom: .25em;
color: #999999;
font-weight: 500;
@media (min-height: 33.875em) {
padding-bottom: .5em;
}
font-size: .9rem;`;;
export const picker__day$$today = css`position: relative;
color: #595959;
letter-spacing: -.3;
padding: .75rem 0;
font-weight: 400;
border: 1px solid transparent;`;;
export const picker__day$$disabled = css`&:before {border-top-color: #aaaaaa;}
background: #f5f5f5;
border-color: #f5f5f5;
color: #dddddd;
cursor: default;
&:hover {background: #f5f5f5;
border-color: #f5f5f5;
color: #dddddd;
cursor: default;}`;;
export const picker__day$$infocus = css`&:hover {cursor: pointer;
color: #000;
font-weight: 500;}
color: rgba(0, 0, 0, 0.87);
letter-spacing: -.3px;
padding: 0.75rem 0;
font-weight: 400;
border: 1px solid transparent;
@media only screen and (min-width: 601px) {
padding: 1.1rem 0;
}`;;
export const picker__day$$outfocus = css`display: none;
padding: .75rem 0;
color: #fff;
&:hover {cursor: pointer;
color: #dddddd;
font-weight: 500;}`;;
export const picker__day$$highlighted = css`&:hover {cursor: pointer;}`;;
export const picker$$focused = css`&.picker__day--highlighted {cursor: pointer;}
&.picker__day--selected {border-radius: 50%;
-webkit-transform: scale(0.75);
transform: scale(0.75);
background: #0089ec;
color: #ffffff;}
&.picker__day--disabled {background: #f5f5f5;
border-color: #f5f5f5;
color: #dddddd;
cursor: default;}
&.picker__day--selected {border-radius: 50%;
-webkit-transform: scale(0.9);
transform: scale(0.9);
background-color: #26a69a;
color: #ffffff;}
&.picker__day--selected.picker__day--outfocus {background-color: #a1ded8;}
&.picker__list-item--highlighted {cursor: pointer;
color: #000;
background: #b1dcfb;}
&.picker__list-item--selected {background: #0089ec;
color: #fff;
z-index: 10;}
&.picker__list-item--disabled {background: #f5f5f5;
border-color: #f5f5f5;
color: #ddd;
cursor: default;
border-color: #ddd;
z-index: auto;}`;;
export const picker__day$$selected = css`border-radius: 50%;
-webkit-transform: scale(0.75);
transform: scale(0.75);
background: #0089ec;
color: #ffffff;
&:hover {border-radius: 50%;
-webkit-transform: scale(0.75);
transform: scale(0.75);
background: #0089ec;
color: #ffffff;}
border-radius: 50%;
-webkit-transform: scale(0.9);
transform: scale(0.9);
background-color: #26a69a;
color: #ffffff;
&:hover {border-radius: 50%;
-webkit-transform: scale(0.9);
transform: scale(0.9);
background-color: #26a69a;
color: #ffffff;}
&:hover.picker__day--outfocus {background-color: #a1ded8;}`;;
export const picker__day$$highlighted_and_picker__day$$disabled = css`background: #bbbbbb;
&:hover {background: #bbbbbb;}`;;
export const picker__footer = css`text-align: right;
text-align: right;
padding: 5px 10px;`;;
export const picker__button$$today = css`border: 1px solid #ffffff;
background: #ffffff;
font-size: .8em;
padding: .66em 0;
font-weight: bold;
width: 33%;
display: inline-block;
vertical-align: bottom;
&:hover {cursor: pointer;
color: #000000;
background: #b1dcfb;
border-bottom-color: #b1dcfb;}
&:focus {background: #b1dcfb;
border-color: rgba(0, 0, 0, 0.05);
outline: none;}
&:before {position: relative;
display: inline-block;
height: 0;}
&:before {content: " ";
margin-right: .45em;}
&:before {top: -0.05em;
width: 0;
border-top: 0.66em solid #0059bc;
border-left: .66em solid transparent;}`;;
export const picker__button$$clear = css`border: 1px solid #ffffff;
background: #ffffff;
font-size: .8em;
padding: .66em 0;
font-weight: bold;
width: 33%;
display: inline-block;
vertical-align: bottom;
&:hover {cursor: pointer;
color: #000000;
background: #b1dcfb;
border-bottom-color: #b1dcfb;}
&:focus {background: #b1dcfb;
border-color: rgba(0, 0, 0, 0.05);
outline: none;}
&:before {position: relative;
display: inline-block;
height: 0;}
&:before {content: " ";
margin-right: .45em;}
&:before {top: -0.25em;
width: .66em;
border-top: 3px solid #ee2200;}`;;
export const picker__button$$close = css`border: 1px solid #ffffff;
background: #ffffff;
font-size: .8em;
padding: .66em 0;
font-weight: bold;
width: 33%;
display: inline-block;
vertical-align: bottom;
&:hover {cursor: pointer;
color: #000000;
background: #b1dcfb;
border-bottom-color: #b1dcfb;}
&:focus {background: #b1dcfb;
border-color: rgba(0, 0, 0, 0.05);
outline: none;}
&:before {position: relative;
display: inline-block;
height: 0;}
&:before {content: "\\D7";
top: -0.1em;
vertical-align: top;
font-size: 1.1em;
margin-right: .35em;
color: #777777;}`;;
export const picker__date_display = css`text-align: left;
background-color: #26a69a;
color: #fff;
padding: 18px;
font-weight: 300;
@media only screen and (min-width: 601px) {
-webkit-box-flex: 1;
-webkit-flex: 1;
-ms-flex: 1;
flex: 1;
}`;;
export const picker__weekday_display = css`@media only screen and (min-width: 601px) {
display: block;
}
font-weight: 500;
font-size: 2.8rem;
margin-right: 5px;
margin-top: 4px;`;;
export const picker__container__wrapper = css`@media only screen and (min-width: 601px) {
-webkit-box-flex: 2;
-webkit-flex: 2;
-ms-flex: 2;
flex: 2;
}`;;
export const picker__month_display = css`font-size: 2.8rem;
font-weight: 500;`;;
export const picker__day_display = css`font-size: 2.8rem;
font-weight: 500;
margin-right: 5px;`;;
export const picker__year_display = css`font-size: 1.5rem;
font-weight: 500;
color: rgba(255, 255, 255, 0.7);`;;
export const picker__calendar_container = css`padding: 0 1rem;
&thead {border: none;}`;;
export const picker__day_and_picker__day$$today = css`color: #26a69a;`;;
export const picker__day_and_picker__day$$today_and_picker__day$$selected = css`color: #fff;`;;
export const picker__day$$selected_and_picker__day$$outfocus = css`background-color: #a1ded8;`;;
export const picker__close = css`font-size: 1.1rem;
padding: 0 1rem;
color: #26a69a;`;;
export const picker__today = css`font-size: 1.1rem;
padding: 0 1rem;
color: #26a69a;`;;
export const picker__clear = css`font-size: 1.1rem;
padding: 0 1rem;
color: #26a69a;
color: #f44336;
float: left;`;;
export const tag_button_and_picker__today = css`&:focus {background-color: #a1ded8;}`;;
export const tag_button_and_picker__clear = css`&:focus {background-color: #a1ded8;}`;;
export const tag_button_and_picker__close = css`&:focus {background-color: #a1ded8;}`;;
export const picker__list = css`list-style: none;
padding: 0.75em 0 4.2em;
margin: 0;`;;
export const picker__list_item = css`border-bottom: 1px solid #ddd;
border-top: 1px solid #ddd;
margin-bottom: -1px;
position: relative;
background: #fff;
padding: .75em 1.25em;
@media (min-height: 46.75em) {
padding: .5em 1em;
}
&:hover {cursor: pointer;
color: #000;
background: #b1dcfb;
border-color: #0089ec;
z-index: 10;}`;;
export const picker__list_item$$highlighted = css`border-color: #0089ec;
z-index: 10;
&:hover {cursor: pointer;
color: #000;
background: #b1dcfb;}`;;
export const picker__list_item$$selected = css`background: #0089ec;
color: #fff;
z-index: 10;
&:hover {background: #0089ec;
color: #fff;
z-index: 10;}`;;
export const picker__list_item$$disabled = css`background: #f5f5f5;
border-color: #f5f5f5;
color: #ddd;
cursor: default;
border-color: #ddd;
z-index: auto;
&:hover {background: #f5f5f5;
border-color: #f5f5f5;
color: #ddd;
cursor: default;
border-color: #ddd;
z-index: auto;}`;;
export const picker$$time = css`&.picker__button--clear {display: block;
width: 80%;
margin: 1em auto 0;
padding: 1em 1.25em;
background: none;
border: 0;
font-weight: 500;
font-size: .67em;
text-align: center;
text-transform: uppercase;
color: rgba(0, 0, 0, 0.87);}
&.picker__button--clear:hover {color: #000;
background: #b1dcfb;
background: #ee2200;
border-color: #ee2200;
cursor: pointer;
color: #fff;
outline: none;}
&.picker__button--clear:focus {color: #000;
background: #b1dcfb;
background: #ee2200;
border-color: #ee2200;
cursor: pointer;
color: #fff;
outline: none;}
&.picker__button--clear:before {top: -0.25em;
color: rgba(0, 0, 0, 0.87);
font-size: 1.25em;
font-weight: bold;}
&.picker__button--clear:hover:before {color: #fff;}
&.picker__button--clear:focus:before {color: #fff;}
&.picker__frame {min-width: 256px;
max-width: 320px;}
&.picker__box {font-size: 1em;
background: #f2f2f2;
padding: 0;}
&.picker__box {@media (min-height: 40.125em) {
margin-bottom: 5em;
}}`;;
export const clockpicker_display = css`font-size: 4rem;
font-weight: bold;
text-align: center;
color: rgba(255, 255, 255, 0.6);
font-weight: 400;
clear: both;
position: relative;
@media only screen and (min-width: 601px) {
top: 32%;
}`;;
export const clockpicker_span_am_pm = css`font-size: 1.3rem;
position: absolute;
right: 1rem;
bottom: 0.3rem;
line-height: 2rem;
font-weight: 500;
@media only screen and (min-width: 601px) {
position: relative;
right: auto;
bottom: auto;
text-align: center;
margin-top: 1.2rem;
}
&div {cursor: pointer;}`;;
export const text_primary = css`color: white;`;;
export const clockpicker_span_hours = css`margin-right: 3px;
cursor: pointer;`;;
export const clockpicker_span_minutes = css`margin-left: 3px;
cursor: pointer;`;;
export const clockpicker_moving = css`cursor: move;`;;
export const clockpicker_plate = css`background-color: #eee;
border-radius: 50%;
width: 270px;
height: 270px;
overflow: visible;
position: relative;
margin: auto;
margin-top: 25px;
margin-bottom: 5px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;`;;
export const clockpicker_canvas = css`width: 270px;
height: 270px;
position: absolute;
left: -1px;
top: -1px;
-webkit-transition: opacity 175ms;
transition: opacity 175ms;
&line {stroke: #26a69a;
stroke-width: 4;
stroke-linecap: round;}`;;
export const clockpicker_dial = css`width: 270px;
height: 270px;
position: absolute;
left: -1px;
top: -1px;
-webkit-transition: -webkit-transform 350ms, opacity 350ms;
-webkit-transition: opacity 350ms, -webkit-transform 350ms;
transition: opacity 350ms, -webkit-transform 350ms;
transition: transform 350ms, opacity 350ms;
transition: transform 350ms, opacity 350ms, -webkit-transform 350ms;`;;
export const clockpicker_minutes = css`visibility: hidden;`;;
export const clockpicker_tick = css`border-radius: 50%;
color: rgba(0, 0, 0, 0.87);
line-height: 40px;
text-align: center;
width: 40px;
height: 40px;
position: absolute;
cursor: pointer;
&:hover {background-color: rgba(38, 166, 154, 0.25);}`;;
export const clockpicker_tick_and_active = css`background-color: rgba(38, 166, 154, 0.25);`;;
export const clockpicker_dial_out = css`opacity: 0;`;;
export const clockpicker_hours_and_clockpicker_dial_out = css`-webkit-transform: scale(1.2, 1.2);
transform: scale(1.2, 1.2);`;;
export const clockpicker_minutes_and_clockpicker_dial_out = css`-webkit-transform: scale(0.8, 0.8);
transform: scale(0.8, 0.8);`;;
export const clockpicker_canvas_out = css`opacity: 0.25;`;;
export const clockpicker_canvas_bearing = css`stroke: none;
fill: #26a69a;`;;
export const clockpicker_canvas_bg = css`stroke: none;
fill: #26a69a;`;;
export const clockpicker_canvas_bg_trans = css`fill: #26a69a;`;;;
  