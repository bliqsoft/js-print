import CommandsEscPos from '../Languages/EscPos/Commands';
import CommandsExPCL from '../Languages/ExPCL/Commands';

class PrinterCommandFactory {
    static create(language) {
        switch (language.toUpperCase()) {
            case 'ESCPOS':
                return new CommandsEscPos();
            case 'EXPCL':
                return new CommandsExPCL();
            default:
                break;
        }
    }
}

export default PrinterCommandFactory;
