import React, { createElement, Fragment, useEffect } from 'react';
import { NumbersSelect } from './NumbersSelect/Base.js';
import './NumbersSelect/Base.css';
import { renderToStaticMarkup } from 'react-dom/server';

const HTML = (props) => <>{props.children}</>;

HTML.Div = (props) => {
    return createElement(
        'div',
        props,
        props.children
    );
};

HTML.Span = (props) => {
    return createElement(
        'span',
        props,
        props.children
    );
};

HTML.P = (props) => {
    return createElement(
        'p',
        props,
        props.children
    );
};

HTML.Br = (props) => {
    return createElement(
        'br',
        props,
        props.children
    );
};

HTML.Hr = (props) => {
    return createElement(
        'hr',
        props,
        props.children
    );
};

HTML.Address = (props) => {
    return createElement(
        'address',
        props,
        props.children
    );
};

HTML.Article = (props) => {
    return createElement(
        'article',
        props,
        props.children
    );
};

HTML.Aside = (props) => {
    return createElement(
        'aside',
        props,
        props.children
    );
};

HTML.Footer = (props) => {
    return createElement(
        'footer',
        props,
        props.children
    );
};

HTML.Header = (props) => {
    return createElement(
        'header',
        props,
        props.children
    );
};

HTML.HGroup = (props) => {
    return createElement(
        'hgroup',
        props,
        props.children
    );
};

HTML.Main = (props) => {
    return createElement(
        'main',
        props,
        props.children
    );
};

HTML.Nav = (props) => {
    return createElement(
        'nav',
        props,
        props.children
    );
};

HTML.Section = (props) => {
    return createElement(
        'section',
        props,
        props.children
    );
};

HTML.Search = (props) => {
    return createElement(
        'search',
        props,
        props.children
    );
};

HTML.H1 = (props) => {
    return createElement(
        'h1',
        props,
        props.children
    );
};

HTML.H2 = (props) => {
    return createElement(
        'h2',
        props,
        props.children
    );
};

HTML.H3 = (props) => {
    return createElement(
        'h3',
        props,
        props.children
    );
};

HTML.H4 = (props) => {
    return createElement(
        'h4',
        props,
        props.children
    );
};

HTML.H5 = (props) => {
    return createElement(
        'h5',
        props,
        props.children
    );
};

HTML.H6 = (props) => {
    return createElement(
        'h6',
        props,
        props.children
    );
};

HTML.BlockQuote = (props) => {
    return createElement(
        'blockquote',
        props,
        props.children
    );
};

HTML.Dd = (props) => {
    return createElement(
        'dd',
        props,
        props.children
    );
};

HTML.Dl = (props) => {
    return createElement(
        'dl',
        props,
        props.children
    );
};

HTML.Dt = (props) => {
    return createElement(
        'dt',
        props,
        props.children
    );
};

HTML.Figure = (props) => {
    return createElement(
        'figure',
        props,
        props.children
    );
};

HTML.FigCaption = (props) => {
    return createElement(
        'figcaption',
        props,
        props.children
    );
};

HTML.Ol = (props) => {
    return createElement(
        'ol',
        props,
        props.children
    );
};

HTML.Ul = (props) => {
    return createElement(
        'ul',
        props,
        props.children
    );
};

HTML.Menu = (props) => {
    return createElement(
        'menu',
        props,
        props.children
    );
};

HTML.Li = (props) => {
    return createElement(
        'li',
        props,
        props.children
    );
};

HTML.Pre = (props) => {
    return createElement(
        'pre',
        props,
        props.children
    );
};

HTML.A = (props) => {
    return createElement(
        'a',
        props,
        props.children
    );
};

HTML.Abbr = (props) => {
    return createElement(
        'abbr',
        props,
        props.children
    );
};

HTML.B = (props) => {
    return createElement(
        'b',
        props,
        props.children
    );
};

HTML.Bdi = (props) => {
    return createElement(
        'bdi',
        props,
        props.children
    );
};

