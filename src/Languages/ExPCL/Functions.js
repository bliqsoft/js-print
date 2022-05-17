// https://honeywellsps.my.salesforce.com/sfc/p/#00000000SK3U/a/A00000000KYg/pn4ll5Mn8cC5Mz93ZaO8FJB_Psndz.IQo4akMhW0L3o

import Constants from './Constants';

const chr = num => String.fromCharCode(num);

export default {
    /**
     * ESC @
     * Reset printer and load default setup
     * This command initializes all programmable attributes to factory default values. Custom programming, present in flash memory, will be restored as well, overriding the factory defaults. 
     */
    escInit: () => Constants.ESC + '@',

    /**
     * ESC F n
     * Right to Left and Left to Right Printing
     * This command causes the printer to change the direction in which characters are printed. The printer direction default mode is set to Left to Right.
     */
    escF: (n) => Constants.ESC + 'F' + n,

    /**
     * ESC U n
     * Emphasized Printing Mode
     * The Emphasized printing mode command will cause the printer to print text with bold appearance.
     */
    escU: (n) => Constants.ESC + 'U' + n,

    // /**
    //  * ESC P $
    //  * Enable Buffer Mode
    //  * This command selects the printer buffer mode.
    //  */
    // escPb: () => Constants.ESC + 'P' + '$',

    // /**
    //  * ESC P #
    //  * Disable Buffer Mode (Select Online Mode)
    //  * This command disables the printer buffer mode and selects the online mode. The online mode is the default mode of operation of the printer.
    // */
    // escPo: () => Constants.ESC + 'P' + '#',

    /**
     * ESC z t n h data CR LF
     * Print Bar Code
     * This command will print a barcode without human readable text. The following table describes the Bar Code command structure.
     * 
     * @param {*} t barcode type
     *    1: Code 39
     *    2: Code 128,UCC/EAN-128
     *    3: Interleaved 2 of 5
     *    4: UPC/EAN/JAN
     *    5: Codabar
     *    9: PDF417
     * @param {*} n number of character bytes in data array. 1 ≤ n ≤ 255
     * @param {*} h height of bar code printed in increments of 0.125mm
     * @param {*} data n characters to be encoded in the barcode
     */
    escz: (t, h, data) => Constants.ESC + 'z' + t + chr(data.length) + chr(h) + data,// + Constants.CR + Constants.LF,

    /**
     * ESC Z t n h data CR LF
     * Print Bar Code
     * This command will print a barcode with human readable text. The following table describes the Bar Code command structure.
     * 
     * @param {*} t barcode type
     *    1: Code 39
     *    2: Code 128,UCC/EAN-128
     *    3: Interleaved 2 of 5
     *    4: UPC/EAN/JAN
     *    5: Codabar
     *    9: PDF417
     * @param {*} n number of character bytes in data array. 1 ≤ n ≤ 255
     * @param {*} h height of bar code printed in increments of 0.125mm
     * @param {*} dta: n characters to be encoded in the barcode
     */
    escZ: (t, h, data) => Constants.ESC + 'Z' + t + chr(data.length) + chr(h) + data + Constants.CR + Constants.LF,

    /**
     * ESC K n CR
     * Character Size and Line Spacing
     * Select Character Pitch: Mode 1
     * This command sets the font size based on the number of character per inch. The parameter n can have the following values:
     */
    escK: (n) => Constants.ESC + 'K' + n + Constants.CR,
}