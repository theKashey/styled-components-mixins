
    import { css, injectGlobal }  from 'styled-components';
    
    export const global__ms_viewport =   () => injectGlobal`@-ms-viewport  { width: device-width; }`;
export const global__webkit_keyframes =   () => injectGlobal`@-webkit-keyframes progress-bar-stripes { background-position: 1rem 0;
background-position: 0 0; }`;
export const global_keyframes =   () => injectGlobal`@keyframes progress-bar-stripes { background-position: 1rem 0;
background-position: 0 0; }`;
export const global_supports =   () => injectGlobal`@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) { -webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0); }
@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) { -webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0); }
@supports ((-webkit-transform-style: preserve-3d) or (transform-style: preserve-3d)) { -webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0); }
@supports ((position: -webkit-sticky) or (position: sticky)) { position: -webkit-sticky;
position: sticky;
top: 0;
z-index: 1020; }`;
export const tag_a = css`@media print {
text-decoration: underline;
}
&:visited {@media print {
text-decoration: underline;
}}
color: #007bff;
text-decoration: none;
background-color: transparent;
-webkit-text-decoration-skip: objects;
&:hover {color: #0056b3;
text-decoration: underline;}
&:not([href]):not([tabindex]) {color: inherit;
text-decoration: none;}
&:not([href]):not([tabindex]):focus {color: inherit;
text-decoration: none;}
&:not([href]):not([tabindex]):hover {color: inherit;
text-decoration: none;}
&:not([href]):not([tabindex]):focus {outline: 0;}
-ms-touch-action: manipulation;
touch-action: manipulation;
&> code {padding: 0;
color: inherit;
background-color: inherit;}`;;
export const tag_pre = css`@media print {
white-space: pre-wrap;
}
@media print {
border: 1px solid #999;
page-break-inside: avoid;
}
font-family: monospace, monospace;
font-size: 1em;
margin-top: 0;
margin-bottom: 1rem;
overflow: auto;
font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
display: block;
margin-top: 0;
margin-bottom: 1rem;
font-size: 90%;
color: #212529;
&code {padding: 0;
font-size: inherit;
color: inherit;
background-color: transparent;
border-radius: 0;}`;;
export const tag_blockquote = css`@media print {
border: 1px solid #999;
page-break-inside: avoid;
}
margin: 0 0 1rem;`;;
export const tag_thead = css`@media print {
display: table-header-group;
}`;;
export const tag_tr = css`@media print {
page-break-inside: avoid;
}`;;
export const tag_img = css`@media print {
page-break-inside: avoid;
}
vertical-align: middle;
border-style: none;`;;
export const tag_p = css`@media print {
orphans: 3;
widows: 3;
}
margin-top: 0;
margin-bottom: 1rem;`;;
export const tag_h2 = css`@media print {
orphans: 3;
widows: 3;
}
@media print {
page-break-after: avoid;
}
margin-top: 0;
margin-bottom: .5rem;
margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 2rem;`;;
export const tag_h3 = css`@media print {
orphans: 3;
widows: 3;
}
@media print {
page-break-after: avoid;
}
margin-top: 0;
margin-bottom: .5rem;
margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 1.75rem;`;;
export const navbar = css`@media print {
display: none;
}
position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;
padding: 0.5rem 1rem;
&> .container {display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;}
&> .container-fluid {display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;}`;;
export const badge = css`@media print {
border: 1px solid #000;
}
display: inline-block;
padding: 0.25em 0.4em;
font-size: 75%;
font-weight: bold;
line-height: 1;
color: #fff;
text-align: center;
white-space: nowrap;
vertical-align: baseline;
border-radius: 0.25rem;
&:empty {display: none;}`;;
export const table = css`@media print {
border-collapse: collapse;
}
&td {@media print {
background-color: #fff;
}}
&th {@media print {
background-color: #fff;
}}
width: 100%;
max-width: 100%;
margin-bottom: 1rem;
background-color: transparent;
&th {padding: 0.75rem;
vertical-align: top;
border-top: 1px solid #e9ecef;}
&td {padding: 0.75rem;
vertical-align: top;
border-top: 1px solid #e9ecef;}
&thead th {vertical-align: bottom;
border-bottom: 2px solid #e9ecef;}
&tbody + tbody {border-top: 2px solid #e9ecef;}
&.table {background-color: #fff;}`;;
export const table_bordered = css`&th {@media print {
border: 1px solid #ddd;
}}
&td {@media print {
border: 1px solid #ddd;
}}
border: 1px solid #e9ecef;
&th {border: 1px solid #e9ecef;}
&td {border: 1px solid #e9ecef;}
&thead th {border-bottom-width: 2px;}
&thead td {border-bottom-width: 2px;}`;;
export const tag_html = css`box-sizing: border-box;
font-family: sans-serif;
line-height: 1.15;
-webkit-text-size-adjust: 100%;
-ms-text-size-adjust: 100%;
-ms-overflow-style: scrollbar;
-webkit-tap-highlight-color: transparent;
&[type="button"] {-webkit-appearance: button;}`;;
export const tag_article = css`display: block;`;;
export const tag_aside = css`display: block;`;;
export const tag_dialog = css`display: block;`;;
export const tag_figcaption = css`display: block;`;;
export const tag_figure = css`display: block;
margin: 0 0 1rem;`;;
export const tag_footer = css`display: block;`;;
export const tag_header = css`display: block;`;;
export const tag_hgroup = css`display: block;`;;
export const tag_main = css`display: block;`;;
export const tag_nav = css`display: block;`;;
export const tag_section = css`display: block;`;;
export const tag_body = css`margin: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
font-size: 1rem;
font-weight: normal;
line-height: 1.5;
color: #212529;
background-color: #fff;`;;
export const tag_hr = css`box-sizing: content-box;
height: 0;
overflow: visible;
margin-top: 1rem;
margin-bottom: 1rem;
border: 0;
border-top: 1px solid rgba(0, 0, 0, 0.1);`;;
export const tag_h1 = css`margin-top: 0;
margin-bottom: .5rem;
margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 2.5rem;`;;
export const tag_h4 = css`margin-top: 0;
margin-bottom: .5rem;
margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 1.5rem;`;;
export const tag_h5 = css`margin-top: 0;
margin-bottom: .5rem;
margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 1.25rem;`;;
export const tag_h6 = css`margin-top: 0;
margin-bottom: .5rem;
margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 1rem;`;;
export const tag_address = css`margin-bottom: 1rem;
font-style: normal;
line-height: inherit;`;;
export const tag_ol = css`margin-top: 0;
margin-bottom: 1rem;
&ol {margin-bottom: 0;}
&ul {margin-bottom: 0;}`;;
export const tag_ul = css`margin-top: 0;
margin-bottom: 1rem;
&ul {margin-bottom: 0;}
&ol {margin-bottom: 0;}`;;
export const tag_dl = css`margin-top: 0;
margin-bottom: 1rem;`;;
export const tag_dt = css`font-weight: bold;`;;
export const tag_dd = css`margin-bottom: .5rem;
margin-left: 0;`;;
export const tag_dfn = css`font-style: italic;`;;
export const tag_b = css`font-weight: bolder;`;;
export const tag_strong = css`font-weight: bolder;`;;
export const tag_small = css`font-size: 80%;
font-size: 80%;
font-weight: normal;`;;
export const tag_sub = css`position: relative;
font-size: 75%;
line-height: 0;
vertical-align: baseline;
bottom: -.25em;`;;
export const tag_sup = css`position: relative;
font-size: 75%;
line-height: 0;
vertical-align: baseline;
top: -.5em;`;;
export const tag_code = css`font-family: monospace, monospace;
font-size: 1em;
font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
padding: 0.2rem 0.4rem;
font-size: 90%;
color: #bd4147;
background-color: #f8f9fa;
border-radius: 0.25rem;`;;
export const tag_kbd = css`font-family: monospace, monospace;
font-size: 1em;
font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
padding: 0.2rem 0.4rem;
font-size: 90%;
color: #fff;
background-color: #212529;
border-radius: 0.2rem;
&kbd {padding: 0;
font-size: 100%;
font-weight: bold;}`;;
export const tag_samp = css`font-family: monospace, monospace;
font-size: 1em;
font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;`;;
export const tag_svg = css`&:not(:root) {overflow: hidden;}`;;
export const tag_area = css`-ms-touch-action: manipulation;
touch-action: manipulation;`;;
export const tag_button = css`-ms-touch-action: manipulation;
touch-action: manipulation;
&:focus {outline: 1px dotted;
outline: 5px auto -webkit-focus-ring-color;}
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
overflow: visible;
text-transform: none;
-webkit-appearance: button;
&::-moz-focus-inner {padding: 0;
border-style: none;}`;;
export const tag_input = css`-ms-touch-action: manipulation;
touch-action: manipulation;
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
overflow: visible;`;;
export const tag_label = css`-ms-touch-action: manipulation;
touch-action: manipulation;
display: inline-block;
margin-bottom: .5rem;`;;
export const tag_select = css`-ms-touch-action: manipulation;
touch-action: manipulation;
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
text-transform: none;`;;
export const tag_summary = css`-ms-touch-action: manipulation;
touch-action: manipulation;
display: list-item;`;;
export const tag_textarea = css`-ms-touch-action: manipulation;
touch-action: manipulation;
margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;
overflow: auto;
resize: vertical;`;;
export const tag_table = css`border-collapse: collapse;`;;
export const tag_caption = css`padding-top: 0.75rem;
padding-bottom: 0.75rem;
color: #868e96;
text-align: left;
caption-side: bottom;`;;
export const tag_th = css`text-align: left;`;;
export const tag_optgroup = css`margin: 0;
font-family: inherit;
font-size: inherit;
line-height: inherit;`;;
export const tag_fieldset = css`min-width: 0;
padding: 0;
margin: 0;
border: 0;`;;
export const tag_legend = css`display: block;
width: 100%;
max-width: 100%;
padding: 0;
margin-bottom: .5rem;
font-size: 1.5rem;
line-height: inherit;
color: inherit;
white-space: normal;`;;
export const tag_progress = css`vertical-align: baseline;`;;
export const $$$$_webkit_file_upload_button = css`font: inherit;
-webkit-appearance: button;`;;
export const tag_output = css`display: inline-block;`;;
export const tag_template = css`display: none;`;;
export const h1 = css`margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 2.5rem;`;;
export const h2 = css`margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 2rem;`;;
export const h3 = css`margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 1.75rem;`;;
export const h4 = css`margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 1.5rem;`;;
export const h5 = css`margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 1.25rem;`;;
export const h6 = css`margin-bottom: 0.5rem;
font-family: inherit;
font-weight: 500;
line-height: 1.1;
color: inherit;
font-size: 1rem;`;;
export const lead = css`font-size: 1.25rem;
font-weight: 300;`;;
export const display_1 = css`font-size: 6rem;
font-weight: 300;
line-height: 1.1;`;;
export const display_2 = css`font-size: 5.5rem;
font-weight: 300;
line-height: 1.1;`;;
export const display_3 = css`font-size: 4.5rem;
font-weight: 300;
line-height: 1.1;`;;
export const display_4 = css`font-size: 3.5rem;
font-weight: 300;
line-height: 1.1;`;;
export const small = css`font-size: 80%;
font-weight: normal;`;;
export const tag_mark = css`padding: 0.2em;
background-color: #fcf8e3;`;;
export const mark = css`padding: 0.2em;
background-color: #fcf8e3;`;;
export const list_unstyled = css`padding-left: 0;
list-style: none;`;;
export const list_inline = css`padding-left: 0;
list-style: none;`;;
export const list_inline_item = css`display: inline-block;
&:not(:last-child) {margin-right: 5px;}`;;
export const initialism = css`font-size: 90%;
text-transform: uppercase;`;;
export const blockquote = css`margin-bottom: 1rem;
font-size: 1.25rem;`;;
export const blockquote_footer = css`display: block;
font-size: 80%;
color: #868e96;
&::before {content: "\\2014 \\00A0";}`;;
export const img_fluid = css`max-width: 100%;
height: auto;`;;
export const img_thumbnail = css`padding: 0.25rem;
background-color: #fff;
border: 1px solid #ddd;
border-radius: 0.25rem;
transition: all 0.2s ease-in-out;
max-width: 100%;
height: auto;`;;
export const figure = css`display: inline-block;`;;
export const figure_img = css`margin-bottom: 0.5rem;
line-height: 1;`;;
export const figure_caption = css`font-size: 90%;
color: #868e96;`;;
export const pre_scrollable = css`max-height: 340px;
overflow-y: scroll;`;;
export const container = css`margin-right: auto;
margin-left: auto;
padding-right: 15px;
padding-left: 15px;
width: 100%;
@media (min-width: 576px) {
max-width: 540px;
}
@media (min-width: 768px) {
max-width: 720px;
}
@media (min-width: 992px) {
max-width: 960px;
}
@media (min-width: 1200px) {
max-width: 1140px;
}`;;
export const container_fluid = css`width: 100%;
margin-right: auto;
margin-left: auto;
padding-right: 15px;
padding-left: 15px;
width: 100%;`;;
export const row = css`display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin-right: -15px;
margin-left: -15px;`;;
export const no_gutters = css`margin-right: 0;
margin-left: 0;
&> .col {padding-right: 0;
padding-left: 0;}
&> [class*="col-"] {padding-right: 0;
padding-left: 0;}`;;
export const col_1 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%;`;;
export const col_2 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%;`;;
export const col_3 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%;`;;
export const col_4 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%;`;;
export const col_5 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%;`;;
export const col_6 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%;`;;
export const col_7 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%;`;;
export const col_8 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%;`;;
export const col_9 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%;`;;
export const col_10 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%;`;;
export const col_11 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%;`;;
export const col_12 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%;`;;
export const col = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%;`;;
export const col_auto = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: none;`;;
export const col_sm_1 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%;
}`;;
export const col_sm_2 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%;
}`;;
export const col_sm_3 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%;
}`;;
export const col_sm_4 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%;
}`;;
export const col_sm_5 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%;
}`;;
export const col_sm_6 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%;
}`;;
export const col_sm_7 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%;
}`;;
export const col_sm_8 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%;
}`;;
export const col_sm_9 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%;
}`;;
export const col_sm_10 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%;
}`;;
export const col_sm_11 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%;
}`;;
export const col_sm_12 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%;
}`;;
export const col_sm = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%;
}`;;
export const col_sm_auto = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 576px) {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: none;
}`;;
export const col_md_1 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%;
}`;;
export const col_md_2 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%;
}`;;
export const col_md_3 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%;
}`;;
export const col_md_4 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%;
}`;;
export const col_md_5 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%;
}`;;
export const col_md_6 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%;
}`;;
export const col_md_7 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%;
}`;;
export const col_md_8 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%;
}`;;
export const col_md_9 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%;
}`;;
export const col_md_10 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%;
}`;;
export const col_md_11 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%;
}`;;
export const col_md_12 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%;
}`;;
export const col_md = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%;
}`;;
export const col_md_auto = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 768px) {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: none;
}`;;
export const col_lg_1 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%;
}`;;
export const col_lg_2 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%;
}`;;
export const col_lg_3 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%;
}`;;
export const col_lg_4 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%;
}`;;
export const col_lg_5 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%;
}`;;
export const col_lg_6 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%;
}`;;
export const col_lg_7 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%;
}`;;
export const col_lg_8 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%;
}`;;
export const col_lg_9 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%;
}`;;
export const col_lg_10 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%;
}`;;
export const col_lg_11 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%;
}`;;
export const col_lg_12 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%;
}`;;
export const col_lg = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%;
}`;;
export const col_lg_auto = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 992px) {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: none;
}`;;
export const col_xl_1 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 8.333333%;
flex: 0 0 8.333333%;
max-width: 8.333333%;
}`;;
export const col_xl_2 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 16.666667%;
flex: 0 0 16.666667%;
max-width: 16.666667%;
}`;;
export const col_xl_3 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 25%;
flex: 0 0 25%;
max-width: 25%;
}`;;
export const col_xl_4 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 33.333333%;
flex: 0 0 33.333333%;
max-width: 33.333333%;
}`;;
export const col_xl_5 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 41.666667%;
flex: 0 0 41.666667%;
max-width: 41.666667%;
}`;;
export const col_xl_6 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 50%;
flex: 0 0 50%;
max-width: 50%;
}`;;
export const col_xl_7 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 58.333333%;
flex: 0 0 58.333333%;
max-width: 58.333333%;
}`;;
export const col_xl_8 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 66.666667%;
flex: 0 0 66.666667%;
max-width: 66.666667%;
}`;;
export const col_xl_9 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 75%;
flex: 0 0 75%;
max-width: 75%;
}`;;
export const col_xl_10 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 83.333333%;
flex: 0 0 83.333333%;
max-width: 83.333333%;
}`;;
export const col_xl_11 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 91.666667%;
flex: 0 0 91.666667%;
max-width: 91.666667%;
}`;;
export const col_xl_12 = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 100%;
flex: 0 0 100%;
max-width: 100%;
}`;;
export const col_xl = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
max-width: 100%;
}`;;
export const col_xl_auto = css`position: relative;
width: 100%;
min-height: 1px;
padding-right: 15px;
padding-left: 15px;
@media (min-width: 1200px) {
-ms-flex: 0 0 auto;
flex: 0 0 auto;
width: auto;
max-width: none;
}`;;
export const order_1 = css`-ms-flex-order: 1;
order: 1;`;;
export const order_2 = css`-ms-flex-order: 2;
order: 2;`;;
export const order_3 = css`-ms-flex-order: 3;
order: 3;`;;
export const order_4 = css`-ms-flex-order: 4;
order: 4;`;;
export const order_5 = css`-ms-flex-order: 5;
order: 5;`;;
export const order_6 = css`-ms-flex-order: 6;
order: 6;`;;
export const order_7 = css`-ms-flex-order: 7;
order: 7;`;;
export const order_8 = css`-ms-flex-order: 8;
order: 8;`;;
export const order_9 = css`-ms-flex-order: 9;
order: 9;`;;
export const order_10 = css`-ms-flex-order: 10;
order: 10;`;;
export const order_11 = css`-ms-flex-order: 11;
order: 11;`;;
export const order_12 = css`-ms-flex-order: 12;
order: 12;`;;
export const order_sm_1 = css`@media (min-width: 576px) {
-ms-flex-order: 1;
order: 1;
}`;;
export const order_sm_2 = css`@media (min-width: 576px) {
-ms-flex-order: 2;
order: 2;
}`;;
export const order_sm_3 = css`@media (min-width: 576px) {
-ms-flex-order: 3;
order: 3;
}`;;
export const order_sm_4 = css`@media (min-width: 576px) {
-ms-flex-order: 4;
order: 4;
}`;;
export const order_sm_5 = css`@media (min-width: 576px) {
-ms-flex-order: 5;
order: 5;
}`;;
export const order_sm_6 = css`@media (min-width: 576px) {
-ms-flex-order: 6;
order: 6;
}`;;
export const order_sm_7 = css`@media (min-width: 576px) {
-ms-flex-order: 7;
order: 7;
}`;;
export const order_sm_8 = css`@media (min-width: 576px) {
-ms-flex-order: 8;
order: 8;
}`;;
export const order_sm_9 = css`@media (min-width: 576px) {
-ms-flex-order: 9;
order: 9;
}`;;
export const order_sm_10 = css`@media (min-width: 576px) {
-ms-flex-order: 10;
order: 10;
}`;;
export const order_sm_11 = css`@media (min-width: 576px) {
-ms-flex-order: 11;
order: 11;
}`;;
export const order_sm_12 = css`@media (min-width: 576px) {
-ms-flex-order: 12;
order: 12;
}`;;
export const order_md_1 = css`@media (min-width: 768px) {
-ms-flex-order: 1;
order: 1;
}`;;
export const order_md_2 = css`@media (min-width: 768px) {
-ms-flex-order: 2;
order: 2;
}`;;
export const order_md_3 = css`@media (min-width: 768px) {
-ms-flex-order: 3;
order: 3;
}`;;
export const order_md_4 = css`@media (min-width: 768px) {
-ms-flex-order: 4;
order: 4;
}`;;
export const order_md_5 = css`@media (min-width: 768px) {
-ms-flex-order: 5;
order: 5;
}`;;
export const order_md_6 = css`@media (min-width: 768px) {
-ms-flex-order: 6;
order: 6;
}`;;
export const order_md_7 = css`@media (min-width: 768px) {
-ms-flex-order: 7;
order: 7;
}`;;
export const order_md_8 = css`@media (min-width: 768px) {
-ms-flex-order: 8;
order: 8;
}`;;
export const order_md_9 = css`@media (min-width: 768px) {
-ms-flex-order: 9;
order: 9;
}`;;
export const order_md_10 = css`@media (min-width: 768px) {
-ms-flex-order: 10;
order: 10;
}`;;
export const order_md_11 = css`@media (min-width: 768px) {
-ms-flex-order: 11;
order: 11;
}`;;
export const order_md_12 = css`@media (min-width: 768px) {
-ms-flex-order: 12;
order: 12;
}`;;
export const order_lg_1 = css`@media (min-width: 992px) {
-ms-flex-order: 1;
order: 1;
}`;;
export const order_lg_2 = css`@media (min-width: 992px) {
-ms-flex-order: 2;
order: 2;
}`;;
export const order_lg_3 = css`@media (min-width: 992px) {
-ms-flex-order: 3;
order: 3;
}`;;
export const order_lg_4 = css`@media (min-width: 992px) {
-ms-flex-order: 4;
order: 4;
}`;;
export const order_lg_5 = css`@media (min-width: 992px) {
-ms-flex-order: 5;
order: 5;
}`;;
export const order_lg_6 = css`@media (min-width: 992px) {
-ms-flex-order: 6;
order: 6;
}`;;
export const order_lg_7 = css`@media (min-width: 992px) {
-ms-flex-order: 7;
order: 7;
}`;;
export const order_lg_8 = css`@media (min-width: 992px) {
-ms-flex-order: 8;
order: 8;
}`;;
export const order_lg_9 = css`@media (min-width: 992px) {
-ms-flex-order: 9;
order: 9;
}`;;
export const order_lg_10 = css`@media (min-width: 992px) {
-ms-flex-order: 10;
order: 10;
}`;;
export const order_lg_11 = css`@media (min-width: 992px) {
-ms-flex-order: 11;
order: 11;
}`;;
export const order_lg_12 = css`@media (min-width: 992px) {
-ms-flex-order: 12;
order: 12;
}`;;
export const order_xl_1 = css`@media (min-width: 1200px) {
-ms-flex-order: 1;
order: 1;
}`;;
export const order_xl_2 = css`@media (min-width: 1200px) {
-ms-flex-order: 2;
order: 2;
}`;;
export const order_xl_3 = css`@media (min-width: 1200px) {
-ms-flex-order: 3;
order: 3;
}`;;
export const order_xl_4 = css`@media (min-width: 1200px) {
-ms-flex-order: 4;
order: 4;
}`;;
export const order_xl_5 = css`@media (min-width: 1200px) {
-ms-flex-order: 5;
order: 5;
}`;;
export const order_xl_6 = css`@media (min-width: 1200px) {
-ms-flex-order: 6;
order: 6;
}`;;
export const order_xl_7 = css`@media (min-width: 1200px) {
-ms-flex-order: 7;
order: 7;
}`;;
export const order_xl_8 = css`@media (min-width: 1200px) {
-ms-flex-order: 8;
order: 8;
}`;;
export const order_xl_9 = css`@media (min-width: 1200px) {
-ms-flex-order: 9;
order: 9;
}`;;
export const order_xl_10 = css`@media (min-width: 1200px) {
-ms-flex-order: 10;
order: 10;
}`;;
export const order_xl_11 = css`@media (min-width: 1200px) {
-ms-flex-order: 11;
order: 11;
}`;;
export const order_xl_12 = css`@media (min-width: 1200px) {
-ms-flex-order: 12;
order: 12;
}`;;
export const table_sm = css`&th {padding: 0.3rem;}
&td {padding: 0.3rem;}`;;
export const table_striped = css`&tbody tr:nth-of-type(odd) {background-color: rgba(0, 0, 0, 0.05);}`;;
export const table_hover = css`&tbody tr:hover {background-color: rgba(0, 0, 0, 0.075);}
&.table-primary:hover {background-color: #9fcdff;}
&.table-primary:hover > td {background-color: #9fcdff;}
&.table-primary:hover > th {background-color: #9fcdff;}
&.table-secondary:hover {background-color: #cfd2d6;}
&.table-secondary:hover > td {background-color: #cfd2d6;}
&.table-secondary:hover > th {background-color: #cfd2d6;}
&.table-success:hover {background-color: #b1dfbb;}
&.table-success:hover > td {background-color: #b1dfbb;}
&.table-success:hover > th {background-color: #b1dfbb;}
&.table-info:hover {background-color: #abdde5;}
&.table-info:hover > td {background-color: #abdde5;}
&.table-info:hover > th {background-color: #abdde5;}
&.table-warning:hover {background-color: #ffe8a1;}
&.table-warning:hover > td {background-color: #ffe8a1;}
&.table-warning:hover > th {background-color: #ffe8a1;}
&.table-danger:hover {background-color: #f1b0b7;}
&.table-danger:hover > td {background-color: #f1b0b7;}
&.table-danger:hover > th {background-color: #f1b0b7;}
&.table-light:hover {background-color: #ececf6;}
&.table-light:hover > td {background-color: #ececf6;}
&.table-light:hover > th {background-color: #ececf6;}
&.table-dark:hover {background-color: #b9bbbe;}
&.table-dark:hover > td {background-color: #b9bbbe;}
&.table-dark:hover > th {background-color: #b9bbbe;}
&.table-active:hover {background-color: rgba(0, 0, 0, 0.075);}
&.table-active:hover > td {background-color: rgba(0, 0, 0, 0.075);}
&.table-active:hover > th {background-color: rgba(0, 0, 0, 0.075);}`;;
export const table_primary = css`background-color: #b8daff;
&> th {background-color: #b8daff;}
&> td {background-color: #b8daff;}`;;
export const table_secondary = css`background-color: #dddfe2;
&> th {background-color: #dddfe2;}
&> td {background-color: #dddfe2;}`;;
export const table_success = css`background-color: #c3e6cb;
&> th {background-color: #c3e6cb;}
&> td {background-color: #c3e6cb;}`;;
export const table_info = css`background-color: #bee5eb;
&> th {background-color: #bee5eb;}
&> td {background-color: #bee5eb;}`;;
export const table_warning = css`background-color: #ffeeba;
&> th {background-color: #ffeeba;}
&> td {background-color: #ffeeba;}`;;
export const table_danger = css`background-color: #f5c6cb;
&> th {background-color: #f5c6cb;}
&> td {background-color: #f5c6cb;}`;;
export const table_light = css`background-color: #fdfdfe;
&> th {background-color: #fdfdfe;}
&> td {background-color: #fdfdfe;}`;;
export const table_dark = css`background-color: #c6c8ca;
&> th {background-color: #c6c8ca;}
&> td {background-color: #c6c8ca;}`;;
export const table_active = css`background-color: rgba(0, 0, 0, 0.075);
&> th {background-color: rgba(0, 0, 0, 0.075);}
&> td {background-color: rgba(0, 0, 0, 0.075);}`;;
export const thead_inverse = css`&th {color: #fff;
background-color: #212529;}`;;
export const thead_default = css`&th {color: #495057;
background-color: #e9ecef;}`;;
export const table_inverse = css`color: #fff;
background-color: #212529;
&th {border-color: #32383e;}
&td {border-color: #32383e;}
&thead th {border-color: #32383e;}`;;
export const table_inverse_and_table_bordered = css`border: 0;`;;
export const table_inverse_and_table_striped = css`&tbody tr:nth-of-type(odd) {background-color: rgba(255, 255, 255, 0.05);}`;;
export const table_inverse_and_table_hover = css`&tbody tr:hover {background-color: rgba(255, 255, 255, 0.075);}`;;
export const table_responsive = css`@media (max-width: 991px) {
display: block;
width: 100%;
overflow-x: auto;
-ms-overflow-style: -ms-autohiding-scrollbar;
}`;;
export const table_responsive_and_table_bordered = css`@media (max-width: 991px) {
border: 0;
}`;;
export const form_control = css`display: block;
width: 100%;
padding: 0.5rem 0.75rem;
font-size: 1rem;
line-height: 1.25;
color: #495057;
background-color: #fff;
background-image: none;
background-clip: padding-box;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 0.25rem;
transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
&::-ms-expand {background-color: transparent;
border: 0;}
&:focus {color: #495057;
background-color: #fff;
border-color: #80bdff;
outline: none;}
&::-webkit-input-placeholder {color: #868e96;
opacity: 1;}
&:-ms-input-placeholder {color: #868e96;
opacity: 1;}
&::placeholder {color: #868e96;
opacity: 1;}
&:disabled {background-color: #e9ecef;
opacity: 1;}
&+ .input-group-addon:not(:first-child) {border-left: 0;}`;;
export const tag_select_and_form_control = css`&:not([size]):not([multiple]) {height: calc(2.25rem + 2px);}
&:focus::-ms-value {color: #495057;
background-color: #fff;}`;;
export const form_control_file = css`display: block;`;;
export const form_control_range = css`display: block;`;;
export const col_form_label = css`padding-top: calc(0.5rem - 1px * 2);
padding-bottom: calc(0.5rem - 1px * 2);
margin-bottom: 0;`;;
export const col_form_label_lg = css`padding-top: calc(0.5rem - 1px * 2);
padding-bottom: calc(0.5rem - 1px * 2);
font-size: 1.25rem;`;;
export const col_form_label_sm = css`padding-top: calc(0.25rem - 1px * 2);
padding-bottom: calc(0.25rem - 1px * 2);
font-size: 0.875rem;`;;
export const col_form_legend = css`padding-top: 0.5rem;
padding-bottom: 0.5rem;
margin-bottom: 0;
font-size: 1rem;`;;
export const form_control_plaintext = css`padding-top: 0.5rem;
padding-bottom: 0.5rem;
margin-bottom: 0;
line-height: 1.25;
border: solid transparent;
border-width: 1px 0;`;;
export const form_control_plaintext_and_form_control_sm = css`padding-right: 0;
padding-left: 0;`;;
export const input_group_sm = css`&> .form-control-plaintext.form-control {padding-right: 0;
padding-left: 0;}
&> .form-control-plaintext.input-group-addon {padding-right: 0;
padding-left: 0;}
&> .input-group-btn > .form-control-plaintext.btn {padding-right: 0;
padding-left: 0;}
&> .form-control {padding: 0.25rem 0.5rem;
font-size: 0.875rem;
line-height: 1.5;
border-radius: 0.2rem;}
&> .input-group-addon {padding: 0.25rem 0.5rem;
font-size: 0.875rem;
line-height: 1.5;
border-radius: 0.2rem;}
&> .input-group-btn > .btn {padding: 0.25rem 0.5rem;
font-size: 0.875rem;
line-height: 1.5;
border-radius: 0.2rem;}
&> select.form-control:not([size]):not([multiple]) {height: calc(1.8125rem + 2px);}
&> select.input-group-addon:not([size]):not([multiple]) {height: calc(1.8125rem + 2px);}
&> .input-group-btn > select.btn:not([size]):not([multiple]) {height: calc(1.8125rem + 2px);}
&> .input-group-addon {padding: 0.25rem 0.5rem;
font-size: 0.875rem;
border-radius: 0.2rem;}
&> .input-group-btn > .input-group-addon.btn {padding: 0.25rem 0.5rem;
font-size: 0.875rem;
border-radius: 0.2rem;}`;;
export const form_control_plaintext_and_form_control_lg = css`padding-right: 0;
padding-left: 0;`;;
export const input_group_lg = css`&> .form-control-plaintext.form-control {padding-right: 0;
padding-left: 0;}
&> .form-control-plaintext.input-group-addon {padding-right: 0;
padding-left: 0;}
&> .input-group-btn > .form-control-plaintext.btn {padding-right: 0;
padding-left: 0;}
&> .form-control {padding: 0.5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: 0.3rem;}
&> .input-group-addon {padding: 0.5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: 0.3rem;}
&> .input-group-btn > .btn {padding: 0.5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: 0.3rem;}
&> select.form-control:not([size]):not([multiple]) {height: calc(2.3125rem + 2px);}
&> select.input-group-addon:not([size]):not([multiple]) {height: calc(2.3125rem + 2px);}
&> .input-group-btn > select.btn:not([size]):not([multiple]) {height: calc(2.3125rem + 2px);}
&> .input-group-addon {padding: 0.5rem 1rem;
font-size: 1.25rem;
border-radius: 0.3rem;}
&> .input-group-btn > .input-group-addon.btn {padding: 0.5rem 1rem;
font-size: 1.25rem;
border-radius: 0.3rem;}`;;
export const form_control_sm = css`padding: 0.25rem 0.5rem;
font-size: 0.875rem;
line-height: 1.5;
border-radius: 0.2rem;`;;
export const tag_select_and_form_control_sm = css`&:not([size]):not([multiple]) {height: calc(1.8125rem + 2px);}`;;
export const form_control_lg = css`padding: 0.5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: 0.3rem;`;;
export const tag_select_and_form_control_lg = css`&:not([size]):not([multiple]) {height: calc(2.3125rem + 2px);}`;;
export const form_group = css`margin-bottom: 1rem;`;;
export const form_text = css`display: block;
margin-top: 0.25rem;`;;
export const form_row = css`display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin-right: -5px;
margin-left: -5px;
&> .col {padding-right: 5px;
padding-left: 5px;}
&> [class*="col-"] {padding-right: 5px;
padding-left: 5px;}`;;
export const form_check = css`position: relative;
display: block;
margin-bottom: 0.5rem;`;;
export const form_check_and_disabled = css`&.form-check-label {color: #868e96;}`;;
export const form_check_label = css`padding-left: 1.25rem;
margin-bottom: 0;`;;
export const form_check_input = css`position: absolute;
margin-top: 0.25rem;
margin-left: -1.25rem;
&:only-child {position: static;}`;;
export const form_check_inline = css`display: inline-block;
&.form-check-label {vertical-align: middle;}
&+ .form-check-inline {margin-left: 0.75rem;}`;;
export const invalid_feedback = css`display: none;
margin-top: .25rem;
font-size: .875rem;
color: #dc3545;`;;
export const invalid_tooltip = css`position: absolute;
top: 100%;
z-index: 5;
display: none;
width: 250px;
padding: .5rem;
margin-top: .1rem;
font-size: .875rem;
line-height: 1;
color: #fff;
background-color: rgba(220, 53, 69, 0.8);
border-radius: .2rem;`;;
export const was_validated = css`&.form-control:valid {border-color: #28a745;}
&.form-control:valid:focus {box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);}
&.form-control:valid ~ .invalid-feedback {display: block;}
&.form-control:valid ~ .invalid-tooltip {display: block;}
&.form-check-input:valid + .form-check-label {color: #28a745;}
&.custom-control-input:valid ~ .custom-control-indicator {background-color: rgba(40, 167, 69, 0.25);}
&.custom-control-input:valid ~ .custom-control-description {color: #28a745;}
&.custom-file-input:valid ~ .custom-file-control {border-color: #28a745;}
&.custom-file-input:valid ~ .custom-file-control::before {border-color: inherit;}
&.custom-file-input:valid:focus {box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);}
&.form-control:invalid {border-color: #dc3545;}
&.form-control:invalid:focus {box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);}
&.form-control:invalid ~ .invalid-feedback {display: block;}
&.form-control:invalid ~ .invalid-tooltip {display: block;}
&.form-check-input:invalid + .form-check-label {color: #dc3545;}
&.custom-control-input:invalid ~ .custom-control-indicator {background-color: rgba(220, 53, 69, 0.25);}
&.custom-control-input:invalid ~ .custom-control-description {color: #dc3545;}
&.custom-file-input:invalid ~ .custom-file-control {border-color: #dc3545;}
&.custom-file-input:invalid ~ .custom-file-control::before {border-color: inherit;}
&.custom-file-input:invalid:focus {box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);}`;;
export const form_control_and_is_valid = css`border-color: #28a745;
&:focus {box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);}
&~ .invalid-feedback {display: block;}
&~ .invalid-tooltip {display: block;}`;;
export const custom_select_and_is_valid = css`border-color: #28a745;
&:focus {box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);}
&~ .invalid-feedback {display: block;}
&~ .invalid-tooltip {display: block;}`;;
export const form_check_input_and_is_valid = css`&+ .form-check-label {color: #28a745;}`;;
export const custom_control_input_and_is_valid = css`&~ .custom-control-indicator {background-color: rgba(40, 167, 69, 0.25);}
&~ .custom-control-description {color: #28a745;}`;;
export const custom_file_input_and_is_valid = css`&~ .custom-file-control {border-color: #28a745;}
&~ .custom-file-control::before {border-color: inherit;}
&:focus {box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);}`;;
export const form_control_and_is_invalid = css`border-color: #dc3545;
&:focus {box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);}
&~ .invalid-feedback {display: block;}
&~ .invalid-tooltip {display: block;}`;;
export const custom_select_and_is_invalid = css`border-color: #dc3545;
&:focus {box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);}
&~ .invalid-feedback {display: block;}
&~ .invalid-tooltip {display: block;}`;;
export const form_check_input_and_is_invalid = css`&+ .form-check-label {color: #dc3545;}`;;
export const custom_control_input_and_is_invalid = css`&~ .custom-control-indicator {background-color: rgba(220, 53, 69, 0.25);}
&~ .custom-control-description {color: #dc3545;}`;;
export const custom_file_input_and_is_invalid = css`&~ .custom-file-control {border-color: #dc3545;}
&~ .custom-file-control::before {border-color: inherit;}
&:focus {box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);}`;;
export const form_inline = css`display: -ms-flexbox;
display: flex;
-ms-flex-flow: row wrap;
flex-flow: row wrap;
-ms-flex-align: center;
align-items: center;
&.form-check {width: 100%;}
&label {@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: center;
justify-content: center;
margin-bottom: 0;
}}
&.form-group {@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
-ms-flex: 0 0 auto;
flex: 0 0 auto;
-ms-flex-flow: row wrap;
flex-flow: row wrap;
-ms-flex-align: center;
align-items: center;
margin-bottom: 0;
}}
&.form-control {@media (min-width: 576px) {
display: inline-block;
width: auto;
vertical-align: middle;
}}
&.form-control-plaintext {@media (min-width: 576px) {
display: inline-block;
}}
&.input-group {@media (min-width: 576px) {
width: auto;
}}
&.form-control-label {@media (min-width: 576px) {
margin-bottom: 0;
vertical-align: middle;
}}
&.form-check {@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: center;
justify-content: center;
width: auto;
margin-top: 0;
margin-bottom: 0;
}}
&.form-check-label {@media (min-width: 576px) {
padding-left: 0;
}}
&.form-check-input {@media (min-width: 576px) {
position: relative;
margin-top: 0;
margin-right: 0.25rem;
margin-left: 0;
}}
&.custom-control {@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: center;
justify-content: center;
padding-left: 0;
}}
&.custom-control-indicator {@media (min-width: 576px) {
position: static;
display: inline-block;
margin-right: 0.25rem;
vertical-align: text-bottom;
}}
&.has-feedback .form-control-feedback {@media (min-width: 576px) {
top: 0;
}}`;;
export const btn = css`display: inline-block;
font-weight: normal;
text-align: center;
white-space: nowrap;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
border: 1px solid transparent;
padding: 0.5rem 0.75rem;
font-size: 1rem;
line-height: 1.25;
border-radius: 0.25rem;
transition: all 0.15s ease-in-out;
&:focus {text-decoration: none;}
&:hover {text-decoration: none;}
&:focus {outline: 0;
box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);}
&:disabled {opacity: .65;}
&:active {background-image: none;}
&+ .dropdown-toggle-split {padding-right: 0.5625rem;
padding-left: 0.5625rem;}
&+ .dropdown-toggle-split::after {margin-left: 0;}
&.badge {position: relative;
top: -1px;}`;;
export const btn_and_focus = css`outline: 0;
box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);`;;
export const btn_and_disabled = css`opacity: .65;`;;
export const btn_and_active = css`background-image: none;`;;
export const tag_a_and_btn_and_disabled = css`pointer-events: none;`;;
export const btn_primary = css`color: #fff;
background-color: #007bff;
border-color: #007bff;
&:hover {color: #fff;
background-color: #0069d9;
border-color: #0062cc;}
&:focus {box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);}
&:disabled {background-color: #007bff;
border-color: #007bff;}
&:active {background-color: #0069d9;
background-image: none;
border-color: #0062cc;}`;;
export const btn_primary_and_focus = css`box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);`;;
export const btn_primary_and_disabled = css`background-color: #007bff;
border-color: #007bff;`;;
export const btn_primary_and_active = css`background-color: #0069d9;
background-image: none;
border-color: #0062cc;`;;
export const show = css`&> .btn-primary.dropdown-toggle {background-color: #0069d9;
background-image: none;
border-color: #0062cc;}
&> .btn-secondary.dropdown-toggle {background-color: #727b84;
background-image: none;
border-color: #6c757d;}
&> .btn-success.dropdown-toggle {background-color: #218838;
background-image: none;
border-color: #1e7e34;}
&> .btn-info.dropdown-toggle {background-color: #138496;
background-image: none;
border-color: #117a8b;}
&> .btn-warning.dropdown-toggle {background-color: #e0a800;
background-image: none;
border-color: #d39e00;}
&> .btn-danger.dropdown-toggle {background-color: #c82333;
background-image: none;
border-color: #bd2130;}
&> .btn-light.dropdown-toggle {background-color: #e2e6ea;
background-image: none;
border-color: #dae0e5;}
&> .btn-dark.dropdown-toggle {background-color: #23272b;
background-image: none;
border-color: #1d2124;}
&> .btn-outline-primary.dropdown-toggle {color: #fff;
background-color: #007bff;
border-color: #007bff;}
&> .btn-outline-secondary.dropdown-toggle {color: #fff;
background-color: #868e96;
border-color: #868e96;}
&> .btn-outline-success.dropdown-toggle {color: #fff;
background-color: #28a745;
border-color: #28a745;}
&> .btn-outline-info.dropdown-toggle {color: #fff;
background-color: #17a2b8;
border-color: #17a2b8;}
&> .btn-outline-warning.dropdown-toggle {color: #fff;
background-color: #ffc107;
border-color: #ffc107;}
&> .btn-outline-danger.dropdown-toggle {color: #fff;
background-color: #dc3545;
border-color: #dc3545;}
&> .btn-outline-light.dropdown-toggle {color: #fff;
background-color: #f8f9fa;
border-color: #f8f9fa;}
&> .btn-outline-dark.dropdown-toggle {color: #fff;
background-color: #343a40;
border-color: #343a40;}
&> a {outline: 0;}
&> .nav-pills .nav-link {color: #fff;
background-color: #007bff;}`;;
export const btn_secondary = css`color: #fff;
background-color: #868e96;
border-color: #868e96;
&:hover {color: #fff;
background-color: #727b84;
border-color: #6c757d;}
&:focus {box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);}
&:disabled {background-color: #868e96;
border-color: #868e96;}
&:active {background-color: #727b84;
background-image: none;
border-color: #6c757d;}`;;
export const btn_secondary_and_focus = css`box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);`;;
export const btn_secondary_and_disabled = css`background-color: #868e96;
border-color: #868e96;`;;
export const btn_secondary_and_active = css`background-color: #727b84;
background-image: none;
border-color: #6c757d;`;;
export const btn_success = css`color: #fff;
background-color: #28a745;
border-color: #28a745;
&:hover {color: #fff;
background-color: #218838;
border-color: #1e7e34;}
&:focus {box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);}
&:disabled {background-color: #28a745;
border-color: #28a745;}
&:active {background-color: #218838;
background-image: none;
border-color: #1e7e34;}`;;
export const btn_success_and_focus = css`box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);`;;
export const btn_success_and_disabled = css`background-color: #28a745;
border-color: #28a745;`;;
export const btn_success_and_active = css`background-color: #218838;
background-image: none;
border-color: #1e7e34;`;;
export const btn_info = css`color: #fff;
background-color: #17a2b8;
border-color: #17a2b8;
&:hover {color: #fff;
background-color: #138496;
border-color: #117a8b;}
&:focus {box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);}
&:disabled {background-color: #17a2b8;
border-color: #17a2b8;}
&:active {background-color: #138496;
background-image: none;
border-color: #117a8b;}`;;
export const btn_info_and_focus = css`box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);`;;
export const btn_info_and_disabled = css`background-color: #17a2b8;
border-color: #17a2b8;`;;
export const btn_info_and_active = css`background-color: #138496;
background-image: none;
border-color: #117a8b;`;;
export const btn_warning = css`color: #111;
background-color: #ffc107;
border-color: #ffc107;
&:hover {color: #111;
background-color: #e0a800;
border-color: #d39e00;}
&:focus {box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);}
&:disabled {background-color: #ffc107;
border-color: #ffc107;}
&:active {background-color: #e0a800;
background-image: none;
border-color: #d39e00;}`;;
export const btn_warning_and_focus = css`box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);`;;
export const btn_warning_and_disabled = css`background-color: #ffc107;
border-color: #ffc107;`;;
export const btn_warning_and_active = css`background-color: #e0a800;
background-image: none;
border-color: #d39e00;`;;
export const btn_danger = css`color: #fff;
background-color: #dc3545;
border-color: #dc3545;
&:hover {color: #fff;
background-color: #c82333;
border-color: #bd2130;}
&:focus {box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);}
&:disabled {background-color: #dc3545;
border-color: #dc3545;}
&:active {background-color: #c82333;
background-image: none;
border-color: #bd2130;}`;;
export const btn_danger_and_focus = css`box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);`;;
export const btn_danger_and_disabled = css`background-color: #dc3545;
border-color: #dc3545;`;;
export const btn_danger_and_active = css`background-color: #c82333;
background-image: none;
border-color: #bd2130;`;;
export const btn_light = css`color: #111;
background-color: #f8f9fa;
border-color: #f8f9fa;
&:hover {color: #111;
background-color: #e2e6ea;
border-color: #dae0e5;}
&:focus {box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);}
&:disabled {background-color: #f8f9fa;
border-color: #f8f9fa;}
&:active {background-color: #e2e6ea;
background-image: none;
border-color: #dae0e5;}`;;
export const btn_light_and_focus = css`box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);`;;
export const btn_light_and_disabled = css`background-color: #f8f9fa;
border-color: #f8f9fa;`;;
export const btn_light_and_active = css`background-color: #e2e6ea;
background-image: none;
border-color: #dae0e5;`;;
export const btn_dark = css`color: #fff;
background-color: #343a40;
border-color: #343a40;
&:hover {color: #fff;
background-color: #23272b;
border-color: #1d2124;}
&:focus {box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);}
&:disabled {background-color: #343a40;
border-color: #343a40;}
&:active {background-color: #23272b;
background-image: none;
border-color: #1d2124;}`;;
export const btn_dark_and_focus = css`box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);`;;
export const btn_dark_and_disabled = css`background-color: #343a40;
border-color: #343a40;`;;
export const btn_dark_and_active = css`background-color: #23272b;
background-image: none;
border-color: #1d2124;`;;
export const btn_outline_primary = css`color: #007bff;
background-color: transparent;
background-image: none;
border-color: #007bff;
&:hover {color: #fff;
background-color: #007bff;
border-color: #007bff;}
&:focus {box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);}
&:disabled {color: #007bff;
background-color: transparent;}
&:active {color: #fff;
background-color: #007bff;
border-color: #007bff;}`;;
export const btn_outline_primary_and_focus = css`box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);`;;
export const btn_outline_primary_and_disabled = css`color: #007bff;
background-color: transparent;`;;
export const btn_outline_primary_and_active = css`color: #fff;
background-color: #007bff;
border-color: #007bff;`;;
export const btn_outline_secondary = css`color: #868e96;
background-color: transparent;
background-image: none;
border-color: #868e96;
&:hover {color: #fff;
background-color: #868e96;
border-color: #868e96;}
&:focus {box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);}
&:disabled {color: #868e96;
background-color: transparent;}
&:active {color: #fff;
background-color: #868e96;
border-color: #868e96;}`;;
export const btn_outline_secondary_and_focus = css`box-shadow: 0 0 0 3px rgba(134, 142, 150, 0.5);`;;
export const btn_outline_secondary_and_disabled = css`color: #868e96;
background-color: transparent;`;;
export const btn_outline_secondary_and_active = css`color: #fff;
background-color: #868e96;
border-color: #868e96;`;;
export const btn_outline_success = css`color: #28a745;
background-color: transparent;
background-image: none;
border-color: #28a745;
&:hover {color: #fff;
background-color: #28a745;
border-color: #28a745;}
&:focus {box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);}
&:disabled {color: #28a745;
background-color: transparent;}
&:active {color: #fff;
background-color: #28a745;
border-color: #28a745;}`;;
export const btn_outline_success_and_focus = css`box-shadow: 0 0 0 3px rgba(40, 167, 69, 0.5);`;;
export const btn_outline_success_and_disabled = css`color: #28a745;
background-color: transparent;`;;
export const btn_outline_success_and_active = css`color: #fff;
background-color: #28a745;
border-color: #28a745;`;;
export const btn_outline_info = css`color: #17a2b8;
background-color: transparent;
background-image: none;
border-color: #17a2b8;
&:hover {color: #fff;
background-color: #17a2b8;
border-color: #17a2b8;}
&:focus {box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);}
&:disabled {color: #17a2b8;
background-color: transparent;}
&:active {color: #fff;
background-color: #17a2b8;
border-color: #17a2b8;}`;;
export const btn_outline_info_and_focus = css`box-shadow: 0 0 0 3px rgba(23, 162, 184, 0.5);`;;
export const btn_outline_info_and_disabled = css`color: #17a2b8;
background-color: transparent;`;;
export const btn_outline_info_and_active = css`color: #fff;
background-color: #17a2b8;
border-color: #17a2b8;`;;
export const btn_outline_warning = css`color: #ffc107;
background-color: transparent;
background-image: none;
border-color: #ffc107;
&:hover {color: #fff;
background-color: #ffc107;
border-color: #ffc107;}
&:focus {box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);}
&:disabled {color: #ffc107;
background-color: transparent;}
&:active {color: #fff;
background-color: #ffc107;
border-color: #ffc107;}`;;
export const btn_outline_warning_and_focus = css`box-shadow: 0 0 0 3px rgba(255, 193, 7, 0.5);`;;
export const btn_outline_warning_and_disabled = css`color: #ffc107;
background-color: transparent;`;;
export const btn_outline_warning_and_active = css`color: #fff;
background-color: #ffc107;
border-color: #ffc107;`;;
export const btn_outline_danger = css`color: #dc3545;
background-color: transparent;
background-image: none;
border-color: #dc3545;
&:hover {color: #fff;
background-color: #dc3545;
border-color: #dc3545;}
&:focus {box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);}
&:disabled {color: #dc3545;
background-color: transparent;}
&:active {color: #fff;
background-color: #dc3545;
border-color: #dc3545;}`;;
export const btn_outline_danger_and_focus = css`box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.5);`;;
export const btn_outline_danger_and_disabled = css`color: #dc3545;
background-color: transparent;`;;
export const btn_outline_danger_and_active = css`color: #fff;
background-color: #dc3545;
border-color: #dc3545;`;;
export const btn_outline_light = css`color: #f8f9fa;
background-color: transparent;
background-image: none;
border-color: #f8f9fa;
&:hover {color: #fff;
background-color: #f8f9fa;
border-color: #f8f9fa;}
&:focus {box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);}
&:disabled {color: #f8f9fa;
background-color: transparent;}
&:active {color: #fff;
background-color: #f8f9fa;
border-color: #f8f9fa;}`;;
export const btn_outline_light_and_focus = css`box-shadow: 0 0 0 3px rgba(248, 249, 250, 0.5);`;;
export const btn_outline_light_and_disabled = css`color: #f8f9fa;
background-color: transparent;`;;
export const btn_outline_light_and_active = css`color: #fff;
background-color: #f8f9fa;
border-color: #f8f9fa;`;;
export const btn_outline_dark = css`color: #343a40;
background-color: transparent;
background-image: none;
border-color: #343a40;
&:hover {color: #fff;
background-color: #343a40;
border-color: #343a40;}
&:focus {box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);}
&:disabled {color: #343a40;
background-color: transparent;}
&:active {color: #fff;
background-color: #343a40;
border-color: #343a40;}`;;
export const btn_outline_dark_and_focus = css`box-shadow: 0 0 0 3px rgba(52, 58, 64, 0.5);`;;
export const btn_outline_dark_and_disabled = css`color: #343a40;
background-color: transparent;`;;
export const btn_outline_dark_and_active = css`color: #fff;
background-color: #343a40;
border-color: #343a40;`;;
export const btn_link = css`font-weight: normal;
color: #007bff;
border-radius: 0;
background-color: transparent;
&:active {background-color: transparent;}
&:disabled {background-color: transparent;}
border-color: transparent;
box-shadow: none;
&:focus {border-color: transparent;
box-shadow: none;}
&:active {border-color: transparent;
box-shadow: none;}
&:hover {border-color: transparent;}
&:focus {color: #0056b3;
text-decoration: underline;
background-color: transparent;}
&:hover {color: #0056b3;
text-decoration: underline;
background-color: transparent;}
&:disabled {color: #868e96;}
&:disabled:focus {text-decoration: none;}
&:disabled:hover {text-decoration: none;}`;;
export const btn_link_and_active = css`background-color: transparent;`;;
export const btn_lg = css`padding: 0.5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: 0.3rem;
&+ .dropdown-toggle-split {padding-right: 0.75rem;
padding-left: 0.75rem;}`;;
export const btn_group_lg = css`&> .btn {padding: 0.5rem 1rem;
font-size: 1.25rem;
line-height: 1.5;
border-radius: 0.3rem;}
&> .btn + .dropdown-toggle-split {padding-right: 0.75rem;
padding-left: 0.75rem;}`;;
export const btn_sm = css`padding: 0.25rem 0.5rem;
font-size: 0.875rem;
line-height: 1.5;
border-radius: 0.2rem;
&+ .dropdown-toggle-split {padding-right: 0.375rem;
padding-left: 0.375rem;}`;;
export const btn_group_sm = css`&> .btn {padding: 0.25rem 0.5rem;
font-size: 0.875rem;
line-height: 1.5;
border-radius: 0.2rem;}
&> .btn + .dropdown-toggle-split {padding-right: 0.375rem;
padding-left: 0.375rem;}`;;
export const btn_block = css`display: block;
width: 100%;
&+ .btn-block {margin-top: 0.5rem;}`;;
export const fade = css`opacity: 0;
transition: opacity 0.15s linear;`;;
export const fade_and_show = css`opacity: 1;`;;
export const collapse = css`display: none;`;;
export const collapse_and_show = css`display: block;`;;
export const tag_tr_and_collapse_and_show = css`display: table-row;`;;
export const tag_tbody_and_collapse_and_show = css`display: table-row-group;`;;
export const collapsing = css`position: relative;
height: 0;
overflow: hidden;
transition: height 0.35s ease;`;;
export const dropup = css`position: relative;
&.dropdown-menu {margin-top: 0;
margin-bottom: 0.125rem;}
&.dropdown-toggle::after {border-top: 0;
border-bottom: 0.3em solid;}`;;
export const dropdown = css`position: relative;`;;
export const dropdown_toggle = css`&::after {display: inline-block;
width: 0;
height: 0;
margin-left: 0.255em;
vertical-align: 0.255em;
content: "";
border-top: 0.3em solid;
border-right: 0.3em solid transparent;
border-left: 0.3em solid transparent;}
&:empty::after {margin-left: 0;}`;;
export const dropdown_menu = css`position: absolute;
top: 100%;
left: 0;
z-index: 1000;
display: none;
float: left;
min-width: 10rem;
padding: 0.5rem 0;
margin: 0.125rem 0 0;
font-size: 1rem;
color: #212529;
text-align: left;
list-style: none;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 0.25rem;`;;
export const dropdown_divider = css`height: 0;
margin: 0.5rem 0;
overflow: hidden;
border-top: 1px solid #e9ecef;`;;
export const dropdown_item = css`display: block;
width: 100%;
padding: 0.25rem 1.5rem;
clear: both;
font-weight: normal;
color: #212529;
text-align: inherit;
white-space: nowrap;
background: none;
border: 0;
&:focus {color: #16181b;
text-decoration: none;
background-color: #f8f9fa;}
&:hover {color: #16181b;
text-decoration: none;
background-color: #f8f9fa;}
&:active {color: #fff;
text-decoration: none;
background-color: #007bff;}
&:disabled {color: #868e96;
background-color: transparent;}`;;
export const dropdown_item_and_active = css`color: #fff;
text-decoration: none;
background-color: #007bff;`;;
export const dropdown_item_and_disabled = css`color: #868e96;
background-color: transparent;`;;
export const dropdown_menu_and_show = css`display: block;`;;
export const dropdown_header = css`display: block;
padding: 0.5rem 1.5rem;
margin-bottom: 0;
font-size: 0.875rem;
color: #868e96;
white-space: nowrap;`;;
export const btn_group = css`position: relative;
display: -ms-inline-flexbox;
display: inline-flex;
vertical-align: middle;
&> .btn {position: relative;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
margin-bottom: 0;}
&> .btn:hover {z-index: 2;}
&> .btn:focus {z-index: 2;}
&> .btn:active {z-index: 2;}
&> .btn.active {z-index: 2;}
&.btn + .btn {margin-left: -1px;}
&.btn + .btn-group {margin-left: -1px;}
&.btn-group + .btn {margin-left: -1px;}
&.btn-group + .btn-group {margin-left: -1px;}
&> .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {border-radius: 0;}
&> .btn:first-child {margin-left: 0;}
&> .btn:first-child:not(:last-child):not(.dropdown-toggle) {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&> .btn:last-child:not(:first-child) {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&> .dropdown-toggle:not(:first-child) {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&> .btn-group {float: left;}
&> .btn-group:not(:first-child):not(:last-child) > .btn {border-radius: 0;}
&> .btn-group:first-child:not(:last-child) > .btn:last-child {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&> .btn-group:first-child:not(:last-child) > .dropdown-toggle {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&> .btn-group:last-child:not(:first-child) > .btn:first-child {border-top-left-radius: 0;
border-bottom-left-radius: 0;}`;;
export const btn_group_vertical = css`position: relative;
display: -ms-inline-flexbox;
display: inline-flex;
vertical-align: middle;
&> .btn {position: relative;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
margin-bottom: 0;}
&> .btn:hover {z-index: 2;}
&> .btn:focus {z-index: 2;}
&> .btn:active {z-index: 2;}
&> .btn.active {z-index: 2;}
&.btn + .btn {margin-left: -1px;}
&.btn + .btn-group {margin-left: -1px;}
&.btn-group + .btn {margin-left: -1px;}
&.btn-group + .btn-group {margin-left: -1px;}
display: -ms-inline-flexbox;
display: inline-flex;
-ms-flex-direction: column;
flex-direction: column;
-ms-flex-align: start;
align-items: flex-start;
-ms-flex-pack: center;
justify-content: center;
&.btn {width: 100%;}
&.btn-group {width: 100%;}
&> .btn + .btn {margin-top: -1px;
margin-left: 0;}
&> .btn + .btn-group {margin-top: -1px;
margin-left: 0;}
&> .btn-group + .btn {margin-top: -1px;
margin-left: 0;}
&> .btn-group + .btn-group {margin-top: -1px;
margin-left: 0;}
&> .btn:not(:first-child):not(:last-child) {border-radius: 0;}
&> .btn:first-child:not(:last-child) {border-bottom-right-radius: 0;
border-bottom-left-radius: 0;}
&> .btn:last-child:not(:first-child) {border-top-left-radius: 0;
border-top-right-radius: 0;}
&> .btn-group:not(:first-child):not(:last-child) > .btn {border-radius: 0;}
&> .btn-group:first-child:not(:last-child) > .btn:last-child {border-bottom-right-radius: 0;
border-bottom-left-radius: 0;}
&> .btn-group:first-child:not(:last-child) > .dropdown-toggle {border-bottom-right-radius: 0;
border-bottom-left-radius: 0;}
&> .btn-group:last-child:not(:first-child) > .btn:first-child {border-top-left-radius: 0;
border-top-right-radius: 0;}`;;
export const btn_toolbar = css`display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
-ms-flex-pack: start;
justify-content: flex-start;
&.input-group {width: auto;}`;;
export const input_group = css`position: relative;
display: -ms-flexbox;
display: flex;
width: 100%;
&.form-control {position: relative;
z-index: 2;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
width: 1%;
margin-bottom: 0;}
&.form-control:focus {z-index: 3;}
&.form-control:active {z-index: 3;}
&.form-control:hover {z-index: 3;}
&.form-control {display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;}
&.form-control:not(:first-child):not(:last-child) {border-radius: 0;}
&.form-control:not(:last-child) {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&.form-control:not(:first-child) {border-top-left-radius: 0;
border-bottom-left-radius: 0;}`;;
export const input_group_addon = css`display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
&:not(:first-child):not(:last-child) {border-radius: 0;}
white-space: nowrap;
vertical-align: middle;
padding: 0.5rem 0.75rem;
margin-bottom: 0;
font-size: 1rem;
font-weight: normal;
line-height: 1.25;
color: #495057;
text-align: center;
background-color: #e9ecef;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 0.25rem;
&input[type="radio"] {margin-top: 0;}
&input[type="checkbox"] {margin-top: 0;}
&:not(:last-child) {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&:not(:last-child) {border-right: 0;}
&:not(:first-child) {border-top-left-radius: 0;
border-bottom-left-radius: 0;}`;;
export const input_group_btn = css`display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
&:not(:first-child):not(:last-child) {border-radius: 0;}
white-space: nowrap;
vertical-align: middle;
&:not(:last-child) > .btn {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&:not(:last-child) > .btn-group > .btn {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&:not(:last-child) > .dropdown-toggle {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&:not(:first-child) > .btn:not(:last-child):not(.dropdown-toggle) {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&:not(:first-child) > .btn-group:not(:last-child) > .btn {border-top-right-radius: 0;
border-bottom-right-radius: 0;}
&:not(:first-child) > .btn {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&:not(:first-child) > .btn-group > .btn {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&:not(:first-child) > .dropdown-toggle {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&:not(:last-child) > .btn:not(:first-child) {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
&:not(:last-child) > .btn-group:not(:first-child) > .btn {border-top-left-radius: 0;
border-bottom-left-radius: 0;}
position: relative;
font-size: 0;
white-space: nowrap;
&> .btn {position: relative;}
&> .btn + .btn {margin-left: -1px;}
&> .btn:focus {z-index: 3;}
&> .btn:active {z-index: 3;}
&> .btn:hover {z-index: 3;}
&:not(:last-child) > .btn {margin-right: -1px;}
&:not(:last-child) > .btn-group {margin-right: -1px;}
&:not(:first-child) > .btn {z-index: 2;
margin-left: -1px;}
&:not(:first-child) > .btn-group {z-index: 2;
margin-left: -1px;}
&:not(:first-child) > .btn:focus {z-index: 3;}
&:not(:first-child) > .btn:active {z-index: 3;}
&:not(:first-child) > .btn:hover {z-index: 3;}
&:not(:first-child) > .btn-group:focus {z-index: 3;}
&:not(:first-child) > .btn-group:active {z-index: 3;}
&:not(:first-child) > .btn-group:hover {z-index: 3;}`;;
export const input_group_addon_and_form_control_sm = css`padding: 0.25rem 0.5rem;
font-size: 0.875rem;
border-radius: 0.2rem;`;;
export const input_group_addon_and_form_control_lg = css`padding: 0.5rem 1rem;
font-size: 1.25rem;
border-radius: 0.3rem;`;;
export const custom_control = css`position: relative;
display: -ms-inline-flexbox;
display: inline-flex;
min-height: 1.5rem;
padding-left: 1.5rem;
margin-right: 1rem;`;;
export const custom_control_input = css`position: absolute;
z-index: -1;
opacity: 0;
&:checked ~ .custom-control-indicator {color: #fff;
background-color: #007bff;}
&:focus ~ .custom-control-indicator {box-shadow: 0 0 0 1px #fff, 0 0 0 3px #007bff;}
&:active ~ .custom-control-indicator {color: #fff;
background-color: #b3d7ff;}
&:disabled ~ .custom-control-indicator {background-color: #e9ecef;}
&:disabled ~ .custom-control-description {color: #868e96;}`;;
export const custom_control_indicator = css`position: absolute;
top: 0.25rem;
left: 0;
display: block;
width: 1rem;
height: 1rem;
pointer-events: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #ddd;
background-repeat: no-repeat;
background-position: center center;
background-size: 50% 50%;`;;
export const custom_checkbox = css`&.custom-control-indicator {border-radius: 0.25rem;}
&.custom-control-input:checked ~ .custom-control-indicator {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3E%3Cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3E%3C/svg%3E");}
&.custom-control-input:indeterminate ~ .custom-control-indicator {background-color: #007bff;
background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 4'%3E%3Cpath stroke='%23fff' d='M0 2h4'/%3E%3C/svg%3E");}`;;
export const custom_radio = css`&.custom-control-indicator {border-radius: 50%;}
&.custom-control-input:checked ~ .custom-control-indicator {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3E%3Ccircle r='3' fill='%23fff'/%3E%3C/svg%3E");}`;;
export const custom_controls_stacked = css`display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
&.custom-control {margin-bottom: 0.25rem;}
&.custom-control + .custom-control {margin-left: 0;}`;;
export const custom_select = css`display: inline-block;
max-width: 100%;
height: calc(2.25rem + 2px);
padding: 0.375rem 1.75rem 0.375rem 0.75rem;
line-height: 1.25;
color: #495057;
vertical-align: middle;
background: #fff url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'%3E%3Cpath fill='%23333' d='M2 0L0 2h4zm0 5L0 3h4z'/%3E%3C/svg%3E") no-repeat right 0.75rem center;
background-size: 8px 10px;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 0.25rem;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
&:focus {border-color: #80bdff;
outline: none;}
&:focus::-ms-value {color: #495057;
background-color: #fff;}
&:disabled {color: #868e96;
background-color: #e9ecef;}
&::-ms-expand {opacity: 0;}`;;
export const custom_select_sm = css`height: calc(1.8125rem + 2px);
padding-top: 0.375rem;
padding-bottom: 0.375rem;
font-size: 75%;`;;
export const custom_file = css`position: relative;
display: inline-block;
max-width: 100%;
height: 2.5rem;
margin-bottom: 0;`;;
export const custom_file_input = css`min-width: 14rem;
max-width: 100%;
height: 2.5rem;
margin: 0;
opacity: 0;`;;
export const custom_file_control = css`position: absolute;
top: 0;
right: 0;
left: 0;
z-index: 5;
height: 2.5rem;
padding: 0.5rem 1rem;
line-height: 1.5;
color: #495057;
pointer-events: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: #fff;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 0.25rem;
&:lang(en):empty::after {content: "Choose file...";}
&::before {position: absolute;
top: -1px;
right: -1px;
bottom: -1px;
z-index: 6;
display: block;
height: 2.5rem;
padding: 0.5rem 1rem;
line-height: 1.5;
color: #495057;
background-color: #e9ecef;
border: 1px solid rgba(0, 0, 0, 0.15);
border-radius: 0 0.25rem 0.25rem 0;}
&:lang(en)::before {content: "Browse";}`;;
export const nav = css`display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
padding-left: 0;
margin-bottom: 0;
list-style: none;`;;
export const nav_link = css`display: block;
padding: 0.5rem 1rem;
&:focus {text-decoration: none;}
&:hover {text-decoration: none;}`;;
export const nav_link_and_disabled = css`color: #868e96;`;;
export const nav_tabs = css`border-bottom: 1px solid #ddd;
&.nav-item {margin-bottom: -1px;}
&.nav-link {border: 1px solid transparent;
border-top-left-radius: 0.25rem;
border-top-right-radius: 0.25rem;}
&.nav-link:focus {border-color: #e9ecef #e9ecef #ddd;}
&.nav-link:hover {border-color: #e9ecef #e9ecef #ddd;}
&.nav-link.disabled {color: #868e96;
background-color: transparent;
border-color: transparent;}
&.nav-link.active {color: #495057;
background-color: #fff;
border-color: #ddd #ddd #fff;}
&.nav-item.show .nav-link {color: #495057;
background-color: #fff;
border-color: #ddd #ddd #fff;}
&.dropdown-menu {margin-top: -1px;
border-top-left-radius: 0;
border-top-right-radius: 0;}`;;
export const nav_pills = css`&.nav-link {border-radius: 0.25rem;}
&.nav-link.active {color: #fff;
background-color: #007bff;}`;;
export const nav_fill = css`&.nav-item {-ms-flex: 1 1 auto;
flex: 1 1 auto;
text-align: center;}`;;
export const nav_justified = css`&.nav-item {-ms-flex-preferred-size: 0;
flex-basis: 0;
-ms-flex-positive: 1;
flex-grow: 1;
text-align: center;}`;;
export const tab_content = css`&> .tab-pane {display: none;}
&> .active {display: block;}`;;
export const navbar_brand = css`display: inline-block;
padding-top: 0.3125rem;
padding-bottom: 0.3125rem;
margin-right: 1rem;
font-size: 1.25rem;
line-height: inherit;
white-space: nowrap;
&:focus {text-decoration: none;}
&:hover {text-decoration: none;}`;;
export const navbar_nav = css`display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;
list-style: none;
&.nav-link {padding-right: 0;
padding-left: 0;}
&.dropdown-menu {position: static;
float: none;}`;;
export const navbar_text = css`display: inline-block;
padding-top: 0.5rem;
padding-bottom: 0.5rem;`;;
export const navbar_collapse = css`-ms-flex-preferred-size: 100%;
flex-basis: 100%;
-ms-flex-align: center;
align-items: center;`;;
export const navbar_toggler = css`padding: 0.25rem 0.75rem;
font-size: 1.25rem;
line-height: 1;
background: transparent;
border: 1px solid transparent;
border-radius: 0.25rem;
&:focus {text-decoration: none;}
&:hover {text-decoration: none;}`;;
export const navbar_toggler_icon = css`display: inline-block;
width: 1.5em;
height: 1.5em;
vertical-align: middle;
content: "";
background: no-repeat center center;
background-size: 100% 100%;`;;
export const navbar_expand_sm = css`&> .container {@media (max-width: 575px) {
padding-right: 0;
padding-left: 0;
}}
&> .container-fluid {@media (max-width: 575px) {
padding-right: 0;
padding-left: 0;
}}
@media (min-width: 576px) {
-ms-flex-direction: row;
flex-direction: row;
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
-ms-flex-pack: start;
justify-content: flex-start;
}
&.navbar-nav {@media (min-width: 576px) {
-ms-flex-direction: row;
flex-direction: row;
}}
&.navbar-nav .dropdown-menu {@media (min-width: 576px) {
position: absolute;
}}
&.navbar-nav .dropdown-menu-right {@media (min-width: 576px) {
right: 0;
left: auto;
}}
&.navbar-nav .nav-link {@media (min-width: 576px) {
padding-right: .5rem;
padding-left: .5rem;
}}
&> .container {@media (min-width: 576px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}}
&> .container-fluid {@media (min-width: 576px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}}
&.navbar-collapse {@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
}}
&.navbar-toggler {@media (min-width: 576px) {
display: none;
}}`;;
export const navbar_expand_md = css`&> .container {@media (max-width: 767px) {
padding-right: 0;
padding-left: 0;
}}
&> .container-fluid {@media (max-width: 767px) {
padding-right: 0;
padding-left: 0;
}}
@media (min-width: 768px) {
-ms-flex-direction: row;
flex-direction: row;
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
-ms-flex-pack: start;
justify-content: flex-start;
}
&.navbar-nav {@media (min-width: 768px) {
-ms-flex-direction: row;
flex-direction: row;
}}
&.navbar-nav .dropdown-menu {@media (min-width: 768px) {
position: absolute;
}}
&.navbar-nav .dropdown-menu-right {@media (min-width: 768px) {
right: 0;
left: auto;
}}
&.navbar-nav .nav-link {@media (min-width: 768px) {
padding-right: .5rem;
padding-left: .5rem;
}}
&> .container {@media (min-width: 768px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}}
&> .container-fluid {@media (min-width: 768px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}}
&.navbar-collapse {@media (min-width: 768px) {
display: -ms-flexbox;
display: flex;
}}
&.navbar-toggler {@media (min-width: 768px) {
display: none;
}}`;;
export const navbar_expand_lg = css`&> .container {@media (max-width: 991px) {
padding-right: 0;
padding-left: 0;
}}
&> .container-fluid {@media (max-width: 991px) {
padding-right: 0;
padding-left: 0;
}}
@media (min-width: 992px) {
-ms-flex-direction: row;
flex-direction: row;
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
-ms-flex-pack: start;
justify-content: flex-start;
}
&.navbar-nav {@media (min-width: 992px) {
-ms-flex-direction: row;
flex-direction: row;
}}
&.navbar-nav .dropdown-menu {@media (min-width: 992px) {
position: absolute;
}}
&.navbar-nav .dropdown-menu-right {@media (min-width: 992px) {
right: 0;
left: auto;
}}
&.navbar-nav .nav-link {@media (min-width: 992px) {
padding-right: .5rem;
padding-left: .5rem;
}}
&> .container {@media (min-width: 992px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}}
&> .container-fluid {@media (min-width: 992px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}}
&.navbar-collapse {@media (min-width: 992px) {
display: -ms-flexbox;
display: flex;
}}
&.navbar-toggler {@media (min-width: 992px) {
display: none;
}}`;;
export const navbar_expand_xl = css`&> .container {@media (max-width: 1199px) {
padding-right: 0;
padding-left: 0;
}}
&> .container-fluid {@media (max-width: 1199px) {
padding-right: 0;
padding-left: 0;
}}
@media (min-width: 1200px) {
-ms-flex-direction: row;
flex-direction: row;
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
-ms-flex-pack: start;
justify-content: flex-start;
}
&.navbar-nav {@media (min-width: 1200px) {
-ms-flex-direction: row;
flex-direction: row;
}}
&.navbar-nav .dropdown-menu {@media (min-width: 1200px) {
position: absolute;
}}
&.navbar-nav .dropdown-menu-right {@media (min-width: 1200px) {
right: 0;
left: auto;
}}
&.navbar-nav .nav-link {@media (min-width: 1200px) {
padding-right: .5rem;
padding-left: .5rem;
}}
&> .container {@media (min-width: 1200px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}}
&> .container-fluid {@media (min-width: 1200px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}}
&.navbar-collapse {@media (min-width: 1200px) {
display: -ms-flexbox;
display: flex;
}}
&.navbar-toggler {@media (min-width: 1200px) {
display: none;
}}`;;
export const navbar_expand = css`-ms-flex-direction: row;
flex-direction: row;
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
-ms-flex-pack: start;
justify-content: flex-start;
&> .container {padding-right: 0;
padding-left: 0;}
&> .container-fluid {padding-right: 0;
padding-left: 0;}
&.navbar-nav {-ms-flex-direction: row;
flex-direction: row;}
&.navbar-nav .dropdown-menu {position: absolute;}
&.navbar-nav .dropdown-menu-right {right: 0;
left: auto;}
&.navbar-nav .nav-link {padding-right: .5rem;
padding-left: .5rem;}
&> .container {-ms-flex-wrap: nowrap;
flex-wrap: nowrap;}
&> .container-fluid {-ms-flex-wrap: nowrap;
flex-wrap: nowrap;}
&.navbar-collapse {display: -ms-flexbox;
display: flex;}
&.navbar-toggler {display: none;}`;;
export const navbar_light = css`&.navbar-brand {color: rgba(0, 0, 0, 0.9);}
&.navbar-brand:focus {color: rgba(0, 0, 0, 0.9);}
&.navbar-brand:hover {color: rgba(0, 0, 0, 0.9);}
&.navbar-nav .nav-link {color: rgba(0, 0, 0, 0.5);}
&.navbar-nav .nav-link:focus {color: rgba(0, 0, 0, 0.7);}
&.navbar-nav .nav-link:hover {color: rgba(0, 0, 0, 0.7);}
&.navbar-nav .nav-link.disabled {color: rgba(0, 0, 0, 0.3);}
&.navbar-nav .show > .nav-link {color: rgba(0, 0, 0, 0.9);}
&.navbar-nav .active > .nav-link {color: rgba(0, 0, 0, 0.9);}
&.navbar-nav .nav-link.show {color: rgba(0, 0, 0, 0.9);}
&.navbar-nav .nav-link.active {color: rgba(0, 0, 0, 0.9);}
&.navbar-toggler {color: rgba(0, 0, 0, 0.5);
border-color: rgba(0, 0, 0, 0.1);}
&.navbar-toggler-icon {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0, 0, 0, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");}
&.navbar-text {color: rgba(0, 0, 0, 0.5);}`;;
export const navbar_dark = css`&.navbar-brand {color: white;}
&.navbar-brand:focus {color: white;}
&.navbar-brand:hover {color: white;}
&.navbar-nav .nav-link {color: rgba(255, 255, 255, 0.5);}
&.navbar-nav .nav-link:focus {color: rgba(255, 255, 255, 0.75);}
&.navbar-nav .nav-link:hover {color: rgba(255, 255, 255, 0.75);}
&.navbar-nav .nav-link.disabled {color: rgba(255, 255, 255, 0.25);}
&.navbar-nav .show > .nav-link {color: white;}
&.navbar-nav .active > .nav-link {color: white;}
&.navbar-nav .nav-link.show {color: white;}
&.navbar-nav .nav-link.active {color: white;}
&.navbar-toggler {color: rgba(255, 255, 255, 0.5);
border-color: rgba(255, 255, 255, 0.1);}
&.navbar-toggler-icon {background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");}
&.navbar-text {color: rgba(255, 255, 255, 0.5);}`;;
export const card = css`position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
min-width: 0;
word-wrap: break-word;
background-color: #fff;
background-clip: border-box;
border: 1px solid rgba(0, 0, 0, 0.125);
border-radius: 0.25rem;
&> .list-group:first-child .list-group-item:first-child {border-top-left-radius: 0.25rem;
border-top-right-radius: 0.25rem;}
&> .list-group:last-child .list-group-item:last-child {border-bottom-right-radius: 0.25rem;
border-bottom-left-radius: 0.25rem;}`;;
export const card_body = css`-ms-flex: 1 1 auto;
flex: 1 1 auto;
padding: 1.25rem;`;;
export const card_title = css`margin-bottom: 0.75rem;`;;
export const card_subtitle = css`margin-top: -0.375rem;
margin-bottom: 0;`;;
export const card_text = css`&:last-child {margin-bottom: 0;}`;;
export const card_link = css`&:hover {text-decoration: none;}
&+ .card-link {margin-left: 1.25rem;}`;;
export const card_header = css`padding: 0.75rem 1.25rem;
margin-bottom: 0;
background-color: rgba(0, 0, 0, 0.03);
border-bottom: 1px solid rgba(0, 0, 0, 0.125);
&:first-child {border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;}`;;
export const card_footer = css`padding: 0.75rem 1.25rem;
background-color: rgba(0, 0, 0, 0.03);
border-top: 1px solid rgba(0, 0, 0, 0.125);
&:last-child {border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);}`;;
export const card_header_tabs = css`margin-right: -0.625rem;
margin-bottom: -0.75rem;
margin-left: -0.625rem;
border-bottom: 0;`;;
export const card_header_pills = css`margin-right: -0.625rem;
margin-left: -0.625rem;`;;
export const card_img_overlay = css`position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
padding: 1.25rem;`;;
export const card_img = css`width: 100%;
border-radius: calc(0.25rem - 1px);`;;
export const card_img_top = css`width: 100%;
border-top-left-radius: calc(0.25rem - 1px);
border-top-right-radius: calc(0.25rem - 1px);`;;
export const card_img_bottom = css`width: 100%;
border-bottom-right-radius: calc(0.25rem - 1px);
border-bottom-left-radius: calc(0.25rem - 1px);`;;
export const card_deck = css`@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
-ms-flex-flow: row wrap;
flex-flow: row wrap;
margin-right: -15px;
margin-left: -15px;
}
&.card {@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
-ms-flex: 1 0 0%;
flex: 1 0 0%;
-ms-flex-direction: column;
flex-direction: column;
margin-right: 15px;
margin-left: 15px;
}}`;;
export const card_group = css`@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
-ms-flex-flow: row wrap;
flex-flow: row wrap;
}
&.card {@media (min-width: 576px) {
-ms-flex: 1 0 0%;
flex: 1 0 0%;
}}
&.card + .card {@media (min-width: 576px) {
margin-left: 0;
border-left: 0;
}}
&.card:first-child {@media (min-width: 576px) {
border-top-right-radius: 0;
border-bottom-right-radius: 0;
}}
&.card:first-child .card-img-top {@media (min-width: 576px) {
border-top-right-radius: 0;
}}
&.card:first-child .card-img-bottom {@media (min-width: 576px) {
border-bottom-right-radius: 0;
}}
&.card:last-child {@media (min-width: 576px) {
border-top-left-radius: 0;
border-bottom-left-radius: 0;
}}
&.card:last-child .card-img-top {@media (min-width: 576px) {
border-top-left-radius: 0;
}}
&.card:last-child .card-img-bottom {@media (min-width: 576px) {
border-bottom-left-radius: 0;
}}
&.card:not(:first-child):not(:last-child) {@media (min-width: 576px) {
border-radius: 0;
}}
&.card:not(:first-child):not(:last-child) .card-img-top {@media (min-width: 576px) {
border-radius: 0;
}}
&.card:not(:first-child):not(:last-child) .card-img-bottom {@media (min-width: 576px) {
border-radius: 0;
}}`;;
export const card_columns = css`&.card {margin-bottom: 0.75rem;}
@media (min-width: 576px) {
-webkit-column-count: 3;
column-count: 3;
-webkit-column-gap: 1.25rem;
column-gap: 1.25rem;
}
&.card {@media (min-width: 576px) {
display: inline-block;
width: 100%;
}}`;;
export const breadcrumb = css`padding: 0.75rem 1rem;
margin-bottom: 1rem;
list-style: none;
background-color: #e9ecef;
border-radius: 0.25rem;
&::after {display: block;
clear: both;
content: "";}`;;
export const breadcrumb_item = css`float: left;
&+ .breadcrumb-item::before {display: inline-block;
padding-right: 0.5rem;
padding-left: 0.5rem;
color: #868e96;
content: "/";}
&+ .breadcrumb-item:hover::before {text-decoration: underline;}
&+ .breadcrumb-item:hover::before {text-decoration: none;}`;;
export const breadcrumb_item_and_active = css`color: #868e96;`;;
export const pagination = css`display: -ms-flexbox;
display: flex;
padding-left: 0;
list-style: none;
border-radius: 0.25rem;`;;
export const page_item = css`&:first-child .page-link {margin-left: 0;
border-top-left-radius: 0.25rem;
border-bottom-left-radius: 0.25rem;}
&:last-child .page-link {border-top-right-radius: 0.25rem;
border-bottom-right-radius: 0.25rem;}`;;
export const page_item_and_active = css`&.page-link {z-index: 2;
color: #fff;
background-color: #007bff;
border-color: #007bff;}`;;
export const page_item_and_disabled = css`&.page-link {color: #868e96;
pointer-events: none;
background-color: #fff;
border-color: #ddd;}`;;
export const page_link = css`position: relative;
display: block;
padding: 0.5rem 0.75rem;
margin-left: -1px;
line-height: 1.25;
color: #007bff;
background-color: #fff;
border: 1px solid #ddd;
&:focus {color: #0056b3;
text-decoration: none;
background-color: #e9ecef;
border-color: #ddd;}
&:hover {color: #0056b3;
text-decoration: none;
background-color: #e9ecef;
border-color: #ddd;}`;;
export const pagination_lg = css`&.page-link {padding: 0.75rem 1.5rem;
font-size: 1.25rem;
line-height: 1.5;}
&.page-item:first-child .page-link {border-top-left-radius: 0.3rem;
border-bottom-left-radius: 0.3rem;}
&.page-item:last-child .page-link {border-top-right-radius: 0.3rem;
border-bottom-right-radius: 0.3rem;}`;;
export const pagination_sm = css`&.page-link {padding: 0.25rem 0.5rem;
font-size: 0.875rem;
line-height: 1.5;}
&.page-item:first-child .page-link {border-top-left-radius: 0.2rem;
border-bottom-left-radius: 0.2rem;}
&.page-item:last-child .page-link {border-top-right-radius: 0.2rem;
border-bottom-right-radius: 0.2rem;}`;;
export const badge_pill = css`padding-right: 0.6em;
padding-left: 0.6em;
border-radius: 10rem;`;;
export const badge_primary = css`color: #fff;
background-color: #007bff;`;;
export const badge_secondary = css`color: #fff;
background-color: #868e96;`;;
export const badge_success = css`color: #fff;
background-color: #28a745;`;;
export const badge_info = css`color: #fff;
background-color: #17a2b8;`;;
export const badge_warning = css`color: #111;
background-color: #ffc107;`;;
export const badge_danger = css`color: #fff;
background-color: #dc3545;`;;
export const badge_light = css`color: #111;
background-color: #f8f9fa;`;;
export const badge_dark = css`color: #fff;
background-color: #343a40;`;;
export const jumbotron = css`padding: 2rem 1rem;
margin-bottom: 2rem;
background-color: #e9ecef;
border-radius: 0.3rem;
@media (min-width: 576px) {
padding: 4rem 2rem;
}`;;
export const jumbotron_fluid = css`padding-right: 0;
padding-left: 0;
border-radius: 0;`;;
export const alert = css`padding: 0.75rem 1.25rem;
margin-bottom: 1rem;
border: 1px solid transparent;
border-radius: 0.25rem;`;;
export const alert_heading = css`color: inherit;`;;
export const alert_link = css`font-weight: bold;`;;
export const alert_dismissible = css`&.close {position: relative;
top: -0.75rem;
right: -1.25rem;
padding: 0.75rem 1.25rem;
color: inherit;}`;;
export const alert_primary = css`color: #004085;
background-color: #cce5ff;
border-color: #b8daff;
&hr {border-top-color: #9fcdff;}
&.alert-link {color: #002752;}`;;
export const alert_secondary = css`color: #464a4e;
background-color: #e7e8ea;
border-color: #dddfe2;
&hr {border-top-color: #cfd2d6;}
&.alert-link {color: #2e3133;}`;;
export const alert_success = css`color: #155724;
background-color: #d4edda;
border-color: #c3e6cb;
&hr {border-top-color: #b1dfbb;}
&.alert-link {color: #0b2e13;}`;;
export const alert_info = css`color: #0c5460;
background-color: #d1ecf1;
border-color: #bee5eb;
&hr {border-top-color: #abdde5;}
&.alert-link {color: #062c33;}`;;
export const alert_warning = css`color: #856404;
background-color: #fff3cd;
border-color: #ffeeba;
&hr {border-top-color: #ffe8a1;}
&.alert-link {color: #533f03;}`;;
export const alert_danger = css`color: #721c24;
background-color: #f8d7da;
border-color: #f5c6cb;
&hr {border-top-color: #f1b0b7;}
&.alert-link {color: #491217;}`;;
export const alert_light = css`color: #818182;
background-color: #fefefe;
border-color: #fdfdfe;
&hr {border-top-color: #ececf6;}
&.alert-link {color: #686868;}`;;
export const alert_dark = css`color: #1b1e21;
background-color: #d6d8d9;
border-color: #c6c8ca;
&hr {border-top-color: #b9bbbe;}
&.alert-link {color: #040505;}`;;
export const tag_from = css`background-position: 1rem 0;
background-position: 1rem 0;`;;
export const tag_to = css`background-position: 0 0;
background-position: 0 0;`;;
export const progress = css`display: -ms-flexbox;
display: flex;
overflow: hidden;
font-size: 0.75rem;
line-height: 1rem;
text-align: center;
background-color: #e9ecef;
border-radius: 0.25rem;`;;
export const progress_bar = css`height: 1rem;
line-height: 1rem;
color: #fff;
background-color: #007bff;
transition: width 0.6s ease;`;;
export const progress_bar_striped = css`background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent);
background-size: 1rem 1rem;`;;
export const progress_bar_animated = css`-webkit-animation: progress-bar-stripes 1s linear infinite;
animation: progress-bar-stripes 1s linear infinite;`;;
export const media = css`display: -ms-flexbox;
display: flex;
-ms-flex-align: start;
align-items: flex-start;`;;
export const media_body = css`-ms-flex: 1;
flex: 1;`;;
export const list_group = css`display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
padding-left: 0;
margin-bottom: 0;`;;
export const list_group_item_action = css`width: 100%;
color: #495057;
text-align: inherit;
&:focus {color: #495057;
text-decoration: none;
background-color: #f8f9fa;}
&:hover {color: #495057;
text-decoration: none;
background-color: #f8f9fa;}
&:active {color: #212529;
background-color: #e9ecef;}`;;
export const list_group_item = css`position: relative;
display: block;
padding: 0.75rem 1.25rem;
margin-bottom: -1px;
background-color: #fff;
border: 1px solid rgba(0, 0, 0, 0.125);
&:first-child {border-top-left-radius: 0.25rem;
border-top-right-radius: 0.25rem;}
&:last-child {margin-bottom: 0;
border-bottom-right-radius: 0.25rem;
border-bottom-left-radius: 0.25rem;}
&:focus {text-decoration: none;}
&:hover {text-decoration: none;}
&:disabled {color: #868e96;
background-color: #fff;}`;;
export const list_group_item_and_disabled = css`color: #868e96;
background-color: #fff;`;;
export const list_group_item_and_active = css`z-index: 2;
color: #fff;
background-color: #007bff;
border-color: #007bff;`;;
export const list_group_flush = css`&.list-group-item {border-right: 0;
border-left: 0;
border-radius: 0;}
&:first-child .list-group-item:first-child {border-top: 0;}
&:last-child .list-group-item:last-child {border-bottom: 0;}`;;
export const list_group_item_primary = css`color: #004085;
background-color: #b8daff;`;;
export const tag_a_and_list_group_item_primary = css`color: #004085;
&:focus {color: #004085;
background-color: #9fcdff;}
&:hover {color: #004085;
background-color: #9fcdff;}`;;
export const tag_button_and_list_group_item_primary = css`color: #004085;
&:focus {color: #004085;
background-color: #9fcdff;}
&:hover {color: #004085;
background-color: #9fcdff;}`;;
export const tag_a_and_list_group_item_primary_and_active = css`color: #fff;
background-color: #004085;
border-color: #004085;`;;
export const tag_button_and_list_group_item_primary_and_active = css`color: #fff;
background-color: #004085;
border-color: #004085;`;;
export const list_group_item_secondary = css`color: #464a4e;
background-color: #dddfe2;`;;
export const tag_a_and_list_group_item_secondary = css`color: #464a4e;
&:focus {color: #464a4e;
background-color: #cfd2d6;}
&:hover {color: #464a4e;
background-color: #cfd2d6;}`;;
export const tag_button_and_list_group_item_secondary = css`color: #464a4e;
&:focus {color: #464a4e;
background-color: #cfd2d6;}
&:hover {color: #464a4e;
background-color: #cfd2d6;}`;;
export const tag_a_and_list_group_item_secondary_and_active = css`color: #fff;
background-color: #464a4e;
border-color: #464a4e;`;;
export const tag_button_and_list_group_item_secondary_and_active = css`color: #fff;
background-color: #464a4e;
border-color: #464a4e;`;;
export const list_group_item_success = css`color: #155724;
background-color: #c3e6cb;`;;
export const tag_a_and_list_group_item_success = css`color: #155724;
&:focus {color: #155724;
background-color: #b1dfbb;}
&:hover {color: #155724;
background-color: #b1dfbb;}`;;
export const tag_button_and_list_group_item_success = css`color: #155724;
&:focus {color: #155724;
background-color: #b1dfbb;}
&:hover {color: #155724;
background-color: #b1dfbb;}`;;
export const tag_a_and_list_group_item_success_and_active = css`color: #fff;
background-color: #155724;
border-color: #155724;`;;
export const tag_button_and_list_group_item_success_and_active = css`color: #fff;
background-color: #155724;
border-color: #155724;`;;
export const list_group_item_info = css`color: #0c5460;
background-color: #bee5eb;`;;
export const tag_a_and_list_group_item_info = css`color: #0c5460;
&:focus {color: #0c5460;
background-color: #abdde5;}
&:hover {color: #0c5460;
background-color: #abdde5;}`;;
export const tag_button_and_list_group_item_info = css`color: #0c5460;
&:focus {color: #0c5460;
background-color: #abdde5;}
&:hover {color: #0c5460;
background-color: #abdde5;}`;;
export const tag_a_and_list_group_item_info_and_active = css`color: #fff;
background-color: #0c5460;
border-color: #0c5460;`;;
export const tag_button_and_list_group_item_info_and_active = css`color: #fff;
background-color: #0c5460;
border-color: #0c5460;`;;
export const list_group_item_warning = css`color: #856404;
background-color: #ffeeba;`;;
export const tag_a_and_list_group_item_warning = css`color: #856404;
&:focus {color: #856404;
background-color: #ffe8a1;}
&:hover {color: #856404;
background-color: #ffe8a1;}`;;
export const tag_button_and_list_group_item_warning = css`color: #856404;
&:focus {color: #856404;
background-color: #ffe8a1;}
&:hover {color: #856404;
background-color: #ffe8a1;}`;;
export const tag_a_and_list_group_item_warning_and_active = css`color: #fff;
background-color: #856404;
border-color: #856404;`;;
export const tag_button_and_list_group_item_warning_and_active = css`color: #fff;
background-color: #856404;
border-color: #856404;`;;
export const list_group_item_danger = css`color: #721c24;
background-color: #f5c6cb;`;;
export const tag_a_and_list_group_item_danger = css`color: #721c24;
&:focus {color: #721c24;
background-color: #f1b0b7;}
&:hover {color: #721c24;
background-color: #f1b0b7;}`;;
export const tag_button_and_list_group_item_danger = css`color: #721c24;
&:focus {color: #721c24;
background-color: #f1b0b7;}
&:hover {color: #721c24;
background-color: #f1b0b7;}`;;
export const tag_a_and_list_group_item_danger_and_active = css`color: #fff;
background-color: #721c24;
border-color: #721c24;`;;
export const tag_button_and_list_group_item_danger_and_active = css`color: #fff;
background-color: #721c24;
border-color: #721c24;`;;
export const list_group_item_light = css`color: #818182;
background-color: #fdfdfe;`;;
export const tag_a_and_list_group_item_light = css`color: #818182;
&:focus {color: #818182;
background-color: #ececf6;}
&:hover {color: #818182;
background-color: #ececf6;}`;;
export const tag_button_and_list_group_item_light = css`color: #818182;
&:focus {color: #818182;
background-color: #ececf6;}
&:hover {color: #818182;
background-color: #ececf6;}`;;
export const tag_a_and_list_group_item_light_and_active = css`color: #fff;
background-color: #818182;
border-color: #818182;`;;
export const tag_button_and_list_group_item_light_and_active = css`color: #fff;
background-color: #818182;
border-color: #818182;`;;
export const list_group_item_dark = css`color: #1b1e21;
background-color: #c6c8ca;`;;
export const tag_a_and_list_group_item_dark = css`color: #1b1e21;
&:focus {color: #1b1e21;
background-color: #b9bbbe;}
&:hover {color: #1b1e21;
background-color: #b9bbbe;}`;;
export const tag_button_and_list_group_item_dark = css`color: #1b1e21;
&:focus {color: #1b1e21;
background-color: #b9bbbe;}
&:hover {color: #1b1e21;
background-color: #b9bbbe;}`;;
export const tag_a_and_list_group_item_dark_and_active = css`color: #fff;
background-color: #1b1e21;
border-color: #1b1e21;`;;
export const tag_button_and_list_group_item_dark_and_active = css`color: #fff;
background-color: #1b1e21;
border-color: #1b1e21;`;;
export const close = css`float: right;
font-size: 1.5rem;
font-weight: bold;
line-height: 1;
color: #000;
text-shadow: 0 1px 0 #fff;
opacity: .5;
&:focus {color: #000;
text-decoration: none;
opacity: .75;}
&:hover {color: #000;
text-decoration: none;
opacity: .75;}`;;
export const tag_button_and_close = css`padding: 0;
background: transparent;
border: 0;
-webkit-appearance: none;`;;
export const modal_open = css`overflow: hidden;
&.modal {overflow-x: hidden;
overflow-y: auto;}`;;
export const modal = css`position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1050;
display: none;
overflow: hidden;
outline: 0;`;;
export const modal_and_fade = css`&.modal-dialog {transition: -webkit-transform 0.3s ease-out;
transition: transform 0.3s ease-out;
transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
-webkit-transform: translate(0, -25%);
transform: translate(0, -25%);}`;;
export const modal_and_show = css`&.modal-dialog {-webkit-transform: translate(0, 0);
transform: translate(0, 0);}`;;
export const modal_dialog = css`position: relative;
width: auto;
margin: 10px;
@media (min-width: 576px) {
max-width: 500px;
margin: 30px auto;
}`;;
export const modal_content = css`position: relative;
display: -ms-flexbox;
display: flex;
-ms-flex-direction: column;
flex-direction: column;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 0.3rem;
outline: 0;`;;
export const modal_backdrop = css`position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1040;
background-color: #000;`;;
export const modal_backdrop_and_fade = css`opacity: 0;`;;
export const modal_backdrop_and_show = css`opacity: 0.5;`;;
export const modal_header = css`display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: justify;
justify-content: space-between;
padding: 15px;
border-bottom: 1px solid #e9ecef;`;;
export const modal_title = css`margin-bottom: 0;
line-height: 1.5;`;;
export const modal_body = css`position: relative;
-ms-flex: 1 1 auto;
flex: 1 1 auto;
padding: 15px;`;;
export const modal_footer = css`display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: end;
justify-content: flex-end;
padding: 15px;
border-top: 1px solid #e9ecef;
&> :not(:first-child) {margin-left: .25rem;}
&> :not(:last-child) {margin-right: .25rem;}`;;
export const modal_scrollbar_measure = css`position: absolute;
top: -9999px;
width: 50px;
height: 50px;
overflow: scroll;`;;
export const modal_sm = css`@media (min-width: 576px) {
max-width: 300px;
}`;;
export const modal_lg = css`@media (min-width: 992px) {
max-width: 800px;
}`;;
export const tooltip = css`position: absolute;
z-index: 1070;
display: block;
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
font-style: normal;
font-weight: normal;
line-height: 1.5;
text-align: left;
text-align: start;
text-decoration: none;
text-shadow: none;
text-transform: none;
letter-spacing: normal;
word-break: normal;
word-spacing: normal;
white-space: normal;
line-break: auto;
font-size: 0.875rem;
word-wrap: break-word;
opacity: 0;
&.arrow {position: absolute;
display: block;
width: 5px;
height: 5px;}
&.arrow::before {position: absolute;
border-color: transparent;
border-style: solid;}`;;
export const tooltip_and_show = css`opacity: 0.9;`;;
export const tooltip_and_bs_tooltip_top = css`padding: 5px 0;
&.arrow {bottom: 0;}
&.arrow::before {margin-left: -3px;
content: "";
border-width: 5px 5px 0;
border-top-color: #000;}`;;
export const tooltip_and_bs_tooltip_right = css`padding: 0 5px;
&.arrow {left: 0;}
&.arrow::before {margin-top: -3px;
content: "";
border-width: 5px 5px 5px 0;
border-right-color: #000;}`;;
export const tooltip_and_bs_tooltip_bottom = css`padding: 5px 0;
&.arrow {top: 0;}
&.arrow::before {margin-left: -3px;
content: "";
border-width: 0 5px 5px;
border-bottom-color: #000;}`;;
export const tooltip_and_bs_tooltip_left = css`padding: 0 5px;
&.arrow {right: 0;}
&.arrow::before {right: 0;
margin-top: -3px;
content: "";
border-width: 5px 0 5px 5px;
border-left-color: #000;}`;;
export const tooltip_inner = css`max-width: 200px;
padding: 3px 8px;
color: #fff;
text-align: center;
background-color: #000;
border-radius: 0.25rem;`;;
export const popover = css`position: absolute;
top: 0;
left: 0;
z-index: 1060;
display: block;
max-width: 276px;
padding: 1px;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
font-style: normal;
font-weight: normal;
line-height: 1.5;
text-align: left;
text-align: start;
text-decoration: none;
text-shadow: none;
text-transform: none;
letter-spacing: normal;
word-break: normal;
word-spacing: normal;
white-space: normal;
line-break: auto;
font-size: 0.875rem;
word-wrap: break-word;
background-color: #fff;
background-clip: padding-box;
border: 1px solid rgba(0, 0, 0, 0.2);
border-radius: 0.3rem;
&.arrow {position: absolute;
display: block;
width: 10px;
height: 5px;}
&.arrow::before {position: absolute;
display: block;
border-color: transparent;
border-style: solid;}
&.arrow::after {position: absolute;
display: block;
border-color: transparent;
border-style: solid;}
&.arrow::before {content: "";
border-width: 11px;}
&.arrow::after {content: "";
border-width: 11px;}`;;
export const popover_and_bs_popover_top = css`margin-bottom: 10px;
&.arrow {bottom: 0;}
&.arrow::before {border-bottom-width: 0;}
&.arrow::after {border-bottom-width: 0;}
&.arrow::before {bottom: -11px;
margin-left: -6px;
border-top-color: rgba(0, 0, 0, 0.25);}
&.arrow::after {bottom: -10px;
margin-left: -6px;
border-top-color: #fff;}`;;
export const popover_and_bs_popover_right = css`margin-left: 10px;
&.arrow {left: 0;}
&.arrow::before {margin-top: -8px;
border-left-width: 0;}
&.arrow::after {margin-top: -8px;
border-left-width: 0;}
&.arrow::before {left: -11px;
border-right-color: rgba(0, 0, 0, 0.25);}
&.arrow::after {left: -10px;
border-right-color: #fff;}`;;
export const popover_and_bs_popover_bottom = css`margin-top: 10px;
&.arrow {top: 0;}
&.arrow::before {margin-left: -7px;
border-top-width: 0;}
&.arrow::after {margin-left: -7px;
border-top-width: 0;}
&.arrow::before {top: -11px;
border-bottom-color: rgba(0, 0, 0, 0.25);}
&.arrow::after {top: -10px;
border-bottom-color: #fff;}
&.popover-header::before {position: absolute;
top: 0;
left: 50%;
display: block;
width: 20px;
margin-left: -10px;
content: "";
border-bottom: 1px solid #f7f7f7;}`;;
export const popover_and_bs_popover_left = css`margin-right: 10px;
&.arrow {right: 0;}
&.arrow::before {margin-top: -8px;
border-right-width: 0;}
&.arrow::after {margin-top: -8px;
border-right-width: 0;}
&.arrow::before {right: -11px;
border-left-color: rgba(0, 0, 0, 0.25);}
&.arrow::after {right: -10px;
border-left-color: #fff;}`;;
export const popover_header = css`padding: 8px 14px;
margin-bottom: 0;
font-size: 1rem;
color: inherit;
background-color: #f7f7f7;
border-bottom: 1px solid #ebebeb;
border-top-left-radius: calc(0.3rem - 1px);
border-top-right-radius: calc(0.3rem - 1px);
&:empty {display: none;}`;;
export const popover_body = css`padding: 9px 14px;
color: #212529;`;;
export const carousel = css`position: relative;`;;
export const carousel_inner = css`position: relative;
width: 100%;
overflow: hidden;`;;
export const carousel_item = css`position: relative;
display: none;
-ms-flex-align: center;
align-items: center;
width: 100%;
transition: -webkit-transform 0.6s ease;
transition: transform 0.6s ease;
transition: transform 0.6s ease, -webkit-transform 0.6s ease;
-webkit-backface-visibility: hidden;
backface-visibility: hidden;
-webkit-perspective: 1000px;
perspective: 1000px;`;;
export const carousel_item_and_active = css`display: block;`;;
export const carousel_item_next = css`display: block;
position: absolute;
top: 0;
-webkit-transform: translateX(100%);
transform: translateX(100%);
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);`;;
export const carousel_item_prev = css`display: block;
position: absolute;
top: 0;
-webkit-transform: translateX(-100%);
transform: translateX(-100%);
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);`;;
export const carousel_item_next_and_carousel_item_left = css`-webkit-transform: translateX(0);
transform: translateX(0);
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);`;;
export const carousel_item_prev_and_carousel_item_right = css`-webkit-transform: translateX(0);
transform: translateX(0);
-webkit-transform: translate3d(0, 0, 0);
transform: translate3d(0, 0, 0);`;;
export const active_and_carousel_item_right = css`-webkit-transform: translateX(100%);
transform: translateX(100%);
-webkit-transform: translate3d(100%, 0, 0);
transform: translate3d(100%, 0, 0);`;;
export const active_and_carousel_item_left = css`-webkit-transform: translateX(-100%);
transform: translateX(-100%);
-webkit-transform: translate3d(-100%, 0, 0);
transform: translate3d(-100%, 0, 0);`;;
export const carousel_control_prev = css`position: absolute;
top: 0;
bottom: 0;
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: center;
justify-content: center;
width: 15%;
color: #fff;
text-align: center;
opacity: 0.5;
&:focus {color: #fff;
text-decoration: none;
outline: 0;
opacity: .9;}
&:hover {color: #fff;
text-decoration: none;
outline: 0;
opacity: .9;}
left: 0;`;;
export const carousel_control_next = css`position: absolute;
top: 0;
bottom: 0;
display: -ms-flexbox;
display: flex;
-ms-flex-align: center;
align-items: center;
-ms-flex-pack: center;
justify-content: center;
width: 15%;
color: #fff;
text-align: center;
opacity: 0.5;
&:focus {color: #fff;
text-decoration: none;
outline: 0;
opacity: .9;}
&:hover {color: #fff;
text-decoration: none;
outline: 0;
opacity: .9;}
right: 0;`;;
export const carousel_control_prev_icon = css`display: inline-block;
width: 20px;
height: 20px;
background: transparent no-repeat center center;
background-size: 100% 100%;
background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M4 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");`;;
export const carousel_control_next_icon = css`display: inline-block;
width: 20px;
height: 20px;
background: transparent no-repeat center center;
background-size: 100% 100%;
background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M1.5 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");`;;
export const carousel_indicators = css`position: absolute;
right: 0;
bottom: 10px;
left: 0;
z-index: 15;
display: -ms-flexbox;
display: flex;
-ms-flex-pack: center;
justify-content: center;
padding-left: 0;
margin-right: 15%;
margin-left: 15%;
list-style: none;
&li {position: relative;
-ms-flex: 0 1 auto;
flex: 0 1 auto;
width: 30px;
height: 3px;
margin-right: 3px;
margin-left: 3px;
text-indent: -999px;
background-color: rgba(255, 255, 255, 0.5);}
&li::before {position: absolute;
top: -10px;
left: 0;
display: inline-block;
width: 100%;
height: 10px;
content: "";}
&li::after {position: absolute;
bottom: -10px;
left: 0;
display: inline-block;
width: 100%;
height: 10px;
content: "";}
&.active {background-color: #fff;}`;;
export const carousel_caption = css`position: absolute;
right: 15%;
bottom: 20px;
left: 15%;
z-index: 10;
padding-top: 20px;
padding-bottom: 20px;
color: #fff;
text-align: center;`;;
export const align_baseline = css`vertical-align: baseline;`;;
export const align_top = css`vertical-align: top;`;;
export const align_middle = css`vertical-align: middle;`;;
export const align_bottom = css`vertical-align: bottom;`;;
export const align_text_bottom = css`vertical-align: text-bottom;`;;
export const align_text_top = css`vertical-align: text-top;`;;
export const bg_primary = css`background-color: #007bff;`;;
export const tag_a_and_bg_primary = css`&:focus {background-color: #0062cc;}
&:hover {background-color: #0062cc;}`;;
export const bg_secondary = css`background-color: #868e96;`;;
export const tag_a_and_bg_secondary = css`&:focus {background-color: #6c757d;}
&:hover {background-color: #6c757d;}`;;
export const bg_success = css`background-color: #28a745;`;;
export const tag_a_and_bg_success = css`&:focus {background-color: #1e7e34;}
&:hover {background-color: #1e7e34;}`;;
export const bg_info = css`background-color: #17a2b8;`;;
export const tag_a_and_bg_info = css`&:focus {background-color: #117a8b;}
&:hover {background-color: #117a8b;}`;;
export const bg_warning = css`background-color: #ffc107;`;;
export const tag_a_and_bg_warning = css`&:focus {background-color: #d39e00;}
&:hover {background-color: #d39e00;}`;;
export const bg_danger = css`background-color: #dc3545;`;;
export const tag_a_and_bg_danger = css`&:focus {background-color: #bd2130;}
&:hover {background-color: #bd2130;}`;;
export const bg_light = css`background-color: #f8f9fa;`;;
export const tag_a_and_bg_light = css`&:focus {background-color: #dae0e5;}
&:hover {background-color: #dae0e5;}`;;
export const bg_dark = css`background-color: #343a40;`;;
export const tag_a_and_bg_dark = css`&:focus {background-color: #1d2124;}
&:hover {background-color: #1d2124;}`;;
export const bg_white = css`background-color: #fff;`;;
export const bg_transparent = css`background-color: transparent;`;;
export const border = css`border: 1px solid #e9ecef;`;;
export const border_0 = css`border: 0;`;;
export const border_top_0 = css`border-top: 0;`;;
export const border_right_0 = css`border-right: 0;`;;
export const border_bottom_0 = css`border-bottom: 0;`;;
export const border_left_0 = css`border-left: 0;`;;
export const border_primary = css`border-color: #007bff;`;;
export const border_secondary = css`border-color: #868e96;`;;
export const border_success = css`border-color: #28a745;`;;
export const border_info = css`border-color: #17a2b8;`;;
export const border_warning = css`border-color: #ffc107;`;;
export const border_danger = css`border-color: #dc3545;`;;
export const border_light = css`border-color: #f8f9fa;`;;
export const border_dark = css`border-color: #343a40;`;;
export const border_white = css`border-color: #fff;`;;
export const rounded = css`border-radius: 0.25rem;`;;
export const rounded_top = css`border-top-left-radius: 0.25rem;
border-top-right-radius: 0.25rem;`;;
export const rounded_right = css`border-top-right-radius: 0.25rem;
border-bottom-right-radius: 0.25rem;`;;
export const rounded_bottom = css`border-bottom-right-radius: 0.25rem;
border-bottom-left-radius: 0.25rem;`;;
export const rounded_left = css`border-top-left-radius: 0.25rem;
border-bottom-left-radius: 0.25rem;`;;
export const rounded_circle = css`border-radius: 50%;`;;
export const rounded_0 = css`border-radius: 0;`;;
export const clearfix = css`&::after {display: block;
clear: both;
content: "";}`;;
export const d_none = css`display: none;`;;
export const d_inline = css`display: inline;`;;
export const d_inline_block = css`display: inline-block;`;;
export const d_block = css`display: block;`;;
export const d_table = css`display: table;`;;
export const d_table_cell = css`display: table-cell;`;;
export const d_flex = css`display: -ms-flexbox;
display: flex;`;;
export const d_inline_flex = css`display: -ms-inline-flexbox;
display: inline-flex;`;;
export const d_sm_none = css`@media (min-width: 576px) {
display: none;
}`;;
export const d_sm_inline = css`@media (min-width: 576px) {
display: inline;
}`;;
export const d_sm_inline_block = css`@media (min-width: 576px) {
display: inline-block;
}`;;
export const d_sm_block = css`@media (min-width: 576px) {
display: block;
}`;;
export const d_sm_table = css`@media (min-width: 576px) {
display: table;
}`;;
export const d_sm_table_cell = css`@media (min-width: 576px) {
display: table-cell;
}`;;
export const d_sm_flex = css`@media (min-width: 576px) {
display: -ms-flexbox;
display: flex;
}`;;
export const d_sm_inline_flex = css`@media (min-width: 576px) {
display: -ms-inline-flexbox;
display: inline-flex;
}`;;
export const d_md_none = css`@media (min-width: 768px) {
display: none;
}`;;
export const d_md_inline = css`@media (min-width: 768px) {
display: inline;
}`;;
export const d_md_inline_block = css`@media (min-width: 768px) {
display: inline-block;
}`;;
export const d_md_block = css`@media (min-width: 768px) {
display: block;
}`;;
export const d_md_table = css`@media (min-width: 768px) {
display: table;
}`;;
export const d_md_table_cell = css`@media (min-width: 768px) {
display: table-cell;
}`;;
export const d_md_flex = css`@media (min-width: 768px) {
display: -ms-flexbox;
display: flex;
}`;;
export const d_md_inline_flex = css`@media (min-width: 768px) {
display: -ms-inline-flexbox;
display: inline-flex;
}`;;
export const d_lg_none = css`@media (min-width: 992px) {
display: none;
}`;;
export const d_lg_inline = css`@media (min-width: 992px) {
display: inline;
}`;;
export const d_lg_inline_block = css`@media (min-width: 992px) {
display: inline-block;
}`;;
export const d_lg_block = css`@media (min-width: 992px) {
display: block;
}`;;
export const d_lg_table = css`@media (min-width: 992px) {
display: table;
}`;;
export const d_lg_table_cell = css`@media (min-width: 992px) {
display: table-cell;
}`;;
export const d_lg_flex = css`@media (min-width: 992px) {
display: -ms-flexbox;
display: flex;
}`;;
export const d_lg_inline_flex = css`@media (min-width: 992px) {
display: -ms-inline-flexbox;
display: inline-flex;
}`;;
export const d_xl_none = css`@media (min-width: 1200px) {
display: none;
}`;;
export const d_xl_inline = css`@media (min-width: 1200px) {
display: inline;
}`;;
export const d_xl_inline_block = css`@media (min-width: 1200px) {
display: inline-block;
}`;;
export const d_xl_block = css`@media (min-width: 1200px) {
display: block;
}`;;
export const d_xl_table = css`@media (min-width: 1200px) {
display: table;
}`;;
export const d_xl_table_cell = css`@media (min-width: 1200px) {
display: table-cell;
}`;;
export const d_xl_flex = css`@media (min-width: 1200px) {
display: -ms-flexbox;
display: flex;
}`;;
export const d_xl_inline_flex = css`@media (min-width: 1200px) {
display: -ms-inline-flexbox;
display: inline-flex;
}`;;
export const d_print_block = css`display: none;
@media print {
display: block;
}`;;
export const d_print_inline = css`display: none;
@media print {
display: inline;
}`;;
export const d_print_inline_block = css`display: none;
@media print {
display: inline-block;
}`;;
export const d_print_none = css`@media print {
display: none;
}`;;
export const embed_responsive = css`position: relative;
display: block;
width: 100%;
padding: 0;
overflow: hidden;
&::before {display: block;
content: "";}
&.embed-responsive-item {position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;}
&iframe {position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;}
&embed {position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;}
&object {position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;}
&video {position: absolute;
top: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
border: 0;}`;;
export const embed_responsive_21by9 = css`&::before {padding-top: 42.857143%;}`;;
export const embed_responsive_16by9 = css`&::before {padding-top: 56.25%;}`;;
export const embed_responsive_4by3 = css`&::before {padding-top: 75%;}`;;
export const embed_responsive_1by1 = css`&::before {padding-top: 100%;}`;;
export const flex_row = css`-ms-flex-direction: row;
flex-direction: row;`;;
export const flex_column = css`-ms-flex-direction: column;
flex-direction: column;`;;
export const flex_row_reverse = css`-ms-flex-direction: row-reverse;
flex-direction: row-reverse;`;;
export const flex_column_reverse = css`-ms-flex-direction: column-reverse;
flex-direction: column-reverse;`;;
export const flex_wrap = css`-ms-flex-wrap: wrap;
flex-wrap: wrap;`;;
export const flex_nowrap = css`-ms-flex-wrap: nowrap;
flex-wrap: nowrap;`;;
export const flex_wrap_reverse = css`-ms-flex-wrap: wrap-reverse;
flex-wrap: wrap-reverse;`;;
export const justify_content_start = css`-ms-flex-pack: start;
justify-content: flex-start;`;;
export const justify_content_end = css`-ms-flex-pack: end;
justify-content: flex-end;`;;
export const justify_content_center = css`-ms-flex-pack: center;
justify-content: center;`;;
export const justify_content_between = css`-ms-flex-pack: justify;
justify-content: space-between;`;;
export const justify_content_around = css`-ms-flex-pack: distribute;
justify-content: space-around;`;;
export const align_items_start = css`-ms-flex-align: start;
align-items: flex-start;`;;
export const align_items_end = css`-ms-flex-align: end;
align-items: flex-end;`;;
export const align_items_center = css`-ms-flex-align: center;
align-items: center;`;;
export const align_items_baseline = css`-ms-flex-align: baseline;
align-items: baseline;`;;
export const align_items_stretch = css`-ms-flex-align: stretch;
align-items: stretch;`;;
export const align_content_start = css`-ms-flex-line-pack: start;
align-content: flex-start;`;;
export const align_content_end = css`-ms-flex-line-pack: end;
align-content: flex-end;`;;
export const align_content_center = css`-ms-flex-line-pack: center;
align-content: center;`;;
export const align_content_between = css`-ms-flex-line-pack: justify;
align-content: space-between;`;;
export const align_content_around = css`-ms-flex-line-pack: distribute;
align-content: space-around;`;;
export const align_content_stretch = css`-ms-flex-line-pack: stretch;
align-content: stretch;`;;
export const align_self_auto = css`-ms-flex-item-align: auto;
align-self: auto;`;;
export const align_self_start = css`-ms-flex-item-align: start;
align-self: flex-start;`;;
export const align_self_end = css`-ms-flex-item-align: end;
align-self: flex-end;`;;
export const align_self_center = css`-ms-flex-item-align: center;
align-self: center;`;;
export const align_self_baseline = css`-ms-flex-item-align: baseline;
align-self: baseline;`;;
export const align_self_stretch = css`-ms-flex-item-align: stretch;
align-self: stretch;`;;
export const flex_sm_row = css`@media (min-width: 576px) {
-ms-flex-direction: row;
flex-direction: row;
}`;;
export const flex_sm_column = css`@media (min-width: 576px) {
-ms-flex-direction: column;
flex-direction: column;
}`;;
export const flex_sm_row_reverse = css`@media (min-width: 576px) {
-ms-flex-direction: row-reverse;
flex-direction: row-reverse;
}`;;
export const flex_sm_column_reverse = css`@media (min-width: 576px) {
-ms-flex-direction: column-reverse;
flex-direction: column-reverse;
}`;;
export const flex_sm_wrap = css`@media (min-width: 576px) {
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}`;;
export const flex_sm_nowrap = css`@media (min-width: 576px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}`;;
export const flex_sm_wrap_reverse = css`@media (min-width: 576px) {
-ms-flex-wrap: wrap-reverse;
flex-wrap: wrap-reverse;
}`;;
export const justify_content_sm_start = css`@media (min-width: 576px) {
-ms-flex-pack: start;
justify-content: flex-start;
}`;;
export const justify_content_sm_end = css`@media (min-width: 576px) {
-ms-flex-pack: end;
justify-content: flex-end;
}`;;
export const justify_content_sm_center = css`@media (min-width: 576px) {
-ms-flex-pack: center;
justify-content: center;
}`;;
export const justify_content_sm_between = css`@media (min-width: 576px) {
-ms-flex-pack: justify;
justify-content: space-between;
}`;;
export const justify_content_sm_around = css`@media (min-width: 576px) {
-ms-flex-pack: distribute;
justify-content: space-around;
}`;;
export const align_items_sm_start = css`@media (min-width: 576px) {
-ms-flex-align: start;
align-items: flex-start;
}`;;
export const align_items_sm_end = css`@media (min-width: 576px) {
-ms-flex-align: end;
align-items: flex-end;
}`;;
export const align_items_sm_center = css`@media (min-width: 576px) {
-ms-flex-align: center;
align-items: center;
}`;;
export const align_items_sm_baseline = css`@media (min-width: 576px) {
-ms-flex-align: baseline;
align-items: baseline;
}`;;
export const align_items_sm_stretch = css`@media (min-width: 576px) {
-ms-flex-align: stretch;
align-items: stretch;
}`;;
export const align_content_sm_start = css`@media (min-width: 576px) {
-ms-flex-line-pack: start;
align-content: flex-start;
}`;;
export const align_content_sm_end = css`@media (min-width: 576px) {
-ms-flex-line-pack: end;
align-content: flex-end;
}`;;
export const align_content_sm_center = css`@media (min-width: 576px) {
-ms-flex-line-pack: center;
align-content: center;
}`;;
export const align_content_sm_between = css`@media (min-width: 576px) {
-ms-flex-line-pack: justify;
align-content: space-between;
}`;;
export const align_content_sm_around = css`@media (min-width: 576px) {
-ms-flex-line-pack: distribute;
align-content: space-around;
}`;;
export const align_content_sm_stretch = css`@media (min-width: 576px) {
-ms-flex-line-pack: stretch;
align-content: stretch;
}`;;
export const align_self_sm_auto = css`@media (min-width: 576px) {
-ms-flex-item-align: auto;
align-self: auto;
}`;;
export const align_self_sm_start = css`@media (min-width: 576px) {
-ms-flex-item-align: start;
align-self: flex-start;
}`;;
export const align_self_sm_end = css`@media (min-width: 576px) {
-ms-flex-item-align: end;
align-self: flex-end;
}`;;
export const align_self_sm_center = css`@media (min-width: 576px) {
-ms-flex-item-align: center;
align-self: center;
}`;;
export const align_self_sm_baseline = css`@media (min-width: 576px) {
-ms-flex-item-align: baseline;
align-self: baseline;
}`;;
export const align_self_sm_stretch = css`@media (min-width: 576px) {
-ms-flex-item-align: stretch;
align-self: stretch;
}`;;
export const flex_md_row = css`@media (min-width: 768px) {
-ms-flex-direction: row;
flex-direction: row;
}`;;
export const flex_md_column = css`@media (min-width: 768px) {
-ms-flex-direction: column;
flex-direction: column;
}`;;
export const flex_md_row_reverse = css`@media (min-width: 768px) {
-ms-flex-direction: row-reverse;
flex-direction: row-reverse;
}`;;
export const flex_md_column_reverse = css`@media (min-width: 768px) {
-ms-flex-direction: column-reverse;
flex-direction: column-reverse;
}`;;
export const flex_md_wrap = css`@media (min-width: 768px) {
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}`;;
export const flex_md_nowrap = css`@media (min-width: 768px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}`;;
export const flex_md_wrap_reverse = css`@media (min-width: 768px) {
-ms-flex-wrap: wrap-reverse;
flex-wrap: wrap-reverse;
}`;;
export const justify_content_md_start = css`@media (min-width: 768px) {
-ms-flex-pack: start;
justify-content: flex-start;
}`;;
export const justify_content_md_end = css`@media (min-width: 768px) {
-ms-flex-pack: end;
justify-content: flex-end;
}`;;
export const justify_content_md_center = css`@media (min-width: 768px) {
-ms-flex-pack: center;
justify-content: center;
}`;;
export const justify_content_md_between = css`@media (min-width: 768px) {
-ms-flex-pack: justify;
justify-content: space-between;
}`;;
export const justify_content_md_around = css`@media (min-width: 768px) {
-ms-flex-pack: distribute;
justify-content: space-around;
}`;;
export const align_items_md_start = css`@media (min-width: 768px) {
-ms-flex-align: start;
align-items: flex-start;
}`;;
export const align_items_md_end = css`@media (min-width: 768px) {
-ms-flex-align: end;
align-items: flex-end;
}`;;
export const align_items_md_center = css`@media (min-width: 768px) {
-ms-flex-align: center;
align-items: center;
}`;;
export const align_items_md_baseline = css`@media (min-width: 768px) {
-ms-flex-align: baseline;
align-items: baseline;
}`;;
export const align_items_md_stretch = css`@media (min-width: 768px) {
-ms-flex-align: stretch;
align-items: stretch;
}`;;
export const align_content_md_start = css`@media (min-width: 768px) {
-ms-flex-line-pack: start;
align-content: flex-start;
}`;;
export const align_content_md_end = css`@media (min-width: 768px) {
-ms-flex-line-pack: end;
align-content: flex-end;
}`;;
export const align_content_md_center = css`@media (min-width: 768px) {
-ms-flex-line-pack: center;
align-content: center;
}`;;
export const align_content_md_between = css`@media (min-width: 768px) {
-ms-flex-line-pack: justify;
align-content: space-between;
}`;;
export const align_content_md_around = css`@media (min-width: 768px) {
-ms-flex-line-pack: distribute;
align-content: space-around;
}`;;
export const align_content_md_stretch = css`@media (min-width: 768px) {
-ms-flex-line-pack: stretch;
align-content: stretch;
}`;;
export const align_self_md_auto = css`@media (min-width: 768px) {
-ms-flex-item-align: auto;
align-self: auto;
}`;;
export const align_self_md_start = css`@media (min-width: 768px) {
-ms-flex-item-align: start;
align-self: flex-start;
}`;;
export const align_self_md_end = css`@media (min-width: 768px) {
-ms-flex-item-align: end;
align-self: flex-end;
}`;;
export const align_self_md_center = css`@media (min-width: 768px) {
-ms-flex-item-align: center;
align-self: center;
}`;;
export const align_self_md_baseline = css`@media (min-width: 768px) {
-ms-flex-item-align: baseline;
align-self: baseline;
}`;;
export const align_self_md_stretch = css`@media (min-width: 768px) {
-ms-flex-item-align: stretch;
align-self: stretch;
}`;;
export const flex_lg_row = css`@media (min-width: 992px) {
-ms-flex-direction: row;
flex-direction: row;
}`;;
export const flex_lg_column = css`@media (min-width: 992px) {
-ms-flex-direction: column;
flex-direction: column;
}`;;
export const flex_lg_row_reverse = css`@media (min-width: 992px) {
-ms-flex-direction: row-reverse;
flex-direction: row-reverse;
}`;;
export const flex_lg_column_reverse = css`@media (min-width: 992px) {
-ms-flex-direction: column-reverse;
flex-direction: column-reverse;
}`;;
export const flex_lg_wrap = css`@media (min-width: 992px) {
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}`;;
export const flex_lg_nowrap = css`@media (min-width: 992px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}`;;
export const flex_lg_wrap_reverse = css`@media (min-width: 992px) {
-ms-flex-wrap: wrap-reverse;
flex-wrap: wrap-reverse;
}`;;
export const justify_content_lg_start = css`@media (min-width: 992px) {
-ms-flex-pack: start;
justify-content: flex-start;
}`;;
export const justify_content_lg_end = css`@media (min-width: 992px) {
-ms-flex-pack: end;
justify-content: flex-end;
}`;;
export const justify_content_lg_center = css`@media (min-width: 992px) {
-ms-flex-pack: center;
justify-content: center;
}`;;
export const justify_content_lg_between = css`@media (min-width: 992px) {
-ms-flex-pack: justify;
justify-content: space-between;
}`;;
export const justify_content_lg_around = css`@media (min-width: 992px) {
-ms-flex-pack: distribute;
justify-content: space-around;
}`;;
export const align_items_lg_start = css`@media (min-width: 992px) {
-ms-flex-align: start;
align-items: flex-start;
}`;;
export const align_items_lg_end = css`@media (min-width: 992px) {
-ms-flex-align: end;
align-items: flex-end;
}`;;
export const align_items_lg_center = css`@media (min-width: 992px) {
-ms-flex-align: center;
align-items: center;
}`;;
export const align_items_lg_baseline = css`@media (min-width: 992px) {
-ms-flex-align: baseline;
align-items: baseline;
}`;;
export const align_items_lg_stretch = css`@media (min-width: 992px) {
-ms-flex-align: stretch;
align-items: stretch;
}`;;
export const align_content_lg_start = css`@media (min-width: 992px) {
-ms-flex-line-pack: start;
align-content: flex-start;
}`;;
export const align_content_lg_end = css`@media (min-width: 992px) {
-ms-flex-line-pack: end;
align-content: flex-end;
}`;;
export const align_content_lg_center = css`@media (min-width: 992px) {
-ms-flex-line-pack: center;
align-content: center;
}`;;
export const align_content_lg_between = css`@media (min-width: 992px) {
-ms-flex-line-pack: justify;
align-content: space-between;
}`;;
export const align_content_lg_around = css`@media (min-width: 992px) {
-ms-flex-line-pack: distribute;
align-content: space-around;
}`;;
export const align_content_lg_stretch = css`@media (min-width: 992px) {
-ms-flex-line-pack: stretch;
align-content: stretch;
}`;;
export const align_self_lg_auto = css`@media (min-width: 992px) {
-ms-flex-item-align: auto;
align-self: auto;
}`;;
export const align_self_lg_start = css`@media (min-width: 992px) {
-ms-flex-item-align: start;
align-self: flex-start;
}`;;
export const align_self_lg_end = css`@media (min-width: 992px) {
-ms-flex-item-align: end;
align-self: flex-end;
}`;;
export const align_self_lg_center = css`@media (min-width: 992px) {
-ms-flex-item-align: center;
align-self: center;
}`;;
export const align_self_lg_baseline = css`@media (min-width: 992px) {
-ms-flex-item-align: baseline;
align-self: baseline;
}`;;
export const align_self_lg_stretch = css`@media (min-width: 992px) {
-ms-flex-item-align: stretch;
align-self: stretch;
}`;;
export const flex_xl_row = css`@media (min-width: 1200px) {
-ms-flex-direction: row;
flex-direction: row;
}`;;
export const flex_xl_column = css`@media (min-width: 1200px) {
-ms-flex-direction: column;
flex-direction: column;
}`;;
export const flex_xl_row_reverse = css`@media (min-width: 1200px) {
-ms-flex-direction: row-reverse;
flex-direction: row-reverse;
}`;;
export const flex_xl_column_reverse = css`@media (min-width: 1200px) {
-ms-flex-direction: column-reverse;
flex-direction: column-reverse;
}`;;
export const flex_xl_wrap = css`@media (min-width: 1200px) {
-ms-flex-wrap: wrap;
flex-wrap: wrap;
}`;;
export const flex_xl_nowrap = css`@media (min-width: 1200px) {
-ms-flex-wrap: nowrap;
flex-wrap: nowrap;
}`;;
export const flex_xl_wrap_reverse = css`@media (min-width: 1200px) {
-ms-flex-wrap: wrap-reverse;
flex-wrap: wrap-reverse;
}`;;
export const justify_content_xl_start = css`@media (min-width: 1200px) {
-ms-flex-pack: start;
justify-content: flex-start;
}`;;
export const justify_content_xl_end = css`@media (min-width: 1200px) {
-ms-flex-pack: end;
justify-content: flex-end;
}`;;
export const justify_content_xl_center = css`@media (min-width: 1200px) {
-ms-flex-pack: center;
justify-content: center;
}`;;
export const justify_content_xl_between = css`@media (min-width: 1200px) {
-ms-flex-pack: justify;
justify-content: space-between;
}`;;
export const justify_content_xl_around = css`@media (min-width: 1200px) {
-ms-flex-pack: distribute;
justify-content: space-around;
}`;;
export const align_items_xl_start = css`@media (min-width: 1200px) {
-ms-flex-align: start;
align-items: flex-start;
}`;;
export const align_items_xl_end = css`@media (min-width: 1200px) {
-ms-flex-align: end;
align-items: flex-end;
}`;;
export const align_items_xl_center = css`@media (min-width: 1200px) {
-ms-flex-align: center;
align-items: center;
}`;;
export const align_items_xl_baseline = css`@media (min-width: 1200px) {
-ms-flex-align: baseline;
align-items: baseline;
}`;;
export const align_items_xl_stretch = css`@media (min-width: 1200px) {
-ms-flex-align: stretch;
align-items: stretch;
}`;;
export const align_content_xl_start = css`@media (min-width: 1200px) {
-ms-flex-line-pack: start;
align-content: flex-start;
}`;;
export const align_content_xl_end = css`@media (min-width: 1200px) {
-ms-flex-line-pack: end;
align-content: flex-end;
}`;;
export const align_content_xl_center = css`@media (min-width: 1200px) {
-ms-flex-line-pack: center;
align-content: center;
}`;;
export const align_content_xl_between = css`@media (min-width: 1200px) {
-ms-flex-line-pack: justify;
align-content: space-between;
}`;;
export const align_content_xl_around = css`@media (min-width: 1200px) {
-ms-flex-line-pack: distribute;
align-content: space-around;
}`;;
export const align_content_xl_stretch = css`@media (min-width: 1200px) {
-ms-flex-line-pack: stretch;
align-content: stretch;
}`;;
export const align_self_xl_auto = css`@media (min-width: 1200px) {
-ms-flex-item-align: auto;
align-self: auto;
}`;;
export const align_self_xl_start = css`@media (min-width: 1200px) {
-ms-flex-item-align: start;
align-self: flex-start;
}`;;
export const align_self_xl_end = css`@media (min-width: 1200px) {
-ms-flex-item-align: end;
align-self: flex-end;
}`;;
export const align_self_xl_center = css`@media (min-width: 1200px) {
-ms-flex-item-align: center;
align-self: center;
}`;;
export const align_self_xl_baseline = css`@media (min-width: 1200px) {
-ms-flex-item-align: baseline;
align-self: baseline;
}`;;
export const align_self_xl_stretch = css`@media (min-width: 1200px) {
-ms-flex-item-align: stretch;
align-self: stretch;
}`;;
export const float_left = css`float: left;`;;
export const float_right = css`float: right;`;;
export const float_none = css`float: none;`;;
export const float_sm_left = css`@media (min-width: 576px) {
float: left;
}`;;
export const float_sm_right = css`@media (min-width: 576px) {
float: right;
}`;;
export const float_sm_none = css`@media (min-width: 576px) {
float: none;
}`;;
export const float_md_left = css`@media (min-width: 768px) {
float: left;
}`;;
export const float_md_right = css`@media (min-width: 768px) {
float: right;
}`;;
export const float_md_none = css`@media (min-width: 768px) {
float: none;
}`;;
export const float_lg_left = css`@media (min-width: 992px) {
float: left;
}`;;
export const float_lg_right = css`@media (min-width: 992px) {
float: right;
}`;;
export const float_lg_none = css`@media (min-width: 992px) {
float: none;
}`;;
export const float_xl_left = css`@media (min-width: 1200px) {
float: left;
}`;;
export const float_xl_right = css`@media (min-width: 1200px) {
float: right;
}`;;
export const float_xl_none = css`@media (min-width: 1200px) {
float: none;
}`;;
export const fixed_top = css`position: fixed;
top: 0;
right: 0;
left: 0;
z-index: 1030;`;;
export const fixed_bottom = css`position: fixed;
right: 0;
bottom: 0;
left: 0;
z-index: 1030;`;;
export const sticky_top = css`position: -webkit-sticky;
position: sticky;
top: 0;
z-index: 1020;`;;
export const sr_only = css`position: absolute;
width: 1px;
height: 1px;
padding: 0;
overflow: hidden;
clip: rect(0, 0, 0, 0);
white-space: nowrap;
-webkit-clip-path: inset(50%);
clip-path: inset(50%);
border: 0;`;;
export const sr_only_focusable = css`&:active {position: static;
width: auto;
height: auto;
overflow: visible;
clip: auto;
white-space: normal;
-webkit-clip-path: none;
clip-path: none;}
&:focus {position: static;
width: auto;
height: auto;
overflow: visible;
clip: auto;
white-space: normal;
-webkit-clip-path: none;
clip-path: none;}`;;
export const w_25 = css`width: 25%;`;;
export const w_50 = css`width: 50%;`;;
export const w_75 = css`width: 75%;`;;
export const w_100 = css`width: 100%;`;;
export const h_25 = css`height: 25%;`;;
export const h_50 = css`height: 50%;`;;
export const h_75 = css`height: 75%;`;;
export const h_100 = css`height: 100%;`;;
export const mw_100 = css`max-width: 100%;`;;
export const mh_100 = css`max-height: 100%;`;;
export const m_0 = css`margin: 0;`;;
export const mt_0 = css`margin-top: 0;`;;
export const mr_0 = css`margin-right: 0;`;;
export const mb_0 = css`margin-bottom: 0;`;;
export const ml_0 = css`margin-left: 0;`;;
export const mx_0 = css`margin-right: 0;
margin-left: 0;`;;
export const my_0 = css`margin-top: 0;
margin-bottom: 0;`;;
export const m_1 = css`margin: 0.25rem;`;;
export const mt_1 = css`margin-top: 0.25rem;`;;
export const mr_1 = css`margin-right: 0.25rem;`;;
export const mb_1 = css`margin-bottom: 0.25rem;`;;
export const ml_1 = css`margin-left: 0.25rem;`;;
export const mx_1 = css`margin-right: 0.25rem;
margin-left: 0.25rem;`;;
export const my_1 = css`margin-top: 0.25rem;
margin-bottom: 0.25rem;`;;
export const m_2 = css`margin: 0.5rem;`;;
export const mt_2 = css`margin-top: 0.5rem;`;;
export const mr_2 = css`margin-right: 0.5rem;`;;
export const mb_2 = css`margin-bottom: 0.5rem;`;;
export const ml_2 = css`margin-left: 0.5rem;`;;
export const mx_2 = css`margin-right: 0.5rem;
margin-left: 0.5rem;`;;
export const my_2 = css`margin-top: 0.5rem;
margin-bottom: 0.5rem;`;;
export const m_3 = css`margin: 1rem;`;;
export const mt_3 = css`margin-top: 1rem;`;;
export const mr_3 = css`margin-right: 1rem;`;;
export const mb_3 = css`margin-bottom: 1rem;`;;
export const ml_3 = css`margin-left: 1rem;`;;
export const mx_3 = css`margin-right: 1rem;
margin-left: 1rem;`;;
export const my_3 = css`margin-top: 1rem;
margin-bottom: 1rem;`;;
export const m_4 = css`margin: 1.5rem;`;;
export const mt_4 = css`margin-top: 1.5rem;`;;
export const mr_4 = css`margin-right: 1.5rem;`;;
export const mb_4 = css`margin-bottom: 1.5rem;`;;
export const ml_4 = css`margin-left: 1.5rem;`;;
export const mx_4 = css`margin-right: 1.5rem;
margin-left: 1.5rem;`;;
export const my_4 = css`margin-top: 1.5rem;
margin-bottom: 1.5rem;`;;
export const m_5 = css`margin: 3rem;`;;
export const mt_5 = css`margin-top: 3rem;`;;
export const mr_5 = css`margin-right: 3rem;`;;
export const mb_5 = css`margin-bottom: 3rem;`;;
export const ml_5 = css`margin-left: 3rem;`;;
export const mx_5 = css`margin-right: 3rem;
margin-left: 3rem;`;;
export const my_5 = css`margin-top: 3rem;
margin-bottom: 3rem;`;;
export const p_0 = css`padding: 0;`;;
export const pt_0 = css`padding-top: 0;`;;
export const pr_0 = css`padding-right: 0;`;;
export const pb_0 = css`padding-bottom: 0;`;;
export const pl_0 = css`padding-left: 0;`;;
export const px_0 = css`padding-right: 0;
padding-left: 0;`;;
export const py_0 = css`padding-top: 0;
padding-bottom: 0;`;;
export const p_1 = css`padding: 0.25rem;`;;
export const pt_1 = css`padding-top: 0.25rem;`;;
export const pr_1 = css`padding-right: 0.25rem;`;;
export const pb_1 = css`padding-bottom: 0.25rem;`;;
export const pl_1 = css`padding-left: 0.25rem;`;;
export const px_1 = css`padding-right: 0.25rem;
padding-left: 0.25rem;`;;
export const py_1 = css`padding-top: 0.25rem;
padding-bottom: 0.25rem;`;;
export const p_2 = css`padding: 0.5rem;`;;
export const pt_2 = css`padding-top: 0.5rem;`;;
export const pr_2 = css`padding-right: 0.5rem;`;;
export const pb_2 = css`padding-bottom: 0.5rem;`;;
export const pl_2 = css`padding-left: 0.5rem;`;;
export const px_2 = css`padding-right: 0.5rem;
padding-left: 0.5rem;`;;
export const py_2 = css`padding-top: 0.5rem;
padding-bottom: 0.5rem;`;;
export const p_3 = css`padding: 1rem;`;;
export const pt_3 = css`padding-top: 1rem;`;;
export const pr_3 = css`padding-right: 1rem;`;;
export const pb_3 = css`padding-bottom: 1rem;`;;
export const pl_3 = css`padding-left: 1rem;`;;
export const px_3 = css`padding-right: 1rem;
padding-left: 1rem;`;;
export const py_3 = css`padding-top: 1rem;
padding-bottom: 1rem;`;;
export const p_4 = css`padding: 1.5rem;`;;
export const pt_4 = css`padding-top: 1.5rem;`;;
export const pr_4 = css`padding-right: 1.5rem;`;;
export const pb_4 = css`padding-bottom: 1.5rem;`;;
export const pl_4 = css`padding-left: 1.5rem;`;;
export const px_4 = css`padding-right: 1.5rem;
padding-left: 1.5rem;`;;
export const py_4 = css`padding-top: 1.5rem;
padding-bottom: 1.5rem;`;;
export const p_5 = css`padding: 3rem;`;;
export const pt_5 = css`padding-top: 3rem;`;;
export const pr_5 = css`padding-right: 3rem;`;;
export const pb_5 = css`padding-bottom: 3rem;`;;
export const pl_5 = css`padding-left: 3rem;`;;
export const px_5 = css`padding-right: 3rem;
padding-left: 3rem;`;;
export const py_5 = css`padding-top: 3rem;
padding-bottom: 3rem;`;;
export const m_auto = css`margin: auto;`;;
export const mt_auto = css`margin-top: auto;`;;
export const mr_auto = css`margin-right: auto;`;;
export const mb_auto = css`margin-bottom: auto;`;;
export const ml_auto = css`margin-left: auto;`;;
export const mx_auto = css`margin-right: auto;
margin-left: auto;`;;
export const my_auto = css`margin-top: auto;
margin-bottom: auto;`;;
export const m_sm_0 = css`@media (min-width: 576px) {
margin: 0;
}`;;
export const mt_sm_0 = css`@media (min-width: 576px) {
margin-top: 0;
}`;;
export const mr_sm_0 = css`@media (min-width: 576px) {
margin-right: 0;
}`;;
export const mb_sm_0 = css`@media (min-width: 576px) {
margin-bottom: 0;
}`;;
export const ml_sm_0 = css`@media (min-width: 576px) {
margin-left: 0;
}`;;
export const mx_sm_0 = css`@media (min-width: 576px) {
margin-right: 0;
margin-left: 0;
}`;;
export const my_sm_0 = css`@media (min-width: 576px) {
margin-top: 0;
margin-bottom: 0;
}`;;
export const m_sm_1 = css`@media (min-width: 576px) {
margin: 0.25rem;
}`;;
export const mt_sm_1 = css`@media (min-width: 576px) {
margin-top: 0.25rem;
}`;;
export const mr_sm_1 = css`@media (min-width: 576px) {
margin-right: 0.25rem;
}`;;
export const mb_sm_1 = css`@media (min-width: 576px) {
margin-bottom: 0.25rem;
}`;;
export const ml_sm_1 = css`@media (min-width: 576px) {
margin-left: 0.25rem;
}`;;
export const mx_sm_1 = css`@media (min-width: 576px) {
margin-right: 0.25rem;
margin-left: 0.25rem;
}`;;
export const my_sm_1 = css`@media (min-width: 576px) {
margin-top: 0.25rem;
margin-bottom: 0.25rem;
}`;;
export const m_sm_2 = css`@media (min-width: 576px) {
margin: 0.5rem;
}`;;
export const mt_sm_2 = css`@media (min-width: 576px) {
margin-top: 0.5rem;
}`;;
export const mr_sm_2 = css`@media (min-width: 576px) {
margin-right: 0.5rem;
}`;;
export const mb_sm_2 = css`@media (min-width: 576px) {
margin-bottom: 0.5rem;
}`;;
export const ml_sm_2 = css`@media (min-width: 576px) {
margin-left: 0.5rem;
}`;;
export const mx_sm_2 = css`@media (min-width: 576px) {
margin-right: 0.5rem;
margin-left: 0.5rem;
}`;;
export const my_sm_2 = css`@media (min-width: 576px) {
margin-top: 0.5rem;
margin-bottom: 0.5rem;
}`;;
export const m_sm_3 = css`@media (min-width: 576px) {
margin: 1rem;
}`;;
export const mt_sm_3 = css`@media (min-width: 576px) {
margin-top: 1rem;
}`;;
export const mr_sm_3 = css`@media (min-width: 576px) {
margin-right: 1rem;
}`;;
export const mb_sm_3 = css`@media (min-width: 576px) {
margin-bottom: 1rem;
}`;;
export const ml_sm_3 = css`@media (min-width: 576px) {
margin-left: 1rem;
}`;;
export const mx_sm_3 = css`@media (min-width: 576px) {
margin-right: 1rem;
margin-left: 1rem;
}`;;
export const my_sm_3 = css`@media (min-width: 576px) {
margin-top: 1rem;
margin-bottom: 1rem;
}`;;
export const m_sm_4 = css`@media (min-width: 576px) {
margin: 1.5rem;
}`;;
export const mt_sm_4 = css`@media (min-width: 576px) {
margin-top: 1.5rem;
}`;;
export const mr_sm_4 = css`@media (min-width: 576px) {
margin-right: 1.5rem;
}`;;
export const mb_sm_4 = css`@media (min-width: 576px) {
margin-bottom: 1.5rem;
}`;;
export const ml_sm_4 = css`@media (min-width: 576px) {
margin-left: 1.5rem;
}`;;
export const mx_sm_4 = css`@media (min-width: 576px) {
margin-right: 1.5rem;
margin-left: 1.5rem;
}`;;
export const my_sm_4 = css`@media (min-width: 576px) {
margin-top: 1.5rem;
margin-bottom: 1.5rem;
}`;;
export const m_sm_5 = css`@media (min-width: 576px) {
margin: 3rem;
}`;;
export const mt_sm_5 = css`@media (min-width: 576px) {
margin-top: 3rem;
}`;;
export const mr_sm_5 = css`@media (min-width: 576px) {
margin-right: 3rem;
}`;;
export const mb_sm_5 = css`@media (min-width: 576px) {
margin-bottom: 3rem;
}`;;
export const ml_sm_5 = css`@media (min-width: 576px) {
margin-left: 3rem;
}`;;
export const mx_sm_5 = css`@media (min-width: 576px) {
margin-right: 3rem;
margin-left: 3rem;
}`;;
export const my_sm_5 = css`@media (min-width: 576px) {
margin-top: 3rem;
margin-bottom: 3rem;
}`;;
export const p_sm_0 = css`@media (min-width: 576px) {
padding: 0;
}`;;
export const pt_sm_0 = css`@media (min-width: 576px) {
padding-top: 0;
}`;;
export const pr_sm_0 = css`@media (min-width: 576px) {
padding-right: 0;
}`;;
export const pb_sm_0 = css`@media (min-width: 576px) {
padding-bottom: 0;
}`;;
export const pl_sm_0 = css`@media (min-width: 576px) {
padding-left: 0;
}`;;
export const px_sm_0 = css`@media (min-width: 576px) {
padding-right: 0;
padding-left: 0;
}`;;
export const py_sm_0 = css`@media (min-width: 576px) {
padding-top: 0;
padding-bottom: 0;
}`;;
export const p_sm_1 = css`@media (min-width: 576px) {
padding: 0.25rem;
}`;;
export const pt_sm_1 = css`@media (min-width: 576px) {
padding-top: 0.25rem;
}`;;
export const pr_sm_1 = css`@media (min-width: 576px) {
padding-right: 0.25rem;
}`;;
export const pb_sm_1 = css`@media (min-width: 576px) {
padding-bottom: 0.25rem;
}`;;
export const pl_sm_1 = css`@media (min-width: 576px) {
padding-left: 0.25rem;
}`;;
export const px_sm_1 = css`@media (min-width: 576px) {
padding-right: 0.25rem;
padding-left: 0.25rem;
}`;;
export const py_sm_1 = css`@media (min-width: 576px) {
padding-top: 0.25rem;
padding-bottom: 0.25rem;
}`;;
export const p_sm_2 = css`@media (min-width: 576px) {
padding: 0.5rem;
}`;;
export const pt_sm_2 = css`@media (min-width: 576px) {
padding-top: 0.5rem;
}`;;
export const pr_sm_2 = css`@media (min-width: 576px) {
padding-right: 0.5rem;
}`;;
export const pb_sm_2 = css`@media (min-width: 576px) {
padding-bottom: 0.5rem;
}`;;
export const pl_sm_2 = css`@media (min-width: 576px) {
padding-left: 0.5rem;
}`;;
export const px_sm_2 = css`@media (min-width: 576px) {
padding-right: 0.5rem;
padding-left: 0.5rem;
}`;;
export const py_sm_2 = css`@media (min-width: 576px) {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
}`;;
export const p_sm_3 = css`@media (min-width: 576px) {
padding: 1rem;
}`;;
export const pt_sm_3 = css`@media (min-width: 576px) {
padding-top: 1rem;
}`;;
export const pr_sm_3 = css`@media (min-width: 576px) {
padding-right: 1rem;
}`;;
export const pb_sm_3 = css`@media (min-width: 576px) {
padding-bottom: 1rem;
}`;;
export const pl_sm_3 = css`@media (min-width: 576px) {
padding-left: 1rem;
}`;;
export const px_sm_3 = css`@media (min-width: 576px) {
padding-right: 1rem;
padding-left: 1rem;
}`;;
export const py_sm_3 = css`@media (min-width: 576px) {
padding-top: 1rem;
padding-bottom: 1rem;
}`;;
export const p_sm_4 = css`@media (min-width: 576px) {
padding: 1.5rem;
}`;;
export const pt_sm_4 = css`@media (min-width: 576px) {
padding-top: 1.5rem;
}`;;
export const pr_sm_4 = css`@media (min-width: 576px) {
padding-right: 1.5rem;
}`;;
export const pb_sm_4 = css`@media (min-width: 576px) {
padding-bottom: 1.5rem;
}`;;
export const pl_sm_4 = css`@media (min-width: 576px) {
padding-left: 1.5rem;
}`;;
export const px_sm_4 = css`@media (min-width: 576px) {
padding-right: 1.5rem;
padding-left: 1.5rem;
}`;;
export const py_sm_4 = css`@media (min-width: 576px) {
padding-top: 1.5rem;
padding-bottom: 1.5rem;
}`;;
export const p_sm_5 = css`@media (min-width: 576px) {
padding: 3rem;
}`;;
export const pt_sm_5 = css`@media (min-width: 576px) {
padding-top: 3rem;
}`;;
export const pr_sm_5 = css`@media (min-width: 576px) {
padding-right: 3rem;
}`;;
export const pb_sm_5 = css`@media (min-width: 576px) {
padding-bottom: 3rem;
}`;;
export const pl_sm_5 = css`@media (min-width: 576px) {
padding-left: 3rem;
}`;;
export const px_sm_5 = css`@media (min-width: 576px) {
padding-right: 3rem;
padding-left: 3rem;
}`;;
export const py_sm_5 = css`@media (min-width: 576px) {
padding-top: 3rem;
padding-bottom: 3rem;
}`;;
export const m_sm_auto = css`@media (min-width: 576px) {
margin: auto;
}`;;
export const mt_sm_auto = css`@media (min-width: 576px) {
margin-top: auto;
}`;;
export const mr_sm_auto = css`@media (min-width: 576px) {
margin-right: auto;
}`;;
export const mb_sm_auto = css`@media (min-width: 576px) {
margin-bottom: auto;
}`;;
export const ml_sm_auto = css`@media (min-width: 576px) {
margin-left: auto;
}`;;
export const mx_sm_auto = css`@media (min-width: 576px) {
margin-right: auto;
margin-left: auto;
}`;;
export const my_sm_auto = css`@media (min-width: 576px) {
margin-top: auto;
margin-bottom: auto;
}`;;
export const m_md_0 = css`@media (min-width: 768px) {
margin: 0;
}`;;
export const mt_md_0 = css`@media (min-width: 768px) {
margin-top: 0;
}`;;
export const mr_md_0 = css`@media (min-width: 768px) {
margin-right: 0;
}`;;
export const mb_md_0 = css`@media (min-width: 768px) {
margin-bottom: 0;
}`;;
export const ml_md_0 = css`@media (min-width: 768px) {
margin-left: 0;
}`;;
export const mx_md_0 = css`@media (min-width: 768px) {
margin-right: 0;
margin-left: 0;
}`;;
export const my_md_0 = css`@media (min-width: 768px) {
margin-top: 0;
margin-bottom: 0;
}`;;
export const m_md_1 = css`@media (min-width: 768px) {
margin: 0.25rem;
}`;;
export const mt_md_1 = css`@media (min-width: 768px) {
margin-top: 0.25rem;
}`;;
export const mr_md_1 = css`@media (min-width: 768px) {
margin-right: 0.25rem;
}`;;
export const mb_md_1 = css`@media (min-width: 768px) {
margin-bottom: 0.25rem;
}`;;
export const ml_md_1 = css`@media (min-width: 768px) {
margin-left: 0.25rem;
}`;;
export const mx_md_1 = css`@media (min-width: 768px) {
margin-right: 0.25rem;
margin-left: 0.25rem;
}`;;
export const my_md_1 = css`@media (min-width: 768px) {
margin-top: 0.25rem;
margin-bottom: 0.25rem;
}`;;
export const m_md_2 = css`@media (min-width: 768px) {
margin: 0.5rem;
}`;;
export const mt_md_2 = css`@media (min-width: 768px) {
margin-top: 0.5rem;
}`;;
export const mr_md_2 = css`@media (min-width: 768px) {
margin-right: 0.5rem;
}`;;
export const mb_md_2 = css`@media (min-width: 768px) {
margin-bottom: 0.5rem;
}`;;
export const ml_md_2 = css`@media (min-width: 768px) {
margin-left: 0.5rem;
}`;;
export const mx_md_2 = css`@media (min-width: 768px) {
margin-right: 0.5rem;
margin-left: 0.5rem;
}`;;
export const my_md_2 = css`@media (min-width: 768px) {
margin-top: 0.5rem;
margin-bottom: 0.5rem;
}`;;
export const m_md_3 = css`@media (min-width: 768px) {
margin: 1rem;
}`;;
export const mt_md_3 = css`@media (min-width: 768px) {
margin-top: 1rem;
}`;;
export const mr_md_3 = css`@media (min-width: 768px) {
margin-right: 1rem;
}`;;
export const mb_md_3 = css`@media (min-width: 768px) {
margin-bottom: 1rem;
}`;;
export const ml_md_3 = css`@media (min-width: 768px) {
margin-left: 1rem;
}`;;
export const mx_md_3 = css`@media (min-width: 768px) {
margin-right: 1rem;
margin-left: 1rem;
}`;;
export const my_md_3 = css`@media (min-width: 768px) {
margin-top: 1rem;
margin-bottom: 1rem;
}`;;
export const m_md_4 = css`@media (min-width: 768px) {
margin: 1.5rem;
}`;;
export const mt_md_4 = css`@media (min-width: 768px) {
margin-top: 1.5rem;
}`;;
export const mr_md_4 = css`@media (min-width: 768px) {
margin-right: 1.5rem;
}`;;
export const mb_md_4 = css`@media (min-width: 768px) {
margin-bottom: 1.5rem;
}`;;
export const ml_md_4 = css`@media (min-width: 768px) {
margin-left: 1.5rem;
}`;;
export const mx_md_4 = css`@media (min-width: 768px) {
margin-right: 1.5rem;
margin-left: 1.5rem;
}`;;
export const my_md_4 = css`@media (min-width: 768px) {
margin-top: 1.5rem;
margin-bottom: 1.5rem;
}`;;
export const m_md_5 = css`@media (min-width: 768px) {
margin: 3rem;
}`;;
export const mt_md_5 = css`@media (min-width: 768px) {
margin-top: 3rem;
}`;;
export const mr_md_5 = css`@media (min-width: 768px) {
margin-right: 3rem;
}`;;
export const mb_md_5 = css`@media (min-width: 768px) {
margin-bottom: 3rem;
}`;;
export const ml_md_5 = css`@media (min-width: 768px) {
margin-left: 3rem;
}`;;
export const mx_md_5 = css`@media (min-width: 768px) {
margin-right: 3rem;
margin-left: 3rem;
}`;;
export const my_md_5 = css`@media (min-width: 768px) {
margin-top: 3rem;
margin-bottom: 3rem;
}`;;
export const p_md_0 = css`@media (min-width: 768px) {
padding: 0;
}`;;
export const pt_md_0 = css`@media (min-width: 768px) {
padding-top: 0;
}`;;
export const pr_md_0 = css`@media (min-width: 768px) {
padding-right: 0;
}`;;
export const pb_md_0 = css`@media (min-width: 768px) {
padding-bottom: 0;
}`;;
export const pl_md_0 = css`@media (min-width: 768px) {
padding-left: 0;
}`;;
export const px_md_0 = css`@media (min-width: 768px) {
padding-right: 0;
padding-left: 0;
}`;;
export const py_md_0 = css`@media (min-width: 768px) {
padding-top: 0;
padding-bottom: 0;
}`;;
export const p_md_1 = css`@media (min-width: 768px) {
padding: 0.25rem;
}`;;
export const pt_md_1 = css`@media (min-width: 768px) {
padding-top: 0.25rem;
}`;;
export const pr_md_1 = css`@media (min-width: 768px) {
padding-right: 0.25rem;
}`;;
export const pb_md_1 = css`@media (min-width: 768px) {
padding-bottom: 0.25rem;
}`;;
export const pl_md_1 = css`@media (min-width: 768px) {
padding-left: 0.25rem;
}`;;
export const px_md_1 = css`@media (min-width: 768px) {
padding-right: 0.25rem;
padding-left: 0.25rem;
}`;;
export const py_md_1 = css`@media (min-width: 768px) {
padding-top: 0.25rem;
padding-bottom: 0.25rem;
}`;;
export const p_md_2 = css`@media (min-width: 768px) {
padding: 0.5rem;
}`;;
export const pt_md_2 = css`@media (min-width: 768px) {
padding-top: 0.5rem;
}`;;
export const pr_md_2 = css`@media (min-width: 768px) {
padding-right: 0.5rem;
}`;;
export const pb_md_2 = css`@media (min-width: 768px) {
padding-bottom: 0.5rem;
}`;;
export const pl_md_2 = css`@media (min-width: 768px) {
padding-left: 0.5rem;
}`;;
export const px_md_2 = css`@media (min-width: 768px) {
padding-right: 0.5rem;
padding-left: 0.5rem;
}`;;
export const py_md_2 = css`@media (min-width: 768px) {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
}`;;
export const p_md_3 = css`@media (min-width: 768px) {
padding: 1rem;
}`;;
export const pt_md_3 = css`@media (min-width: 768px) {
padding-top: 1rem;
}`;;
export const pr_md_3 = css`@media (min-width: 768px) {
padding-right: 1rem;
}`;;
export const pb_md_3 = css`@media (min-width: 768px) {
padding-bottom: 1rem;
}`;;
export const pl_md_3 = css`@media (min-width: 768px) {
padding-left: 1rem;
}`;;
export const px_md_3 = css`@media (min-width: 768px) {
padding-right: 1rem;
padding-left: 1rem;
}`;;
export const py_md_3 = css`@media (min-width: 768px) {
padding-top: 1rem;
padding-bottom: 1rem;
}`;;
export const p_md_4 = css`@media (min-width: 768px) {
padding: 1.5rem;
}`;;
export const pt_md_4 = css`@media (min-width: 768px) {
padding-top: 1.5rem;
}`;;
export const pr_md_4 = css`@media (min-width: 768px) {
padding-right: 1.5rem;
}`;;
export const pb_md_4 = css`@media (min-width: 768px) {
padding-bottom: 1.5rem;
}`;;
export const pl_md_4 = css`@media (min-width: 768px) {
padding-left: 1.5rem;
}`;;
export const px_md_4 = css`@media (min-width: 768px) {
padding-right: 1.5rem;
padding-left: 1.5rem;
}`;;
export const py_md_4 = css`@media (min-width: 768px) {
padding-top: 1.5rem;
padding-bottom: 1.5rem;
}`;;
export const p_md_5 = css`@media (min-width: 768px) {
padding: 3rem;
}`;;
export const pt_md_5 = css`@media (min-width: 768px) {
padding-top: 3rem;
}`;;
export const pr_md_5 = css`@media (min-width: 768px) {
padding-right: 3rem;
}`;;
export const pb_md_5 = css`@media (min-width: 768px) {
padding-bottom: 3rem;
}`;;
export const pl_md_5 = css`@media (min-width: 768px) {
padding-left: 3rem;
}`;;
export const px_md_5 = css`@media (min-width: 768px) {
padding-right: 3rem;
padding-left: 3rem;
}`;;
export const py_md_5 = css`@media (min-width: 768px) {
padding-top: 3rem;
padding-bottom: 3rem;
}`;;
export const m_md_auto = css`@media (min-width: 768px) {
margin: auto;
}`;;
export const mt_md_auto = css`@media (min-width: 768px) {
margin-top: auto;
}`;;
export const mr_md_auto = css`@media (min-width: 768px) {
margin-right: auto;
}`;;
export const mb_md_auto = css`@media (min-width: 768px) {
margin-bottom: auto;
}`;;
export const ml_md_auto = css`@media (min-width: 768px) {
margin-left: auto;
}`;;
export const mx_md_auto = css`@media (min-width: 768px) {
margin-right: auto;
margin-left: auto;
}`;;
export const my_md_auto = css`@media (min-width: 768px) {
margin-top: auto;
margin-bottom: auto;
}`;;
export const m_lg_0 = css`@media (min-width: 992px) {
margin: 0;
}`;;
export const mt_lg_0 = css`@media (min-width: 992px) {
margin-top: 0;
}`;;
export const mr_lg_0 = css`@media (min-width: 992px) {
margin-right: 0;
}`;;
export const mb_lg_0 = css`@media (min-width: 992px) {
margin-bottom: 0;
}`;;
export const ml_lg_0 = css`@media (min-width: 992px) {
margin-left: 0;
}`;;
export const mx_lg_0 = css`@media (min-width: 992px) {
margin-right: 0;
margin-left: 0;
}`;;
export const my_lg_0 = css`@media (min-width: 992px) {
margin-top: 0;
margin-bottom: 0;
}`;;
export const m_lg_1 = css`@media (min-width: 992px) {
margin: 0.25rem;
}`;;
export const mt_lg_1 = css`@media (min-width: 992px) {
margin-top: 0.25rem;
}`;;
export const mr_lg_1 = css`@media (min-width: 992px) {
margin-right: 0.25rem;
}`;;
export const mb_lg_1 = css`@media (min-width: 992px) {
margin-bottom: 0.25rem;
}`;;
export const ml_lg_1 = css`@media (min-width: 992px) {
margin-left: 0.25rem;
}`;;
export const mx_lg_1 = css`@media (min-width: 992px) {
margin-right: 0.25rem;
margin-left: 0.25rem;
}`;;
export const my_lg_1 = css`@media (min-width: 992px) {
margin-top: 0.25rem;
margin-bottom: 0.25rem;
}`;;
export const m_lg_2 = css`@media (min-width: 992px) {
margin: 0.5rem;
}`;;
export const mt_lg_2 = css`@media (min-width: 992px) {
margin-top: 0.5rem;
}`;;
export const mr_lg_2 = css`@media (min-width: 992px) {
margin-right: 0.5rem;
}`;;
export const mb_lg_2 = css`@media (min-width: 992px) {
margin-bottom: 0.5rem;
}`;;
export const ml_lg_2 = css`@media (min-width: 992px) {
margin-left: 0.5rem;
}`;;
export const mx_lg_2 = css`@media (min-width: 992px) {
margin-right: 0.5rem;
margin-left: 0.5rem;
}`;;
export const my_lg_2 = css`@media (min-width: 992px) {
margin-top: 0.5rem;
margin-bottom: 0.5rem;
}`;;
export const m_lg_3 = css`@media (min-width: 992px) {
margin: 1rem;
}`;;
export const mt_lg_3 = css`@media (min-width: 992px) {
margin-top: 1rem;
}`;;
export const mr_lg_3 = css`@media (min-width: 992px) {
margin-right: 1rem;
}`;;
export const mb_lg_3 = css`@media (min-width: 992px) {
margin-bottom: 1rem;
}`;;
export const ml_lg_3 = css`@media (min-width: 992px) {
margin-left: 1rem;
}`;;
export const mx_lg_3 = css`@media (min-width: 992px) {
margin-right: 1rem;
margin-left: 1rem;
}`;;
export const my_lg_3 = css`@media (min-width: 992px) {
margin-top: 1rem;
margin-bottom: 1rem;
}`;;
export const m_lg_4 = css`@media (min-width: 992px) {
margin: 1.5rem;
}`;;
export const mt_lg_4 = css`@media (min-width: 992px) {
margin-top: 1.5rem;
}`;;
export const mr_lg_4 = css`@media (min-width: 992px) {
margin-right: 1.5rem;
}`;;
export const mb_lg_4 = css`@media (min-width: 992px) {
margin-bottom: 1.5rem;
}`;;
export const ml_lg_4 = css`@media (min-width: 992px) {
margin-left: 1.5rem;
}`;;
export const mx_lg_4 = css`@media (min-width: 992px) {
margin-right: 1.5rem;
margin-left: 1.5rem;
}`;;
export const my_lg_4 = css`@media (min-width: 992px) {
margin-top: 1.5rem;
margin-bottom: 1.5rem;
}`;;
export const m_lg_5 = css`@media (min-width: 992px) {
margin: 3rem;
}`;;
export const mt_lg_5 = css`@media (min-width: 992px) {
margin-top: 3rem;
}`;;
export const mr_lg_5 = css`@media (min-width: 992px) {
margin-right: 3rem;
}`;;
export const mb_lg_5 = css`@media (min-width: 992px) {
margin-bottom: 3rem;
}`;;
export const ml_lg_5 = css`@media (min-width: 992px) {
margin-left: 3rem;
}`;;
export const mx_lg_5 = css`@media (min-width: 992px) {
margin-right: 3rem;
margin-left: 3rem;
}`;;
export const my_lg_5 = css`@media (min-width: 992px) {
margin-top: 3rem;
margin-bottom: 3rem;
}`;;
export const p_lg_0 = css`@media (min-width: 992px) {
padding: 0;
}`;;
export const pt_lg_0 = css`@media (min-width: 992px) {
padding-top: 0;
}`;;
export const pr_lg_0 = css`@media (min-width: 992px) {
padding-right: 0;
}`;;
export const pb_lg_0 = css`@media (min-width: 992px) {
padding-bottom: 0;
}`;;
export const pl_lg_0 = css`@media (min-width: 992px) {
padding-left: 0;
}`;;
export const px_lg_0 = css`@media (min-width: 992px) {
padding-right: 0;
padding-left: 0;
}`;;
export const py_lg_0 = css`@media (min-width: 992px) {
padding-top: 0;
padding-bottom: 0;
}`;;
export const p_lg_1 = css`@media (min-width: 992px) {
padding: 0.25rem;
}`;;
export const pt_lg_1 = css`@media (min-width: 992px) {
padding-top: 0.25rem;
}`;;
export const pr_lg_1 = css`@media (min-width: 992px) {
padding-right: 0.25rem;
}`;;
export const pb_lg_1 = css`@media (min-width: 992px) {
padding-bottom: 0.25rem;
}`;;
export const pl_lg_1 = css`@media (min-width: 992px) {
padding-left: 0.25rem;
}`;;
export const px_lg_1 = css`@media (min-width: 992px) {
padding-right: 0.25rem;
padding-left: 0.25rem;
}`;;
export const py_lg_1 = css`@media (min-width: 992px) {
padding-top: 0.25rem;
padding-bottom: 0.25rem;
}`;;
export const p_lg_2 = css`@media (min-width: 992px) {
padding: 0.5rem;
}`;;
export const pt_lg_2 = css`@media (min-width: 992px) {
padding-top: 0.5rem;
}`;;
export const pr_lg_2 = css`@media (min-width: 992px) {
padding-right: 0.5rem;
}`;;
export const pb_lg_2 = css`@media (min-width: 992px) {
padding-bottom: 0.5rem;
}`;;
export const pl_lg_2 = css`@media (min-width: 992px) {
padding-left: 0.5rem;
}`;;
export const px_lg_2 = css`@media (min-width: 992px) {
padding-right: 0.5rem;
padding-left: 0.5rem;
}`;;
export const py_lg_2 = css`@media (min-width: 992px) {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
}`;;
export const p_lg_3 = css`@media (min-width: 992px) {
padding: 1rem;
}`;;
export const pt_lg_3 = css`@media (min-width: 992px) {
padding-top: 1rem;
}`;;
export const pr_lg_3 = css`@media (min-width: 992px) {
padding-right: 1rem;
}`;;
export const pb_lg_3 = css`@media (min-width: 992px) {
padding-bottom: 1rem;
}`;;
export const pl_lg_3 = css`@media (min-width: 992px) {
padding-left: 1rem;
}`;;
export const px_lg_3 = css`@media (min-width: 992px) {
padding-right: 1rem;
padding-left: 1rem;
}`;;
export const py_lg_3 = css`@media (min-width: 992px) {
padding-top: 1rem;
padding-bottom: 1rem;
}`;;
export const p_lg_4 = css`@media (min-width: 992px) {
padding: 1.5rem;
}`;;
export const pt_lg_4 = css`@media (min-width: 992px) {
padding-top: 1.5rem;
}`;;
export const pr_lg_4 = css`@media (min-width: 992px) {
padding-right: 1.5rem;
}`;;
export const pb_lg_4 = css`@media (min-width: 992px) {
padding-bottom: 1.5rem;
}`;;
export const pl_lg_4 = css`@media (min-width: 992px) {
padding-left: 1.5rem;
}`;;
export const px_lg_4 = css`@media (min-width: 992px) {
padding-right: 1.5rem;
padding-left: 1.5rem;
}`;;
export const py_lg_4 = css`@media (min-width: 992px) {
padding-top: 1.5rem;
padding-bottom: 1.5rem;
}`;;
export const p_lg_5 = css`@media (min-width: 992px) {
padding: 3rem;
}`;;
export const pt_lg_5 = css`@media (min-width: 992px) {
padding-top: 3rem;
}`;;
export const pr_lg_5 = css`@media (min-width: 992px) {
padding-right: 3rem;
}`;;
export const pb_lg_5 = css`@media (min-width: 992px) {
padding-bottom: 3rem;
}`;;
export const pl_lg_5 = css`@media (min-width: 992px) {
padding-left: 3rem;
}`;;
export const px_lg_5 = css`@media (min-width: 992px) {
padding-right: 3rem;
padding-left: 3rem;
}`;;
export const py_lg_5 = css`@media (min-width: 992px) {
padding-top: 3rem;
padding-bottom: 3rem;
}`;;
export const m_lg_auto = css`@media (min-width: 992px) {
margin: auto;
}`;;
export const mt_lg_auto = css`@media (min-width: 992px) {
margin-top: auto;
}`;;
export const mr_lg_auto = css`@media (min-width: 992px) {
margin-right: auto;
}`;;
export const mb_lg_auto = css`@media (min-width: 992px) {
margin-bottom: auto;
}`;;
export const ml_lg_auto = css`@media (min-width: 992px) {
margin-left: auto;
}`;;
export const mx_lg_auto = css`@media (min-width: 992px) {
margin-right: auto;
margin-left: auto;
}`;;
export const my_lg_auto = css`@media (min-width: 992px) {
margin-top: auto;
margin-bottom: auto;
}`;;
export const m_xl_0 = css`@media (min-width: 1200px) {
margin: 0;
}`;;
export const mt_xl_0 = css`@media (min-width: 1200px) {
margin-top: 0;
}`;;
export const mr_xl_0 = css`@media (min-width: 1200px) {
margin-right: 0;
}`;;
export const mb_xl_0 = css`@media (min-width: 1200px) {
margin-bottom: 0;
}`;;
export const ml_xl_0 = css`@media (min-width: 1200px) {
margin-left: 0;
}`;;
export const mx_xl_0 = css`@media (min-width: 1200px) {
margin-right: 0;
margin-left: 0;
}`;;
export const my_xl_0 = css`@media (min-width: 1200px) {
margin-top: 0;
margin-bottom: 0;
}`;;
export const m_xl_1 = css`@media (min-width: 1200px) {
margin: 0.25rem;
}`;;
export const mt_xl_1 = css`@media (min-width: 1200px) {
margin-top: 0.25rem;
}`;;
export const mr_xl_1 = css`@media (min-width: 1200px) {
margin-right: 0.25rem;
}`;;
export const mb_xl_1 = css`@media (min-width: 1200px) {
margin-bottom: 0.25rem;
}`;;
export const ml_xl_1 = css`@media (min-width: 1200px) {
margin-left: 0.25rem;
}`;;
export const mx_xl_1 = css`@media (min-width: 1200px) {
margin-right: 0.25rem;
margin-left: 0.25rem;
}`;;
export const my_xl_1 = css`@media (min-width: 1200px) {
margin-top: 0.25rem;
margin-bottom: 0.25rem;
}`;;
export const m_xl_2 = css`@media (min-width: 1200px) {
margin: 0.5rem;
}`;;
export const mt_xl_2 = css`@media (min-width: 1200px) {
margin-top: 0.5rem;
}`;;
export const mr_xl_2 = css`@media (min-width: 1200px) {
margin-right: 0.5rem;
}`;;
export const mb_xl_2 = css`@media (min-width: 1200px) {
margin-bottom: 0.5rem;
}`;;
export const ml_xl_2 = css`@media (min-width: 1200px) {
margin-left: 0.5rem;
}`;;
export const mx_xl_2 = css`@media (min-width: 1200px) {
margin-right: 0.5rem;
margin-left: 0.5rem;
}`;;
export const my_xl_2 = css`@media (min-width: 1200px) {
margin-top: 0.5rem;
margin-bottom: 0.5rem;
}`;;
export const m_xl_3 = css`@media (min-width: 1200px) {
margin: 1rem;
}`;;
export const mt_xl_3 = css`@media (min-width: 1200px) {
margin-top: 1rem;
}`;;
export const mr_xl_3 = css`@media (min-width: 1200px) {
margin-right: 1rem;
}`;;
export const mb_xl_3 = css`@media (min-width: 1200px) {
margin-bottom: 1rem;
}`;;
export const ml_xl_3 = css`@media (min-width: 1200px) {
margin-left: 1rem;
}`;;
export const mx_xl_3 = css`@media (min-width: 1200px) {
margin-right: 1rem;
margin-left: 1rem;
}`;;
export const my_xl_3 = css`@media (min-width: 1200px) {
margin-top: 1rem;
margin-bottom: 1rem;
}`;;
export const m_xl_4 = css`@media (min-width: 1200px) {
margin: 1.5rem;
}`;;
export const mt_xl_4 = css`@media (min-width: 1200px) {
margin-top: 1.5rem;
}`;;
export const mr_xl_4 = css`@media (min-width: 1200px) {
margin-right: 1.5rem;
}`;;
export const mb_xl_4 = css`@media (min-width: 1200px) {
margin-bottom: 1.5rem;
}`;;
export const ml_xl_4 = css`@media (min-width: 1200px) {
margin-left: 1.5rem;
}`;;
export const mx_xl_4 = css`@media (min-width: 1200px) {
margin-right: 1.5rem;
margin-left: 1.5rem;
}`;;
export const my_xl_4 = css`@media (min-width: 1200px) {
margin-top: 1.5rem;
margin-bottom: 1.5rem;
}`;;
export const m_xl_5 = css`@media (min-width: 1200px) {
margin: 3rem;
}`;;
export const mt_xl_5 = css`@media (min-width: 1200px) {
margin-top: 3rem;
}`;;
export const mr_xl_5 = css`@media (min-width: 1200px) {
margin-right: 3rem;
}`;;
export const mb_xl_5 = css`@media (min-width: 1200px) {
margin-bottom: 3rem;
}`;;
export const ml_xl_5 = css`@media (min-width: 1200px) {
margin-left: 3rem;
}`;;
export const mx_xl_5 = css`@media (min-width: 1200px) {
margin-right: 3rem;
margin-left: 3rem;
}`;;
export const my_xl_5 = css`@media (min-width: 1200px) {
margin-top: 3rem;
margin-bottom: 3rem;
}`;;
export const p_xl_0 = css`@media (min-width: 1200px) {
padding: 0;
}`;;
export const pt_xl_0 = css`@media (min-width: 1200px) {
padding-top: 0;
}`;;
export const pr_xl_0 = css`@media (min-width: 1200px) {
padding-right: 0;
}`;;
export const pb_xl_0 = css`@media (min-width: 1200px) {
padding-bottom: 0;
}`;;
export const pl_xl_0 = css`@media (min-width: 1200px) {
padding-left: 0;
}`;;
export const px_xl_0 = css`@media (min-width: 1200px) {
padding-right: 0;
padding-left: 0;
}`;;
export const py_xl_0 = css`@media (min-width: 1200px) {
padding-top: 0;
padding-bottom: 0;
}`;;
export const p_xl_1 = css`@media (min-width: 1200px) {
padding: 0.25rem;
}`;;
export const pt_xl_1 = css`@media (min-width: 1200px) {
padding-top: 0.25rem;
}`;;
export const pr_xl_1 = css`@media (min-width: 1200px) {
padding-right: 0.25rem;
}`;;
export const pb_xl_1 = css`@media (min-width: 1200px) {
padding-bottom: 0.25rem;
}`;;
export const pl_xl_1 = css`@media (min-width: 1200px) {
padding-left: 0.25rem;
}`;;
export const px_xl_1 = css`@media (min-width: 1200px) {
padding-right: 0.25rem;
padding-left: 0.25rem;
}`;;
export const py_xl_1 = css`@media (min-width: 1200px) {
padding-top: 0.25rem;
padding-bottom: 0.25rem;
}`;;
export const p_xl_2 = css`@media (min-width: 1200px) {
padding: 0.5rem;
}`;;
export const pt_xl_2 = css`@media (min-width: 1200px) {
padding-top: 0.5rem;
}`;;
export const pr_xl_2 = css`@media (min-width: 1200px) {
padding-right: 0.5rem;
}`;;
export const pb_xl_2 = css`@media (min-width: 1200px) {
padding-bottom: 0.5rem;
}`;;
export const pl_xl_2 = css`@media (min-width: 1200px) {
padding-left: 0.5rem;
}`;;
export const px_xl_2 = css`@media (min-width: 1200px) {
padding-right: 0.5rem;
padding-left: 0.5rem;
}`;;
export const py_xl_2 = css`@media (min-width: 1200px) {
padding-top: 0.5rem;
padding-bottom: 0.5rem;
}`;;
export const p_xl_3 = css`@media (min-width: 1200px) {
padding: 1rem;
}`;;
export const pt_xl_3 = css`@media (min-width: 1200px) {
padding-top: 1rem;
}`;;
export const pr_xl_3 = css`@media (min-width: 1200px) {
padding-right: 1rem;
}`;;
export const pb_xl_3 = css`@media (min-width: 1200px) {
padding-bottom: 1rem;
}`;;
export const pl_xl_3 = css`@media (min-width: 1200px) {
padding-left: 1rem;
}`;;
export const px_xl_3 = css`@media (min-width: 1200px) {
padding-right: 1rem;
padding-left: 1rem;
}`;;
export const py_xl_3 = css`@media (min-width: 1200px) {
padding-top: 1rem;
padding-bottom: 1rem;
}`;;
export const p_xl_4 = css`@media (min-width: 1200px) {
padding: 1.5rem;
}`;;
export const pt_xl_4 = css`@media (min-width: 1200px) {
padding-top: 1.5rem;
}`;;
export const pr_xl_4 = css`@media (min-width: 1200px) {
padding-right: 1.5rem;
}`;;
export const pb_xl_4 = css`@media (min-width: 1200px) {
padding-bottom: 1.5rem;
}`;;
export const pl_xl_4 = css`@media (min-width: 1200px) {
padding-left: 1.5rem;
}`;;
export const px_xl_4 = css`@media (min-width: 1200px) {
padding-right: 1.5rem;
padding-left: 1.5rem;
}`;;
export const py_xl_4 = css`@media (min-width: 1200px) {
padding-top: 1.5rem;
padding-bottom: 1.5rem;
}`;;
export const p_xl_5 = css`@media (min-width: 1200px) {
padding: 3rem;
}`;;
export const pt_xl_5 = css`@media (min-width: 1200px) {
padding-top: 3rem;
}`;;
export const pr_xl_5 = css`@media (min-width: 1200px) {
padding-right: 3rem;
}`;;
export const pb_xl_5 = css`@media (min-width: 1200px) {
padding-bottom: 3rem;
}`;;
export const pl_xl_5 = css`@media (min-width: 1200px) {
padding-left: 3rem;
}`;;
export const px_xl_5 = css`@media (min-width: 1200px) {
padding-right: 3rem;
padding-left: 3rem;
}`;;
export const py_xl_5 = css`@media (min-width: 1200px) {
padding-top: 3rem;
padding-bottom: 3rem;
}`;;
export const m_xl_auto = css`@media (min-width: 1200px) {
margin: auto;
}`;;
export const mt_xl_auto = css`@media (min-width: 1200px) {
margin-top: auto;
}`;;
export const mr_xl_auto = css`@media (min-width: 1200px) {
margin-right: auto;
}`;;
export const mb_xl_auto = css`@media (min-width: 1200px) {
margin-bottom: auto;
}`;;
export const ml_xl_auto = css`@media (min-width: 1200px) {
margin-left: auto;
}`;;
export const mx_xl_auto = css`@media (min-width: 1200px) {
margin-right: auto;
margin-left: auto;
}`;;
export const my_xl_auto = css`@media (min-width: 1200px) {
margin-top: auto;
margin-bottom: auto;
}`;;
export const text_justify = css`text-align: justify;`;;
export const text_nowrap = css`white-space: nowrap;`;;
export const text_truncate = css`overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;`;;
export const text_left = css`text-align: left;`;;
export const text_right = css`text-align: right;`;;
export const text_center = css`text-align: center;`;;
export const text_sm_left = css`@media (min-width: 576px) {
text-align: left;
}`;;
export const text_sm_right = css`@media (min-width: 576px) {
text-align: right;
}`;;
export const text_sm_center = css`@media (min-width: 576px) {
text-align: center;
}`;;
export const text_md_left = css`@media (min-width: 768px) {
text-align: left;
}`;;
export const text_md_right = css`@media (min-width: 768px) {
text-align: right;
}`;;
export const text_md_center = css`@media (min-width: 768px) {
text-align: center;
}`;;
export const text_lg_left = css`@media (min-width: 992px) {
text-align: left;
}`;;
export const text_lg_right = css`@media (min-width: 992px) {
text-align: right;
}`;;
export const text_lg_center = css`@media (min-width: 992px) {
text-align: center;
}`;;
export const text_xl_left = css`@media (min-width: 1200px) {
text-align: left;
}`;;
export const text_xl_right = css`@media (min-width: 1200px) {
text-align: right;
}`;;
export const text_xl_center = css`@media (min-width: 1200px) {
text-align: center;
}`;;
export const text_lowercase = css`text-transform: lowercase;`;;
export const text_uppercase = css`text-transform: uppercase;`;;
export const text_capitalize = css`text-transform: capitalize;`;;
export const font_weight_normal = css`font-weight: normal;`;;
export const font_weight_bold = css`font-weight: bold;`;;
export const font_italic = css`font-style: italic;`;;
export const text_white = css`color: #fff;`;;
export const text_primary = css`color: #007bff;`;;
export const tag_a_and_text_primary = css`&:focus {color: #0062cc;}
&:hover {color: #0062cc;}`;;
export const text_secondary = css`color: #868e96;`;;
export const tag_a_and_text_secondary = css`&:focus {color: #6c757d;}
&:hover {color: #6c757d;}`;;
export const text_success = css`color: #28a745;`;;
export const tag_a_and_text_success = css`&:focus {color: #1e7e34;}
&:hover {color: #1e7e34;}`;;
export const text_info = css`color: #17a2b8;`;;
export const tag_a_and_text_info = css`&:focus {color: #117a8b;}
&:hover {color: #117a8b;}`;;
export const text_warning = css`color: #ffc107;`;;
export const tag_a_and_text_warning = css`&:focus {color: #d39e00;}
&:hover {color: #d39e00;}`;;
export const text_danger = css`color: #dc3545;`;;
export const tag_a_and_text_danger = css`&:focus {color: #bd2130;}
&:hover {color: #bd2130;}`;;
export const text_light = css`color: #f8f9fa;`;;
export const tag_a_and_text_light = css`&:focus {color: #dae0e5;}
&:hover {color: #dae0e5;}`;;
export const text_dark = css`color: #343a40;`;;
export const tag_a_and_text_dark = css`&:focus {color: #1d2124;}
&:hover {color: #1d2124;}`;;
export const text_muted = css`color: #868e96;`;;
export const text_hide = css`font: 0/0 a;
color: transparent;
text-shadow: none;
background-color: transparent;
border: 0;`;;
export const visible = css`visibility: visible;`;;
export const invisible = css`visibility: hidden;`;;;
  