HTML.Bdo = (props) => {
    return createElement(
        'bdo',
        props,
        props.children
    );
};

HTML.Cite = (props) => {
    return createElement(
        'cite',
        props,
        props.children
    );
};

HTML.Code = (props) => {
    return createElement(
        'code',
        props,
        props.children
    );
};

HTML.Data = (props) => {
    return createElement(
        'data',
        props,
        props.children
    );
};

HTML.Dfn = (props) => {
    return createElement(
        'dfn',
        props,
        props.children
    );
};

HTML.Em = (props) => {
    return createElement(
        'em',
        props,
        props.children
    );
};

HTML.I = (props) => {
    return createElement(
        'i',
        props,
        props.children
    );
};

HTML.Kbd = (props) => {
    return createElement(
        'kbd',
        props,
        props.children
    );
};

HTML.Mark = (props) => {
    return createElement(
        'mark',
        props,
        props.children
    );
};

HTML.Q = (props) => {
    return createElement(
        'q',
        props,
        props.children
    );
};

HTML.Ruby = (props) => {
    return createElement(
        'ruby',
        props,
        props.children
    );
};

HTML.Rt = (props) => {
    return createElement(
        'rt',
        props,
        props.children
    );
};

HTML.Rp = (props) => {
    return createElement(
        'rp',
        props,
        props.children
    );
};

HTML.S = (props) => {
    return createElement(
        's',
        props,
        props.children
    );
};

HTML.Small = (props) => {
    return createElement(
        'small',
        props,
        props.children
    );
};

HTML.Strong = (props) => {
    return createElement(
        'strong',
        props,
        props.children
    );
};

HTML.Sub = (props) => {
    return createElement(
        'sub',
        props,
        props.children
    );
};

HTML.Sup = (props) => {
    return createElement(
        'sup',
        props,
        props.children
    );
};

HTML.Time = (props) => {
    return createElement(
        'time',
        props,
        props.children
    );
};

HTML.U = (props) => {
    return createElement(
        'u',
        props,
        props.children
    );
};

HTML.Var = (props) => {
    return createElement(
        'var',
        props,
        props.children
    );
};

HTML.Wbr = (props) => {
    return createElement(
        'wbr',
        props,
        props.children
    );
};

HTML.Area = (props) => {
    return createElement(
        'area',
        props,
        props.children
    );
};

HTML.Audio = (props) => {
    return createElement(
        'audio',
        props,
        props.children
    );
};

HTML.Img = (props) => {
    return createElement(
        'img',
        props,
        props.children
    );
};

HTML.Map = (props) => {
    return createElement(
        'map',
        props,
        props.children
    );
};

HTML.Track = (props) => {
    return createElement(
        'track',
        props,
        props.children
    );
};

HTML.Video = (props) => {
    return createElement(
        'video',
        props,
        props.children
    );
};

HTML.Embed = (props) => {
    return createElement(
        'embed',
        props,
        props.children
    );
};

HTML.FencedFrame = (props) => {
    return createElement(
        'fencedframe',
        props,
        props.children
    );
};

HTML.IFrame = (props) => {
    return createElement(
        'iframe',
        props,
        props.children
    );
};

HTML.Object = (props) => {
    return createElement(
        'object',
        props,
        props.children
    );
};

HTML.Picture = (props) => {
    return createElement(
        'picture',
        props,
        props.children
    );
};

HTML.Portal = (props) => {
    return createElement(
        'portal',
        props,
        props.children
    );
};

HTML.Source = (props) => {
    return createElement(
        'source',
        props,
        props.children
    );
};

HTML.Svg = (props) => {
    return createElement(
        'svg',
        props,
        props.children
    );
};

HTML.Math = (props) => {
    return createElement(
        'math',
        props,
        props.children
    );
};

HTML.Canvas = (props) => {
    return createElement(
        'canvas',
        props,
        props.children
    );
};

HTML.NoScript = (props) => {
    return createElement(
        'noscript',
        props,
        props.children
    );
};

HTML.Script = (props) => {
    return createElement(
        'script',
        props,
        props.children
    );
};

