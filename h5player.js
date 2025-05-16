// ==UserScript==
// @name         HTML5 Player Enhanced Script Custom Configuration
// @namespace    https://github.com/xxxily/h5player
// @homepage     https://github.com/xxxily/h5player
// @version      0.1.0
// @description  HTML5 video player enhanced script custom configuration
// @author       Frischi
// @icon         https://cdn.jsdelivr.net/gh/xxxily/h5player@master/logo.png
// @match        *://*/*
// @grant        unsafeWindow
// @run-at       document-start
// @license      GPL
// ==/UserScript==

// =====================
// Eigene Konfiguration
// =====================
// customConfiguration enthält alle Einstellungen, die das Verhalten des Players steuern.
// Hier können z.B. Hotkeys, Standardlautstärke, Standardgeschwindigkeit usw. angepasst werden.
const customConfiguration = {
  media: {
    autoPlay: false, // Automatisches Abspielen beim Laden der Seite (false = deaktiviert)
    playbackRate: 1.00, // Standard-Wiedergabegeschwindigkeit (1 = normal)
    volume: 0.80, // Standard-Lautstärke (1 = 100%)

    /* Gibt an, ob der aktuelle Wiedergabefortschritt gespeichert werden darf */
    allowRestorePlayProgress: {
      // Hier können Domains oder Bedingungen eingetragen werden, für die der Fortschritt gespeichert werden soll.
    },
    /* Mapping für gespeicherte Wiedergabepositionen */
    progress: {}
  },
  hotkeys: [
    // Hotkeys sind Tastenkombinationen, mit denen bestimmte Aktionen ausgelöst werden können.
    // Jede Aktion kann mit einer Beschreibung (desc), einer Tastenkombination (key) und einem Befehl (command) versehen werden.
    {
      desc: 'Webseite im Vollbildmodus anzeigen',
      key: 'shift+enter',
      command: 'setWebFullScreen',
      /* Wenn disabled auf true gesetzt wird, ist der Hotkey deaktiviert */
      disabled: false
    },
    {
      desc: 'Vollbildmodus',
      key: 'enter',
      command: 'setFullScreen'
    },
    {
      desc: 'Bild-in-Bild-Modus umschalten',
      key: 'shift+p',
      command: 'togglePictureInPicture'
    },
    {
      desc: 'Video-Screenshot',
      key: 'shift+s',
      command: 'capture'
    },
    {
      desc: 'Automatische Wiederherstellung des Wiedergabefortschritts aktivieren oder deaktivieren',
      key: 'shift+r',
      command: 'capture'
    },
    {
      desc: 'Vertikale Spiegelung',
      key: 'shift+m',
      command: 'setMirror',
      args: [true]
    },
    {
      desc: 'Horizontale Spiegelung',
      key: 'm',
      command: 'setMirror'
    },
    {
      desc: 'Audio-/Videodateien herunterladen (experimentelle Funktion)',
      key: 'shift+d',
      command: 'mediaDownload'
    },
    {
      desc: 'Video verkleinern -0.05',
      key: 'shift+x',
      command: 'setScaleDown'
    },
    {
      desc: 'Video vergrößern +0.05',
      key: 'shift+c',
      command: 'setScaleUp'
    },
    {
      desc: 'Video zurücksetzen',
      key: 'shift+z',
      command: 'resetTransform'
    },
    {
      desc: 'Video nach rechts verschieben um 10px',
      key: 'shift+arrowright',
      command: 'setTranslateRight'
    },
    {
      desc: 'Video nach links verschieben um 10px',
      key: 'shift+arrowleft',
      command: 'setTranslateLeft'
    },
    {
      desc: 'Video nach oben verschieben um 10px',
      key: 'shift+arrowup',
      command: 'setTranslateUp'
    },
    {
      desc: 'Video nach unten verschieben um 10px',
      key: 'shift+arrowdown',
      command: 'setTranslateDown'
    },
    {
      desc: '5 Sekunden vorwärts',
      key: 'arrowright',
      command: 'setCurrentTimeUp'
    },
    {
      desc: '5 Sekunden zurück',
      key: 'arrowleft',
      command: 'setCurrentTimeDown'
    },
    {
      desc: '30 Sekunden vorwärts',
      key: 'ctrl+arrowright',
      command: 'setCurrentTimeUp',
      args: [30]
    },
    {
      desc: '30 Sekunden zurück',
      key: 'ctrl+arrowleft',
      command: 'setCurrentTimeDown',
      args: [-30]
    },
    {
      desc: 'Lautstärke erhöhen um 5%',
      key: 'arrowup',
      command: 'setVolumeUp',
      args: [0.05]
    },
    {
      desc: 'Lautstärke verringern um 5%',
      key: 'arrowdown',
      command: 'setVolumeDown',
      args: [-0.05]
    },
    {
      desc: 'Lautstärke erhöhen um 20%',
      key: 'ctrl+arrowup',
      command: 'setVolumeUp',
      args: [0.2]
    },
    {
      desc: 'Lautstärke verringern um 20%',
      key: 'ctrl+arrowdown',
      command: 'setVolumeDown',
      args: [-0.2]
    },
    {
      desc: 'Pause/Wiedergabe umschalten',
      key: 'space',
      command: 'switchPlayStatus'
    },
    {
      desc: 'Wiedergabegeschwindigkeit verringern -0.1',
      key: 'x',
      command: 'setPlaybackRateDown'
    },
    {
      desc: 'Wiedergabegeschwindigkeit erhöhen +0.1',
      key: 'c',
      command: 'setPlaybackRateUp'
    },
    {
      desc: 'Wiedergabe mit normaler Geschwindigkeit',
      key: 'z',
      command: 'resetPlaybackRate'
    },
    {
      desc: 'Wiedergabegeschwindigkeit auf 1x setzen',
      key: 'Digit1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: 'Wiedergabegeschwindigkeit auf 1x setzen',
      key: 'Numpad1',
      command: 'setPlaybackRatePlus',
      args: 1
    },
    {
      desc: 'Wiedergabegeschwindigkeit auf 2x setzen',
      key: 'Digit2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: 'Wiedergabegeschwindigkeit auf 2x setzen',
      key: 'Numpad2',
      command: 'setPlaybackRatePlus',
      args: 2
    },
    {
      desc: 'Wiedergabegeschwindigkeit auf 3x setzen',
      key: 'Digit3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: 'Wiedergabegeschwindigkeit auf 3x setzen',
      key: 'Numpad3',
      command: 'setPlaybackRatePlus',
      args: 3
    },
    {
      desc: 'Wiedergabegeschwindigkeit auf 4x setzen',
      key: 'Digit4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: 'Wiedergabegeschwindigkeit auf 4x setzen',
      key: 'Numpad4',
      command: 'setPlaybackRatePlus',
      args: 4
    },
    {
      desc: 'Nächster Frame',
      key: 'shift+d',
      command: 'freezeFrame',
      args: 1
    },
    {
      desc: 'Vorheriger Frame',
      key: 'd',
      command: 'freezeFrame',
      args: -1
    },
    {
      desc: 'Helligkeit erhöhen',
      key: 'shift+e',
      command: 'setBrightnessUp'
    },
    {
      desc: 'Helligkeit verringern',
      key: 'e',
      command: 'setBrightnessDown'
    },
    {
      desc: 'Kontrast erhöhen',
      key: 'shift+t',
      command: 'setContrastUp'
    },
    {
      desc: 'Kontrast verringern',
      key: 't',
      command: 'setContrastDown'
    },
    {
      desc: 'Sättigung erhöhen',
      key: 'shift+u',
      command: 'setSaturationUp'
    },
    {
      desc: 'Sättigung verringern',
      key: 'u',
      command: 'setSaturationDown'
    },
    {
      desc: 'Farbton erhöhen',
      key: 'shift+o',
      command: 'setHueUp'
    },
    {
      desc: 'Farbton verringern',
      key: 'o',
      command: 'setHueDown'
    },
    {
      desc: 'Unschärfe erhöhen um 1px',
      key: 'shift+k',
      command: 'setBlurUp'
    },
    {
      desc: 'Unschärfe verringern um 1px',
      key: 'k',
      command: 'setBlurDown'
    },
    {
      desc: 'Bild zurücksetzen',
      key: 'backspace',
      command: 'resetFilterAndTransform'
    },
    {
      desc: 'Bild um 90 Grad drehen',
      key: 'r',
      command: 'setRotate'
    },
    {
      desc: 'Nächste Episode abspielen',
      key: 'N',
      command: 'setNextVideo'
    },
    {
      desc: 'Eigenes JS-Skript ausführen',
      key: 'ctrl+j ctrl+s',
      command: () => {
        alert('Eigenes JS-Skript - Demo')
      },
      when: ''
    }
  ],
  enhance: {
    /* blockSetPlaybackRate verhindert, dass die Standardgeschwindigkeit beim Video-Wechsel zurückgesetzt wird */
    blockSetPlaybackRate: true,

    blockSetCurrentTime: false, // Verhindert das Zurücksetzen der aktuellen Zeit (false = Standardverhalten)
    blockSetVolume: false, // Verhindert das Zurücksetzen der Lautstärke (false = Standardverhalten)
    allowExperimentFeatures: true // Aktiviert experimentelle Features (nur für Entwickler)
  },
  debug: true // Debug-Modus (true = mehr Konsolenausgaben)
}

