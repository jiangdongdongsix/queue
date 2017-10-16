import React from 'react';
import PropTypes from 'prop-types';
import QRCodeImpl from 'qr.js/lib/QRCode';
import ErrorCorrectLevel from 'qr.js/lib/ErrorCorrectLevel';

const getBackingStorePixelRatio = ctx => ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1

export default class QRCode extends React.PureComponent {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.update();
    }
    componentDidUpdate() {
        this.update();
    }
    update() {
        const _props = this.props;
        const value = _props.value;
        const size = _props.size;
        const level = _props.level;
        const bgColor = _props.bgColor;
        const fgColor = _props.fgColor;

        const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
        qrcode.addData(value);
        qrcode.make();

        if (this._canvas != null) {
            const canvas = this._canvas;

            const ctx = canvas.getContext('2d');
            if (!ctx) {
                return;
            }
            const cells = qrcode.modules;
            const tileW = size / cells.length;
            const tileH = size / cells.length;
            const scale = (window.devicePixelRatio || 1) / getBackingStorePixelRatio(ctx);
            canvas.height = canvas.width = size * scale;
            ctx.scale(scale, scale);
            cells.forEach((row, rdx) => {
                row.forEach((cell, cdx) => {
                    ctx && (ctx.fillStyle = cell ? fgColor : bgColor);
                    const w = Math.ceil((cdx + 1) * tileW) - Math.floor(cdx * tileW);
                    const h = Math.ceil((rdx + 1) * tileH) - Math.floor(rdx * tileH);
                    ctx && ctx.fillRect(Math.round(cdx * tileW), Math.round(rdx * tileH), w, h);
                });
            });
        }
    }
    render() {
        const { size } = this.props
        return <canvas ref={_ref => this._canvas = _ref} style={{height: size, width: size}} ></canvas>
    }
}

Object.defineProperty(QRCode, 'defaultProps', {
    enumerable: true,
    writable: true,
    value: {
        size: 128,
        level: 'L',
        bgColor: '#FFFFFF',
        fgColor: '#000000'
    }
});
Object.defineProperty(QRCode, 'propTypes', {
    enumerable: true,
    writable: true,
    value: {
        value: PropTypes.string.isRequired,
        size: PropTypes.any,
        level: PropTypes.oneOf(['L', 'M', 'Q', 'H']),
        bgColor: PropTypes.string,
        fgColor: PropTypes.string
    }
});