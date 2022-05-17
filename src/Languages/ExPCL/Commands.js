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
    reset = () => this.bold(false);
    start = () => this.write(Constants.CAN);
    end = () => this.write(Constants.CR) && this.write(Constants.LF);

    text = (...data) => this.write(Common.normalize(data.join(''))).newline();
    textSpaceBetween = (...data) => this.write(Common.textSpaceBetween(this.columns, ...data)).newline();
    separator = (char = '=') => this.write(Common.repeat(this.columns, char)).newline();

    align = () => this;
    bold = (on = true) => this.write(Functions.escU(on ? Constants.BOLD_ON : Constants.BOLD_OFF));
    newline = () => this.write(Constants.LF);
    feed = (lines) => this.write(Constants.LF.repeat(lines));
    cut = () => this;
    pulse = () => this;
    font = (num) => {
        if (num === Common.FontA) {
            return this.write(Functions.escK(Constants['FONT_K' + '1']))
        } else if (num === Common.FontB) {
            return this.write(Functions.escK(Constants['FONT_K' + '2']))
        }
        return this;
    }

    barcodeCode128 = (code, printCode = false, heightDots = 56) => this.write(
        Functions[printCode ? 'escZ' : 'escz'](Constants.BARCODE_CODE128, heightDots, code)
    );

    // qr = (qr, dots = 6, level = Constants.QR_ECLEVEL_M) => {
    //     const len = qr.length + 3;
    //     const size1 = Common.chr(len % 256);
    //     const size0 = Common.chr(Math.floor(len / 256));
    //     return this.write(Functions.qrFn65() + Functions.qrFn67(dots) + Functions.qrFn69(level) + Functions.qrFn80(size1, size0, qr) + Functions.qrFn81());
    // }
}

export default Commands;


        // if (this._data[this._data.length - 1].substr(-1) !== Constants.LF) {
        //     // el último caracter debe ser LF para que se envíe el último comando
        //     this.write(Constants.LF);
        //     console.table('Agregar');
        // }
