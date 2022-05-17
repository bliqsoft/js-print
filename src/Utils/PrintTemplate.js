class PrintTemplate {
    static items = {};

    static register(name, fn) {
        PrintTemplate.items[name] = fn;
    }

    static execute(name, printer, data) {
        const template = PrintTemplate.items[name];
        if (!template) {
            return Promise.reject(`Template "${name}" not found.`);
        }

        return template(printer, data);
    }
}

export default PrintTemplate;
