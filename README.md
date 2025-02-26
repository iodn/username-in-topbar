# Add Username in Top Panel (Right Side)

This GNOME extension displays the current username in the top panel, positioned at the far right, after the power button.

![ScreenShot addon](https://github.com/user-attachments/assets/7f04e25a-e244-4ce8-85cf-8f82981f3472)


## Installation

1. Visit the [extension's page](https://extensions.gnome.org/review/62317).
2. Ensure the [GNOME Shell Integration](https://wiki.gnome.org/Projects/GnomeShellIntegrationForChrome) is installed and enabled.
3. Click the switch to enable the extension.

## Compatibility

This extension is compatible with GNOME Shell versions 45, 46, and 47.


## Manual Installation from Source

1. Clone this repository and navigate to the extension folder:
   ```bash
   git clone https://github.com/iodn/add-username-toppanel.git
   cd add-username-toppanel
   ```
2. Copy the extension files to the GNOME extensions directory:
   ```bash
   cp -r add-username-toppanel@neroteam.com ~/.local/share/gnome-shell/extensions/
   ```
3. Enable the extension:
   ```bash
   gnome-extensions enable add-username-toppanel@neroteam.com
   ```
4. If the extension does not appear, restart GNOME Shell or log out and log back in:
   ```bash
   gnome-shell --replace &
   ```

