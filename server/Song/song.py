
'''

    this is a starter class/server. demo only.

    will have 5 songs stored in local db to be fetched.
'''


class Song():

    def __init__(self, songRequest: str, translateLanguage: str) -> None:
        self.songRequest = songRequest
        self.translatedLangauge = translateLanguage
        self.AventuraLyric = "No, no es amor Lo que tú sientes se llama obsesión Una ilusión En tu pensamiento Que te hace hacer cosas Así funciona el corazón"
        self.BadBunnyLyric = "Si te quieres divertir con encanto y con primor"

    def getSongLyrics(self) -> str:
        match self.songRequest:
            case "Aventura":
                return self.AventuraLyric
            case "Bad Bunny":
                return self.BadBunnyLyric
