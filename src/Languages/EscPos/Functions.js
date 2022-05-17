// https://www.sewoo.eu/wordpress/n/ESCPOS_command_manual.pdf

import Constants from './Constants';

const chr = num => String.fromCharCode(num);

export default {
    /**
     * ESC @
     * Initialize printer
     */
    escInit: () => Constants.ESC + '@',

    /**
     * CR
     * Print and carriage return
     */
    cr: () => chr(13), // "\x0d"

    /**
     * GS V
     * Select cut mode and cut paper
     */
    gsV: (m, n) => Constants.GS + 'V' + chr(m) + chr(n),

    /**
     * ESC p
     * Generate pulse
     * 
     * m:
     * 0, 48 Drawer kick-out connector pin2.
     * 1, 49 Drawer kick-out connector pin5.
     */
    escp: (m, t1, t2) => Constants.ESC + 'p' + chr(m) + chr(t1) + chr(t2),

    /**
     * ESC E
     * Turn emphasized mode off/on
     */
    escE: (n) => Constants.ESC + 'E' + n,

    /**
     * ESC a
     * Select justification
     */
    esca: (n) => Constants.ESC + 'a' + n,

    /**
     * ESC d
     * Print and feed n lines
     */
    escd: (n) => Constants.ESC + 'd' + chr(n),

    /**
     * ESC M
     * Select character font
     */
    escM: (n) => Constants.ESC + 'M' + chr(n),

    /**
     * GS h
     * Select bar code height
     */
    gsh: (n) => Constants.GS + 'h' + chr(n),

    /**
     * GS w
     * Select bar code width multiplier
     */
    gsw: (n) => Constants.GS + 'w' + chr(n),

    /**
     * GS H
     * Select printing position of HRI characters
     */
    gsH: (n) => Constants.GS + 'H' + chr(n),

    /**
     * GS f
     * Select font for Human Readable Interpretation (HRI)characters
     */
    gsf: (n) => Constants.GS + 'f' + n,

    /**
     * GS k
     * Print bar code
     */
    gsk: (m, d) => Constants.GS + 'k' + m + chr(d.length) + d,

    qrFn65: (n1) => Constants.GS + '(' + 'k' + chr(4) + Constants.NUL + chr(49) + chr(65) + chr(n1) + Constants.NUL,

    qrFn67: (n) => Constants.GS + '(' + 'k' + chr(3) + Constants.NUL + chr(49) + chr(67) + chr(n),

    qrFn69: (n) => Constants.GS + '(' + 'k' + chr(3) + Constants.NUL + chr(49) + chr(69) + n,

    qrFn80: (pL, pH, d) => Constants.GS + '(' + 'k' + pL + pH + chr(49) + chr(80) + chr(48) + d,

    qrFn81: () => Constants.GS + '(' + 'k' + chr(3) + Constants.NUL + chr(49) + chr(81) + chr(48),
}