HTML.Del = (props) => {
    return createElement(
        'del',
        props,
        props.children
    );
};

HTML.Ins = (props) => {
    return createElement(
        'ins',
        props,
        props.children
    );
};

HTML.Table = (props) => {
    return createElement(
        'table',
        props,
        props.children
    );
};

HTML.Caption = (props) => {
    return createElement(
        'caption',
        props,
        props.children
    );
};

HTML.Col = (props) => {
    return createElement(
        'col',
        props,
        props.children
    );
};

HTML.ColGroup = (props) => {
    return createElement(
        'colgroup',
        props,
        props.children
    );
};

HTML.TBody = (props) => {
    return createElement(
        'tbody',
        props,
        props.children
    );
};

HTML.Td = (props) => {
    return createElement(
        'td',
        props,
        props.children
    );
};

HTML.TFoot = (props) => {
    return createElement(
        'tfoot',
        props,
        props.children
    );
};

HTML.Th = (props) => {
    return createElement(
        'th',
        props,
        props.children
    );
};

HTML.THead = (props) => {
    return createElement(
        'thead',
        props,
        props.children
    );
};

HTML.Tr = (props) => {
    return createElement(
        'tr',
        props,
        props.children
    );
};

HTML.Button = (props) => {
    let options = {...props};
    let type = options['type'] ?? 'secondary';
    if (type === 'default') {
        type = 'secondary';
    }
    options['type'] = options['input_type'] ?? options['type'] ?? 'button';
	options['value'] = options['value'] ?? 'Submit';
    options['class'] = (options['class'] || '') + ' btn btn-' + type;
    return HTML.Input({tag: 'input', ...options});
};

HTML.Button2 = (props) => {
    let options = {...props};
    let type = options['type'] ?? 'secondary';
    if (type === 'default') {
        type = 'secondary';
    }
    options['type'] = options['input_type'] ?? options['type'] ?? 'submit';
    let value = options['value'] ?? 'Submit';
    options['value'] = 1;
    if (!options.children) {
        options.children = [];
    }
    options.children.push(value);
	options['class'] = (options['class'] || '') + ' btn btn-' + type;
    return HTML.Tag({tag: 'button', ...options});
};

HTML.DataList = (props) => {
    return createElement(
        'datalist',
        props,
        props.children
    );
};

HTML.FieldSet = (props) => {
    return createElement(
        'fieldset',
        props,
        props.children
    );
};

HTML.Form = (props) => {
    return createElement(
        'form',
        props,
        props.children
    );
};

HTML.Input = (props) => {
    return HTML.Tag({tag: "input", ...props, self_closing: true});
};

HTML.Label = (props) => {
    return HTML.Tag({tag: "label", ...props});
};

HTML.Legend = (props) => {
    return createElement(
        'legend',
        props,
        props.children
    );
};

HTML.Meter = (props) => {
    return createElement(
        'meter',
        props,
        props.children
    );
};

HTML.Output = (props) => {
    return createElement(
        'output',
        props,
        props.children
    );
};

HTML.Progress = (props) => {
    return createElement(
        'progress',
        props,
        props.children
    );
};

HTML.TextArea = (props) => {
    return createElement(
        'textarea',
        props,
        props.children
    );
};

HTML.Details = (props) => {
    return createElement(
        'details',
        props,
        props.children
    );
};

HTML.Dialog = (props) => {
    return createElement(
        'dialog',
        props,
        props.children
    );
};

HTML.Summary = (props) => {
    return createElement(
        'summary',
        props,
        props.children
    );
};

