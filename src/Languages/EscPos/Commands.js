import Constants from './Constants';
import Functions from './Functions';
import Common from '../../Utils/Common';

class Commands {
    constructor() {
        this.columns = 0;
        this._data = [];
    }

    columns = () => this.columns;

    data = () => this._data;
    write = (data) => {
        this._data.push(data);
        return this;
    }
    writeAll = (data) => {
        this._data.push(...data);
        return this;
    }

    init = (columns) => {
        this.columns = columns;
        this._data = [];
        return this;
    };
    reset = () => this.align('L') && this.bold(false);
    start = () => this.write(Functions.escInit());
    end = () => this;

    text = (...data) => this.write(Common.normalize(data.join('')) + Constants.LF); // .newline();
    textSpaceBetween = (...data) => this.write(Common.textSpaceBetween(this.columns, ...data) + Constants.LF); // .newline();
    separator = (char = '=') => this.write(Common.repeat(this.columns, char) + Constants.LF); // .newline();

    align = (type) => this.write(
        Functions.esca(type === 'L' ? Constants.JUSTIFY_LEFT : (type === 'R' ? Constants.JUSTIFY_RIGHT : Constants.JUSTIFY_CENTER))
    );
    bold = (on = true) => this.write(Functions.escE(on ? Constants.BOLD_ON : Constants.BOLD_OFF));
    newline = () => this.write(Constants.LF);
    feed = (lines) => this.write(Constants.LF.repeat(lines));
    // feed = (lines) => this.write(lines > 0 ? Functions.escd(lines) : Constants.LF);
    cut = (full = true) => this.write(Functions.gsV(full ? Constants.CUT_FULL : Constants.CUT_PARTIAL, 0));
    pulse = () => this.write(Functions.escp(0, 50, 250));

    font = (num) => {
        if (num === Common.FontA) {
            return this.write(Functions.escM(Constants.FONT_A))
        } else if (num === Common.FontB) {
            return this.write(Functions.escM(Constants.FONT_B))
        }
        return this;
    }

    barcodeCode128 = (code, printCode = false, heightDots = 56, widthMultiplier = 2) => this.write(
        Functions.gsh(heightDots)
        + Functions.gsw(widthMultiplier)
        + (printCode ? (Functions.gsH(Constants.BARCODE_TEXT_BELOW) + Functions.gsf(Constants.FONT_A)) : '')
        + Functions.gsk(Constants.BARCODE_CODE128, '{B' + code)
    );
    barcode = (code, height = 56, type = Constants.BARCODE_CODE128, pos = Constants.BARCODE_TEXT_NONE, font = Constants.FONT_A) => this.write(
        Functions.gsh(height) + Functions.gsH(pos) + Functions.gsf(font) + Functions.gsk(type, code)
    );
    qr = (qr, dots = 6, level = Constants.QR_ECLEVEL_M) => {
        const len = qr.length + 3;
        const size1 = Common.chr(len % 256);
        const size0 = Common.chr(Math.floor(len / 256));
        return this.write(Functions.qrFn65() + Functions.qrFn67(dots) + Functions.qrFn69(level) + Functions.qrFn80(size1, size0, qr) + Functions.qrFn81());
    }
}

export default Commands;
