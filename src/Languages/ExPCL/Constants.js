// https://www.sewoo.eu/wordpress/n/ESCPOS_command_manual.pdf

const chr = num => String.fromCharCode(num);

export default {
    /**
     * End of Transmission EOT
     * The printer sends an EOT character each time the printer’s input buffer becomes empty (indicating that the printer is idle).
     */
    EOT: chr(4),

    /**
     * Line Feed LF
     * This command prints the input buffer information and advances the paper to the next line.
     * Total Feed Length = Vertical size of the current font + Text Line Spacing
     * A Carriage Return (CR) is also performed to place the current print position at the beginning of the next line.
     */
    LF: chr(10),

    /**
     * ASCII escape control character
     */
    ESC: chr(27),

    CR: chr(13),

    /**
     * Cancel CAN
     * This command deletes the entire printer buffer and resets the printer to the power-up default values. 
     * 
     * Control Code: CAN
     * Hexadecimal: 18
     * Decimal: 24 
     */
    CAN: chr(24),

    // /**
    //  * Transmitter On XON
    //  * When selected XON/XOFF as flow control method of serial communication, this character is transmitted by the printer to indicate that the printer is on line and ready to receive data. After receiving this character the host computer will start sending data to the printer.
    //  */
    // XON: chr(17),

    // /**
    //  * Transmitter Off
    //  * When selected XON/XOFF as flow control method of serial communication, this character is transmitted by the printer to indicate that the printer’s buffer is nearly full and that the host computer should stop sending data. The communication process is reestablished after the printer transmits XON character to the host.
    //  */
    // XOFF: chr(19),

    BARCODE_CODE39: '1', // Dec: 49
    BARCODE_CODE128: '2', // Dec: 50
    BARCODE_UPCE: '4', // Dec: 52
    BARCODE_JAN13: '4', // Dec: 52
    BARCODE_JAN8: '4', // Dec: 52
    BARCODE_CODABAR: '5', // Dec: 53

    // JUSTIFY_LEFT: 'L', // Dec: 76
    // JUSTIFY_RIGHT: 'R', // Dec: 82

    BOLD_ON: '1', // Dec: 49
    BOLD_OFF: '0', // Dec: 48

    FONT_K0: '0', // Dec: 48 (~13 cpi Rotated / Courier mode 0)
    FONT_K1: '1', // Dec: 49 (~12 cpi Normal / Courier mode 1)
    FONT_K2: '2', // Dec: 50 (~16 cpi Normal / Courier mode 2)
    FONT_K3: '3', // Dec: 51 (~19 cpi Normal / Courier mode 3)
    FONT_K4: '4', // Dec: 52 (~21 cpi Normal / Courier mode 4)
    FONT_K5: '5', // Dec: 53 (~24 cpi Normal / Courier mode 5)
    FONT_K6: '6', // Dec: 54 (~10 cpi Normal / Monospace 821BT)
    FONT_K7: '7', // Dec: 55 (~20 cpi Normal / Monospace 821BT)
    FONT_K8: '8', // Dec: 56 (~20 cpi Bold / Monospace 821BT)
    FONT_K9: '9', // Dec: 57 (~20 cpi Short / Monospace 821BT)
    FONT_K10: '10', // Dec: 49 48 / (~4 cpi Bold)
    FONT_K11: '11', // Dec: 49 49 / (~25 cpi Verin)
    FONT_K12: '12', // Dec: 49 50 / (~22 cpi Verin)
    FONT_K13: '13', // Dec: 49 51 / (~20 cpi Verin)
    FONT_K14: '14', // Dec: 49 52 / (~16 cpi Verin)
    FONT_K15: '15', // Dec: 49 53 / (~12 cpi Verin)
}