/**
 * ===========================
 * Task Control Center (TCC)
 * ===========================
 * Hier können für bestimmte Webseiten spezielle Aktionen definiert werden,
 * z.B. wie das Vollbild aktiviert wird, wenn die Standardmethode nicht funktioniert.
 * Die Konfiguration erfolgt pro Domain.
 */
const customTaskControlCenter = {
  /**
   * Beispiel-Konfiguration:
   * Der Schlüssel ist die Domain (z.B. 'demo.demo').
   * Die Werte sind Selektoren oder Funktionen, die für bestimmte Aktionen verwendet werden.
   * Mit include/exclude kann die Konfiguration auf bestimmte URLs eingeschränkt werden.
   */
  'demo.demo': {
    fullScreen: '.fullscreen-btn', // Selektor für den Vollbild-Button
    exitFullScreen: '.exit-fullscreen-btn', // Selektor für das Beenden des Vollbildmodus
    webFullScreen: function () {}, // Eigene Funktion für Web-Vollbild
    exitWebFullScreen: '.exit-fullscreen-btn',
    autoPlay: '.player-start-btn',
    pause: '.player-pause',
    play: '.player-play',
    switchPlayStatus: '.player-play',
    playbackRate: function () {}, // Eigene Funktion für die Geschwindigkeit
    currentTime: function () {}, // Eigene Funktion für die aktuelle Zeit
    addCurrentTime: '.add-currenttime',
    subtractCurrentTime: '.subtract-currenttime',
    // shortcuts: Hier können eigene Tastenkombinationen für diese Domain definiert werden.
    shortcuts: {
      /* Liste der Tastenkombinationen, die eigene Aktionen auslösen */
      register: [
        'ctrl+shift+alt+c',
        'ctrl+shift+c',
        'ctrl+alt+c',
        'ctrl+c',
        'c'
      ],
      /* Callback-Funktion, die bei Tastendruck ausgeführt wird */
      callback: function (h5Player, taskConf, data) {
        const { event, player } = data
        // Hier können eigene Aktionen für die Tastenkombinationen definiert werden.
        console.log(event, player)
      }
    },
    /* include: Regulärer Ausdruck, um die Konfiguration auf bestimmte URLs zu beschränken */
    include: /^.*/,
    /* exclude: Regulärer Ausdruck, um bestimmte URLs auszuschließen */
    exclude: /\t/
  },
  'netflix.com': {
    // Wenn disable: true gesetzt ist, werden alle Funktionen für diese Domain deaktiviert.
    // disable: true,
    fullScreen: 'button.button-nfplayerFullscreen',
    addCurrentTime: 'button.button-nfplayerFastForward',
    subtractCurrentTime: 'button.button-nfplayerBackTen',
    /**
     * Für Netflix wird die eigene Geschwindigkeitseinstellung verwendet,
     * weil die Standardmethode zu Problemen führen kann.
     * Siehe: https://github.com/xxxily/h5player/issues/234 usw.
     */
    playbackRate: true,
    shortcuts: {
      /**
       * Hinweis:
       * Viele Nutzer verwenden auf Netflix die Taste "F" für Vollbild.
       * Deshalb wird hier die Standardfunktion für "F" (nächster Frame) deaktiviert.
       * Später kann dies vom Nutzer selbst angepasst werden.
       */
      register: [
        'f'
      ],
      callback: function (h5Player, taskConf, data) {
        // Rückgabe von true verhindert die Ausführung der Standardaktion.
        return true
      }
    }
  }
}

// ================================
// Registrierung der Konfiguration
// ================================
// Die Konfiguration wird im globalen Fenster (unsafeWindow) gespeichert,
// damit andere Skripte oder Erweiterungen darauf zugreifen können.
const pageWin = window.unsafeWindow
if (pageWin) {
  const configuration = { customConfiguration, customTaskControlCenter }
  pageWin.__h5PlayerCustomConfiguration__ = configuration
  // Falls eine spezielle Set-Funktion existiert, wird sie hier aufgerufen.
  pageWin.__setH5PlayerCustomConfiguration__ instanceof Function && pageWin.__setH5PlayerCustomConfiguration__(configuration, 'External')
}