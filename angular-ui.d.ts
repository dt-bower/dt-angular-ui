// Type definitions for Angular UI 0.3.0
// Project: http://angular-ui.github.io/
// Definitions by: Mark Rendle <http://github.com/markrendle>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../dt-angularjs/angular.d.ts" />


///////////////////////////////////////////////////////////////////////////////
// ng.ui module
///////////////////////////////////////////////////////////////////////////////
declare module ng.ui {

    interface IDialogOptions {
        controller: string;
        template?: string;
        templateUrl?: string;
        backdrop?: bool;
        keyboard?: bool;
        backdropClick?: bool;
        dialogFade?: bool;
        backdropFade?: bool;
        resolve?: any;
    }

    interface IMessageBoxButtons {
        label: string;
        result: string;
        cssClass?: string;
    }

    interface IDialogProvider {
        dialog(opts: IDialogOptions): IDialog;
        messageBox(title: string, msg: string, btns: IMessageBoxButtons[]): IDialog;
    }

    interface IDialog {
        open(): ng.IPromise;
        close(result: any): void;
    }
}