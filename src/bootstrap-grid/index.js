
    import { css, injectGlobal }  from 'styled-components';
    
    export const global__ms_viewport =   () => injectGlobal`@-ms-viewport  { width: device-width; }`;
export const tag_html = css`box-sizing: border-box;
-ms-overflow-style: scrollbar;`;;
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
}`;;;
  