const HTMLSelect = (props) => {
    let children = props.children;
    let settings = { ...props };
    // determine ID
    if (!settings.id && settings.name) {
        settings.id = settings.name;
    }
    if (!settings.id) {
        settings.id = 'numbers_select_random_generated_id_' + Math.round(Math.random() * 1000) + '_' + Math.round(Math.random() * 1000) + '_' + Math.round(Math.random() * 1000);
    }
    // mounting
    useEffect(() => {
        if (settings.numbers) {
            //const { NumbersSelect } = require('./Components/Select/Numbers/Base.js');
            NumbersSelect(settings);
        }
    }, []);
    if (settings.options) {
        children = [];
        let options = settings.options;
        for (let k in settings.options) {
            options[k]['value'] = k;
            // if its object we expect to have name in there
            if (typeof options[k] === 'object') {
                options[k]['children'] = options[k]['name'];
            } else {
                options[k]['children'] = options[k];
            }
            options[k]['key'] = k;
            // todo: add loc
            children.push(HTML.Option(options[k]));
        }
    }
    return createElement(
        'select',
        settings,
        children
    );
};

const HTMLOption = (props) => {
    return createElement(
        'option',
        props,
        props.children
    );
};

const HTMLOptGroup = (props) => {
    return createElement(
        'optgroup',
        props,
        props.children
    );
};

HTML.Select = HTMLSelect;
HTML.Option = HTMLOption;
HTML.OptGroup = HTMLOptGroup;

const arrayReverseObj = obj => Object.keys(obj).reverse().map(key=> ({ ...obj[key] }));

const percentageToGridColumns = (field_sizes, options) => {
    options = options || {};
    options['grid_columns'] = options['grid_columns'] || 12;
    let step = 100 / options['grid_columns'];
    let total = 0;
    let empty = 0;
    let arr = {
        percent: {},
        final: {},
        temp: {},
        grouped: {}
    };
    for (let k in field_sizes) {
        arr['percent'][k] = field_sizes[k] ? field_sizes[k] : 0;
        if (field_sizes[k]) {
            total+= field_sizes[k];
        } else {
            empty+= 1;
        }
    }
    // if we have empty columns and percent is less than 100 we prepopulate
    if (total < 100 && empty !== 0) {
        let temp = (100 - total) / empty;
        for (let k in arr['percent']) {
            if (arr['percent'][k] == 0) {
                arr['percent'][k] = temp;
                total+= temp;
            }
        }
    }
    // we need to rescale if percent is more than 100
    if (total > 100) {
        let scale = 100 / total;
        for (let k in arr['percent']) {
            arr['percent'][k] = arr['percent'][k] * scale;
        }
    }
    // sort in ascending order
    arr['percent'] = Object.entries(arr['percent'])
        .sort(([,a],[,b]) => a-b)
        .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    let cells_left = options['grid_columns'];
    for (let k in arr['percent']) {
        if (arr['percent'][k] <= step) {
            arr['percent'][k] = 1;
            cells_left--;
        } else {
            let rounded = Math.floor(arr['percent'][k] / step);
            let leftover = arr['percent'][k] - rounded * step;
            arr['final'][k] = rounded;
            cells_left-= rounded;
            if (leftover > 0) {
                arr['temp'][k] = leftover;
            }
        }
    }
    // if we have cells left we distribute
    if (cells_left > 0) {
        // if we got here we distribute on by one
        if (cells_left > 0) {
            arr['temp'] = Object.entries(arr['temp'])
                .sort(([,a],[,b]) => a-b)
                .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});
            for (let k in arr['temp']) {
                arr['final'][k]++;
                cells_left--;
                delete arr['temp'][k];
                if (cells_left == 0) {
                    break;
                }
            }
        }
    }
    return {
        success: true,
        error: [],
        data: arr['final'],
        percent: arr['percent']
    };
};
HTML.PercentageToGridColumns = percentageToGridColumns;

