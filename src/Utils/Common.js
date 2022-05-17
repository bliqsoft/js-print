const Common = {
    FontA: 1,
    FontB: 2,

    chr: num => String.fromCharCode(num),

    normalize: (str) => {
        const accentsIn = 'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
        const accentsOut = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz";
        const strLen = str.length;
        let strOut = "";
        for (let i = 0; i < strLen; i++) {
            let inChar = str.charAt(i);
            let idx = accentsIn.indexOf(inChar);
            strOut += idx >= 0 ? accentsOut.charAt(idx) : inChar;
        }
        return strOut;
    },

    pad: (str, len, dir = "R", pad = " ") => {
        str = `${str}`;
        if (len <= str.length) {
            return str;
        }
        if (dir === "L") {
            return Array(len + 1 - str.length).join(pad) + str;
        }
        if (dir === "C") {
            const padlen = len - str.length;
            const right = Math.ceil(padlen / 2);
            const left = padlen - right;
            return Array(left + 1).join(pad) + str + Array(right + 1).join(pad);
        }
        return str + Array(len + 1 - str.length).join(pad);
    },

    repeat: (len, str) => str.repeat(len),

    textSpaceBetween: (cols, ...text) => {
        const parts = text.length - 1;
        const chars = text.reduce((inc, v) => inc + v.length, 0);
        const separator = ' ';

        let spacing = Math.floor((cols - chars) / parts);
        let str = Common.normalize(text[0]);
        for (let i = 1; i <= parts; i++) {
            const val = text[i];
            if (i === parts) {
                spacing += cols - spacing - str.length - val.length;
            }
            str += separator.repeat(spacing) + val;
        }
        return str;
    },

    table: (items, headers, columns) => {
        let availableWidth = columns;
        let autoWidthIndex = undefined;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const cellWidth = header.width;
            if (undefined === cellWidth) {
                autoWidthIndex = i;
            } else {
                availableWidth -= cellWidth;
            }
        }

        if (autoWidthIndex !== undefined) {
            headers[autoWidthIndex].width = availableWidth;
        }

        let headerLine = '';
        for (let header of headers) {
            const cellAlignRight = !!header.right;
            const cellSeparator = header.separator || '';
            const availableWidth = header.width - cellSeparator.length;

            const pendingStr = header.title.substr(0, header.width);

            let strToPrint;
            if (cellAlignRight) {
                strToPrint = pendingStr.padStart(availableWidth, ' ');
            } else {
                strToPrint = pendingStr.padEnd(availableWidth, ' ');
            }

            headerLine += cellSeparator + strToPrint;
        }

        let contentLines = [];

        for (const rows of items) {
            let pendingChars = [];
            for (let i = 0; i < headers.length; i++) {

                let cellVal;
                const cellKey = headers[i].name;
                if (typeof cellKey === 'function') {
                    cellVal = cellKey(rows)
                } else {
                    cellVal = `${rows[cellKey]}`;
                }

                pendingChars.push(Common.normalize(cellVal));
            }

            let hasPendingChars;
            do {
                hasPendingChars = false;
                let str = '';

                for (let i = 0; i < pendingChars.length; i++) {
                    const header = headers[i];
                    const cellWidth = header.width;
                    const cellAlignRight = !!header.right;
                    const cellSeparator = header.separator || '';
                    const availableWidth = header.width - cellSeparator.length;
                    const pendingStr = pendingChars[i].trim();

                    let strToPrint;
                    if (pendingStr.length === availableWidth) {
                        strToPrint = pendingStr;
                    } else if (pendingStr.length > availableWidth) {
                        strToPrint = pendingStr.substr(0, availableWidth);
                        hasPendingChars = true;
                    } else {
                        if (cellAlignRight) {
                            strToPrint = pendingStr.padStart(availableWidth, ' ');
                        } else {
                            strToPrint = pendingStr.padEnd(availableWidth, ' ');
                        }
                    }

                    pendingChars[i] = pendingChars[i].substr(strToPrint.length);

                    str += cellSeparator + strToPrint;
                }
                contentLines.push(str);
            } while (hasPendingChars);
        }

        return {
            header: headerLine,
            content: contentLines,
        };
    }
};


export default Common;