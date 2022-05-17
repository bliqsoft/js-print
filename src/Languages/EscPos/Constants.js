// https://www.sewoo.eu/wordpress/n/ESCPOS_command_manual.pdf
// https://escpos.readthedocs.io/en/latest/index.html

const chr = num => String.fromCharCode(num);

export default {
    /**
     * ASCII null control character
     */
    NUL: chr(0),

    /**
     * ASCII end of transmission control character
     */
    EOT: chr(4),

    /**
     * ASCII linefeed control character
     */
    LF: chr(10),

    /**
     * ASCII escape control character
     */
    ESC: chr(27),

    /**
     * ASCII form separator control character
     */
    FS: chr(28),

    /**
     * ASCII form feed control character
     */
    FF: chr(12),

    /**
     * ASCII group separator control character
     */
    GS: chr(29),

    /**
     * ASCII data link escape control character
     */
    DLE: chr(16),

    BARCODE_UPCA: 'A', // Dec: 65,
    BARCODE_UPCE: 'B', // Dec: 66,
    BARCODE_JAN13: 'C', // Dec: 67,
    BARCODE_JAN8: 'D', // Dec: 68,
    BARCODE_CODE39: 'E', // Dec: 69,
    BARCODE_ITF: 'F', // Dec: 70,
    BARCODE_CODABAR: 'G', // Dec: 71,
    BARCODE_CODE93: 'H', // Dec: 72,
    BARCODE_CODE128: 'I', // Dec: 73,

    JUSTIFY_LEFT: '0', // Dec: 48
    JUSTIFY_CENTER: '1', // Dec: 49
    JUSTIFY_RIGHT: '2', // Dec: 50

    BOLD_ON: '1', // Dec: 49
    BOLD_OFF: '0', // Dec: 48

    BARCODE_TEXT_NONE: '0', // Dec: 48
    BARCODE_TEXT_ABOVE: '1', // Dec: 49
    BARCODE_TEXT_BELOW: '2', // Dec: 50
    // BARCODE_TEXT_ABOVE_BELOW: '3', // Dec: 51

    CUT_FULL: 'A', // Dec: 65,
    CUT_PARTIAL: 'B', // Dec: 66,

    QR_ECLEVEL_L: '0', // Dec: 48
    QR_ECLEVEL_M: '1', // Dec: 49
    QR_ECLEVEL_Q: '2', // Dec: 50
    QR_ECLEVEL_H: '3', // Dec: 51

    QR_MODEL_1: '1', // Dec: 49
    QR_MODEL_2: '2', // Dec: 50

    FONT_A: '0', // Dec: 48
    FONT_B: '1', // Dec: 49

    // /**
    //  * Use the first color (usually black), when used with Printer::setColor
    //  */
    // COLOR_1: 0,

    // /**
    //  * Use the second color (usually red or blue), when used with Printer::setColor
    //  */
    // COLOR_2: 1,

    // /**
    //  * Use Font C, when used with Printer::setFont
    //  */
    // FONT_C: 2,

    // /**
    //  * Use default (high density) image size, when used with Printer::graphics,
    //  * Printer::bitImage or Printer::bitImageColumnFormat
    //  */
    // IMG_DEFAULT: 0,

    // /**
    //  * Use lower horizontal density for image printing, when used with Printer::graphics,
    //  * Printer::bitImage or Printer::bitImageColumnFormat
    //  */
    // IMG_DOUBLE_WIDTH: 1,

    // /**
    //  * Use lower vertical density for image printing, when used with Printer::graphics,
    //  * Printer::bitImage or Printer::bitImageColumnFormat
    //  */
    // IMG_DOUBLE_HEIGHT: 2,

    // /**
    //  * Use Font A, when used with Printer::selectPrintMode
    //  */
    // MODE_FONT_A: 0,

    // /**
    //  * Use Font B, when used with Printer::selectPrintMode
    //  */
    // MODE_FONT_B: 1,

    // /**
    //  * Use text emphasis, when used with Printer::selectPrintMode
    //  */
    // MODE_EMPHASIZED: 8,

    // /**
    //  * Use double height text, when used with Printer::selectPrintMode
    //  */
    // MODE_DOUBLE_HEIGHT: 16,

    // /**
    //  * Use double width text, when used with Printer::selectPrintMode
    //  */
    // MODE_DOUBLE_WIDTH: 32,

    // /**
    //  * Underline text, when used with Printer::selectPrintMode
    //  */
    // MODE_UNDERLINE: 128,

    // /**
    //  * Indicates standard PDF417 code
    //  */
    // PDF417_STANDARD: 0,

    // /**
    //  * Indicates truncated PDF417 code
    //  */
    // PDF417_TRUNCATED: 1,

    // /**
    //  * Indicates micro QR code when used with Printer::qrCode
    //  */
    // QR_MICRO: 3,

    // /**
    //  * Indicates no underline when used with Printer::setUnderline
    //  */
    // UNDERLINE_NONE: 0,

    // /**
    //  * Indicates single underline when used with Printer::setUnderline
    //  */
    // UNDERLINE_SINGLE: 1,

    // /**
    //  * Indicates double underline when used with Printer::setUnderline
    //  */
    // UNDERLINE_DOUBLE: 2,
}