const Grid = (options) => {
    const rtl = options['rtl'] || false;
    const grid_columns = 12;
    let rows = options['options'] || {};
    delete options['options'];
    options['cell_class'] = options['cell_class'] || 'col-sm-';
    if (!options['cell_class'].endsWith('-')) {
        options['cell_class']+= '-';
    }
    let result = '';
    for (let k in rows) {
        // we need to determine field sizes
        let field_sizes = [];
        let row_class = '';
        let flag_have_label = false;
        for (let k2 in rows[k]) {
            for (let k3 in rows[k][k2]) {
                if (rows[k][k2][k3]['options']['percent']) {
                    field_sizes.push(parseInt(rows[k][k2][k3]['options']['percent']));
                } else {
                    field_sizes.push(null);
                }
                if (rows[k][k2][k3]['row_class']) {
                    row_class+= ' ' + rows[k][k2][k3]['row_class'];
                }
                if ((rows[k][k2][k3]['label'] ?? '') !== '') {
                    flag_have_label = true;
                }
            }
        }
        let field_new_sizes = HTML.PercentageToGridColumns(field_sizes);
        // count number of fields
        let count_fields = Object.values(rows[k]).length;
        result+= '<div class="row' + row_class + '">';
        // we need to fill up empty columns if rtl
        if (rtl) {
            let index = 0;
            let current_grid_columns = 0;
            for (let k2 in rows[k]) {
                for (let k3 in rows[k][k2]) {
                    // if we are mannually set field sizes we skip
                    if (rows[k][k2][k3]['options']['field_size']) {
                        current_grid_columns = 12;
                        break;
                    }
                    current_grid_columns+= field_new_sizes['data'][index];
                    rows[k][k2][k3]['options']['field_size'] = options['cell_class'] + field_new_sizes['data'][index]; // a must
                    index++;
                }
            }
            if (current_grid_columns != grid_columns) {
                rows[k]['__empty_column_fill__']['__empty_column_fill__'] = {
                    value: ' ',
                    options: {
                        field_size: options['cell_class'] + (grid_columns - current_grid_columns) // a must
                    }
                };
                field_new_sizes['data'][index] = grid_columns - current_grid_columns;
            }
            rows[k] = arrayReverseObj(rows[k]);
        }
        // loop though each field and render it
        let index = 0;
        for (let k2 in rows[k]) {
            let flag_first_field = true;
            if (rtl) {
                rows[k][k2] = arrayReverseObj(rows[k][k2]);
            }
            for (let k3 in rows[k][k2]) {
                let error_class = '';
                if (rows[k][k2][k3]['error'] && rows[k][k2][k3]['error']['type']) {
                    if (rows[k][k2][k3]['error']['type'] == 'danger') {
                        rows[k][k2][k3]['error']['type'] = 'error';
                    }
                    error_class = 'has-' + rows[k][k2][k3]['error']['type'];
                }
                // style
                let style = '';
                if (rows[k][k2][k3]['options']['style']) {
                    style = ' style="' + rows[k][k2][k3]['options']['style'] + '"';
                }
                let field_size = rows[k][k2][k3]['options']['field_size'] ?? (options['cell_class'] + field_new_sizes['data'][index]);
                let element_class = rows[k][k2][k3]['class'] ?? '';
                result+= '<div class="' + field_size + ' form-group ' + error_class + ' ' + element_class + '"' + style + '>';
                    // label
                    if (flag_first_field) {
                        if ((rows[k][k2][k3]['label'] ?? '') !== '') {
                            // if label is not wrapped into label we autowrap
                            const label = new String(rows[k][k2][k3]['label']);
                            if (label.search('<label') == -1) {
                                rows[k][k2][k3]['label'] = HTML.Label({value: rows[k][k2][k3]['label'], return_html: true});
                            }
                            result+= rows[k][k2][k3]['label'];
                        } else if (flag_have_label) {
                            result+= '<label>&nbsp;</label>';
                        }
                        flag_first_field = false;
                    } else {
                        if (flag_have_label) {
                            result+= '<label>&nbsp;</label>';
                        }
                    }
                    result+= rows[k][k2][k3]['value'] ?? '';
                    // error messages
                    if (rows[k][k2][k3]['error'] && rows[k][k2][k3]['error']['message']) {
                        result+= rows[k][k2][k3]['error']['message'];
                    }
                    // description after error message
                    if (rows[k][k2][k3]['description']) {
                        result+= HTML.Text({type: 'muted', value: rows[k][k2][k3]['description'], return_html: true});
                    }
                result+= '</div>';
                index++;
            }
        }
        result+= '</div>';
    }
    let outer_class = ['container-fluid'];
    if (options['class']) {
        outer_class.push(options['class']);
    }
    return '<div class="' + outer_class.join(' ') + '">' + result + '</div>';
};
HTML.Grid = Grid;

