
    import { css, injectGlobal }  from 'styled-components';
    
    export const __root = css`font-size: 16px;
@media (min-width: 1680px) {
font-size: 16px;
}
@media (min-width: 1280px) and (max-width: 1679px) {
font-size: 16px;
}
@media (min-width: 1024px) and (max-width: 1279px) {
font-size: 16px;
}
@media (min-width: 768px) and (max-width: 1023px) {
font-size: 16px;
}
@media (max-width: 767px) {
font-size: 16px;
}`;;
export const global_page =   () => injectGlobal`@page  { size: A4;
margin: 1.5cm 2cm; }`;
export const global__webkit_keyframes =   () => injectGlobal`@-webkit-keyframes a { -webkit-transform: rotate(0deg);
transform: rotate(0deg);
-webkit-transform: rotate(1turn);
transform: rotate(1turn); }`;
export const global_keyframes =   () => injectGlobal`@keyframes a { -webkit-transform: rotate(0deg);
transform: rotate(0deg);
-webkit-transform: rotate(1turn);
transform: rotate(1turn); }`;
export const global_moz_document =   () => injectGlobal`@moz-document url-prefix() { z-index: 2;
position: absolute;
top: 0;
right: 0;
bottom: 0;
content: "";
pointer-events: none;
width: 1em;
border-width: 1px 1px 1px 0;
border-color: #d3d3d9;
border-style: solid;
background: #fff;
width: 1.5em; }`;
export const global__moz_document =   () => injectGlobal`@-moz-document url-prefix() { background: #d3d3d9;
border: 0 none none;
border-radius: 2px;
box-shadow: none;
background: currentColor;
border-radius: 2px; }`;
export const tag_html = css`${__root}; font-family: sans-serif;
line-height: 1.15;
-ms-text-size-adjust: 100%;
-webkit-text-size-adjust: 100%;
&[type=button] {-webkit-appearance: button;}
box-sizing: border-box;
text-rendering: optimizeLegibility;
-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
width: 100%;
min-height: 100%;`;;
export const tag_body = css`${__root}; margin: 0;
width: 100%;
min-height: 100%;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
font-weight: 400;
color: #323236;
line-height: 1.35;
letter-spacing: 0;
background: #fff;`;;
export const tag_article = css`${__root}; display: block;`;;
export const tag_aside = css`${__root}; display: block;`;;
export const tag_footer = css`${__root}; display: block;`;;
export const tag_header = css`${__root}; display: block;`;;
export const tag_nav = css`${__root}; display: block;
&ul {margin: 0;
list-style: none;}
&ul li {margin: 1rem 0;
padding: 0;}`;;
export const tag_section = css`${__root}; display: block;`;;
export const tag_h1 = css`${__root}; font-size: 2em;
margin: .67em 0;
&:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 2.25rem;
&+ .h2 {margin-top: 0;}
&+ h2 {margin-top: 0;}`;;
export const tag_figcaption = css`${__root}; display: block;
margin: 1em 0;
font-family: inherit;
font-weight: inherit;
font-size: .875rem;
color: inherit;
text-align: left;`;;
export const tag_figure = css`${__root}; display: block;
margin: 1em 40px;
display: block;
margin: 0;
padding: 0;`;;
export const tag_main = css`${__root}; display: block;`;;
export const tag_hr = css`${__root}; box-sizing: content-box;
height: 0;
overflow: visible;
clear: both;
margin: calc(2rem + .75vw) auto;
border: 0;
height: 1px;
background: #d3d3d9;`;;
export const tag_pre = css`${__root}; font-family: monospace, monospace;
font-size: 1em;
@media print {
border: 1px solid #616166;
}
@media print {
page-break-inside: avoid;
}
font-family: Monaco, Menlo, Consolas, Courier New, monospace;
font-weight: 400;
font-size: 80%;
margin: 1em 0;
padding: 1em;
overflow: auto;
color: inherit;
direction: ltr;
text-align: left;
white-space: pre;
word-spacing: normal;
word-break: normal;
-moz-tab-size: 4;
-o-tab-size: 4;
tab-size: 4;
-webkit-hyphens: none;
-ms-hyphens: none;
hyphens: none;
background: #f6f6f7;
border: 1px solid #d3d3d9;
border-radius: 2px;
&code {font-size: inherit;
color: #639;}`;;
export const tag_a = css`${__root}; background-color: transparent;
-webkit-text-decoration-skip: objects;
&:active {outline-width: 0;}
&:hover {outline-width: 0;}
@media print {
text-decoration: underline;
}
-webkit-transition: color .2s ease-in-out, background .2s ease-in-out, border .2s ease-in-out;
transition: color .2s ease-in-out, background .2s ease-in-out, border .2s ease-in-out;
color: currentColor;
text-decoration: underline;
&:focus {color: currentColor;
text-decoration: underline;}
&:hover {color: currentColor;
text-decoration: underline;}`;;
export const tag_b = css`${__root}; font-weight: inherit;
font-weight: bolder;`;;
export const tag_strong = css`${__root}; font-weight: inherit;
font-weight: bolder;
font-family: inherit;
font-weight: 700;
color: inherit;`;;
export const tag_code = css`${__root}; font-family: monospace, monospace;
font-size: 1em;
color: #639;
font-family: Monaco, Menlo, Consolas, Courier New, monospace;
font-weight: 400;
font-size: 80%;`;;
export const tag_kbd = css`${__root}; font-family: monospace, monospace;
font-size: 1em;
margin: 0 .2em;
padding: .2em .4em;
font-family: Monaco, Menlo, Consolas, Courier New, monospace;
font-weight: 400;
font-size: 80%;
color: #639;
background: #f6f6f7;
border: 1px solid #d3d3d9;
border-radius: 2px;`;;
export const tag_samp = css`${__root}; font-family: monospace, monospace;
font-size: 1em;`;;
export const tag_dfn = css`${__root}; font-style: italic;`;;
export const tag_mark = css`${__root}; background-color: #ff0;
color: #000;
margin: 0;
padding: .2em .4em;
font-size: inherit;
background: #ff0;
font-family: inherit;
font-weight: inherit;
color: inherit;`;;
export const tag_small = css`${__root}; font-size: 80%;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;`;;
export const tag_sub = css`${__root}; font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
bottom: -.25em;`;;
export const tag_sup = css`${__root}; font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
top: -.5em;`;;
export const tag_audio = css`${__root}; display: inline-block;
&:not([controls]) {display: none;
height: 0;}`;;
export const tag_video = css`${__root}; display: inline-block;`;;
export const tag_img = css`${__root}; border-style: none;
max-width: 100%;
height: auto;
@media print {
page-break-inside: avoid;
}
@media print {
max-width: 100%;
}`;;
export const tag_svg = css`${__root}; &:not(:root) {overflow: hidden;}`;;
export const tag_button = css`${__root}; font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
margin: 0;
overflow: visible;
text-transform: none;
-webkit-appearance: button;
&::-moz-focus-inner {border-style: none;
padding: 0;}
&:-moz-focusring {outline: 1px dotted ButtonText;}
display: inline-block;
padding: calc((3rem - 1rem - 2px) / 2) 1.5em;
min-width: 3rem;
height: 3rem;
font-family: inherit;
font-weight: 600;
line-height: 1;
font-size: 1rem;
color: #323236;
letter-spacing: 0;
text-align: center;
text-transform: none;
text-decoration: none;
white-space: nowrap;
cursor: pointer;
background: #fff;
border: 1px solid #d3d3d9;
border-radius: 2px;
box-shadow: none;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
&:not(:disabled):focus {text-decoration: none;
color: #323236;
background: #f6f6f7;
border-color: #c8c8ce;
box-shadow: none;}
&:not(:disabled):hover {text-decoration: none;
color: #323236;
background: #f6f6f7;
border-color: #c8c8ce;
box-shadow: none;}
&:not(:disabled):active {color: #323236;
background: #ededf0;
border-color: #bebec3;
box-shadow: none;}
&svg {width: 1rem;
height: 1rem;
fill: currentColor;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;}
&:disabled {cursor: no-drop;
opacity: .65;}`;;
export const tag_input = css`${__root}; font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
margin: 0;
overflow: visible;
&:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
display: block;
margin: 1rem 0;
font-family: inherit;
font-weight: inherit;
color: inherit;
line-height: 1.5;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
box-sizing: border-box;
padding: 0 1em;
width: 100%;
height: 3rem;
font-size: 1rem;
border: 1px solid #d3d3d9;
background: #fff;
border-radius: 2px;
box-shadow: none;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
&::-webkit-input-placeholder {color: inherit;
opacity: .5;}
&::-moz-placeholder {color: inherit;
opacity: .5;}
&:-ms-input-placeholder {color: inherit;
opacity: .5;}
&::placeholder {color: inherit;
opacity: .5;}
&:not(:disabled):hover {color: inherit;
background: #fafafa;
border-color: #bebec3;
box-shadow: none;}
&:not(:disabled):focus {color: inherit;
background: #fafafa;
border-color: #3455db;
box-shadow: none;}
&:disabled {cursor: no-drop;
color: inherit;
background: #f2f2f2;
border-color: #d3d3d9;}`;;
export const tag_optgroup = css`${__root}; font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
margin: 0;`;;
export const tag_select = css`${__root}; font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
margin: 0;
text-transform: none;
display: block;
width: 100%;`;;
export const tag_textarea = css`${__root}; font-family: sans-serif;
font-size: 100%;
line-height: 1.15;
margin: 0;
overflow: auto;
&:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
display: block;
margin: 1rem 0;
font-family: inherit;
font-weight: inherit;
color: inherit;
line-height: 1.5;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
box-sizing: border-box;
padding: 0 1em;
width: 100%;
height: 3rem;
font-size: 1rem;
border: 1px solid #d3d3d9;
background: #fff;
border-radius: 2px;
box-shadow: none;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
&::-webkit-input-placeholder {color: inherit;
opacity: .5;}
&::-moz-placeholder {color: inherit;
opacity: .5;}
&:-ms-input-placeholder {color: inherit;
opacity: .5;}
&::placeholder {color: inherit;
opacity: .5;}
&:not(:disabled):hover {color: inherit;
background: #fafafa;
border-color: #bebec3;
box-shadow: none;}
&:not(:disabled):focus {color: inherit;
background: #fafafa;
border-color: #3455db;
box-shadow: none;}
&:disabled {cursor: no-drop;
color: inherit;
background: #f2f2f2;
border-color: #d3d3d9;}
padding: 1em;
max-width: 100%;
height: auto;
line-height: inherit;
-webkit-transition: color .2s ease-in-out, background .2s ease-in-out, border .2s ease-in-out;
transition: color .2s ease-in-out, background .2s ease-in-out, border .2s ease-in-out;`;;
export const tag_fieldset = css`${__root}; border: 1px solid silver;
margin: 0 2px;
padding: .35em .625em .75em;
&:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
display: block;
margin: calc(1rem + .5vw) 0;
padding: calc(1rem + .5vw);
border: 1px solid #d3d3d9;
border-radius: 2px;`;;
export const tag_legend = css`${__root}; box-sizing: border-box;
display: table;
max-width: 100%;
padding: 0;
white-space: normal;
padding: .5em;
font-family: inherit;
font-weight: inherit;
font-size: 1rem;
color: inherit;`;;
export const tag_progress = css`${__root}; display: inline-block;
vertical-align: baseline;
display: block;
margin: 1rem 0;
width: 100%;
height: 1rem;`;;
export const $$$$_webkit_file_upload_button = css`${__root}; -webkit-appearance: button;
font: inherit;`;;
export const tag_details = css`${__root}; display: block;`;;
export const tag_menu = css`${__root}; display: block;`;;
export const tag_summary = css`${__root}; display: list-item;`;;
export const tag_canvas = css`${__root}; display: inline-block;`;;
export const tag_template = css`${__root}; display: none;`;;
export const $$after = css`${__root}; box-sizing: inherit;
@media print {
background: transparent;
color: #000;
box-shadow: none;
text-shadow: none;
}`;;
export const $$before = css`${__root}; box-sizing: inherit;
@media print {
background: transparent;
color: #000;
box-shadow: none;
text-shadow: none;
}`;;
export const $$focus = css`${__root}; outline: 1px dotted currentColor;
outline-offset: 1px;`;;
export const control = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
display: -webkit-box;
display: -ms-flexbox;
display: flex;
position: relative;
margin: 1rem 0;
padding: 0;
font-family: inherit;
font-weight: inherit;
font-size: 1rem;
color: inherit;
line-height: 1.5;
cursor: pointer;
&:hover .control-indicator {background-color: #fafafa;
border-color: #bebec3;
box-shadow: none;}
&input[type=checkbox] {z-index: -1;
position: absolute;
margin: 0;
opacity: 0;}
&input[type=radio] {z-index: -1;
position: absolute;
margin: 0;
opacity: 0;}
&input[type=checkbox]:focus ~ .control-indicator {background-color: #fafafa;
border-color: #3455db;
box-shadow: none;}
&input[type=radio]:focus ~ .control-indicator {background-color: #fafafa;
border-color: #3455db;
box-shadow: none;}
&input[type=checkbox]:checked ~ .control-indicator {background-color: #3455db;
border: 1px solid #3455db;}
&input[type=radio]:checked ~ .control-indicator {background-color: #3455db;
border: 1px solid #3455db;}
&input[type=checkbox]:checked ~ .control-label {color: inherit;}
&input[type=radio]:checked ~ .control-label {color: inherit;}`;;
export const field = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
margin: calc(1rem + .5vw) 0;
&.form-message:first-child {margin-top: 0;}
&.select:first-child {margin-top: 0;}
&input:first-child {margin-top: 0;}
&label:first-child {margin-top: 0;}
&textarea:first-child {margin-top: 0;}
&.form-message:last-child {margin-bottom: 0;}
&.select:last-child {margin-bottom: 0;}
&input:last-child {margin-bottom: 0;}
&label:last-child {margin-bottom: 0;}
&textarea:last-child {margin-bottom: 0;}`;;
export const select = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
position: relative;
display: block;
margin: 1rem 0;
font-size: 1rem;
line-height: auto;
font-family: inherit;
font-weight: inherit;
&select {font-family: inherit;
font-weight: inherit;}
&select {-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
cursor: pointer;
margin: 0;
outline: 0;
padding: 0 1em;
height: 3rem;
font-size: inherit;
color: inherit;
line-height: inherit;
background: #fff;
border: 1px solid #d3d3d9;
border-radius: 2px;
box-shadow: none;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;}
&select::-moz-focusring {color: transparent;
text-shadow: 0 0 0 #000;}
&select::-ms-expand {display: none;}
&select:not(:disabled):hover {color: inherit;
background: #fafafa;
border-color: #bebec3;
box-shadow: none;}
&select:not(:disabled):focus {color: inherit;
background: #fafafa;
border-color: #3455db;
box-shadow: none;}
&select:disabled {cursor: no-drop;
color: inherit;
background: #f2f2f2;
border-color: #d3d3d9;}
&:after {position: absolute;
top: 50%;
right: 15px;
margin-top: -2px;
width: 0;
height: 0;
content: "";
pointer-events: none;
border-left: 4px solid transparent;
border-right: 4px solid transparent;
border-top: 4px solid #323236;}
&:before {z-index: 2;
position: absolute;
top: 0;
right: 0;
bottom: 0;
content: "";
pointer-events: none;
width: 1em;
border-width: 1px 1px 1px 0;
border-color: #d3d3d9;
border-style: solid;
background: #fff;}`;;
export const tag_blockquote = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
@media print {
page-break-inside: avoid;
}
margin: 2em 0;
padding: 0 1em;
font-size: 1.25rem;
font-style: normal;
line-height: 1.5;
font-family: inherit;
font-weight: inherit;
color: inherit;
&p {font-family: inherit;
font-weight: inherit;
color: inherit;}
&p {font-size: inherit;
font-style: inherit;
line-height: inherit;}`;;
export const tag_cite = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
display: block;
font-size: .875rem;
font-style: normal;
text-align: left;
margin: 1em 0;
font-family: inherit;
font-weight: inherit;
color: inherit;`;;
export const tag_dd = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
font-family: inherit;
font-size: inherit;
color: inherit;
margin: 0 0 1em;
font-weight: inherit;`;;
export const tag_dl = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
margin: 1em 0;
padding: 0;
font-size: 1rem;`;;
export const tag_dt = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
margin: .5em 0;
font-weight: 700;
font-family: inherit;
font-size: inherit;
color: inherit;`;;
export const tag_h2 = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
@media print {
orphans: 3;
widows: 3;
}
@media print {
page-break-after: avoid;
}
margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 2rem;
&+ .h3 {margin-top: 0;}
&+ h3 {margin-top: 0;}`;;
export const tag_h3 = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
@media print {
orphans: 3;
widows: 3;
}
@media print {
page-break-after: avoid;
}
margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 1.5rem;
&+ .h4 {margin-top: 0;}
&+ h4 {margin-top: 0;}`;;
export const tag_h4 = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 1.25rem;
&+ .h5 {margin-top: 0;}
&+ h5 {margin-top: 0;}`;;
export const tag_h5 = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 1.125rem;
&+ .h6 {margin-top: 0;}
&+ h6 {margin-top: 0;}`;;
export const tag_h6 = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 1rem;`;;
export const tag_label = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
font-size: .875rem;
display: block;
margin: 1rem 0;
font-family: inherit;
font-weight: inherit;
color: inherit;
line-height: 1.5;`;;
export const tag_ol = css`${__root}; &li:first-child {margin-top: 0;}
&li:last-child {margin-bottom: 0;}
margin: 1em 0;
font-family: inherit;
font-weight: inherit;
color: inherit;
padding: 0;
font-size: 1rem;
line-height: 1.5;
&li {margin: .5em 0 .5em 1.5em;
padding: 0 0 0 .5em;}
&li ul {margin: .5em 0;
padding: 0;}
&li ul li {margin: .5em 0 .5em 1.5em;
padding: 0 0 0 .5em;}`;;
export const tag_p = css`${__root}; &:first-child {margin-top: 0;}
&:last-child {margin-bottom: 0;}
@media print {
orphans: 3;
widows: 3;
}
font-family: inherit;
font-weight: inherit;
color: inherit;
line-height: 1.5;
margin: 1em 0;
font-size: 1rem;`;;
export const tag_ul = css`${__root}; &li:first-child {margin-top: 0;}
&li:last-child {margin-bottom: 0;}
margin: 1em 0;
font-family: inherit;
font-weight: inherit;
color: inherit;
padding: 0;
font-size: 1rem;
line-height: 1.5;
&li {margin: .5em 0 .5em 1.5em;
padding: 0 0 0 .5em;}
&li ul {margin: .5em 0;
padding: 0;}
&li ul li {margin: .5em 0 .5em 1.5em;
padding: 0 0 0 .5em;}
list-style: disc;
&li ul {list-style: disc;}`;;
export const container = css`${__root}; margin: 0 auto;
padding-left: calc(1rem + .5vw);
padding-right: calc(1rem + .5vw);
width: 100%;
@media (min-width: 1680px) {
max-width: 90rem;
}
@media (min-width: 1280px) and (max-width: 1679px) {
max-width: 80rem;
}
@media (min-width: 1024px) and (max-width: 1279px) {
max-width: 70rem;
}
@media (min-width: 768px) and (max-width: 1023px) {
max-width: 100%;
}
@media (max-width: 767px) {
max-width: 100%;
}`;;
export const tag_thead = css`${__root}; @media print {
display: table-header-group;
}`;;
export const tag_tr = css`${__root}; @media print {
page-break-inside: avoid;
}`;;
export const tag_table = css`${__root}; @media print {
border-collapse: collapse;
background-color: #fff;
}
margin: 1em 0;
width: 100%;
background: #fff;
border: 1px solid #d3d3d9;
border-radius: 2px;
border-collapse: collapse;
&caption {margin: 1em 0;}
&caption {font-family: inherit;
font-weight: inherit;
font-size: inherit;
color: inherit;
text-align: left;}
&th {font-family: inherit;
font-weight: inherit;
font-size: inherit;
color: inherit;
text-align: left;}
&th {padding: .5em;
text-transform: none;
background: #f6f6f7;
border: 1px solid #d3d3d9;}
&td {padding: .5em;
font-family: inherit;
font-weight: inherit;
font-size: inherit;
color: inherit;
line-height: 1.35;
vertical-align: middle;
border: 1px solid #d3d3d9;}`;;
export const tag_td = css`${__root}; background-color: #fff;`;;
export const tag_th = css`${__root}; background-color: #fff;`;;
export const screen_reader = css`${__root}; position: absolute;
padding: 0;
width: 1px;
height: 1px;
margin: -1px;
border: 0;
overflow: hidden;
clip: rect(0 0 0 0);`;;
export const screen_reader_focusable = css`${__root}; &:active {position: static;
width: auto;
height: auto;
margin: 0;
overflow: visible;
clip: auto;}
&:focus {position: static;
width: auto;
height: auto;
margin: 0;
overflow: visible;
clip: auto;}`;;
export const tag_to = css`${__root}; -webkit-transform: rotate(1turn);
transform: rotate(1turn);
-webkit-transform: rotate(1turn);
transform: rotate(1turn);`;;
export const h1 = css`${__root}; margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 2.25rem;
&+ .h2 {margin-top: 0;}
&+ h2 {margin-top: 0;}`;;
export const h2 = css`${__root}; margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 2rem;
&+ .h3 {margin-top: 0;}
&+ h3 {margin-top: 0;}`;;
export const h3 = css`${__root}; margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 1.5rem;
&+ .h4 {margin-top: 0;}
&+ h4 {margin-top: 0;}`;;
export const h4 = css`${__root}; margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 1.25rem;
&+ .h5 {margin-top: 0;}
&+ h5 {margin-top: 0;}`;;
export const h5 = css`${__root}; margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 1.125rem;
&+ .h6 {margin-top: 0;}
&+ h6 {margin-top: 0;}`;;
export const h6 = css`${__root}; margin: 2em 0 1em;
font-family: inherit;
font-weight: 700;
color: inherit;
line-height: 1.35;
text-transform: none;
letter-spacing: 0;
font-family: inherit;
font-weight: inherit;
font-size: .6em;
color: inherit;
font-size: 1rem;`;;
export const display_title = css`${__root}; margin: 0;
font-size: 2.25rem;
color: inherit;
text-transform: uppercase;
letter-spacing: .05em;
font-family: inherit;
font-weight: 700;
line-height: 1.2;`;;
export const big = css`${__root}; font-family: inherit;
font-weight: 700;
line-height: 1.2;
margin: .5em 0;
font-size: calc(36px + 20 * ((100vw - 320px) / 640));`;;
export const small_caps = css`${__root}; margin: 1em 0;
font-family: inherit;
font-weight: 700;
font-size: .875rem;
line-height: 1.2;
text-transform: uppercase;
letter-spacing: 0;`;;
export const lead = css`${__root}; margin: .5em 0 1em;
font-size: 1.25rem;
font-family: inherit;
font-weight: inherit;
color: inherit;
line-height: 1.5;`;;
export const tag_em = css`${__root}; font-style: italic;`;;
export const list_unstyled = css`${__root}; list-style: none;
&li {margin-left: 0;}`;;
export const list_inline = css`${__root}; &li {display: inline-block;}`;;
export const form_message = css`${__root}; font-family: inherit;
font-weight: inherit;
color: inherit;
margin: 1rem 0;
font-size: .875rem;
line-height: 1.5;
&:empty {display: none;}`;;
export const form_message_and_error = css`${__root}; color: #d91e18;`;;
export const form_message_and_warning = css`${__root}; color: #ff4500;`;;
export const form_message_and_success = css`${__root}; color: #0a0;`;;
export const form_message_and_info = css`${__root}; color: #1e90ff;`;;
export const field_float_label = css`${__root}; position: relative;
&input + label {position: absolute;
top: 0;
left: 0;
opacity: 0;
margin: 0 1em;
padding: .25em;
-webkit-transform: translateY(50%);
transform: translateY(50%);
pointer-events: none;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;}
&textarea + label {position: absolute;
top: 0;
left: 0;
opacity: 0;
margin: 0 1em;
padding: .25em;
-webkit-transform: translateY(50%);
transform: translateY(50%);
pointer-events: none;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;}
&input:not(:disabled):focus::-webkit-input-placeholder {opacity: 0;}
&textarea:not(:disabled):focus::-webkit-input-placeholder {opacity: 0;}
&input:not(:disabled):focus::-moz-placeholder {opacity: 0;}
&textarea:not(:disabled):focus::-moz-placeholder {opacity: 0;}
&input:not(:disabled):focus:-ms-input-placeholder {opacity: 0;}
&textarea:not(:disabled):focus:-ms-input-placeholder {opacity: 0;}
&input:not(:disabled):focus::placeholder {opacity: 0;}
&textarea:not(:disabled):focus::placeholder {opacity: 0;}
&input:not(:disabled):focus + label {opacity: 1;
-webkit-transform: translateY(-50%);
transform: translateY(-50%);
background-color: transparent;
background-image: -webkit-linear-gradient(top, transparent 50%, #fafafa 0);
background-image: linear-gradient(180deg, transparent 50%, #fafafa 0);}
&textarea:not(:disabled):focus + label {opacity: 1;
-webkit-transform: translateY(-50%);
transform: translateY(-50%);
background-color: transparent;
background-image: -webkit-linear-gradient(top, transparent 50%, #fafafa 0);
background-image: linear-gradient(180deg, transparent 50%, #fafafa 0);}`;;
export const tag_input_and_error = css`${__root}; color: #d91e18;
border-color: #d91e18;`;;
export const tag_textarea_and_error = css`${__root}; color: #d91e18;
border-color: #d91e18;`;;
export const tag_input_and_warning = css`${__root}; color: #ff4500;
border-color: #ff4500;`;;
export const tag_textarea_and_warning = css`${__root}; color: #ff4500;
border-color: #ff4500;`;;
export const tag_input_and_success = css`${__root}; color: #0a0;
border-color: #0a0;`;;
export const tag_textarea_and_success = css`${__root}; color: #0a0;
border-color: #0a0;`;;
export const tag_input_and_info = css`${__root}; color: #1e90ff;
border-color: #1e90ff;`;;
export const tag_textarea_and_info = css`${__root}; color: #1e90ff;
border-color: #1e90ff;`;;
export const input_xl = css`${__root}; padding: 0 1em;
height: 4rem;
font-size: 1.25rem;`;;
export const input_l = css`${__root}; padding: 0 1em;
height: 3.5rem;
font-size: 1.125rem;`;;
export const input_s = css`${__root}; padding: 0 1em;
height: 2.5rem;
font-size: .875rem;`;;
export const input_xs = css`${__root}; padding: 0 1em;
height: 2rem;
font-size: .75rem;`;;
export const input_group = css`${__root}; display: -webkit-box;
display: -ms-flexbox;
display: flex;
width: 100%;
&input {-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
margin: 0;}
&input:not(:last-child) {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&.button {-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;}
&button {-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;}
&.button {position: relative;}
&button {position: relative;}
&input {position: relative;}
&.button:active {z-index: 2;}
&.button:focus {z-index: 2;}
&.button:hover {z-index: 2;}
&button:active {z-index: 2;}
&button:focus {z-index: 2;}
&button:hover {z-index: 2;}
&input:active {z-index: 2;}
&input:focus {z-index: 2;}
&input:hover {z-index: 2;}
&.button + .button {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&.button + button {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&.button + input {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&button + .button {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&button + button {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&button + input {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&input + .button {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&input + button {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&input + input {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&.button + .button {margin-left: -1px;}
&.button + button {margin-left: -1px;}
&.button + input {margin-left: -1px;}
&button + .button {margin-left: -1px;}
&button + button {margin-left: -1px;}
&button + input {margin-left: -1px;}
&input + .button {margin-left: -1px;}
&input + button {margin-left: -1px;}
&input + input {margin-left: -1px;}`;;
export const select_and_error = css`${__root}; &select {color: #d91e18;
border-color: #d91e18;}
&:after {border-top-color: #d91e18;}`;;
export const select_and_warning = css`${__root}; &select {color: #ff4500;
border-color: #ff4500;}
&:after {border-top-color: #ff4500;}`;;
export const select_and_success = css`${__root}; &select {color: #0a0;
border-color: #0a0;}
&:after {border-top-color: #0a0;}`;;
export const select_and_info = css`${__root}; &select {color: #1e90ff;
border-color: #1e90ff;}
&:after {border-top-color: #1e90ff;}`;;
export const select_and_large = css`${__root}; &:before {width: 1.5em;}`;;
export const select_xl = css`${__root}; &select {padding: 0 1em;
height: 4rem;
font-size: 1.25rem;}`;;
export const tag_select_and_select_xl = css`${__root}; padding: 0 1em;
height: 4rem;
font-size: 1.25rem;`;;
export const select_l = css`${__root}; &select {padding: 0 1em;
height: 3.5rem;
font-size: 1.125rem;}`;;
export const tag_select_and_select_l = css`${__root}; padding: 0 1em;
height: 3.5rem;
font-size: 1.125rem;`;;
export const select_s = css`${__root}; &select {padding: 0 1em;
height: 2.5rem;
font-size: .875rem;}`;;
export const tag_select_and_select_s = css`${__root}; padding: 0 1em;
height: 2.5rem;
font-size: .875rem;`;;
export const select_xs = css`${__root}; &select {padding: 0 1em;
height: 2rem;
font-size: .75rem;}`;;
export const tag_select_and_select_xs = css`${__root}; padding: 0 1em;
height: 2rem;
font-size: .75rem;`;;
export const control_and_control_inline = css`${__root}; display: -webkit-inline-box;
display: -ms-inline-flexbox;
display: inline-flex;
margin-right: 2rem;`;;
export const control_and_checkbox = css`${__root}; &.control-indicator {border-radius: 2px;}
&input[type=checkbox]:checked ~ .control-indicator {background-color: #3455db;
background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOC4xLjEsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMTIuOHB4IiBoZWlnaHQ9IjkuOHB4IiB2aWV3Qm94PSIwIDAgMTIuOCA5LjgiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDEyLjggOS44IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwb2x5Z29uIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMTEuNCwwIDQuNCw3IDEuNCw0IDAsNS40IDMsOC40IDQuNCw5LjggNS44LDguNCAxMi44LDEuNCAiLz4NCjwvc3ZnPg0K");}`;;
export const control_and_radio = css`${__root}; &.control-indicator {border-radius: 1.5rem;}
&input[type=radio]:checked ~ .control-indicator:before {position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
content: "";
width: .5em;
height: .5em;
background: #fff;
border-radius: 1.5rem;}`;;
export const control_and_switch = css`${__root}; &.control-indicator {width: 2em;
border-radius: 1.5rem;}
&.control-indicator:before {display: block;
position: absolute;
top: -1px;
left: -1px;
content: "";
width: 1em;
height: 1em;
background-color: #fff;
border-width: inherit;
border-style: inherit;
border-color: inherit;
border-radius: 1.5rem;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;}
&input[type=checkbox]:checked ~ .control-indicator:before {left: calc(100% - 1em + 1px);}`;;
export const control_and_error = css`${__root}; &input:checked ~ .control-indicator {background-color: #d91e18;
border-color: #d91e18;}`;;
export const control_and_warning = css`${__root}; &input:checked ~ .control-indicator {background-color: #ff4500;
border-color: #ff4500;}`;;
export const control_and_success = css`${__root}; &input:checked ~ .control-indicator {background-color: #0a0;
border-color: #0a0;}`;;
export const control_and_info = css`${__root}; &input:checked ~ .control-indicator {background-color: #1e90ff;
border-color: #1e90ff;}`;;
export const control_indicator = css`${__root}; -webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
position: relative;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
vertical-align: middle;
width: 1em;
height: 1em;
font-size: 1.5rem;
line-height: 1;
text-align: center;
background-color: #fff;
background-position: 50%;
background-repeat: no-repeat;
border: 1px solid #d3d3d9;
box-shadow: none;
display: block;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;`;;
export const control_label = css`${__root}; display: block;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
margin: 0 0 0 1rem;
color: inherit;`;;
export const control_xl = css`${__root}; font-size: 1.25rem;
&.control-indicator {font-size: 2rem;}`;;
export const control_l = css`${__root}; font-size: 1.125rem;
&.control-indicator {font-size: 1.75rem;}`;;
export const control_s = css`${__root}; font-size: .875rem;
&.control-indicator {font-size: 1.25rem;}`;;
export const control_xs = css`${__root}; font-size: .75rem;
&.control-indicator {font-size: 1rem;}`;;
export const progress_xl = css`${__root}; height: 1.25rem;`;;
export const progress_l = css`${__root}; height: 1.125rem;`;;
export const progress_s = css`${__root}; height: .875rem;`;;
export const progress_xs = css`${__root}; height: .75rem;`;;
export const button = css`${__root}; display: inline-block;
padding: calc((3rem - 1rem - 2px) / 2) 1.5em;
min-width: 3rem;
height: 3rem;
font-family: inherit;
font-weight: 600;
line-height: 1;
font-size: 1rem;
color: #323236;
letter-spacing: 0;
text-align: center;
text-transform: none;
text-decoration: none;
white-space: nowrap;
cursor: pointer;
background: #fff;
border: 1px solid #d3d3d9;
border-radius: 2px;
box-shadow: none;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;
&:not(:disabled):focus {text-decoration: none;
color: #323236;
background: #f6f6f7;
border-color: #c8c8ce;
box-shadow: none;}
&:not(:disabled):hover {text-decoration: none;
color: #323236;
background: #f6f6f7;
border-color: #c8c8ce;
box-shadow: none;}
&:not(:disabled):active {color: #323236;
background: #ededf0;
border-color: #bebec3;
box-shadow: none;}
&svg {width: 1rem;
height: 1rem;
fill: currentColor;
-webkit-transition: all .2s ease-in-out;
transition: all .2s ease-in-out;}`;;
export const button_and_spinner = css`${__root}; &:before {margin-top: -.5em;
margin-left: -.5em;
width: 1em;
height: 1em;}`;;
export const tag_button_and_spinner = css`${__root}; &:before {margin-top: -.5em;
margin-left: -.5em;
width: 1em;
height: 1em;}`;;
export const button_and_error = css`${__root}; color: #fff;
background: #d91e18;
border-color: #d91e18;
&:not(:disabled):focus {color: #fff;
background: #dd342f;
border-color: #dd342f;}
&:not(:disabled):hover {color: #fff;
background: #dd342f;
border-color: #dd342f;}
&:not(:disabled):active {color: #fff;
background: #c31b16;
border-color: #c31b16;}`;;
export const tag_button_and_error = css`${__root}; color: #fff;
background: #d91e18;
border-color: #d91e18;
&:not(:disabled):focus {color: #fff;
background: #dd342f;
border-color: #dd342f;}
&:not(:disabled):hover {color: #fff;
background: #dd342f;
border-color: #dd342f;}
&:not(:disabled):active {color: #fff;
background: #c31b16;
border-color: #c31b16;}`;;
export const button_and_error_and_button_border = css`${__root}; color: #d91e18;
background: transparent;`;;
export const tag_button_and_error_and_button_border = css`${__root}; color: #d91e18;
background: transparent;`;;
export const button_and_warning = css`${__root}; color: #fff;
background: #ff4500;
border-color: #ff4500;
&:not(:disabled):focus {color: #fff;
background: #ff5819;
border-color: #ff5819;}
&:not(:disabled):hover {color: #fff;
background: #ff5819;
border-color: #ff5819;}
&:not(:disabled):active {color: #fff;
background: #e63e00;
border-color: #e63e00;}`;;
export const tag_button_and_warning = css`${__root}; color: #fff;
background: #ff4500;
border-color: #ff4500;
&:not(:disabled):focus {color: #fff;
background: #ff5819;
border-color: #ff5819;}
&:not(:disabled):hover {color: #fff;
background: #ff5819;
border-color: #ff5819;}
&:not(:disabled):active {color: #fff;
background: #e63e00;
border-color: #e63e00;}`;;
export const button_and_warning_and_button_border = css`${__root}; color: #ff4500;
background: transparent;`;;
export const tag_button_and_warning_and_button_border = css`${__root}; color: #ff4500;
background: transparent;`;;
export const button_and_success = css`${__root}; color: #fff;
background: #0a0;
border-color: #0a0;
&:not(:disabled):focus {color: #fff;
background: #19b319;
border-color: #19b319;}
&:not(:disabled):hover {color: #fff;
background: #19b319;
border-color: #19b319;}
&:not(:disabled):active {color: #fff;
background: #090;
border-color: #090;}`;;
export const tag_button_and_success = css`${__root}; color: #fff;
background: #0a0;
border-color: #0a0;
&:not(:disabled):focus {color: #fff;
background: #19b319;
border-color: #19b319;}
&:not(:disabled):hover {color: #fff;
background: #19b319;
border-color: #19b319;}
&:not(:disabled):active {color: #fff;
background: #090;
border-color: #090;}`;;
export const button_and_success_and_button_border = css`${__root}; color: #0a0;
background: transparent;`;;
export const tag_button_and_success_and_button_border = css`${__root}; color: #0a0;
background: transparent;`;;
export const button_and_info = css`${__root}; color: #fff;
background: #1e90ff;
border-color: #1e90ff;
&:not(:disabled):focus {color: #fff;
background: #349bff;
border-color: #349bff;}
&:not(:disabled):hover {color: #fff;
background: #349bff;
border-color: #349bff;}
&:not(:disabled):active {color: #fff;
background: #1b82e6;
border-color: #1b82e6;}`;;
export const tag_button_and_info = css`${__root}; color: #fff;
background: #1e90ff;
border-color: #1e90ff;
&:not(:disabled):focus {color: #fff;
background: #349bff;
border-color: #349bff;}
&:not(:disabled):hover {color: #fff;
background: #349bff;
border-color: #349bff;}
&:not(:disabled):active {color: #fff;
background: #1b82e6;
border-color: #1b82e6;}`;;
export const button_and_info_and_button_border = css`${__root}; color: #1e90ff;
background: transparent;`;;
export const tag_button_and_info_and_button_border = css`${__root}; color: #1e90ff;
background: transparent;`;;
export const button_block = css`${__root}; display: block;
width: 100%;
text-align: center;`;;
export const button_border = css`${__root}; background: transparent;`;;
export const button_square = css`${__root}; padding: calc((3rem - 1rem - 2px) / 2);`;;
export const button_pill = css`${__root}; border-radius: 1.5rem;`;;
export const button_xl = css`${__root}; padding: calc((4rem - 1.25rem - 2px) / 2) 1.5em;
min-width: 4rem;
height: 4rem;
font-size: 1.25rem;
&svg {width: 1.25rem;
height: 1.25rem;}`;;
export const button_xl_and_button_square = css`${__root}; padding: calc((4rem - 1.25rem - 2px) / 2);`;;
export const button_xl_and_button_pill = css`${__root}; border-radius: 2rem;`;;
export const button_l = css`${__root}; padding: calc((3.5rem - 1.125rem - 2px) / 2) 1.5em;
min-width: 3.5rem;
height: 3.5rem;
font-size: 1.125rem;
&svg {width: 1.125rem;
height: 1.125rem;}`;;
export const button_l_and_button_square = css`${__root}; padding: calc((3.5rem - 1.125rem - 2px) / 2);`;;
export const button_l_and_button_pill = css`${__root}; border-radius: 1.75rem;`;;
export const button_s = css`${__root}; padding: calc((2.5rem - .875rem - 2px) / 2) 1.5em;
min-width: 2.5rem;
height: 2.5rem;
font-size: .875rem;
&svg {width: .875rem;
height: .875rem;}`;;
export const button_s_and_button_square = css`${__root}; padding: calc((2.5rem - .875rem - 2px) / 2);`;;
export const button_s_and_button_pill = css`${__root}; border-radius: 1.25rem;`;;
export const button_xs = css`${__root}; padding: calc((2rem - .75rem - 2px) / 2) 1.5em;
min-width: 2rem;
height: 2rem;
font-size: .75rem;
&svg {width: .75rem;
height: .75rem;}`;;
export const button_xs_and_button_square = css`${__root}; padding: calc((2rem - .75rem - 2px) / 2);`;;
export const button_xs_and_button_pill = css`${__root}; border-radius: 1rem;`;;
export const button_white = css`${__root}; color: #000;
background: #fff;
border-color: #fff;
&:not(:disabled):focus {color: #000;
background: #f2f2f2;
border-color: #f2f2f2;}
&:not(:disabled):hover {color: #000;
background: #f2f2f2;
border-color: #f2f2f2;}
&:not(:disabled):active {color: #000;
background: #e6e6e6;
border-color: #e6e6e6;}`;;
export const button_white_and_button_border = css`${__root}; color: #fff;
background: transparent;`;;
export const button_light = css`${__root}; color: #323236;
background: #d3d3d9;
border-color: #d3d3d9;
&:not(:disabled):focus {color: #323236;
background: #dcdce1;
border-color: #dcdce1;}
&:not(:disabled):hover {color: #323236;
background: #dcdce1;
border-color: #dcdce1;}
&:not(:disabled):active {color: #323236;
background: #c8c8ce;
border-color: #c8c8ce;}`;;
export const button_light_and_button_border = css`${__root}; color: #d3d3d9;
background: transparent;`;;
export const button_grey = css`${__root}; color: #fff;
background: #616166;
border-color: #616166;
&:not(:disabled):focus {color: #fff;
background: #6c6c71;
border-color: #6c6c71;}
&:not(:disabled):hover {color: #fff;
background: #6c6c71;
border-color: #6c6c71;}
&:not(:disabled):active {color: #fff;
background: #5a5a5f;
border-color: #5a5a5f;}`;;
export const button_grey_and_button_border = css`${__root}; color: #616166;
background: transparent;`;;
export const button_dark = css`${__root}; color: #fff;
background: #323236;
border-color: #323236;
&:not(:disabled):focus {color: #fff;
background: #3c3c40;
border-color: #3c3c40;}
&:not(:disabled):hover {color: #fff;
background: #3c3c40;
border-color: #3c3c40;}
&:not(:disabled):active {color: #fff;
background: #2f2f32;
border-color: #2f2f32;}`;;
export const button_dark_and_button_border = css`${__root}; color: #323236;
background: transparent;`;;
export const button_black = css`${__root}; color: #fff;
background: #000;
border-color: #000;
&:not(:disabled):focus {color: #fff;
background: #333;
border-color: #333;}
&:not(:disabled):hover {color: #fff;
background: #333;
border-color: #333;}
&:not(:disabled):active {color: #fff;
background: #191919;
border-color: #191919;}`;;
export const button_black_and_button_border = css`${__root}; color: #000;
background: transparent;`;;
export const button_primary = css`${__root}; color: #fff;
background: #3455db;
border-color: #3455db;
&:not(:disabled):focus {color: #fff;
background: #4866df;
border-color: #4866df;}
&:not(:disabled):hover {color: #fff;
background: #4866df;
border-color: #4866df;}
&:not(:disabled):active {color: #fff;
background: #2f4dc5;
border-color: #2f4dc5;}`;;
export const button_primary_and_button_border = css`${__root}; color: #3455db;
background: transparent;`;;
export const button_secondary = css`${__root}; color: #fff;
background: #639;
border-color: #639;
&:not(:disabled):focus {color: #fff;
background: #7547a3;
border-color: #7547a3;}
&:not(:disabled):hover {color: #fff;
background: #7547a3;
border-color: #7547a3;}
&:not(:disabled):active {color: #fff;
background: #5c2e8a;
border-color: #5c2e8a;}`;;
export const button_secondary_and_button_border = css`${__root}; color: #639;
background: transparent;`;;
export const button_tertiary = css`${__root}; color: #fff;
background: #8b008b;
border-color: #8b008b;
&:not(:disabled):focus {color: #fff;
background: #971997;
border-color: #971997;}
&:not(:disabled):hover {color: #fff;
background: #971997;
border-color: #971997;}
&:not(:disabled):active {color: #fff;
background: #7d007d;
border-color: #7d007d;}`;;
export const button_tertiary_and_button_border = css`${__root}; color: #8b008b;
background: transparent;`;;
export const button_group = css`${__root}; display: -webkit-box;
display: -ms-flexbox;
display: flex;
&.button {position: relative;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;}
&button {position: relative;
-webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;}
&.button:active {z-index: 2;}
&.button:focus {z-index: 2;}
&.button:hover {z-index: 2;}
&button:active {z-index: 2;}
&button:focus {z-index: 2;}
&button:hover {z-index: 2;}
&.button + .button {border-top-left-radius: 0;
border-bottom-left-radius: 0;
margin-left: -1px;}
&.button + button {border-top-left-radius: 0;
border-bottom-left-radius: 0;
margin-left: -1px;}
&button + .button {border-top-left-radius: 0;
border-bottom-left-radius: 0;
margin-left: -1px;}
&button + button {border-top-left-radius: 0;
border-bottom-left-radius: 0;
margin-left: -1px;}`;;
export const button_group_block = css`${__root}; width: 100%;
&.button {-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;}
&button {-webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;}`;;
export const media = css`${__root}; display: block;
position: relative;
overflow: hidden;
background: rgba(0, 0, 0, .1);
border-radius: 2px;
&> .media-inner {display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;}
&> canvas {display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;}
&> iframe {display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;}
&> img {display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;}
&> svg {display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;}
&> video {display: block;
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;}`;;
export const media_1 = css`${__root}; padding-top: 100%;`;;
export const media_1_2 = css`${__root}; padding-top: 200%;`;;
export const media_9_16 = css`${__root}; padding-top: 177.77778%;`;;
export const media_9_14 = css`${__root}; padding-top: 155.55556%;`;;
export const media_2_3 = css`${__root}; padding-top: 150%;`;;
export const media_3_4 = css`${__root}; padding-top: 133.33333%;`;;
export const media_4_3 = css`${__root}; padding-top: 75%;`;;
export const media_3_2 = css`${__root}; padding-top: 66.66667%;`;;
export const media_16_9 = css`${__root}; padding-top: 56.25%;`;;
export const media_2_1 = css`${__root}; padding-top: 50%;`;;
export const nav = css`${__root}; &ul {margin: 0;
list-style: none;}
&ul li {margin: 1rem 0;
padding: 0;}`;;
export const nav_inline = css`${__root}; &ul li {display: inline-block;
margin: 0 1rem;}`;;
export const spinner = css`${__root}; position: relative;
&:before {display: block;
position: absolute;
top: 50%;
left: 50%;
margin-top: -1rem;
margin-left: -1rem;
width: 2rem;
height: 2rem;
content: "";
border-radius: 50%;
border: 3px solid rgba(0, 0, 0, .1);
border-left-color: #fff;
-webkit-animation: a .5s infinite linear;
animation: a .5s infinite linear;}`;;
export const table = css`${__root}; margin: 1em 0;
width: 100%;
background: #fff;
border: 1px solid #d3d3d9;
border-radius: 2px;
border-collapse: collapse;
&caption {margin: 1em 0;}
&caption {font-family: inherit;
font-weight: inherit;
font-size: inherit;
color: inherit;
text-align: left;}
&th {font-family: inherit;
font-weight: inherit;
font-size: inherit;
color: inherit;
text-align: left;}
&th {padding: .5em;
text-transform: none;
background: #f6f6f7;
border: 1px solid #d3d3d9;}
&td {padding: .5em;
font-family: inherit;
font-weight: inherit;
font-size: inherit;
color: inherit;
line-height: 1.35;
vertical-align: middle;
border: 1px solid #d3d3d9;}`;;
export const table_responsive = css`${__root}; margin: 1em 0;
overflow-x: auto;
min-height: .01%;
@media (min-width: 768px) and (max-width: 1023px) {
width: 100%;
overflow-y: hidden;
-ms-overflow-style: -ms-autohiding-scrollbar;
border: 1px solid #d3d3d9;
}
&> table {@media (min-width: 768px) and (max-width: 1023px) {
margin: 0;
border: none;
}}
&> table td {@media (min-width: 768px) and (max-width: 1023px) {
white-space: nowrap;
}}
&> table th {@media (min-width: 768px) and (max-width: 1023px) {
white-space: nowrap;
}}
&> table td:first-child {@media (min-width: 768px) and (max-width: 1023px) {
border-left: none;
}}
&> table th:first-child {@media (min-width: 768px) and (max-width: 1023px) {
border-left: none;
}}
&> table td:last-child {@media (min-width: 768px) and (max-width: 1023px) {
border-right: none;
}}
&> table th:last-child {@media (min-width: 768px) and (max-width: 1023px) {
border-right: none;
}}
&> table tr:first-child {@media (min-width: 768px) and (max-width: 1023px) {
border-top: none;
}}
&> table tr:last-child {@media (min-width: 768px) and (max-width: 1023px) {
border-bottom: none;
}}`;;
export const background_repeat = css`${__root}; background-repeat: repeat;`;;
export const background_no_repeat = css`${__root}; background-repeat: no-repeat;`;;
export const background_fixed = css`${__root}; background-attachment: fixed;`;;
export const background_cover = css`${__root}; background-size: cover;`;;
export const background_center = css`${__root}; background-position: 50%;`;;
export const background_transparent = css`${__root}; background: transparent;`;;
export const background_white = css`${__root}; background-color: #fff;`;;
export const background_black = css`${__root}; background-color: #000;`;;
export const background_light = css`${__root}; background-color: #d3d3d9;`;;
export const background_light_100 = css`${__root}; background-color: #f6f6f7;`;;
export const background_light_200 = css`${__root}; background-color: #ededf0;`;;
export const background_light_300 = css`${__root}; background-color: #e5e5e8;`;;
export const background_light_400 = css`${__root}; background-color: #dcdce1;`;;
export const background_light_500 = css`${__root}; background-color: #d3d3d9;`;;
export const background_light_600 = css`${__root}; background-color: #c8c8ce;`;;
export const background_light_700 = css`${__root}; background-color: #bebec3;`;;
export const background_light_800 = css`${__root}; background-color: #b3b3b8;`;;
export const background_light_900 = css`${__root}; background-color: #a9a9ae;`;;
export const background_grey = css`${__root}; background-color: #616166;`;;
export const background_grey_100 = css`${__root}; background-color: #909094;`;;
export const background_grey_200 = css`${__root}; background-color: #848488;`;;
export const background_grey_300 = css`${__root}; background-color: #79797d;`;;
export const background_grey_400 = css`${__root}; background-color: #6c6c71;`;;
export const background_grey_500 = css`${__root}; background-color: #616166;`;;
export const background_grey_600 = css`${__root}; background-color: #5a5a5f;`;;
export const background_grey_700 = css`${__root}; background-color: #525257;`;;
export const background_grey_800 = css`${__root}; background-color: #4c4c50;`;;
export const background_grey_900 = css`${__root}; background-color: #444447;`;;
export const background_dark = css`${__root}; background-color: #323236;`;;
export const background_dark_100 = css`${__root}; background-color: #5b5b5e;`;;
export const background_dark_200 = css`${__root}; background-color: #515154;`;;
export const background_dark_300 = css`${__root}; background-color: #47474a;`;;
export const background_dark_400 = css`${__root}; background-color: #3c3c40;`;;
export const background_dark_500 = css`${__root}; background-color: #323236;`;;
export const background_dark_600 = css`${__root}; background-color: #2f2f32;`;;
export const background_dark_700 = css`${__root}; background-color: #2b2b2e;`;;
export const background_dark_800 = css`${__root}; background-color: #27272a;`;;
export const background_dark_900 = css`${__root}; background-color: #232326;`;;
export const background_primary = css`${__root}; background-color: #3455db;`;;
export const background_primary_100 = css`${__root}; background-color: #8599e9;`;;
export const background_primary_200 = css`${__root}; background-color: #7188e6;`;;
export const background_primary_300 = css`${__root}; background-color: #5d77e2;`;;
export const background_primary_400 = css`${__root}; background-color: #4866df;`;;
export const background_primary_500 = css`${__root}; background-color: #3455db;`;;
export const background_primary_600 = css`${__root}; background-color: #2f4dc5;`;;
export const background_primary_700 = css`${__root}; background-color: #2a44af;`;;
export const background_primary_800 = css`${__root}; background-color: #243b99;`;;
export const background_primary_900 = css`${__root}; background-color: #1f3383;`;;
export const background_secondary = css`${__root}; background-color: #639;`;;
export const background_secondary_100 = css`${__root}; background-color: #a385c2;`;;
export const background_secondary_200 = css`${__root}; background-color: #9470b8;`;;
export const background_secondary_300 = css`${__root}; background-color: #855cad;`;;
export const background_secondary_400 = css`${__root}; background-color: #7547a3;`;;
export const background_secondary_500 = css`${__root}; background-color: #639;`;;
export const background_secondary_600 = css`${__root}; background-color: #5c2e8a;`;;
export const background_secondary_700 = css`${__root}; background-color: #52297a;`;;
export const background_secondary_800 = css`${__root}; background-color: #47246b;`;;
export const background_secondary_900 = css`${__root}; background-color: #3d1f5c;`;;
export const background_tertiary = css`${__root}; background-color: #8b008b;`;;
export const background_tertiary_100 = css`${__root}; background-color: #b966b9;`;;
export const background_tertiary_200 = css`${__root}; background-color: #ae4dae;`;;
export const background_tertiary_300 = css`${__root}; background-color: #a233a2;`;;
export const background_tertiary_400 = css`${__root}; background-color: #971997;`;;
export const background_tertiary_500 = css`${__root}; background-color: #8b008b;`;;
export const background_tertiary_600 = css`${__root}; background-color: #7d007d;`;;
export const background_tertiary_700 = css`${__root}; background-color: #6f006f;`;;
export const background_tertiary_800 = css`${__root}; background-color: #610061;`;;
export const background_tertiary_900 = css`${__root}; background-color: #530053;`;;
export const background_error = css`${__root}; background-color: #d91e18;`;;
export const background_error_100 = css`${__root}; background-color: #e87874;`;;
export const background_error_200 = css`${__root}; background-color: #e4625d;`;;
export const background_error_300 = css`${__root}; background-color: #e14b46;`;;
export const background_error_400 = css`${__root}; background-color: #dd342f;`;;
export const background_error_500 = css`${__root}; background-color: #d91e18;`;;
export const background_error_600 = css`${__root}; background-color: #c31b16;`;;
export const background_error_700 = css`${__root}; background-color: #ae1813;`;;
export const background_error_800 = css`${__root}; background-color: #981511;`;;
export const background_error_900 = css`${__root}; background-color: #82120e;`;;
export const background_warning = css`${__root}; background-color: #ff4500;`;;
export const background_warning_100 = css`${__root}; background-color: #ff8f66;`;;
export const background_warning_200 = css`${__root}; background-color: #ff7d4d;`;;
export const background_warning_300 = css`${__root}; background-color: #ff6a33;`;;
export const background_warning_400 = css`${__root}; background-color: #ff5819;`;;
export const background_warning_500 = css`${__root}; background-color: #ff4500;`;;
export const background_warning_600 = css`${__root}; background-color: #e63e00;`;;
export const background_warning_700 = css`${__root}; background-color: #cc3700;`;;
export const background_warning_800 = css`${__root}; background-color: #b33000;`;;
export const background_warning_900 = css`${__root}; background-color: #992900;`;;
export const background_success = css`${__root}; background-color: #0a0;`;;
export const background_success_100 = css`${__root}; background-color: #6c6;`;;
export const background_success_200 = css`${__root}; background-color: #4dc44d;`;;
export const background_success_300 = css`${__root}; background-color: #3b3;`;;
export const background_success_400 = css`${__root}; background-color: #19b319;`;;
export const background_success_500 = css`${__root}; background-color: #0a0;`;;
export const background_success_600 = css`${__root}; background-color: #090;`;;
export const background_success_700 = css`${__root}; background-color: #080;`;;
export const background_success_800 = css`${__root}; background-color: #070;`;;
export const background_success_900 = css`${__root}; background-color: #060;`;;
export const background_info = css`${__root}; background-color: #1e90ff;`;;
export const background_info_100 = css`${__root}; background-color: #78bcff;`;;
export const background_info_200 = css`${__root}; background-color: #62b1ff;`;;
export const background_info_300 = css`${__root}; background-color: #4ba6ff;`;;
export const background_info_400 = css`${__root}; background-color: #349bff;`;;
export const background_info_500 = css`${__root}; background-color: #1e90ff;`;;
export const background_info_600 = css`${__root}; background-color: #1b82e6;`;;
export const background_info_700 = css`${__root}; background-color: #1873cc;`;;
export const background_info_800 = css`${__root}; background-color: #1565b3;`;;
export const background_info_900 = css`${__root}; background-color: #125699;`;;
export const border = css`${__root}; border: 1px solid #d3d3d9;`;;
export const border_vertical = css`${__root}; border-top: 1px solid #d3d3d9;
border-bottom: 1px solid #d3d3d9;`;;
export const border_horizontal = css`${__root}; border-left: 1px solid #d3d3d9;
border-right: 1px solid #d3d3d9;`;;
export const border_top = css`${__root}; border-top: 1px solid #d3d3d9;`;;
export const border_right = css`${__root}; border-right: 1px solid #d3d3d9;`;;
export const border_bottom = css`${__root}; border-bottom: 1px solid #d3d3d9;`;;
export const border_left = css`${__root}; border-left: 1px solid #d3d3d9;`;;
export const current_color = css`${__root}; color: currentColor;`;;
export const color_inherit = css`${__root}; color: inherit;`;;
export const color_white = css`${__root}; color: #fff;`;;
export const color_black = css`${__root}; color: #000;`;;
export const color_light = css`${__root}; color: #d3d3d9;`;;
export const color_light_100 = css`${__root}; color: #f6f6f7;`;;
export const color_light_200 = css`${__root}; color: #ededf0;`;;
export const color_light_300 = css`${__root}; color: #e5e5e8;`;;
export const color_light_400 = css`${__root}; color: #dcdce1;`;;
export const color_light_500 = css`${__root}; color: #d3d3d9;`;;
export const color_light_600 = css`${__root}; color: #c8c8ce;`;;
export const color_light_700 = css`${__root}; color: #bebec3;`;;
export const color_light_800 = css`${__root}; color: #b3b3b8;`;;
export const color_light_900 = css`${__root}; color: #a9a9ae;`;;
export const color_grey = css`${__root}; color: #616166;`;;
export const color_grey_100 = css`${__root}; color: #909094;`;;
export const color_grey_200 = css`${__root}; color: #848488;`;;
export const color_grey_300 = css`${__root}; color: #79797d;`;;
export const color_grey_400 = css`${__root}; color: #6c6c71;`;;
export const color_grey_500 = css`${__root}; color: #616166;`;;
export const color_grey_600 = css`${__root}; color: #5a5a5f;`;;
export const color_grey_700 = css`${__root}; color: #525257;`;;
export const color_grey_800 = css`${__root}; color: #4c4c50;`;;
export const color_grey_900 = css`${__root}; color: #444447;`;;
export const color_dark = css`${__root}; color: #323236;`;;
export const color_dark_100 = css`${__root}; color: #5b5b5e;`;;
export const color_dark_200 = css`${__root}; color: #515154;`;;
export const color_dark_300 = css`${__root}; color: #47474a;`;;
export const color_dark_400 = css`${__root}; color: #3c3c40;`;;
export const color_dark_500 = css`${__root}; color: #323236;`;;
export const color_dark_600 = css`${__root}; color: #2f2f32;`;;
export const color_dark_700 = css`${__root}; color: #2b2b2e;`;;
export const color_dark_800 = css`${__root}; color: #27272a;`;;
export const color_dark_900 = css`${__root}; color: #232326;`;;
export const color_primary = css`${__root}; color: #3455db;`;;
export const color_primary_100 = css`${__root}; color: #8599e9;`;;
export const color_primary_200 = css`${__root}; color: #7188e6;`;;
export const color_primary_300 = css`${__root}; color: #5d77e2;`;;
export const color_primary_400 = css`${__root}; color: #4866df;`;;
export const color_primary_500 = css`${__root}; color: #3455db;`;;
export const color_primary_600 = css`${__root}; color: #2f4dc5;`;;
export const color_primary_700 = css`${__root}; color: #2a44af;`;;
export const color_primary_800 = css`${__root}; color: #243b99;`;;
export const color_primary_900 = css`${__root}; color: #1f3383;`;;
export const color_secondary = css`${__root}; color: #639;`;;
export const color_secondary_100 = css`${__root}; color: #a385c2;`;;
export const color_secondary_200 = css`${__root}; color: #9470b8;`;;
export const color_secondary_300 = css`${__root}; color: #855cad;`;;
export const color_secondary_400 = css`${__root}; color: #7547a3;`;;
export const color_secondary_500 = css`${__root}; color: #639;`;;
export const color_secondary_600 = css`${__root}; color: #5c2e8a;`;;
export const color_secondary_700 = css`${__root}; color: #52297a;`;;
export const color_secondary_800 = css`${__root}; color: #47246b;`;;
export const color_secondary_900 = css`${__root}; color: #3d1f5c;`;;
export const color_tertiary = css`${__root}; color: #8b008b;`;;
export const color_tertiary_100 = css`${__root}; color: #b966b9;`;;
export const color_tertiary_200 = css`${__root}; color: #ae4dae;`;;
export const color_tertiary_300 = css`${__root}; color: #a233a2;`;;
export const color_tertiary_400 = css`${__root}; color: #971997;`;;
export const color_tertiary_500 = css`${__root}; color: #8b008b;`;;
export const color_tertiary_600 = css`${__root}; color: #7d007d;`;;
export const color_tertiary_700 = css`${__root}; color: #6f006f;`;;
export const color_tertiary_800 = css`${__root}; color: #610061;`;;
export const color_tertiary_900 = css`${__root}; color: #530053;`;;
export const color_error = css`${__root}; color: #d91e18;`;;
export const color_error_100 = css`${__root}; color: #e87874;`;;
export const color_error_200 = css`${__root}; color: #e4625d;`;;
export const color_error_300 = css`${__root}; color: #e14b46;`;;
export const color_error_400 = css`${__root}; color: #dd342f;`;;
export const color_error_500 = css`${__root}; color: #d91e18;`;;
export const color_error_600 = css`${__root}; color: #c31b16;`;;
export const color_error_700 = css`${__root}; color: #ae1813;`;;
export const color_error_800 = css`${__root}; color: #981511;`;;
export const color_error_900 = css`${__root}; color: #82120e;`;;
export const color_warning = css`${__root}; color: #ff4500;`;;
export const color_warning_100 = css`${__root}; color: #ff8f66;`;;
export const color_warning_200 = css`${__root}; color: #ff7d4d;`;;
export const color_warning_300 = css`${__root}; color: #ff6a33;`;;
export const color_warning_400 = css`${__root}; color: #ff5819;`;;
export const color_warning_500 = css`${__root}; color: #ff4500;`;;
export const color_warning_600 = css`${__root}; color: #e63e00;`;;
export const color_warning_700 = css`${__root}; color: #cc3700;`;;
export const color_warning_800 = css`${__root}; color: #b33000;`;;
export const color_warning_900 = css`${__root}; color: #992900;`;;
export const color_success = css`${__root}; color: #0a0;`;;
export const color_success_100 = css`${__root}; color: #6c6;`;;
export const color_success_200 = css`${__root}; color: #4dc44d;`;;
export const color_success_300 = css`${__root}; color: #3b3;`;;
export const color_success_400 = css`${__root}; color: #19b319;`;;
export const color_success_500 = css`${__root}; color: #0a0;`;;
export const color_success_600 = css`${__root}; color: #090;`;;
export const color_success_700 = css`${__root}; color: #080;`;;
export const color_success_800 = css`${__root}; color: #070;`;;
export const color_success_900 = css`${__root}; color: #060;`;;
export const color_info = css`${__root}; color: #1e90ff;`;;
export const color_info_100 = css`${__root}; color: #78bcff;`;;
export const color_info_200 = css`${__root}; color: #62b1ff;`;;
export const color_info_300 = css`${__root}; color: #4ba6ff;`;;
export const color_info_400 = css`${__root}; color: #349bff;`;;
export const color_info_500 = css`${__root}; color: #1e90ff;`;;
export const color_info_600 = css`${__root}; color: #1b82e6;`;;
export const color_info_700 = css`${__root}; color: #1873cc;`;;
export const color_info_800 = css`${__root}; color: #1565b3;`;;
export const color_info_900 = css`${__root}; color: #125699;`;;
export const border_radius = css`${__root}; border-radius: 2px;`;;
export const border_color_white = css`${__root}; border-color: #fff;`;;
export const border_color_black = css`${__root}; border-color: #000;`;;
export const border_color_light = css`${__root}; border-color: #d3d3d9;`;;
export const border_color_light_100 = css`${__root}; border-color: #f6f6f7;`;;
export const border_color_light_200 = css`${__root}; border-color: #ededf0;`;;
export const border_color_light_300 = css`${__root}; border-color: #e5e5e8;`;;
export const border_color_light_400 = css`${__root}; border-color: #dcdce1;`;;
export const border_color_light_500 = css`${__root}; border-color: #d3d3d9;`;;
export const border_color_light_600 = css`${__root}; border-color: #c8c8ce;`;;
export const border_color_light_700 = css`${__root}; border-color: #bebec3;`;;
export const border_color_light_800 = css`${__root}; border-color: #b3b3b8;`;;
export const border_color_light_900 = css`${__root}; border-color: #a9a9ae;`;;
export const border_color_grey = css`${__root}; border-color: #616166;`;;
export const border_color_grey_100 = css`${__root}; border-color: #909094;`;;
export const border_color_grey_200 = css`${__root}; border-color: #848488;`;;
export const border_color_grey_300 = css`${__root}; border-color: #79797d;`;;
export const border_color_grey_400 = css`${__root}; border-color: #6c6c71;`;;
export const border_color_grey_500 = css`${__root}; border-color: #616166;`;;
export const border_color_grey_600 = css`${__root}; border-color: #5a5a5f;`;;
export const border_color_grey_700 = css`${__root}; border-color: #525257;`;;
export const border_color_grey_800 = css`${__root}; border-color: #4c4c50;`;;
export const border_color_grey_900 = css`${__root}; border-color: #444447;`;;
export const border_color_dark = css`${__root}; border-color: #323236;`;;
export const border_color_dark_100 = css`${__root}; border-color: #5b5b5e;`;;
export const border_color_dark_200 = css`${__root}; border-color: #515154;`;;
export const border_color_dark_300 = css`${__root}; border-color: #47474a;`;;
export const border_color_dark_400 = css`${__root}; border-color: #3c3c40;`;;
export const border_color_dark_500 = css`${__root}; border-color: #323236;`;;
export const border_color_dark_600 = css`${__root}; border-color: #2f2f32;`;;
export const border_color_dark_700 = css`${__root}; border-color: #2b2b2e;`;;
export const border_color_dark_800 = css`${__root}; border-color: #27272a;`;;
export const border_color_dark_900 = css`${__root}; border-color: #232326;`;;
export const border_color_primary = css`${__root}; border-color: #3455db;`;;
export const border_color_primary_100 = css`${__root}; border-color: #8599e9;`;;
export const border_color_primary_200 = css`${__root}; border-color: #7188e6;`;;
export const border_color_primary_300 = css`${__root}; border-color: #5d77e2;`;;
export const border_color_primary_400 = css`${__root}; border-color: #4866df;`;;
export const border_color_primary_500 = css`${__root}; border-color: #3455db;`;;
export const border_color_primary_600 = css`${__root}; border-color: #2f4dc5;`;;
export const border_color_primary_700 = css`${__root}; border-color: #2a44af;`;;
export const border_color_primary_800 = css`${__root}; border-color: #243b99;`;;
export const border_color_primary_900 = css`${__root}; border-color: #1f3383;`;;
export const border_color_secondary = css`${__root}; border-color: #639;`;;
export const border_color_secondary_100 = css`${__root}; border-color: #a385c2;`;;
export const border_color_secondary_200 = css`${__root}; border-color: #9470b8;`;;
export const border_color_secondary_300 = css`${__root}; border-color: #855cad;`;;
export const border_color_secondary_400 = css`${__root}; border-color: #7547a3;`;;
export const border_color_secondary_500 = css`${__root}; border-color: #639;`;;
export const border_color_secondary_600 = css`${__root}; border-color: #5c2e8a;`;;
export const border_color_secondary_700 = css`${__root}; border-color: #52297a;`;;
export const border_color_secondary_800 = css`${__root}; border-color: #47246b;`;;
export const border_color_secondary_900 = css`${__root}; border-color: #3d1f5c;`;;
export const border_color_tertiary = css`${__root}; border-color: #8b008b;`;;
export const border_color_tertiary_100 = css`${__root}; border-color: #b966b9;`;;
export const border_color_tertiary_200 = css`${__root}; border-color: #ae4dae;`;;
export const border_color_tertiary_300 = css`${__root}; border-color: #a233a2;`;;
export const border_color_tertiary_400 = css`${__root}; border-color: #971997;`;;
export const border_color_tertiary_500 = css`${__root}; border-color: #8b008b;`;;
export const border_color_tertiary_600 = css`${__root}; border-color: #7d007d;`;;
export const border_color_tertiary_700 = css`${__root}; border-color: #6f006f;`;;
export const border_color_tertiary_800 = css`${__root}; border-color: #610061;`;;
export const border_color_tertiary_900 = css`${__root}; border-color: #530053;`;;
export const border_color_error = css`${__root}; border-color: #d91e18;`;;
export const border_color_error_100 = css`${__root}; border-color: #e87874;`;;
export const border_color_error_200 = css`${__root}; border-color: #e4625d;`;;
export const border_color_error_300 = css`${__root}; border-color: #e14b46;`;;
export const border_color_error_400 = css`${__root}; border-color: #dd342f;`;;
export const border_color_error_500 = css`${__root}; border-color: #d91e18;`;;
export const border_color_error_600 = css`${__root}; border-color: #c31b16;`;;
export const border_color_error_700 = css`${__root}; border-color: #ae1813;`;;
export const border_color_error_800 = css`${__root}; border-color: #981511;`;;
export const border_color_error_900 = css`${__root}; border-color: #82120e;`;;
export const border_color_warning = css`${__root}; border-color: #ff4500;`;;
export const border_color_warning_100 = css`${__root}; border-color: #ff8f66;`;;
export const border_color_warning_200 = css`${__root}; border-color: #ff7d4d;`;;
export const border_color_warning_300 = css`${__root}; border-color: #ff6a33;`;;
export const border_color_warning_400 = css`${__root}; border-color: #ff5819;`;;
export const border_color_warning_500 = css`${__root}; border-color: #ff4500;`;;
export const border_color_warning_600 = css`${__root}; border-color: #e63e00;`;;
export const border_color_warning_700 = css`${__root}; border-color: #cc3700;`;;
export const border_color_warning_800 = css`${__root}; border-color: #b33000;`;;
export const border_color_warning_900 = css`${__root}; border-color: #992900;`;;
export const border_color_success = css`${__root}; border-color: #0a0;`;;
export const border_color_success_100 = css`${__root}; border-color: #6c6;`;;
export const border_color_success_200 = css`${__root}; border-color: #4dc44d;`;;
export const border_color_success_300 = css`${__root}; border-color: #3b3;`;;
export const border_color_success_400 = css`${__root}; border-color: #19b319;`;;
export const border_color_success_500 = css`${__root}; border-color: #0a0;`;;
export const border_color_success_600 = css`${__root}; border-color: #090;`;;
export const border_color_success_700 = css`${__root}; border-color: #080;`;;
export const border_color_success_800 = css`${__root}; border-color: #070;`;;
export const border_color_success_900 = css`${__root}; border-color: #060;`;;
export const border_color_info = css`${__root}; border-color: #1e90ff;`;;
export const border_color_info_100 = css`${__root}; border-color: #78bcff;`;;
export const border_color_info_200 = css`${__root}; border-color: #62b1ff;`;;
export const border_color_info_300 = css`${__root}; border-color: #4ba6ff;`;;
export const border_color_info_400 = css`${__root}; border-color: #349bff;`;;
export const border_color_info_500 = css`${__root}; border-color: #1e90ff;`;;
export const border_color_info_600 = css`${__root}; border-color: #1b82e6;`;;
export const border_color_info_700 = css`${__root}; border-color: #1873cc;`;;
export const border_color_info_800 = css`${__root}; border-color: #1565b3;`;;
export const border_color_info_900 = css`${__root}; border-color: #125699;`;;
export const display_block = css`${__root}; display: block;`;;
export const display_inline_block = css`${__root}; display: inline-block;`;;
export const display_table = css`${__root}; display: table;`;;
export const display_table_cell = css`${__root}; display: table-cell;
vertical-align: middle;`;;
export const fill_white = css`${__root}; fill: #fff;`;;
export const fill_black = css`${__root}; fill: #000;`;;
export const fill_light = css`${__root}; fill: #d3d3d9;`;;
export const fill_light_100 = css`${__root}; fill: #f6f6f7;`;;
export const fill_light_200 = css`${__root}; fill: #ededf0;`;;
export const fill_light_300 = css`${__root}; fill: #e5e5e8;`;;
export const fill_light_400 = css`${__root}; fill: #dcdce1;`;;
export const fill_light_500 = css`${__root}; fill: #d3d3d9;`;;
export const fill_light_600 = css`${__root}; fill: #c8c8ce;`;;
export const fill_light_700 = css`${__root}; fill: #bebec3;`;;
export const fill_light_800 = css`${__root}; fill: #b3b3b8;`;;
export const fill_light_900 = css`${__root}; fill: #a9a9ae;`;;
export const fill_grey = css`${__root}; fill: #616166;`;;
export const fill_grey_100 = css`${__root}; fill: #909094;`;;
export const fill_grey_200 = css`${__root}; fill: #848488;`;;
export const fill_grey_300 = css`${__root}; fill: #79797d;`;;
export const fill_grey_400 = css`${__root}; fill: #6c6c71;`;;
export const fill_grey_500 = css`${__root}; fill: #616166;`;;
export const fill_grey_600 = css`${__root}; fill: #5a5a5f;`;;
export const fill_grey_700 = css`${__root}; fill: #525257;`;;
export const fill_grey_800 = css`${__root}; fill: #4c4c50;`;;
export const fill_grey_900 = css`${__root}; fill: #444447;`;;
export const fill_dark = css`${__root}; fill: #323236;`;;
export const fill_dark_100 = css`${__root}; fill: #5b5b5e;`;;
export const fill_dark_200 = css`${__root}; fill: #515154;`;;
export const fill_dark_300 = css`${__root}; fill: #47474a;`;;
export const fill_dark_400 = css`${__root}; fill: #3c3c40;`;;
export const fill_dark_500 = css`${__root}; fill: #323236;`;;
export const fill_dark_600 = css`${__root}; fill: #2f2f32;`;;
export const fill_dark_700 = css`${__root}; fill: #2b2b2e;`;;
export const fill_dark_800 = css`${__root}; fill: #27272a;`;;
export const fill_dark_900 = css`${__root}; fill: #232326;`;;
export const fill_primary = css`${__root}; fill: #3455db;`;;
export const fill_primary_100 = css`${__root}; fill: #8599e9;`;;
export const fill_primary_200 = css`${__root}; fill: #7188e6;`;;
export const fill_primary_300 = css`${__root}; fill: #5d77e2;`;;
export const fill_primary_400 = css`${__root}; fill: #4866df;`;;
export const fill_primary_500 = css`${__root}; fill: #3455db;`;;
export const fill_primary_600 = css`${__root}; fill: #2f4dc5;`;;
export const fill_primary_700 = css`${__root}; fill: #2a44af;`;;
export const fill_primary_800 = css`${__root}; fill: #243b99;`;;
export const fill_primary_900 = css`${__root}; fill: #1f3383;`;;
export const fill_secondary = css`${__root}; fill: #639;`;;
export const fill_secondary_100 = css`${__root}; fill: #a385c2;`;;
export const fill_secondary_200 = css`${__root}; fill: #9470b8;`;;
export const fill_secondary_300 = css`${__root}; fill: #855cad;`;;
export const fill_secondary_400 = css`${__root}; fill: #7547a3;`;;
export const fill_secondary_500 = css`${__root}; fill: #639;`;;
export const fill_secondary_600 = css`${__root}; fill: #5c2e8a;`;;
export const fill_secondary_700 = css`${__root}; fill: #52297a;`;;
export const fill_secondary_800 = css`${__root}; fill: #47246b;`;;
export const fill_secondary_900 = css`${__root}; fill: #3d1f5c;`;;
export const fill_tertiary = css`${__root}; fill: #8b008b;`;;
export const fill_tertiary_100 = css`${__root}; fill: #b966b9;`;;
export const fill_tertiary_200 = css`${__root}; fill: #ae4dae;`;;
export const fill_tertiary_300 = css`${__root}; fill: #a233a2;`;;
export const fill_tertiary_400 = css`${__root}; fill: #971997;`;;
export const fill_tertiary_500 = css`${__root}; fill: #8b008b;`;;
export const fill_tertiary_600 = css`${__root}; fill: #7d007d;`;;
export const fill_tertiary_700 = css`${__root}; fill: #6f006f;`;;
export const fill_tertiary_800 = css`${__root}; fill: #610061;`;;
export const fill_tertiary_900 = css`${__root}; fill: #530053;`;;
export const fill_error = css`${__root}; fill: #d91e18;`;;
export const fill_error_100 = css`${__root}; fill: #e87874;`;;
export const fill_error_200 = css`${__root}; fill: #e4625d;`;;
export const fill_error_300 = css`${__root}; fill: #e14b46;`;;
export const fill_error_400 = css`${__root}; fill: #dd342f;`;;
export const fill_error_500 = css`${__root}; fill: #d91e18;`;;
export const fill_error_600 = css`${__root}; fill: #c31b16;`;;
export const fill_error_700 = css`${__root}; fill: #ae1813;`;;
export const fill_error_800 = css`${__root}; fill: #981511;`;;
export const fill_error_900 = css`${__root}; fill: #82120e;`;;
export const fill_warning = css`${__root}; fill: #ff4500;`;;
export const fill_warning_100 = css`${__root}; fill: #ff8f66;`;;
export const fill_warning_200 = css`${__root}; fill: #ff7d4d;`;;
export const fill_warning_300 = css`${__root}; fill: #ff6a33;`;;
export const fill_warning_400 = css`${__root}; fill: #ff5819;`;;
export const fill_warning_500 = css`${__root}; fill: #ff4500;`;;
export const fill_warning_600 = css`${__root}; fill: #e63e00;`;;
export const fill_warning_700 = css`${__root}; fill: #cc3700;`;;
export const fill_warning_800 = css`${__root}; fill: #b33000;`;;
export const fill_warning_900 = css`${__root}; fill: #992900;`;;
export const fill_success = css`${__root}; fill: #0a0;`;;
export const fill_success_100 = css`${__root}; fill: #6c6;`;;
export const fill_success_200 = css`${__root}; fill: #4dc44d;`;;
export const fill_success_300 = css`${__root}; fill: #3b3;`;;
export const fill_success_400 = css`${__root}; fill: #19b319;`;;
export const fill_success_500 = css`${__root}; fill: #0a0;`;;
export const fill_success_600 = css`${__root}; fill: #090;`;;
export const fill_success_700 = css`${__root}; fill: #080;`;;
export const fill_success_800 = css`${__root}; fill: #070;`;;
export const fill_success_900 = css`${__root}; fill: #060;`;;
export const fill_info = css`${__root}; fill: #1e90ff;`;;
export const fill_info_100 = css`${__root}; fill: #78bcff;`;;
export const fill_info_200 = css`${__root}; fill: #62b1ff;`;;
export const fill_info_300 = css`${__root}; fill: #4ba6ff;`;;
export const fill_info_400 = css`${__root}; fill: #349bff;`;;
export const fill_info_500 = css`${__root}; fill: #1e90ff;`;;
export const fill_info_600 = css`${__root}; fill: #1b82e6;`;;
export const fill_info_700 = css`${__root}; fill: #1873cc;`;;
export const fill_info_800 = css`${__root}; fill: #1565b3;`;;
export const fill_info_900 = css`${__root}; fill: #125699;`;;
export const flex = css`${__root}; display: -webkit-box;
display: -ms-flexbox;
display: flex;`;;
export const flex_inline = css`${__root}; display: flex-inline;`;;
export const flex_wrap = css`${__root}; -ms-flex-wrap: wrap;
flex-wrap: wrap;`;;
export const flex_nowrap = css`${__root}; -ms-flex-wrap: nowrap;
flex-wrap: nowrap;`;;
export const flex_row = css`${__root}; -webkit-box-orient: horizontal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-direction: normal;`;;
export const flex_column = css`${__root}; -webkit-box-direction: normal;
-webkit-box-orient: vertical;
-ms-flex-direction: column;
flex-direction: column;`;;
export const flex_1 = css`${__root}; -webkit-box-flex: 1;
-ms-flex: 1 1 0px;
flex: 1 1 0;`;;
export const flex_1_1_auto = css`${__root}; -webkit-box-flex: 1;
-ms-flex: 1 1 auto;
flex: 1 1 auto;`;;
export const flex_1_0_auto = css`${__root}; -webkit-box-flex: 1;
-ms-flex: 1 0 auto;
flex: 1 0 auto;`;;
export const flex_0_1_auto = css`${__root}; -webkit-box-flex: 0;
-ms-flex: 0 1 auto;
flex: 0 1 auto;`;;
export const flex_0_0_auto = css`${__root}; -webkit-box-flex: 0;
-ms-flex: 0 0 auto;
flex: 0 0 auto;`;;
export const justify_content_flex_start = css`${__root}; -webkit-box-pack: start;
-ms-flex-pack: start;
justify-content: flex-start;`;;
export const justify_content_flex_end = css`${__root}; -webkit-box-pack: end;
-ms-flex-pack: end;
justify-content: flex-end;`;;
export const justify_content_center = css`${__root}; -webkit-box-pack: center;
-ms-flex-pack: center;
justify-content: center;`;;
export const justify_content_space_between = css`${__root}; -webkit-box-pack: justify;
-ms-flex-pack: justify;
justify-content: space-between;`;;
export const justify_content_space_around = css`${__root}; -ms-flex-pack: distribute;
justify-content: space-around;`;;
export const align_content_flex_start = css`${__root}; -ms-flex-line-pack: start;
align-content: flex-start;`;;
export const align_content_flex_end = css`${__root}; -ms-flex-line-pack: end;
align-content: flex-end;`;;
export const align_content_center = css`${__root}; -ms-flex-line-pack: center;
align-content: center;`;;
export const align_content_space_between = css`${__root}; -ms-flex-line-pack: justify;
align-content: space-between;`;;
export const align_content_space_around = css`${__root}; -ms-flex-line-pack: distribute;
align-content: space-around;`;;
export const align_content_stretch = css`${__root}; -ms-flex-line-pack: stretch;
align-content: stretch;`;;
export const align_items_flex_start = css`${__root}; -webkit-box-align: start;
-ms-flex-align: start;
align-items: flex-start;`;;
export const align_items_flex_end = css`${__root}; -webkit-box-align: end;
-ms-flex-align: end;
align-items: flex-end;`;;
export const align_items_center = css`${__root}; -webkit-box-align: center;
-ms-flex-align: center;
align-items: center;`;;
export const align_items_baseline = css`${__root}; -webkit-box-align: baseline;
-ms-flex-align: baseline;
align-items: baseline;`;;
export const align_items_stretch = css`${__root}; -webkit-box-align: stretch;
-ms-flex-align: stretch;
align-items: stretch;`;;
export const align_self_flex_start = css`${__root}; -ms-flex-item-align: start;
align-self: flex-start;`;;
export const align_self_flex_end = css`${__root}; -ms-flex-item-align: end;
align-self: flex-end;`;;
export const align_self_center = css`${__root}; -ms-flex-item-align: center;
-ms-grid-row-align: center;
align-self: center;`;;
export const align_self_baseline = css`${__root}; -ms-flex-item-align: baseline;
align-self: baseline;`;;
export const align_self_stretch = css`${__root}; -ms-flex-item-align: stretch;
-ms-grid-row-align: stretch;
align-self: stretch;`;;
export const right = css`${__root}; float: right;`;;
export const right_xs = css`${__root}; @media (max-width: 767px) {
float: right;
}`;;
export const right_s = css`${__root}; @media (min-width: 768px) and (max-width: 1023px) {
float: right;
}`;;
export const right_s_up = css`${__root}; @media (min-width: 768px) {
float: right;
}`;;
export const right_s_down = css`${__root}; @media (max-width: 1023px) {
float: right;
}`;;
export const right_m = css`${__root}; @media (min-width: 1024px) and (max-width: 1279px) {
float: right;
}`;;
export const right_m_up = css`${__root}; @media (min-width: 1024px) {
float: right;
}`;;
export const right_m_down = css`${__root}; @media (max-width: 1279px) {
float: right;
}`;;
export const right_l = css`${__root}; @media (min-width: 1280px) and (max-width: 1679px) {
float: right;
}`;;
export const right_l_up = css`${__root}; @media (min-width: 1280px) {
float: right;
}`;;
export const right_l_down = css`${__root}; @media (max-width: 1679px) {
float: right;
}`;;
export const right_xl = css`${__root}; @media (min-width: 1680px) {
float: right;
}`;;
export const left = css`${__root}; float: left;`;;
export const left_xs = css`${__root}; @media (max-width: 767px) {
float: left;
}`;;
export const left_s = css`${__root}; @media (min-width: 768px) and (max-width: 1023px) {
float: left;
}`;;
export const left_s_up = css`${__root}; @media (min-width: 768px) {
float: left;
}`;;
export const left_s_down = css`${__root}; @media (max-width: 1023px) {
float: left;
}`;;
export const left_m = css`${__root}; @media (min-width: 1024px) and (max-width: 1279px) {
float: left;
}`;;
export const left_m_up = css`${__root}; @media (min-width: 1024px) {
float: left;
}`;;
export const left_m_down = css`${__root}; @media (max-width: 1279px) {
float: left;
}`;;
export const left_l = css`${__root}; @media (min-width: 1280px) and (max-width: 1679px) {
float: left;
}`;;
export const left_l_up = css`${__root}; @media (min-width: 1280px) {
float: left;
}`;;
export const left_l_down = css`${__root}; @media (max-width: 1679px) {
float: left;
}`;;
export const left_xl = css`${__root}; @media (min-width: 1680px) {
float: left;
}`;;
export const font_family_system = css`${__root}; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif;`;;
export const font_family_sans_serif = css`${__root}; font-family: Helvetica Neue, Helvetica, Arial, sans-serif;`;;
export const font_family_serif = css`${__root}; font-family: Georgia, Times New Roman, Times, serif;`;;
export const font_family_monospace = css`${__root}; font-family: Monaco, Menlo, Consolas, Courier New, monospace;`;;
export const font_weight_thin = css`${__root}; font-weight: 200;`;;
export const font_weight_light = css`${__root}; font-weight: 300;`;;
export const font_weight_regular = css`${__root}; font-weight: 400;`;;
export const font_weight_medium = css`${__root}; font-weight: 500;`;;
export const font_weight_semibold = css`${__root}; font-weight: 600;`;;
export const font_weight_bold = css`${__root}; font-weight: 700;`;;
export const font_weight_black = css`${__root}; font-weight: 800;`;;
export const font_size_xl = css`${__root}; font-size: 1.25rem;`;;
export const font_size_l = css`${__root}; font-size: 1.125rem;`;;
export const font_size_m = css`${__root}; font-size: 1rem;`;;
export const font_size_s = css`${__root}; font-size: .875rem;`;;
export const font_size_xs = css`${__root}; font-size: .75rem;`;;
export const line_height_xl = css`${__root}; line-height: 1.8;`;;
export const line_height_l = css`${__root}; line-height: 1.65;`;;
export const line_height_m = css`${__root}; line-height: 1.5;`;;
export const line_height_s = css`${__root}; line-height: 1.35;`;;
export const line_height_xs = css`${__root}; line-height: 1.2;`;;
export const letter_spacing_xl = css`${__root}; letter-spacing: .15em;`;;
export const letter_spacing_l = css`${__root}; letter-spacing: .1em;`;;
export const letter_spacing_m = css`${__root}; letter-spacing: .05em;`;;
export const letter_spacing_s = css`${__root}; letter-spacing: .025em;`;;
export const letter_spacing_xs = css`${__root}; letter-spacing: .01em;`;;
export const no_gutter = css`${__root}; padding: 0;`;;
export const gutter = css`${__root}; padding: calc(1rem + .5vw);`;;
export const gutter_vertical = css`${__root}; padding-bottom: calc(1rem + .5vw);
padding-top: calc(1rem + .5vw);`;;
export const gutter_top = css`${__root}; padding-top: calc(1rem + .5vw);`;;
export const gutter_bottom = css`${__root}; padding-bottom: calc(1rem + .5vw);`;;
export const gutter_horizontal = css`${__root}; padding-right: calc(1rem + .5vw);
padding-left: calc(1rem + .5vw);`;;
export const gutter_left = css`${__root}; padding-left: calc(1rem + .5vw);`;;
export const gutter_right = css`${__root}; padding-right: calc(1rem + .5vw);`;;
export const no_margin = css`${__root}; margin: 0;`;;
export const no_margin_horizontal = css`${__root}; margin-left: 0;
margin-right: 0;`;;
export const no_margin_vertical = css`${__root}; margin-bottom: 0;
margin-top: 0;`;;
export const no_margin_top = css`${__root}; margin-top: 0;`;;
export const no_margin_right = css`${__root}; margin-right: 0;`;;
export const no_margin_bottom = css`${__root}; margin-bottom: 0;`;;
export const no_margin_left = css`${__root}; margin-left: 0;`;;
export const margin_auto = css`${__root}; margin: auto;`;;
export const margin_horizontal_auto = css`${__root}; margin-left: auto;
margin-right: auto;`;;
export const margin_vertical_auto = css`${__root}; margin-top: auto;
margin-bottom: auto;`;;
export const margin_top_auto = css`${__root}; margin-top: auto;`;;
export const margin_right_auto = css`${__root}; margin-right: auto;`;;
export const margin_bottom_auto = css`${__root}; margin-bottom: auto;`;;
export const margin_left_auto = css`${__root}; margin-left: auto;`;;
export const margin_xl = css`${__root}; margin: calc(5rem + 1.5vw);`;;
export const margin_horizontal_xl = css`${__root}; margin-left: calc(5rem + 1.5vw);
margin-right: calc(5rem + 1.5vw);`;;
export const margin_vertical_xl = css`${__root}; margin-bottom: calc(5rem + 1.5vw);
margin-top: calc(5rem + 1.5vw);`;;
export const margin_top_xl = css`${__root}; margin-top: calc(5rem + 1.5vw);`;;
export const margin_bottom_xl = css`${__root}; margin-bottom: calc(5rem + 1.5vw);`;;
export const margin_left_xl = css`${__root}; margin-left: calc(5rem + 1.5vw);`;;
export const margin_right_xl = css`${__root}; margin-right: calc(5rem + 1.5vw);`;;
export const margin_l = css`${__root}; margin: calc(4rem + 1.25vw);`;;
export const margin_horizontal_l = css`${__root}; margin-left: calc(4rem + 1.25vw);
margin-right: calc(4rem + 1.25vw);`;;
export const margin_vertical_l = css`${__root}; margin-bottom: calc(4rem + 1.25vw);
margin-top: calc(4rem + 1.25vw);`;;
export const margin_top_l = css`${__root}; margin-top: calc(4rem + 1.25vw);`;;
export const margin_bottom_l = css`${__root}; margin-bottom: calc(4rem + 1.25vw);`;;
export const margin_left_l = css`${__root}; margin-left: calc(4rem + 1.25vw);`;;
export const margin_right_l = css`${__root}; margin-right: calc(4rem + 1.25vw);`;;
export const margin_m = css`${__root}; margin: calc(3rem + 1vw);`;;
export const margin_horizontal_m = css`${__root}; margin-left: calc(3rem + 1vw);
margin-right: calc(3rem + 1vw);`;;
export const margin_vertical_m = css`${__root}; margin-bottom: calc(3rem + 1vw);
margin-top: calc(3rem + 1vw);`;;
export const margin_top_m = css`${__root}; margin-top: calc(3rem + 1vw);`;;
export const margin_bottom_m = css`${__root}; margin-bottom: calc(3rem + 1vw);`;;
export const margin_left_m = css`${__root}; margin-left: calc(3rem + 1vw);`;;
export const margin_right_m = css`${__root}; margin-right: calc(3rem + 1vw);`;;
export const margin_s = css`${__root}; margin: calc(2rem + .75vw);`;;
export const margin_horizontal_s = css`${__root}; margin-left: calc(2rem + .75vw);
margin-right: calc(2rem + .75vw);`;;
export const margin_vertical_s = css`${__root}; margin-bottom: calc(2rem + .75vw);
margin-top: calc(2rem + .75vw);`;;
export const margin_top_s = css`${__root}; margin-top: calc(2rem + .75vw);`;;
export const margin_bottom_s = css`${__root}; margin-bottom: calc(2rem + .75vw);`;;
export const margin_left_s = css`${__root}; margin-left: calc(2rem + .75vw);`;;
export const margin_right_s = css`${__root}; margin-right: calc(2rem + .75vw);`;;
export const margin_xs = css`${__root}; margin: calc(1rem + .5vw);`;;
export const margin_horizontal_xs = css`${__root}; margin-left: calc(1rem + .5vw);
margin-right: calc(1rem + .5vw);`;;
export const margin_vertical_xs = css`${__root}; margin-bottom: calc(1rem + .5vw);
margin-top: calc(1rem + .5vw);`;;
export const margin_top_xs = css`${__root}; margin-top: calc(1rem + .5vw);`;;
export const margin_bottom_xs = css`${__root}; margin-bottom: calc(1rem + .5vw);`;;
export const margin_left_xs = css`${__root}; margin-left: calc(1rem + .5vw);`;;
export const margin_right_xs = css`${__root}; margin-right: calc(1rem + .5vw);`;;
export const max_width_xl = css`${__root}; max-width: 80rem;`;;
export const max_width_l = css`${__root}; max-width: 70rem;`;;
export const max_width_m = css`${__root}; max-width: 60rem;`;;
export const max_width_s = css`${__root}; max-width: 50rem;`;;
export const max_width_xs = css`${__root}; max-width: 40rem;`;;
export const no_padding = css`${__root}; padding: 0;`;;
export const no_padding_horizontal = css`${__root}; padding-left: 0;
padding-right: 0;`;;
export const no_padding_vertical = css`${__root}; padding-bottom: 0;
padding-top: 0;`;;
export const no_padding_top = css`${__root}; padding-top: 0;`;;
export const no_padding_right = css`${__root}; padding-right: 0;`;;
export const no_padding_bottom = css`${__root}; padding-bottom: 0;`;;
export const no_padding_left = css`${__root}; padding-left: 0;`;;
export const padding_xl = css`${__root}; padding: calc(5rem + 1.5vw);`;;
export const padding_horizontal_xl = css`${__root}; padding-left: calc(5rem + 1.5vw);
padding-right: calc(5rem + 1.5vw);`;;
export const padding_vertical_xl = css`${__root}; padding-bottom: calc(5rem + 1.5vw);
padding-top: calc(5rem + 1.5vw);`;;
export const padding_top_xl = css`${__root}; padding-top: calc(5rem + 1.5vw);`;;
export const padding_bottom_xl = css`${__root}; padding-bottom: calc(5rem + 1.5vw);`;;
export const padding_left_xl = css`${__root}; padding-left: calc(5rem + 1.5vw);`;;
export const padding_right_xl = css`${__root}; padding-right: calc(5rem + 1.5vw);`;;
export const padding_l = css`${__root}; padding: calc(4rem + 1.25vw);`;;
export const padding_horizontal_l = css`${__root}; padding-left: calc(4rem + 1.25vw);
padding-right: calc(4rem + 1.25vw);`;;
export const padding_vertical_l = css`${__root}; padding-bottom: calc(4rem + 1.25vw);
padding-top: calc(4rem + 1.25vw);`;;
export const padding_top_l = css`${__root}; padding-top: calc(4rem + 1.25vw);`;;
export const padding_bottom_l = css`${__root}; padding-bottom: calc(4rem + 1.25vw);`;;
export const padding_left_l = css`${__root}; padding-left: calc(4rem + 1.25vw);`;;
export const padding_right_l = css`${__root}; padding-right: calc(4rem + 1.25vw);`;;
export const padding_m = css`${__root}; padding: calc(3rem + 1vw);`;;
export const padding_horizontal_m = css`${__root}; padding-left: calc(3rem + 1vw);
padding-right: calc(3rem + 1vw);`;;
export const padding_vertical_m = css`${__root}; padding-bottom: calc(3rem + 1vw);
padding-top: calc(3rem + 1vw);`;;
export const padding_top_m = css`${__root}; padding-top: calc(3rem + 1vw);`;;
export const padding_bottom_m = css`${__root}; padding-bottom: calc(3rem + 1vw);`;;
export const padding_left_m = css`${__root}; padding-left: calc(3rem + 1vw);`;;
export const padding_right_m = css`${__root}; padding-right: calc(3rem + 1vw);`;;
export const padding_s = css`${__root}; padding: calc(2rem + .75vw);`;;
export const padding_horizontal_s = css`${__root}; padding-left: calc(2rem + .75vw);
padding-right: calc(2rem + .75vw);`;;
export const padding_vertical_s = css`${__root}; padding-bottom: calc(2rem + .75vw);
padding-top: calc(2rem + .75vw);`;;
export const padding_top_s = css`${__root}; padding-top: calc(2rem + .75vw);`;;
export const padding_bottom_s = css`${__root}; padding-bottom: calc(2rem + .75vw);`;;
export const padding_left_s = css`${__root}; padding-left: calc(2rem + .75vw);`;;
export const padding_right_s = css`${__root}; padding-right: calc(2rem + .75vw);`;;
export const padding_xs = css`${__root}; padding: calc(1rem + .5vw);`;;
export const padding_horizontal_xs = css`${__root}; padding-left: calc(1rem + .5vw);
padding-right: calc(1rem + .5vw);`;;
export const padding_vertical_xs = css`${__root}; padding-bottom: calc(1rem + .5vw);
padding-top: calc(1rem + .5vw);`;;
export const padding_top_xs = css`${__root}; padding-top: calc(1rem + .5vw);`;;
export const padding_bottom_xs = css`${__root}; padding-bottom: calc(1rem + .5vw);`;;
export const padding_left_xs = css`${__root}; padding-left: calc(1rem + .5vw);`;;
export const padding_right_xs = css`${__root}; padding-right: calc(1rem + .5vw);`;;
export const text_left = css`${__root}; text-align: left;`;;
export const text_right = css`${__root}; text-align: right;`;;
export const text_justify = css`${__root}; text-align: justify;`;;
export const text_center = css`${__root}; text-align: center;`;;
export const truncate = css`${__root}; display: block;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;`;;
export const uppercase = css`${__root}; text-transform: uppercase;`;;
export const lowercase = css`${__root}; text-transform: lowercase;`;;
export const capitalize = css`${__root}; text-transform: capitalize;`;;
export const stroke_white = css`${__root}; stroke: #fff;`;;
export const stroke_black = css`${__root}; stroke: #000;`;;
export const stroke_light = css`${__root}; stroke: #d3d3d9;`;;
export const stroke_light_100 = css`${__root}; stroke: #f6f6f7;`;;
export const stroke_light_200 = css`${__root}; stroke: #ededf0;`;;
export const stroke_light_300 = css`${__root}; stroke: #e5e5e8;`;;
export const stroke_light_400 = css`${__root}; stroke: #dcdce1;`;;
export const stroke_light_500 = css`${__root}; stroke: #d3d3d9;`;;
export const stroke_light_600 = css`${__root}; stroke: #c8c8ce;`;;
export const stroke_light_700 = css`${__root}; stroke: #bebec3;`;;
export const stroke_light_800 = css`${__root}; stroke: #b3b3b8;`;;
export const stroke_light_900 = css`${__root}; stroke: #a9a9ae;`;;
export const stroke_grey = css`${__root}; stroke: #616166;`;;
export const stroke_grey_100 = css`${__root}; stroke: #909094;`;;
export const stroke_grey_200 = css`${__root}; stroke: #848488;`;;
export const stroke_grey_300 = css`${__root}; stroke: #79797d;`;;
export const stroke_grey_400 = css`${__root}; stroke: #6c6c71;`;;
export const stroke_grey_500 = css`${__root}; stroke: #616166;`;;
export const stroke_grey_600 = css`${__root}; stroke: #5a5a5f;`;;
export const stroke_grey_700 = css`${__root}; stroke: #525257;`;;
export const stroke_grey_800 = css`${__root}; stroke: #4c4c50;`;;
export const stroke_grey_900 = css`${__root}; stroke: #444447;`;;
export const stroke_dark = css`${__root}; stroke: #323236;`;;
export const stroke_dark_100 = css`${__root}; stroke: #5b5b5e;`;;
export const stroke_dark_200 = css`${__root}; stroke: #515154;`;;
export const stroke_dark_300 = css`${__root}; stroke: #47474a;`;;
export const stroke_dark_400 = css`${__root}; stroke: #3c3c40;`;;
export const stroke_dark_500 = css`${__root}; stroke: #323236;`;;
export const stroke_dark_600 = css`${__root}; stroke: #2f2f32;`;;
export const stroke_dark_700 = css`${__root}; stroke: #2b2b2e;`;;
export const stroke_dark_800 = css`${__root}; stroke: #27272a;`;;
export const stroke_dark_900 = css`${__root}; stroke: #232326;`;;
export const stroke_primary = css`${__root}; stroke: #3455db;`;;
export const stroke_primary_100 = css`${__root}; stroke: #8599e9;`;;
export const stroke_primary_200 = css`${__root}; stroke: #7188e6;`;;
export const stroke_primary_300 = css`${__root}; stroke: #5d77e2;`;;
export const stroke_primary_400 = css`${__root}; stroke: #4866df;`;;
export const stroke_primary_500 = css`${__root}; stroke: #3455db;`;;
export const stroke_primary_600 = css`${__root}; stroke: #2f4dc5;`;;
export const stroke_primary_700 = css`${__root}; stroke: #2a44af;`;;
export const stroke_primary_800 = css`${__root}; stroke: #243b99;`;;
export const stroke_primary_900 = css`${__root}; stroke: #1f3383;`;;
export const stroke_secondary = css`${__root}; stroke: #639;`;;
export const stroke_secondary_100 = css`${__root}; stroke: #a385c2;`;;
export const stroke_secondary_200 = css`${__root}; stroke: #9470b8;`;;
export const stroke_secondary_300 = css`${__root}; stroke: #855cad;`;;
export const stroke_secondary_400 = css`${__root}; stroke: #7547a3;`;;
export const stroke_secondary_500 = css`${__root}; stroke: #639;`;;
export const stroke_secondary_600 = css`${__root}; stroke: #5c2e8a;`;;
export const stroke_secondary_700 = css`${__root}; stroke: #52297a;`;;
export const stroke_secondary_800 = css`${__root}; stroke: #47246b;`;;
export const stroke_secondary_900 = css`${__root}; stroke: #3d1f5c;`;;
export const stroke_tertiary = css`${__root}; stroke: #8b008b;`;;
export const stroke_tertiary_100 = css`${__root}; stroke: #b966b9;`;;
export const stroke_tertiary_200 = css`${__root}; stroke: #ae4dae;`;;
export const stroke_tertiary_300 = css`${__root}; stroke: #a233a2;`;;
export const stroke_tertiary_400 = css`${__root}; stroke: #971997;`;;
export const stroke_tertiary_500 = css`${__root}; stroke: #8b008b;`;;
export const stroke_tertiary_600 = css`${__root}; stroke: #7d007d;`;;
export const stroke_tertiary_700 = css`${__root}; stroke: #6f006f;`;;
export const stroke_tertiary_800 = css`${__root}; stroke: #610061;`;;
export const stroke_tertiary_900 = css`${__root}; stroke: #530053;`;;
export const stroke_error = css`${__root}; stroke: #d91e18;`;;
export const stroke_error_100 = css`${__root}; stroke: #e87874;`;;
export const stroke_error_200 = css`${__root}; stroke: #e4625d;`;;
export const stroke_error_300 = css`${__root}; stroke: #e14b46;`;;
export const stroke_error_400 = css`${__root}; stroke: #dd342f;`;;
export const stroke_error_500 = css`${__root}; stroke: #d91e18;`;;
export const stroke_error_600 = css`${__root}; stroke: #c31b16;`;;
export const stroke_error_700 = css`${__root}; stroke: #ae1813;`;;
export const stroke_error_800 = css`${__root}; stroke: #981511;`;;
export const stroke_error_900 = css`${__root}; stroke: #82120e;`;;
export const stroke_warning = css`${__root}; stroke: #ff4500;`;;
export const stroke_warning_100 = css`${__root}; stroke: #ff8f66;`;;
export const stroke_warning_200 = css`${__root}; stroke: #ff7d4d;`;;
export const stroke_warning_300 = css`${__root}; stroke: #ff6a33;`;;
export const stroke_warning_400 = css`${__root}; stroke: #ff5819;`;;
export const stroke_warning_500 = css`${__root}; stroke: #ff4500;`;;
export const stroke_warning_600 = css`${__root}; stroke: #e63e00;`;;
export const stroke_warning_700 = css`${__root}; stroke: #cc3700;`;;
export const stroke_warning_800 = css`${__root}; stroke: #b33000;`;;
export const stroke_warning_900 = css`${__root}; stroke: #992900;`;;
export const stroke_success = css`${__root}; stroke: #0a0;`;;
export const stroke_success_100 = css`${__root}; stroke: #6c6;`;;
export const stroke_success_200 = css`${__root}; stroke: #4dc44d;`;;
export const stroke_success_300 = css`${__root}; stroke: #3b3;`;;
export const stroke_success_400 = css`${__root}; stroke: #19b319;`;;
export const stroke_success_500 = css`${__root}; stroke: #0a0;`;;
export const stroke_success_600 = css`${__root}; stroke: #090;`;;
export const stroke_success_700 = css`${__root}; stroke: #080;`;;
export const stroke_success_800 = css`${__root}; stroke: #070;`;;
export const stroke_success_900 = css`${__root}; stroke: #060;`;;
export const stroke_info = css`${__root}; stroke: #1e90ff;`;;
export const stroke_info_100 = css`${__root}; stroke: #78bcff;`;;
export const stroke_info_200 = css`${__root}; stroke: #62b1ff;`;;
export const stroke_info_300 = css`${__root}; stroke: #4ba6ff;`;;
export const stroke_info_400 = css`${__root}; stroke: #349bff;`;;
export const stroke_info_500 = css`${__root}; stroke: #1e90ff;`;;
export const stroke_info_600 = css`${__root}; stroke: #1b82e6;`;;
export const stroke_info_700 = css`${__root}; stroke: #1873cc;`;;
export const stroke_info_800 = css`${__root}; stroke: #1565b3;`;;
export const stroke_info_900 = css`${__root}; stroke: #125699;`;;
export const clearfix = css`${__root}; zoom: 1;
&:after {content: "";
display: table;}
&:before {content: "";
display: table;}
&:after {clear: both;}`;;
export const cover = css`${__root}; top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
position: absolute;`;;
export const center = css`${__root}; position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);`;;
export const circle = css`${__root}; border-radius: 50%;`;;
export const full_height = css`${__root}; height: 100%;`;;
export const fixed = css`${__root}; position: fixed;`;;
export const relative = css`${__root}; position: relative;`;;
export const absolute = css`${__root}; position: absolute;`;;
export const pointer = css`${__root}; cursor: pointer;`;;
export const no_border = css`${__root}; border: none;`;;
export const hide = css`${__root}; display: none;`;;
export const show = css`${__root}; display: block;`;;
export const visible = css`${__root}; visibility: visible;`;;
export const hidden = css`${__root}; visibility: hidden;`;;
export const visible_print = css`${__root}; display: none;
@media print {
display: block;
}`;;
export const hidden_print = css`${__root}; @media print {
display: none;
}`;;
export const visible_screen = css`${__root}; display: none;
@media screen {
display: block;
}`;;
export const hidden_screen = css`${__root}; @media screen {
display: none;
}`;;
export const hide_visually = css`${__root}; position: absolute;
padding: 0;
width: 1px;
height: 1px;
margin: -1px;
border: 0;
overflow: hidden;
clip: rect(0 0 0 0);`;;
export const text_hide = css`${__root}; font: ~ "0/0" a;
color: transparent;
text-shadow: none;
background-color: transparent;
border: 0;`;;
export const hidden_xs = css`${__root}; @media (max-width: 767px) {
display: none;
}`;;
export const hidden_s = css`${__root}; @media (min-width: 768px) and (max-width: 1023px) {
display: none;
}`;;
export const hidden_s_up = css`${__root}; @media (min-width: 768px) {
display: none;
}`;;
export const hidden_s_down = css`${__root}; @media (max-width: 1023px) {
display: none;
}`;;
export const hidden_m = css`${__root}; @media (min-width: 1024px) and (max-width: 1279px) {
display: none;
}`;;
export const hidden_m_up = css`${__root}; @media (min-width: 1024px) {
display: none;
}`;;
export const hidden_m_down = css`${__root}; @media (max-width: 1279px) {
display: none;
}`;;
export const hidden_l = css`${__root}; @media (min-width: 1280px) and (max-width: 1679px) {
display: none;
}`;;
export const hidden_l_up = css`${__root}; @media (min-width: 1280px) {
display: none;
}`;;
export const hidden_l_down = css`${__root}; @media (max-width: 1679px) {
display: none;
}`;;
export const hidden_xl = css`${__root}; @media (min-width: 1680px) {
display: none;
}`;;
export const visible_xs = css`${__root}; display: none;
@media (max-width: 767px) {
display: block;
}`;;
export const visible_s = css`${__root}; display: none;
@media (min-width: 768px) and (max-width: 1023px) {
display: block;
}`;;
export const visible_s_up = css`${__root}; display: none;
@media (min-width: 768px) {
display: block;
}`;;
export const visible_s_down = css`${__root}; display: none;
@media (max-width: 1023px) {
display: block;
}`;;
export const visible_m = css`${__root}; display: none;
@media (min-width: 1024px) and (max-width: 1279px) {
display: block;
}`;;
export const visible_m_up = css`${__root}; display: none;
@media (min-width: 1024px) {
display: block;
}`;;
export const visible_m_down = css`${__root}; display: none;
@media (max-width: 1279px) {
display: block;
}`;;
export const visible_l = css`${__root}; display: none;
@media (min-width: 1280px) and (max-width: 1679px) {
display: block;
}`;;
export const visible_l_up = css`${__root}; display: none;
@media (min-width: 1280px) {
display: block;
}`;;
export const visible_l_down = css`${__root}; display: none;
@media (max-width: 1679px) {
display: block;
}`;;
export const visible_xl = css`${__root}; display: none;
@media (min-width: 1680px) {
display: block;
}`;;;
  