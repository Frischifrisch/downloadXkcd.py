#! python3
# downloadXkcd.py - Lädt alle XKCD-Comics herunter.
import requests  # Modul zum Herunterladen von Webseiten und Bildern
import os  # Modul für Dateisystem-Operationen

starting_url = 'https://xkcd.com'  # Start-URL der XKCD-Webseite
os.makedirs('xkcd', exist_ok=True)  # Erstelle Ordner 'xkcd', falls nicht vorhanden

url = starting_url  # Variable für die Schleife, startet mit der Start-URL

# Schleife läuft, bis die URL mit '#' endet (Ende der Comics erreicht)
while not url.endswith('#'):
    # TODO: Lade die Webseite herunter (requests.get)
    # TODO: Finde die URL des Comic-Bildes (HTML parsen, z.B. mit BeautifulSoup)
    # TODO: Lade das Bild herunter (requests.get)
    # TODO: Speichere das Bild im Ordner ./xkcd (Datei öffnen und schreiben)
    # TODO: Ermittle die URL des "Prev"-Buttons (Link zum vorherigen Comic)
    break  # Platzhalter, damit die Schleife nicht unendlich läuft

print('Fertig.')  # Ausgabe, wenn das Programm beendet ist
