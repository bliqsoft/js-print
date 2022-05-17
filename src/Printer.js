import QZTray from "./Providers/QZTray";
import PrintTemplate from "./Utils/PrintTemplate";
import PrinterList from "./Utils/PrinterList";

const setLastPrint = commands => window.localStorage.setItem('LastPrint', JSON.stringify(commands));
const getLastPrint = () => JSON.parse(window.localStorage.getItem('LastPrint') || null);

class Printer {
    constructor(config) {
        this.config = config;

        const providerName = config.proxy?.provider || "";
        if (providerName === "qz") {
            this.provider = new QZTray(config.printer, config.proxy);
        } else {
            throw new Error('Unknown printer provider: ' + providerName);
        }
    }

    connect = () => this.provider.connect();
    disconnect = () => this.provider.disconnect();
    print = (commands) => {
        setLastPrint(commands);
        return this.provider.print(commands);
    }
    printTemplate = (name, data) => {
        // console.info("Printing template:", name);
        // console.info("Template data:", data);
        return PrintTemplate.execute(name, this, data)
            .then(commands => {
                // console.info("Template commands:", commands);
                return this.print(commands);
            });
    };

    name = () => this.config.printer.name;
    language = () => this.config.printer.language;
    columns = () => this.config.printer.columns;
    marginTop = () => this.config.printer.marginTop || 0;
    marginBottom = () => this.config.printer.marginBottom || 0;
    cutPaper = () => this.config.printer.cutPaper || 0;
    openDrawer = () => this.config.printer.openDrawer || 0;

    static getLastPrintCommands = getLastPrint;

    static loadPrinters = () => {
        if (undefined === this.loader) {
            throw new Error('Printer loader is not set.');
        }

        return this.loader();
    }
    static setPrinterListLoader = fn => this.loader = fn;
    static getConnected = (name) => Printer.loadPrinters()
        .then(() => PrinterList.connect(name));
    static registerPrinter = (name, config) => PrinterList.register(name, config);
    static registerTemplate = (name, fn) => PrintTemplate.register(name, fn);
}

export default Printer;

// window.Printer = Printer;
// window.PrintTemplate = PrintTemplate;
// window.PrinterList = PrinterList;

export {
    PrintTemplate,
    PrinterList,
};
