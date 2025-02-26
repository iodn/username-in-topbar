import { Extension } from 'resource:///org/gnome/shell/extensions/extension.js';
import { UsernameIndicator } from './UsernameIndicator.js';
import GObject from 'gi://GObject';

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

GObject.registerClass(
    {GTypeName: 'UsernameIndicator'},
    UsernameIndicator
);
