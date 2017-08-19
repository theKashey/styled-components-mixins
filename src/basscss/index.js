
    import { css, injectGlobal }  from 'styled-components';
    
    export const __root = css`--h1: 2rem;
--h2: 1.5rem;
--h3: 1.25rem;
--h4: 1rem;
--h5: .875rem;
--h6: .75rem;
--line-height-1: 1;
--line-height-2: 1.125;
--line-height-3: 1.25;
--line-height-4: 1.5;
--letter-spacing: 1;
--caps-letter-spacing: .2em;
--bold-font-weight: bold;
--width-1: 24rem;
--width-2: 32rem;
--width-3: 48rem;
--width-4: 64rem;
--space-1: .5rem;
--space-2: 1rem;
--space-3: 2rem;
--space-4: 4rem;
--space-1: .5rem;
--space-2: 1rem;
--space-3: 2rem;
--space-4: 4rem;
--z1: 1;
--z2: 2;
--z3: 3;
--z4: 4;
--border-width: 1px;
--border-radius: 3px;`;;
export const h1 = css`${__root}; font-size: var(--h1);`;;
export const h2 = css`${__root}; font-size: var(--h2);`;;
export const h3 = css`${__root}; font-size: var(--h3);`;;
export const h4 = css`${__root}; font-size: var(--h4);`;;
export const h5 = css`${__root}; font-size: var(--h5);`;;
export const h6 = css`${__root}; font-size: var(--h6);`;;
export const font_family_inherit = css`${__root}; font-family: inherit;`;;
export const font_size_inherit = css`${__root}; font-size: inherit;`;;
export const text_decoration_none = css`${__root}; text-decoration: none;`;;
export const bold = css`${__root}; font-weight: var(--bold-font-weight, bold);`;;
export const regular = css`${__root}; font-weight: normal;`;;
export const italic = css`${__root}; font-style: italic;`;;
export const caps = css`${__root}; text-transform: uppercase;
letter-spacing: var(--caps-letter-spacing);`;;
export const left_align = css`${__root}; text-align: left;`;;
export const center = css`${__root}; text-align: center;`;;
export const right_align = css`${__root}; text-align: right;`;;
export const justify = css`${__root}; text-align: justify;`;;
export const nowrap = css`${__root}; white-space: nowrap;`;;
export const break_word = css`${__root}; word-wrap: break-word;`;;
export const line_height_1 = css`${__root}; line-height: var(--line-height-1);`;;
export const line_height_2 = css`${__root}; line-height: var(--line-height-2);`;;
export const line_height_3 = css`${__root}; line-height: var(--line-height-3);`;;
export const line_height_4 = css`${__root}; line-height: var(--line-height-4);`;;
export const list_style_none = css`${__root}; list-style: none;`;;
export const underline = css`${__root}; text-decoration: underline;`;;
export const truncate = css`${__root}; max-width: 100%;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;`;;
export const list_reset = css`${__root}; list-style: none;
padding-left: 0;`;;
export const inline = css`${__root}; display: inline;`;;
export const block = css`${__root}; display: block;`;;
export const inline_block = css`${__root}; display: inline-block;`;;
export const table = css`${__root}; display: table;`;;
export const table_cell = css`${__root}; display: table-cell;`;;
export const overflow_hidden = css`${__root}; overflow: hidden;`;;
export const overflow_scroll = css`${__root}; overflow: scroll;`;;
export const overflow_auto = css`${__root}; overflow: auto;`;;
export const clearfix = css`${__root}; &:before {content: " ";
display: table;}
&:after {content: " ";
display: table;}
&:after {clear: both;}`;;
export const left = css`${__root}; float: left;`;;
export const right = css`${__root}; float: right;`;;
export const fit = css`${__root}; max-width: 100%;`;;
export const max_width_1 = css`${__root}; max-width: var(--width-1);`;;
export const max_width_2 = css`${__root}; max-width: var(--width-2);`;;
export const max_width_3 = css`${__root}; max-width: var(--width-3);`;;
export const max_width_4 = css`${__root}; max-width: var(--width-4);`;;
export const border_box = css`${__root}; box-sizing: border-box;`;;
export const align_baseline = css`${__root}; vertical-align: baseline;`;;
export const align_top = css`${__root}; vertical-align: top;`;;
export const align_middle = css`${__root}; vertical-align: middle;`;;
export const align_bottom = css`${__root}; vertical-align: bottom;`;;
export const m0 = css`${__root}; margin: 0;`;;
export const mt0 = css`${__root}; margin-top: 0;`;;
export const mr0 = css`${__root}; margin-right: 0;`;;
export const mb0 = css`${__root}; margin-bottom: 0;`;;
export const ml0 = css`${__root}; margin-left: 0;`;;
export const mx0 = css`${__root}; margin-left: 0;
margin-right: 0;`;;
export const my0 = css`${__root}; margin-top: 0;
margin-bottom: 0;`;;
export const m1 = css`${__root}; margin: var(--space-1);`;;
export const mt1 = css`${__root}; margin-top: var(--space-1);`;;
export const mr1 = css`${__root}; margin-right: var(--space-1);`;;
export const mb1 = css`${__root}; margin-bottom: var(--space-1);`;;
export const ml1 = css`${__root}; margin-left: var(--space-1);`;;
export const mx1 = css`${__root}; margin-left: var(--space-1);
margin-right: var(--space-1);`;;
export const my1 = css`${__root}; margin-top: var(--space-1);
margin-bottom: var(--space-1);`;;
export const m2 = css`${__root}; margin: var(--space-2);`;;
export const mt2 = css`${__root}; margin-top: var(--space-2);`;;
export const mr2 = css`${__root}; margin-right: var(--space-2);`;;
export const mb2 = css`${__root}; margin-bottom: var(--space-2);`;;
export const ml2 = css`${__root}; margin-left: var(--space-2);`;;
export const mx2 = css`${__root}; margin-left: var(--space-2);
margin-right: var(--space-2);`;;
export const my2 = css`${__root}; margin-top: var(--space-2);
margin-bottom: var(--space-2);`;;
export const m3 = css`${__root}; margin: var(--space-3);`;;
export const mt3 = css`${__root}; margin-top: var(--space-3);`;;
export const mr3 = css`${__root}; margin-right: var(--space-3);`;;
export const mb3 = css`${__root}; margin-bottom: var(--space-3);`;;
export const ml3 = css`${__root}; margin-left: var(--space-3);`;;
export const mx3 = css`${__root}; margin-left: var(--space-3);
margin-right: var(--space-3);`;;
export const my3 = css`${__root}; margin-top: var(--space-3);
margin-bottom: var(--space-3);`;;
export const m4 = css`${__root}; margin: var(--space-4);`;;
export const mt4 = css`${__root}; margin-top: var(--space-4);`;;
export const mr4 = css`${__root}; margin-right: var(--space-4);`;;
export const mb4 = css`${__root}; margin-bottom: var(--space-4);`;;
export const ml4 = css`${__root}; margin-left: var(--space-4);`;;
export const mx4 = css`${__root}; margin-left: var(--space-4);
margin-right: var(--space-4);`;;
export const my4 = css`${__root}; margin-top: var(--space-4);
margin-bottom: var(--space-4);`;;
export const mxn1 = css`${__root}; margin-left: -var(--space-1);
margin-right: -var(--space-1);`;;
export const mxn2 = css`${__root}; margin-left: -var(--space-2);
margin-right: -var(--space-2);`;;
export const mxn3 = css`${__root}; margin-left: -var(--space-3);
margin-right: -var(--space-3);`;;
export const mxn4 = css`${__root}; margin-left: -var(--space-4);
margin-right: -var(--space-4);`;;
export const ml_auto = css`${__root}; margin-left: auto;`;;
export const mr_auto = css`${__root}; margin-right: auto;`;;
export const mx_auto = css`${__root}; margin-left: auto;
margin-right: auto;`;;
export const p0 = css`${__root}; padding: 0;`;;
export const pt0 = css`${__root}; padding-top: 0;`;;
export const pr0 = css`${__root}; padding-right: 0;`;;
export const pb0 = css`${__root}; padding-bottom: 0;`;;
export const pl0 = css`${__root}; padding-left: 0;`;;
export const px0 = css`${__root}; padding-left: 0;
padding-right: 0;`;;
export const py0 = css`${__root}; padding-top: 0;
padding-bottom: 0;`;;
export const p1 = css`${__root}; padding: var(--space-1);`;;
export const pt1 = css`${__root}; padding-top: var(--space-1);`;;
export const pr1 = css`${__root}; padding-right: var(--space-1);`;;
export const pb1 = css`${__root}; padding-bottom: var(--space-1);`;;
export const pl1 = css`${__root}; padding-left: var(--space-1);`;;
export const py1 = css`${__root}; padding-top: var(--space-1);
padding-bottom: var(--space-1);`;;
export const px1 = css`${__root}; padding-left: var(--space-1);
padding-right: var(--space-1);`;;
export const p2 = css`${__root}; padding: var(--space-2);`;;
export const pt2 = css`${__root}; padding-top: var(--space-2);`;;
export const pr2 = css`${__root}; padding-right: var(--space-2);`;;
export const pb2 = css`${__root}; padding-bottom: var(--space-2);`;;
export const pl2 = css`${__root}; padding-left: var(--space-2);`;;
export const py2 = css`${__root}; padding-top: var(--space-2);
padding-bottom: var(--space-2);`;;
export const px2 = css`${__root}; padding-left: var(--space-2);
padding-right: var(--space-2);`;;
export const p3 = css`${__root}; padding: var(--space-3);`;;
export const pt3 = css`${__root}; padding-top: var(--space-3);`;;
export const pr3 = css`${__root}; padding-right: var(--space-3);`;;
export const pb3 = css`${__root}; padding-bottom: var(--space-3);`;;
export const pl3 = css`${__root}; padding-left: var(--space-3);`;;
export const py3 = css`${__root}; padding-top: var(--space-3);
padding-bottom: var(--space-3);`;;
export const px3 = css`${__root}; padding-left: var(--space-3);
padding-right: var(--space-3);`;;
export const p4 = css`${__root}; padding: var(--space-4);`;;
export const pt4 = css`${__root}; padding-top: var(--space-4);`;;
export const pr4 = css`${__root}; padding-right: var(--space-4);`;;
export const pb4 = css`${__root}; padding-bottom: var(--space-4);`;;
export const pl4 = css`${__root}; padding-left: var(--space-4);`;;
export const py4 = css`${__root}; padding-top: var(--space-4);
padding-bottom: var(--space-4);`;;
export const px4 = css`${__root}; padding-left: var(--space-4);
padding-right: var(--space-4);`;;
export const col = css`${__root}; float: left;
box-sizing: border-box;`;;
export const col_right = css`${__root}; float: right;
box-sizing: border-box;`;;
export const col_1 = css`${__root}; width: calc(1/12 * 100%);`;;
export const col_2 = css`${__root}; width: calc(2/12 * 100%);`;;
export const col_3 = css`${__root}; width: calc(3/12 * 100%);`;;
export const col_4 = css`${__root}; width: calc(4/12 * 100%);`;;
export const col_5 = css`${__root}; width: calc(5/12 * 100%);`;;
export const col_6 = css`${__root}; width: calc(6/12 * 100%);`;;
export const col_7 = css`${__root}; width: calc(7/12 * 100%);`;;
export const col_8 = css`${__root}; width: calc(8/12 * 100%);`;;
export const col_9 = css`${__root}; width: calc(9/12 * 100%);`;;
export const col_10 = css`${__root}; width: calc(10/12 * 100%);`;;
export const col_11 = css`${__root}; width: calc(11/12 * 100%);`;;
export const col_12 = css`${__root}; width: 100%;`;;
export const sm_col = css`${__root}; @media (min-width: 40em) {
float: left;
box-sizing: border-box;
}`;;
export const sm_col_right = css`${__root}; @media (min-width: 40em) {
float: right;
box-sizing: border-box;
}`;;
export const sm_col_1 = css`${__root}; @media (min-width: 40em) {
width: calc(1/12 * 100%);
}`;;
export const sm_col_2 = css`${__root}; @media (min-width: 40em) {
width: calc(2/12 * 100%);
}`;;
export const sm_col_3 = css`${__root}; @media (min-width: 40em) {
width: calc(3/12 * 100%);
}`;;
export const sm_col_4 = css`${__root}; @media (min-width: 40em) {
width: calc(4/12 * 100%);
}`;;
export const sm_col_5 = css`${__root}; @media (min-width: 40em) {
width: calc(5/12 * 100%);
}`;;
export const sm_col_6 = css`${__root}; @media (min-width: 40em) {
width: calc(6/12 * 100%);
}`;;
export const sm_col_7 = css`${__root}; @media (min-width: 40em) {
width: calc(7/12 * 100%);
}`;;
export const sm_col_8 = css`${__root}; @media (min-width: 40em) {
width: calc(8/12 * 100%);
}`;;
export const sm_col_9 = css`${__root}; @media (min-width: 40em) {
width: calc(9/12 * 100%);
}`;;
export const sm_col_10 = css`${__root}; @media (min-width: 40em) {
width: calc(10/12 * 100%);
}`;;
export const sm_col_11 = css`${__root}; @media (min-width: 40em) {
width: calc(11/12 * 100%);
}`;;
export const sm_col_12 = css`${__root}; @media (min-width: 40em) {
width: 100%;
}`;;
export const md_col = css`${__root}; @media (min-width: 52em) {
float: left;
box-sizing: border-box;
}`;;
export const md_col_right = css`${__root}; @media (min-width: 52em) {
float: right;
box-sizing: border-box;
}`;;
export const md_col_1 = css`${__root}; @media (min-width: 52em) {
width: calc(1/12 * 100%);
}`;;
export const md_col_2 = css`${__root}; @media (min-width: 52em) {
width: calc(2/12 * 100%);
}`;;
export const md_col_3 = css`${__root}; @media (min-width: 52em) {
width: calc(3/12 * 100%);
}`;;
export const md_col_4 = css`${__root}; @media (min-width: 52em) {
width: calc(4/12 * 100%);
}`;;
export const md_col_5 = css`${__root}; @media (min-width: 52em) {
width: calc(5/12 * 100%);
}`;;
export const md_col_6 = css`${__root}; @media (min-width: 52em) {
width: calc(6/12 * 100%);
}`;;
export const md_col_7 = css`${__root}; @media (min-width: 52em) {
width: calc(7/12 * 100%);
}`;;
export const md_col_8 = css`${__root}; @media (min-width: 52em) {
width: calc(8/12 * 100%);
}`;;
export const md_col_9 = css`${__root}; @media (min-width: 52em) {
width: calc(9/12 * 100%);
}`;;
export const md_col_10 = css`${__root}; @media (min-width: 52em) {
width: calc(10/12 * 100%);
}`;;
export const md_col_11 = css`${__root}; @media (min-width: 52em) {
width: calc(11/12 * 100%);
}`;;
export const md_col_12 = css`${__root}; @media (min-width: 52em) {
width: 100%;
}`;;
export const lg_col = css`${__root}; @media (min-width: 64em) {
float: left;
box-sizing: border-box;
}`;;
export const lg_col_right = css`${__root}; @media (min-width: 64em) {
float: right;
box-sizing: border-box;
}`;;
export const lg_col_1 = css`${__root}; @media (min-width: 64em) {
width: calc(1/12 * 100%);
}`;;
export const lg_col_2 = css`${__root}; @media (min-width: 64em) {
width: calc(2/12 * 100%);
}`;;
export const lg_col_3 = css`${__root}; @media (min-width: 64em) {
width: calc(3/12 * 100%);
}`;;
export const lg_col_4 = css`${__root}; @media (min-width: 64em) {
width: calc(4/12 * 100%);
}`;;
export const lg_col_5 = css`${__root}; @media (min-width: 64em) {
width: calc(5/12 * 100%);
}`;;
export const lg_col_6 = css`${__root}; @media (min-width: 64em) {
width: calc(6/12 * 100%);
}`;;
export const lg_col_7 = css`${__root}; @media (min-width: 64em) {
width: calc(7/12 * 100%);
}`;;
export const lg_col_8 = css`${__root}; @media (min-width: 64em) {
width: calc(8/12 * 100%);
}`;;
export const lg_col_9 = css`${__root}; @media (min-width: 64em) {
width: calc(9/12 * 100%);
}`;;
export const lg_col_10 = css`${__root}; @media (min-width: 64em) {
width: calc(10/12 * 100%);
}`;;
export const lg_col_11 = css`${__root}; @media (min-width: 64em) {
width: calc(11/12 * 100%);
}`;;
export const lg_col_12 = css`${__root}; @media (min-width: 64em) {
width: 100%;
}`;;
export const flex = css`${__root}; display: flex;`;;
export const sm_flex = css`${__root}; @media (min-width: 40em) {
display: flex;
}`;;
export const md_flex = css`${__root}; @media (min-width: 52em) {
display: flex;
}`;;
export const lg_flex = css`${__root}; @media (min-width: 64em) {
display: flex;
}`;;
export const flex_column = css`${__root}; flex-direction: column;`;;
export const flex_wrap = css`${__root}; flex-wrap: wrap;`;;
export const items_start = css`${__root}; align-items: flex-start;`;;
export const items_end = css`${__root}; align-items: flex-end;`;;
export const items_center = css`${__root}; align-items: center;`;;
export const items_baseline = css`${__root}; align-items: baseline;`;;
export const items_stretch = css`${__root}; align-items: stretch;`;;
export const self_start = css`${__root}; align-self: flex-start;`;;
export const self_end = css`${__root}; align-self: flex-end;`;;
export const self_center = css`${__root}; align-self: center;`;;
export const self_baseline = css`${__root}; align-self: baseline;`;;
export const self_stretch = css`${__root}; align-self: stretch;`;;
export const justify_start = css`${__root}; justify-content: flex-start;`;;
export const justify_end = css`${__root}; justify-content: flex-end;`;;
export const justify_center = css`${__root}; justify-content: center;`;;
export const justify_between = css`${__root}; justify-content: space-between;`;;
export const justify_around = css`${__root}; justify-content: space-around;`;;
export const content_start = css`${__root}; align-content: flex-start;`;;
export const content_end = css`${__root}; align-content: flex-end;`;;
export const content_center = css`${__root}; align-content: center;`;;
export const content_between = css`${__root}; align-content: space-between;`;;
export const content_around = css`${__root}; align-content: space-around;`;;
export const content_stretch = css`${__root}; align-content: stretch;`;;
export const flex_auto = css`${__root}; flex: 1 1 auto;
min-width: 0;
min-height: 0;`;;
export const flex_none = css`${__root}; flex: none;`;;
export const order_0 = css`${__root}; order: 0;`;;
export const order_1 = css`${__root}; order: 1;`;;
export const order_2 = css`${__root}; order: 2;`;;
export const order_3 = css`${__root}; order: 3;`;;
export const order_last = css`${__root}; order: 99999;`;;
export const relative = css`${__root}; position: relative;`;;
export const absolute = css`${__root}; position: absolute;`;;
export const fixed = css`${__root}; position: fixed;`;;
export const top_0 = css`${__root}; top: 0;`;;
export const right_0 = css`${__root}; right: 0;`;;
export const bottom_0 = css`${__root}; bottom: 0;`;;
export const left_0 = css`${__root}; left: 0;`;;
export const z1 = css`${__root}; z-index: var(--z1);`;;
export const z2 = css`${__root}; z-index: var(--z2);`;;
export const z3 = css`${__root}; z-index: var(--z3);`;;
export const z4 = css`${__root}; z-index: var(--z4);`;;
export const border = css`${__root}; border-style: solid;
border-width: var(--border-width);`;;
export const border_top = css`${__root}; border-top-style: solid;
border-top-width: var(--border-width);`;;
export const border_right = css`${__root}; border-right-style: solid;
border-right-width: var(--border-width);`;;
export const border_bottom = css`${__root}; border-bottom-style: solid;
border-bottom-width: var(--border-width);`;;
export const border_left = css`${__root}; border-left-style: solid;
border-left-width: var(--border-width);`;;
export const border_none = css`${__root}; border: 0;`;;
export const rounded = css`${__root}; border-radius: var(--border-radius);`;;
export const circle = css`${__root}; border-radius: 50%;`;;
export const rounded_top = css`${__root}; border-radius: var(--border-radius) var(--border-radius) 0 0;`;;
export const rounded_right = css`${__root}; border-radius: 0 var(--border-radius) var(--border-radius) 0;`;;
export const rounded_bottom = css`${__root}; border-radius: 0 0 var(--border-radius) var(--border-radius);`;;
export const rounded_left = css`${__root}; border-radius: var(--border-radius) 0 0 var(--border-radius);`;;
export const not_rounded = css`${__root}; border-radius: 0;`;;
export const hide = css`${__root}; position: absolute;
height: 1px;
width: 1px;
overflow: hidden;
clip: rect(1px, 1px, 1px, 1px);`;;
export const xs_hide = css`${__root}; @media (max-width: 40em) {
display: none;
}`;;
export const sm_hide = css`${__root}; @media (min-width: 40em) and (max-width: 52em) {
display: none;
}`;;
export const md_hide = css`${__root}; @media (min-width: 52em) and (max-width: 64em) {
display: none;
}`;;
export const lg_hide = css`${__root}; @media (min-width: 64em) {
display: none;
}`;;
export const display_none = css`${__root}; display: none;`;;;
  