const Text = (props) => {
    let options = props;
    if (!props.children) {
        props.children = [];
    }
    options['tag'] = options['tag'] ?? 'p';
    options['type'] = 'text-' + (options['type'] ?? 'primary');
    options['class'] = (options['class'] ?? '') + ' ' + options['type'];
    if (options['value']) {
        props.children.push(<React.Fragment>{options['value']}</React.Fragment>);
    }
    return createElement(
        options['tag'],
        options,
        props.children
    );
};
HTML.Text = Text;

const Separator = (props) => {
    let value = props.value ?? null;
    let icon = props.icon ?? null;
    let result = '';
    result+= '<table width="100%">';
        result+= '<tr><td width="50%"><hr/></td>';
            if (value || icon) {
                // todo add Name method
                result+= '<td width="1%" nowrap><b>' + HTML.Name(value, icon) + '</b></td>';
            }
        result+= '<td width="50%"><hr/></td></tr>';
    result+= '</table>';
    return result;
};
HTML.Separator = Separator;

const Mandatory = (props) => {
    let options = {...props};
    let asterisk = '';
    switch (options['type'] ?? '') {
        case 'mandatory':
            asterisk = '<b style="color: red;" title="' + 'Mandatory' + '">*</b>';
            options['tag'] = 'b';
            break;
        case 'conditional':
            asterisk = '<b style="color: green;" title="' + 'Conditional' + '">*</b>';
            options['tag'] = 'b';
            break;
        default:
            options['tag'] = 'span';
    }
    // if we are formatting value
    if (options['value']) {
        if (options['value']['value']) {
            options['value']['value'] = options['value']['value'] + ' ' + asterisk + (options['prepend'] ?? '');
        } else {
            options['value'] = {
                value: options['value'] + ' ' + asterisk + (options['prepend'] ?? '')
            };
        }
        options['value']['tag'] = options['tag'];
        return HTML.Tag(options['value']);
    } else {
        return asterisk;
    }
};
HTML.Mandatory = Mandatory;

const Tag = (props) => {
    let options = {...props};
    let tag = options['tag'] || 'div';
    delete options['tag'];
    if (options['class']) {
        options['className'] = options['class'];
    }
    delete options['class'];
    let as_html = false;
    if (options['return_html']) {
        as_html = true;
    }
    if (options['self_closing']) {
        delete options['self_closing'];
    } else {
		if (options['have_html']) {
			delete options['have_html'];
			options['dangerouslySetInnerHTML'] = {};
			options['dangerouslySetInnerHTML']['__html'] = options['value'];
		} else if (options['value'] && !options.children) {
            if (!options.children) {
                options.children = [];
            }
            options.children.push(<Fragment>{options['value']}</Fragment>);
            delete options['value'];
        }
    }
    delete options['return_html'];
    let result = createElement(
        tag,
        options,
        options.children
    );
    if (as_html) {
        return renderToStaticMarkup(result);
    } else {
        return result;
    }
};
HTML.Tag = Tag;

HTML.Component = (options) => {
	const TagComponent = options['component'];
	delete options['component'];
	return <TagComponent {...options} />;
};

const Icon = (options) => {
    options['class'] = options['class'] ?? '';
    options['tag'] = options['tag'] ?? 'i';
    if (options['type'].indexOf('material-symbols-outlined') != -1) {
        let value = options['type'].replace(/(material-symbols-outlined)|(light)|(regular)|(bold)|(fill)|(animated)|(dark)|(inactive)/, '').trim();
        options['value'] = value;
        options['class']+= options['type'].replace(value, '');
    } else {
        options['class']+= options['type'];
    }
    delete options['type'];
    return HTML.Tag(options);
}
HTML.Icon = Icon;

export default HTML;
export {
    HTML
};