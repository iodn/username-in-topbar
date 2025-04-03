import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import { UsernameIndicator } from './UsernameIndicator.js';

export default class UsernameIndicatorExtension extends Extension {
    _indicator;

    enable() {
        this._indicator = new UsernameIndicator();
    }

    disable() {
        this._indicator.destroy();
        this._indicator = null;
    }
}