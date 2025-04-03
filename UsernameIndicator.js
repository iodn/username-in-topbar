import St from 'gi://St';
import Clutter from 'gi://Clutter';
import GLib from 'gi://GLib';
import GObject from 'gi://GObject';
import { SystemIndicator } from 'resource:///org/gnome/shell/ui/quickSettings.js';
import * as Main from 'resource:///org/gnome/shell/ui/main.js';

var UsernameIndicator = GObject.registerClass(
    class UsernameIndicator extends SystemIndicator {
        _init() {
            super._init();

            this._indicator = this._addIndicator();
            this.remove_child(this._indicator);

            const usernameLabel = new St.Label({
                text: GLib.get_real_name(),
                x_align: Clutter.ActorAlign.START,
                y_align: Clutter.ActorAlign.CENTER,
                x_expand: false,
                style: 'font-weight: 600;',
            });
            this.add_child(usernameLabel);

            GLib.idle_add(GLib.PRIORITY_DEFAULT, () => {
                const QuickSettingsMenu = Main.panel.statusArea.quickSettings;
                const indicatorsContainer = QuickSettingsMenu._indicators;
                indicatorsContainer.add_child(this);
                return GLib.SOURCE_REMOVE;
            });
        }
    }
);

export { UsernameIndicator };
