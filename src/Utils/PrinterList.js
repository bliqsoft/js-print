import Printer from "../Printer";

class PrinterList {
    static items = {};

    static register(name, config) {
        PrinterList.items[name] = new Printer(config);
    }

    static get(name) {
        const template = PrinterList.items[name];
        if (!template) {
            return Promise.reject(`Printer "${name}" not found.`);
        }

        return Promise.resolve(PrinterList.items[name]);
    }

    static connect(name) {
        return new Promise((resolve, reject) => {
            this.get(name)
                .then(printer => {
                    printer.connect()
                        .then(() => resolve(printer))
                        .catch((err) => reject(err));
                })
                .catch(err => reject(err))
        });
    }
}

export default PrinterList;
