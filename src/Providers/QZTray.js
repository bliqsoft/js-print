class QZTray {
    constructor(printer, params) {
        this.params = params;
        this.printer = printer;

        this.qz = require("qz-tray");
        // prevent "Failed to get certificate" warning
        this.qz.security.setCertificatePromise((resolve) => resolve(""));

        this.config = this.qz.configs.create({
            name: printer.name,
        });
    }

    connect() {
        if (this.qz.websocket.isActive()) {
            return Promise.resolve();
        }
        return this.qz.websocket.connect(this.params.connection);
    }
    disconnect() {
        if (!this.qz.websocket.isActive()) {
            return Promise.resolve();
        }
        return this.qz.websocket.disconnect();
    }
    print(data) {
        return this.qz.print(this.config, data);
    }
    findPrinters() {
        return this.qz.printers.find();
    }
}

export default QZTray;
